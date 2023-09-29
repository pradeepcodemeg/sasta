import React, { useEffect, useRef, useState } from 'react'
import { Text,Modal,PermissionsAndroid,Image,StyleSheet,View,SafeAreaView,Dimensions,ScrollView, TouchableOpacity} from 'react-native'
import imagePath from './../../constants/imagePath';
import Geolocation from '@react-native-community/geolocation';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_API } from "./../../services/Apiurl";

import Blackbackaerrow from '../../assets/img/blackbackaerrow.svg';
import Geocoder from 'react-native-geocoding';
import LoadingPage  from './../../helper/LoadingPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Homeadd from '../../assets/img/homeadd.svg';
import { StylesGloble } from './../../helper/Globlecss';
import ApiDataService from "./../../services/Apiservice.service";

import { useSelector, useDispatch } from 'react-redux';
import { setselectaddressData,setaddressData } from '../../Redux/index';


Geocoder.init(GOOGLE_MAP_API, {language : "en"});
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const GooglePlacesInput= ({ navigation, route }) => {

    const placesRef = useRef();
    const dispatch = useDispatch();
    const usaerstate = useSelector((state) => state.UserReducer.userData);
    const [Loading,setLoading ]= useState(false);

    const userID = usaerstate ? usaerstate.userID : null;
    const userToken = usaerstate ? usaerstate.userToken : null;
    const usernumber = usaerstate ? usaerstate.mobile : null;
    const [currentLongitude, setCurrentLongitude ]  = useState('');
    const [currentLatitude, setCurrentLatitude ] = useState('');
    const addressstate = useSelector((state) => state.AddressReducer);
    const addresslist = addressstate ?addressstate.data : null;

    const selectaddresstate = useSelector((state) => state.SelectAddressReducer.data);
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
                    AsyncStorage.setItem('Selectaddress', JSON.stringify(address));
                    addaddress(fulladdress,position.coords.latitude,position.coords.longitude)

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
        AsyncStorage.setItem('Selectaddress', JSON.stringify(address));
        addaddress(fulladdress,details.geometry.location.lat,details.geometry.location.lng)
    }
    const chooseaddressfun = (item) =>{
        let address = {
            title:item.type,
            address:item.address_line1,
            lat:item.latitude,
            lng:item.longitude
        }
        AsyncStorage.setItem('Selectaddress', JSON.stringify(address));
        addaddress(item.address_line1,item.latitude,item.longitude)
    }
    const addaddress = (address,lat,lng) =>{
        let body = {
            action : "add_address",
            user_id:userID,
            state:"state",
            city:"city",
            landmark:'',
            address_line1 : address,
            address_line2 : '',
            latitude:lat,
            longitude:lng,
            phone:usernumber,
            type:'other'
        }
        setLoading(true);
        let formData = new FormData();
        for (let key in body) {
            formData.append(key, body[key]);
        }
        ApiDataService.Uploadapi('user-addresses?token='+userToken,formData).then(response => {
            setLoading(false);
            if(response.data.status==1)
            {
                dispatch(setselectaddressData());
                dispatch(setaddressData());
                navigation.goBack()
            }
            else{
                calltoastmessage(response.data.msg);
            }
        }).catch(e => {
            console.log("error",e);
        });
    }
  
    return (
        <>
            {
                Loading&&
                <View style={{position:"absolute",top:0,left:0,height:"100%",width:"115%",zIndex:999999}}>
                    <LoadingPage/>
                </View>
            }
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
                                    marginTop:10,
                                    width:windowWidth,
                                    
                                },
                                textInputContainer: {
                                    flexDirection: 'row',
                                },
                                textInput: {
                                    backgroundColor: '#9DC45A10',
                                    height: 60,
                                    borderRadius: 5,
                                    paddingVertical: 5,
                                    paddingHorizontal: 10,
                                    fontSize: 18,
                                    flex: 1,
                                },
                                predefinedPlacesDescription: {
                                    color: '#1faadb'
                                },
                                poweredContainer: {
                                    justifyContent: 'flex-end',
                                    backgroundColor:"red",
                                    alignItems: 'center',
                                    borderBottomRightRadius: 5,
                                    borderBottomLeftRadius: 5,
                                    borderColor: '#c8c7cc',
                                    borderTopWidth: 0.5,
                                    backgroundColor: '#edf0f1',
                                    width:windowWidth,
                                    padding:15,
                                    height:50
                                },
                                powered: {},
                                listView: {},
                                row: {
                                    zIndex:9999,
                                    padding: 13,
                                    height: 50,
                                    color:"#000000",
                                    flexDirection: 'row'
                                },
                                separator: {
                                    height: 0.5,
                                    backgroundColor: '#c8c7cc',
                                },
                                description: {},
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
                <View style={{marginTop:120,marginLeft:12}}>
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
                                   
                                        <View key={index} style={{...styles.norbox}}>
                                            <TouchableOpacity onPress={()=>{ chooseaddressfun(item)}} style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
                                                <Homeadd width={47} height={47}  />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={()=>{ chooseaddressfun(item)}}  style={{width:"40%",marginLeft:10,marginTop:0}}>
                                                <Text style={{fontSize:16,fontWeight:"500",color:"#000000",textTransform: 'capitalize'}}>{item.type}</Text>
                                                <Text style={{fontSize:12,fontWeight:"400",color:"#9D9D9D",marginTop:5,marginBottom:0}}>{item.address_line1}</Text>
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
        top:110,
        left:15,
        zIndex:99
    },
    crosshight:{
        backgroundColor: '#ffffff',
        padding:15,
        width:"30%",
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
        
        padding:5,
        
        width:"96%",
       
        position:"relative",
        flexDirection:"row"
    }
})

export default GooglePlacesInput