import React, { useEffect, useState, useContext,useRef } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid,Platform,TextInput,View,Modal, Text, StyleSheet,ScrollView,Image, TouchableOpacity } from 'react-native';
import ButtonField  from './../../helper/ButtonField';
import { StylesGloble } from './../../helper/Globlecss';
import imagePath from './../../constants/imagePath';
import HeaderComp from '../../Components/HeaderComp';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import Toast from 'react-native-simple-toast';
import MapView, {Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import { setaddressData,setselectaddressData } from '../../Redux/index';
import { GOOGLE_MAP_API } from "../../services/Apiurl";
import ApiDataService from "./../../services/Apiservice.service";
import LoadingPage  from './../../helper/LoadingPage';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';





const AddAddress = ({ navigation,route }) => {

    const dispatch = useDispatch();
    const ref = useRef();
    const pagename = route.params.type;
    const action = route.params.action;
    const editdata = route.params.data;

    console.log("_________",editdata)

    const mapRef = useRef(null);

    
    
    const [Loading,setLoading ]= useState(false);
    const usaerstate = useSelector((state) => state.UserReducer.userData);
    const userID = usaerstate ? usaerstate.userID : null;
    const userToken = usaerstate ? usaerstate.userToken : null;
    const selectaddresstate = useSelector((state) => state.SelectAddressReducer.data);
    const chooselat =selectaddresstate ? selectaddresstate.lat:'19.0760';
    const chooselng = selectaddresstate ? selectaddresstate.lng:'72.8777';


    const [ currentLongitude, setCurrentLongitude ]  = useState(chooselat);
    const [ currentLatitude, setCurrentLatitude ] = useState(chooselng);

    let pageloade = [{
        latitude: chooselat,
        longitude: chooselng,
        title: "Your Location",
    }]

    const [marker, setMarker] = useState(pageloade);
    
    const [Title,setTitle]= useState('');
    const [checkaddtilte,setcheckaddtilte]=useState(0);

    
    const [ phone,setphone ]= useState('');
    const [ housenumber,sethousenumber ]= useState('');
    const [ Landmark,setLandmark ]= useState('');

    const [ fulladdress,setfulladdress ]= useState('');
    const [ addresslat,setaddresslat ]= useState('');
    const [ addresslng,setaddresslng ]= useState('');
    const [user_address_id,setuser_address_id]= useState('');



   
    useEffect(()=>{
        if(action=='2'){

            if(editdata.type=='home'){
                setcheckaddtilte(1)
            }
            else if(editdata.type=='office'){
                setcheckaddtilte(2)
            }
            else if(editdata.type=='other'){
                setcheckaddtilte(4)
            }
            else{
                setcheckaddtilte(3)
            }
            setTitle(editdata.type);
          
            setphone(editdata.phone);
            sethousenumber(editdata.address_line2);
            setLandmark(editdata.landmark);
            setfulladdress(editdata.address_line1);
            setaddresslat(editdata.latitude);
            setaddresslng(editdata.longitude);
            ref.current?.setAddressText(editdata.address_line1);
            setuser_address_id(editdata.id);
        }
    },[])

  

   

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
                    }
                } catch (err) {
                    console.warn(err);
                }
            }
        };
        requestLocationPermission();
  
    },[currentLongitude])

    const getOneTimeLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                mapRef.current.animateCamera(
                    {
                        zoom: 15,
                        pitch: 2,
                        heading: 2,
                        altitude: 2,
                        center: { ...position.coords },
                    },
                    { duration: 1000 }
                );
            },
            (error) => {
                getOneTimeLocation();
            },
           
        );
    };
    const calltoastmessage  = (data) => {
        Toast.showWithGravity(data, Toast.LONG, Toast.BOTTOM);
    };
    const updateaddressfun = () =>{
        if(Title=='' || Title==null ||Title == undefined){
            calltoastmessage('Please add title');
        }
       
        else if(housenumber =='' || housenumber==null ||housenumber == undefined){
            calltoastmessage('Please add House Number Or Floor & area');
        }
        else if(Landmark =='' || Landmark==null ||Landmark == undefined){
            calltoastmessage('Please add Near by Landmark');
        }
        else if(fulladdress =='' || fulladdress==null ||fulladdress == undefined){
            calltoastmessage('Please add full address');
        }
        else if(phone =='' || phone==null ||phone == undefined){
            calltoastmessage('Please add Phone number');
        }
        else{
          
            let body = {
                action : "update_address",
                user_address_id:user_address_id,
                user_id:userID,
                state:"state",
                city:"city",
                landmark:Landmark,
                address_line1 : fulladdress,
                address_line2 : housenumber,
                latitude:addresslat,
                longitude:addresslng,
                phone:phone,
                type:Title
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
                    dispatch(setaddressData());
                    navigation.navigate('Address',{type:pagename});
                }
                else{
                    calltoastmessage(response.data.msg);
                }
            }).catch(e => {
                console.log("error",e);
            });
        }
        
    }
    const submitfun = () =>{
        if(Title=='' || Title==null ||Title == undefined){
            calltoastmessage('Please add title');
        }
        else if(housenumber =='' || housenumber==null ||housenumber == undefined){
            calltoastmessage('Please add House Number Or Floor & area');
        }
        else if(Landmark =='' || Landmark==null ||Landmark == undefined){
            calltoastmessage('Please add Near by Landmark');
        }
        else if(fulladdress =='' || fulladdress==null ||fulladdress == undefined){
            calltoastmessage('Please add full address');
        }
        else if(phone =='' || phone==null ||phone == undefined){
            calltoastmessage('Please add Phone number');
        }
        else{
          
            let body = {
                action : "add_address",
                user_id:userID,
                state:"state",
                city:"city",
                landmark:Landmark,
                address_line1 : fulladdress,
                address_line2 : housenumber,
                latitude:addresslat,
                longitude:addresslng,
                phone:phone,
                type:Title
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
                    dispatch(setaddressData());
                    navigation.navigate('Address',{type:pagename});
                }
                else{
                    calltoastmessage(response.data.msg);
                }
            }).catch(e => {
                console.log("error",e);
            });
        }
        
    }
    const checktitlefun = (type) =>{
        if(type=='1'){
            setTitle('home');
            setcheckaddtilte(1);
        }else if(type=='2'){
            setTitle('office');
            setcheckaddtilte(2);
        }else if(type=='3'){
            setTitle('hotel');
            setcheckaddtilte(3);
        }else{
            setcheckaddtilte(4);
            setTitle('other');
        }
    }
    const onPlaceSelected =  (data,details)=>{
        setfulladdress(data.description);
        setaddresslat(details.geometry.location.lat);
        setaddresslng(details.geometry.location.lng);
    }
    const getFormattedAddress = (lat, lng) => {
       
        // Geocoder.from(lat, lng)
        //     .then((json) =>
              
        //     )
        //     .catch((error) => {
        //         console.warn(error);
               
        //     });
    };
    const displayMarker = (marker, index) => {
        return (
            <Marker
                key={index}
                coordinate={{ latitude: parseFloat(marker.latitude), longitude: parseFloat(marker.longitude) }}
                title={marker.title}
                description=''
            >
                <Image source={imagePath.Pinloc} style={{ height: 35, width: 35 }} />
            </Marker>
        )
    }
    
   
    return (
        <View style={{height:"100%",width:"100%",position:"relative"}}>
            <HeaderComp text={'Add Address'} navigation={navigation} type={'3'}/>
            {
                Loading&&
                <View style={{position:"absolute",top:0,left:0,height:"100%",width:"115%",zIndex:999999}}>
                    <LoadingPage/>
                </View>
            }
            <View style={{width:"100%",height:"30%"}}>
                <MapView
                    style={{width:wp('100%'),height:hp('100%'),flex:1}}
                    onRegionChangeComplete={({ latitude, longitude }) =>
                        getFormattedAddress(latitude, longitude)
                    }
                    showsUserLocation={false}  
                    zoomEnabled={true}  
                    showsCompass={false}
                    ref={(map) => (mapRef.current = map)}
                    zoomControlEnabled={false} 
                    
                    initialRegion={{
                        latitude: currentLatitude,
                        longitude: currentLongitude,
                        latitudeDelta: 0.009,
                        longitudeDelta: 0.009,
                    }}>
                     {/* {Array.isArray(marker) && marker.length > 0 && marker.map((mark, index) => {
                        return displayMarker(mark, index)
                    })} */}
                </MapView>
            </View>
            <View style={{position: "absolute", top: 100,zIndex:55,  right: "5%",width:'90%',height:'auto',backgroundColor:'#ffffff',borderRadius:10}}> 
                <GooglePlacesAutocomplete
                    ref={ref}
                    placeholder='Search address'
                    fetchDetails={true}
                    onPress={(data,details) => {
                        onPlaceSelected(data,details)
                    }}
                    query={{
                        key: GOOGLE_MAP_API,
                        language: 'en',
                        region: 'IN',
                    }}
                    styles={{
                        container: {
                            flex: 1,
                            height:'100%',
                            padding:5,
                            marginTop:0,
                            width:"100%"
                        },
                        textInputContainer: {
                            flexDirection: 'row',
                        },
                        textInput: {
                            backgroundColor: '#FFFFFF',
                            height: 50,
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
                            marginLeft:"5%",
                            width:"90%",
                            padding:15,
                            height:'100%',
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
                    }}/>
            </View>
            <View style={{width:wp('100%'),height:'auto',backgroundColor:'#ffffff',borderTopStartRadius:30,borderTopEndRadius:30}}> 
                <ScrollView nestedScrollEnabled={true} contentContainerStyle={{paddingBottom:250}}>
                    <View style={{paddingTop:15,paddingBottom:10,borderBottomWidth:1,marginHorizontal:18,borderBottomColor:'#c4c4c450'}}>
                        <Text style={{fontSize:15,fontWeight:"500",color:"#000000",width:"100%"}}>Enter complete address</Text>
                    </View>
                    <View style={{marginTop:5,width:wp("90%"),paddingHorizontal:wp('5%'),marginBottom:15,marginTop:10}}>
                        <View style={{...StylesGloble.oneline,marginTop:15,marginLeft:-12}}>
                            <TouchableOpacity onPress={()=>{checktitlefun(1)}}   style={[StylesGloble.outerborderwei,checkaddtilte==1 ? styles.green : styles.white ]}>
                                <Text style={{fontSize:11,color:"#000000",marginLeft:5}}>Home</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{checktitlefun(2)}}  style={[StylesGloble.outerborderwei,checkaddtilte==2 ? styles.green : styles.white ]}>
                                <Text style={{fontSize:11,color:"#000000",marginLeft:5}}>Office</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{ checktitlefun(3) }} style={[StylesGloble.outerborderwei, checkaddtilte==3 ? styles.green : styles.white ]}>
                                <Text style={{fontSize:11,color:"#000000",marginLeft:5}}>Hotel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{ checktitlefun(4) }} style={[StylesGloble.outerborderwei, checkaddtilte==4 ? styles.green : styles.white ]}>
                                <Text style={{fontSize:11,color:"#000000",marginLeft:5}}>Other</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <View style={{...StylesGloble.outerborderwei3,marginLeft:8,marginTop:14,alignItems:"flex-start"}}>
                        <TextInput placeholder="Phone" onChangeText={(text)=>setphone(text)} value={phone}  placeholderTextColor='#9D9D9D'  style={{color:"black"}}/>
                    </View>
                    <View style={{...StylesGloble.outerborderwei3,marginLeft:10,marginTop:13,marginHorizontal:10,alignItems:"flex-start"}}>
                        <TextInput placeholder="House Number Or Floor & area Or town"  onChangeText={(text)=>sethousenumber(text)} value={housenumber} placeholderTextColor='#9D9D9D'  style={{color:"black"}}/>
                    </View>
                    <View style={{...StylesGloble.outerborderwei3,marginLeft:10,marginTop:15,margin:5,marginHorizontal:10,alignItems:"flex-start"}}>
                        <TextInput placeholder="Near by Landmark"  onChangeText={(text)=>setLandmark(text)} value={Landmark}   placeholderTextColor='#9D9D9D' style={{color:"black"}}/>
                    </View>
                    {
                        (action=='2')?(
                            <View style={{marginTop:15,margin:15}}>
                                <ButtonField label={'Update Address'} submitfun={updateaddressfun}/>
                            </View>
                        ):(
                            <View style={{marginTop:15,margin:15}}>
                                <ButtonField label={'Save Address'} submitfun={submitfun}/>
                            </View>
                        )
                    }
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    green: {
        borderColor: '#9DC45A',
    },
    white: {
        borderColor:"#c4c4c450",
    }
});

export default AddAddress;