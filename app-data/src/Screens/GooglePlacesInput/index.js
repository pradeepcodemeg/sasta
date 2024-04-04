import React, { useEffect, useRef, useState } from 'react'
import { Text,Modal,PermissionsAndroid,Image,StyleSheet,View,SafeAreaView,Dimensions,ScrollView, TouchableOpacity} from 'react-native'
import imagePath from './../../constants/ImagePath';
import Geolocation from '@react-native-community/geolocation';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_API } from "./../../services/Apiurl";
import { useSelector,useDispatch} from 'react-redux';
import Blackbackaerrow from '../../assets/img/blackbackaerrow.svg';
import Geocoder from 'react-native-geocoding';
import { setselectaddressData } from '../../Redux/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StylesGloble } from './../../helper/Globlecss';
import ApiDataService from "./../../services/Apiservice.service";

import Homeadd from '../../assets/img/homeadd.svg';
import Officeadd from '../../assets/img/Officeadd.svg';
import Otheradd from '../../assets/img/Otheradd.svg';
import Hotaladd from '../../assets/img/Hotaladd.svg';


Geocoder.init(GOOGLE_MAP_API, {language : "en"});
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const GooglePlacesInput= ({ navigation, route }) => {
    const pagetype = route?.params;
    const placesRef = useRef();
    const dispatch = useDispatch();

    const [ currentLongitude, setCurrentLongitude ]  = useState('');
    const [currentLatitude, setCurrentLatitude ] = useState('');
    const addressstate = useSelector((state) => state.AddressReducer);
    const addresslist = addressstate ?addressstate.data : null;

    const selectaddresstate = useSelector((state) => state.SelectAddressReducer.data);

    const usaerstate = useSelector((state) => state.UserReducer.userData);
    const userID = usaerstate ? usaerstate.userID : null;
    const userToken = usaerstate ? usaerstate.userToken : null;
   // placesRef.current?.setAddressText(selectaddresstate.address);

  

    useEffect(() => {
        const requestLocationPermission = async () => {
        
        if (Platform.OS === 'ios') {
            getOneTimeLocation();
           
        } else {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Location Access Required',
                            message: 'This App needs to Access your location',
                        },
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        getOneTimeLocation();
                    } else {
                     
                    }
                } catch (err) {
                    console.warn(err);
                }
            }
        };
        requestLocationPermission();
       
    }, []);
    const getOneTimeLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                const currentLongitude = JSON.stringify(position.coords.longitude);
                const currentLatitude =  JSON.stringify(position.coords.latitude);
                setCurrentLongitude(currentLongitude);
                setCurrentLatitude(currentLatitude);
                //addresscountry(position.coords.longitude,position.coords.latitude);
            },
            (error) => {
                console.log(error.message);
            },
           
        );
    };

    const addcurrentlocation = () =>{
        Geolocation.getCurrentPosition(
            (position) => {
                //getaddrescallapi(position.coords.latitude,position.coords.longitude)
                Geocoder.from( position.coords.latitude,position.coords.longitude)
                .then(json => {
                    let addtitle = '';
                    let addtitle1 = '';
                    let addtitle2 = '';
                    if(json.results[0].address_components[0].long_name){
                        addtitle1 = json.results[0].address_components[0].long_name;
                    }
                    if(json.results[0].address_components[1].long_name){
                        addtitle2 = json.results[0].address_components[1].long_name;;
                    }
                    addtitle = addtitle1+','+addtitle2;
                    var fulladdress = json.results[0].formatted_address;
                    let address = {
                        title:addtitle,
                        address:fulladdress,
                        lat:position.coords.latitude,
                        lng:position.coords.longitude
                    }
                    console.log(address);
                    AsyncStorage.setItem('Selectaddress', JSON.stringify(address));
                    dispatch(setselectaddressData());
                    navigation.goBack() 
                })
                .catch(error => console.warn(error));
            },
            (error) => {
                console.log(error.message);
            },
           
        );

        
    }
    const placechhose = (data,details) =>{
        let addtitle = '';
        let addtitle1 = '';
        let addtitle2 = '';
        if(details.address_components[0].long_name){
            addtitle1 = details.address_components[0].long_name;
        }
        if(details.address_components[1].long_name){
            addtitle2 = details.address_components[1].long_name;;
        }
        addtitle = addtitle1+','+addtitle2;
        var fulladdress = details.formatted_address;
        let address = {
            title:addtitle,
            address:fulladdress,
            lat:details.geometry.location.lat,
            lng:details.geometry.location.lng
        }
        checkaviablibity(address);
    }
    const chooseaddressfun = (item) =>{
        let address = {
            title:item.type,
            address:item.address_line1,
            lat:item.latitude,
            lng:item.longitude
        }
        checkaviablibity(address);
    }

    const checkaviablibity = (address) =>{
        AsyncStorage.setItem('Selectaddress', JSON.stringify(address));
        dispatch(setselectaddressData());
        if(pagetype == 1){
            let body = {
                address_latitude: address.lat,
                address_longitude: address.lng,
                user_id: userID
            }
            let formData = new FormData();
            for (let key in body) {
                formData.append(key, body[key]);
            }
            ApiDataService.Uploadapi('check-address?token='+userToken, formData).then(response => {
                if (response.data.status == 1) {
                    AsyncStorage.setItem('checkavilbale','1');
                    navigation.navigate('Home');
                }else{
                    AsyncStorage.setItem('checkavilbale','1');
                    navigation.navigate('Home');
                  
                }
            }).catch(e => {
                AsyncStorage.setItem('checkavilbale','1');
                navigation.navigate('Home');
                console.log("error", e);
            });
        }else{
            navigation.goBack();
        }
    }
  
    return (
        <>
            <View style={{flexDirection:'row',width:"100%",backgroundColor:"#ffffff"}}>
                <TouchableOpacity style={styles.crosshight} onPress={() => {
                    navigation.goBack() }}>
                    <Blackbackaerrow width={24} height={24} />
                </TouchableOpacity>
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:18,fontWeight:"600",color:"#000000"}}>Your Location</Text>
                </View>
            </View>
           
            <View style={{...styles.container,backgroundColor:"#ffffff"}}>
                <View style={{...styles.googleaddlist}}>
                    <SafeAreaView>
                        <GooglePlacesAutocomplete
                            placeholder='Search a new address'
                            fetchDetails={true}
                            ref={placesRef}
                            onPress={(data,details) => {
                               // props.onPress(data,details)
                               placechhose(data,details)
                            }}
                            query={{
                                key: GOOGLE_MAP_API,
                                language: 'en',
                                region: 'IN',
                            }}
                            styles={{
                                container: {
                                    flex: 1,
                                    height:'auto',
                                    padding:15,
                                    marginTop:-5,
                                    color:"#000000",
                                    width:windowWidth
                                },
                                textInputContainer: {
                                    flexDirection: 'row',
                                    color:"#000000",
                                },
                                textInput: {
                                    backgroundColor: '#f9f9f9',
                                    height: 50,
                                    paddingVertical: 5,
                                    paddingHorizontal: 10,
                                    fontSize: 14,
                                    flex: 1,
                                    borderRadius: 5,
                                    flexDirection: 'row',
                                    marginTop: 10,
                                    elevation: 5,
                                    borderWidth: 1,
                                    paddingLeft:25,
                                    borderColor: '#D1D1D1',
                                    color:"#000000",
                                },
                                predefinedPlacesDescription: {
                                    color: '#1faadb',
                                    
                                },
                                poweredContainer: {
                                    justifyContent: 'flex-end',
                                    placeholderTextColor: 'red',
                                    alignItems: 'center',
                                    borderBottomRightRadius: 5,
                                    borderBottomLeftRadius: 5,
                                    borderColor: '#c8c7cc',
                                    borderTopWidth: 0.5,
                                    backgroundColor: '#edf0f1',
                                    width:windowWidth,
                                    color:"#000000",
                                    padding:15,
                                    height:50
                                },
                                powered: {},
                                listView: {
                                    backgroundColor:"#000000",  
                                },
                                row: {
                                    zIndex:9999,
                                    padding: 13,
                                    height: 50,
                                    backgroundColor:"#ffffff",
                                    flexDirection: 'row'
                                },
                                separator: {
                                    height: 0.5,
                                    backgroundColor: '#c8c7cc',
                                   
                                },
                                description: {
                                    color:"#000000",
                                },
                                loader: {
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    
                                    height: 20,
                                },
                            }}
                        />
                    </SafeAreaView>
                </View>   
               
                <TouchableOpacity onPress={()=>{ addcurrentlocation()}} style={{...styles.currentlolist,width:"100%",flexDirection:"row",}}>
                    <View style={{width:'10%'}}>
                        <Image style={{width:25,height:25,marginLeft:0}}  source={imagePath.currentlocation} />
                    </View>
                    <View style={{width:'80%'}}>
                        <Text style={{fontSize:15,fontWeight:"600",color:"#9DC45A"}}>Current Location</Text>
                        <Text style={{fontSize:12,fontWeight:"600",color:"#9DC45A"}}>Using GPS</Text>
                    </View>
                </TouchableOpacity>
                <View style={{marginTop:90,marginLeft:12}}>
                    <View style={{marginTop:50}}>
                        {
                            (addresslist !=null)?(
                                <Text style={{fontSize:15,fontWeight:"600",color:"#000000",marginLeft:4}}>Saved Location</Text>
                            ):(<></>)
                        }
                        <ScrollView nestedScrollEnabled={true} contentContainerStyle={{paddingBottom:110}}>
                            {
                                (addresslist !=null)?(
                                    addresslist.map((item,index)=>
                                   
                                        <View key={index} style={{...styles.norbox, backgroundColor: '#9DC45A10',}}>
                                            <TouchableOpacity onPress={()=>{ chooseaddressfun(item)}} style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
                                            {
                                                (item.type=='home')?(
                                                    <Homeadd width={47} height={47}  />
                                                ):(item.type=='office')?
                                                (
                                                    <Officeadd width={47} height={47}  />
                                                ):(item.type=='hotal')?
                                                (
                                                    <Hotaladd width={47} height={47}  />
                                                ):(
                                                    <Otheradd width={47} height={47}  />
                                                )
                                            }
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={()=>{ chooseaddressfun(item)}}  style={{width:"75%",marginLeft:10,marginTop:0}}>
                                                <Text style={{fontSize:16,fontWeight:"500",color:"#000000",textTransform: 'capitalize'}}  >{item.type}</Text>
                                                <Text style={{fontSize:12,fontWeight:"400",color:"#9D9D9D",marginTop:5,marginBottom:0,textTransform: 'capitalize'}}>{item.address_line1}</Text>
                                            </TouchableOpacity>
                                           
                                        </View>
                                    )
                                ):(
                                    <></>
                                )
                            }
                        </ScrollView>
                    </View>

                </View>
                
            </View>
            
        </>
    )}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#edf0f1',
        height:"100%",
        width:"100%",
        flex: 1,
       
        position:"relative"
    },
    googleaddlist:{
        position:"absolute",
        top:0,
        left:0,
        zIndex:9999
    },
    currentlolist:{
        position:"absolute",
        top:90,
        left:15,
        zIndex:99
    },
    crosshight:{
        backgroundColor: '#ffffff',
        padding:15,
        width:"36%",
    },
    Textcass: {
        fontSize: 18,
        color: "#000000",
        fontWeight: "600",
        left: 13
    },
    textview: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft:-15

    },
    image:{
        width:25,
        height:25
    },
    norbox: {
        backgroundColor:"#ffffff",
        marginTop:15,
        borderRadius:8,
        borderColor:"#dfdfdfab",
        borderWidth:2,
        padding:5,
        
        width:"96%",
       
        position:"relative",
        flexDirection:"row"
    }
})

export default GooglePlacesInput