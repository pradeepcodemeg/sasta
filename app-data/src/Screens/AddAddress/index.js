import React, { useEffect, useState, useContext,useRef } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid,Platform,TextInput,View, Text, StyleSheet,ScrollView,Image, TouchableOpacity,Dimensions } from 'react-native';
import ButtonField  from './../../helper/ButtonField';
import { StylesGloble } from './../../helper/Globlecss';
import imagePath from './../../constants/ImagePath';
import HeaderComp from '../../Components/HeaderComp';
import Toast from 'react-native-simple-toast';
import MapView, {Marker} from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import { setaddressData,} from '../../Redux/index';
import { GOOGLE_MAP_API } from "../../services/Apiurl";
import ApiDataService from "./../../services/Apiservice.service";
import LoadingPage  from './../../helper/LoadingPage';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoding';


Geocoder.init(GOOGLE_MAP_API);
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AddAddress = ({ navigation,route }) => {

    const dispatch = useDispatch();
    const ref = useRef();
    
    const pagename = route.params.type;
    const action = route.params.action;
    const editdata = route?.params?.data;
    const latitudeDelta =0.000415;
    const longitudeDelta = 0.00295;

    const mapRef = useRef(null);
    
    const [Loading,setLoading ]= useState(false);
    const usaerstate = useSelector((state) => state.UserReducer.userData);
    const userID = usaerstate ? usaerstate.userID : null;
    const userToken = usaerstate ? usaerstate.userToken : null;
    const selectaddresstate = useSelector((state) => state.SelectAddressReducer.data);
    const chooselat =selectaddresstate ? selectaddresstate.lat:'19.0760';
    const chooselng = selectaddresstate ? selectaddresstate.lng:'72.8777';
    const phonenumber = usaerstate ? usaerstate.mobile : null;
    const fullname = usaerstate ? usaerstate.fullname : null;

    const current_add = selectaddresstate ? selectaddresstate.address : null

    const [currentLocation, setCurrentLocation] = useState('');

    const [marker, setmarker] = useState([
        {
            id: 1,
            coords: {
                latitude: chooselat,
                longitude: chooselng,
            }
        }
    ]);
    const [name,setname] = useState(fullname)
    const [Title,setTitle]= useState('');
    const [checkaddtilte,setcheckaddtilte]=useState(0);
    
    const [ phone,setphone ]= useState(phonenumber);
    const [ housenumber,sethousenumber ]= useState('');
    const [ Landmark,setLandmark ]= useState('');

    const [ fulladdress,setfulladdress ]= useState(current_add);
    const [ addresslat,setaddresslat ]= useState(chooselat);
    const [ addresslng,setaddresslng ]= useState(chooselng);
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
            addnewdatainfirst(editdata.latitude,editdata.longitude)
        }else{
            requestLocationPermission()
        }
    },[])

    const addnewdatainfirst = (lat,lng)=>{
        setCurrentLocation({
            latitude: Number(lat),
            longitude:  Number(lng),
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta
        });
        mapRef.current?.animateToRegion({
            latitude:  Number(lat),
            longitude:  Number(lng),
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta
        });
        setmarker([
            {
                id: 1,
                coords: {
                    latitude: lat,
                    longitude: lng,
                }
            }
        ]);
    }

   
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

    const getOneTimeLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                addnewdatainfirst(position.coords.latitude,position.coords.longitude);
            },
            (error) => {
                getOneTimeLocation();
            },
           
        );
    };
    const calltoastmessage  = (data) => {
        Toast.showWithGravity(data, Toast.LONG, Toast.BOTTOM);
    };
    const gotocheckaviblefun = (type)=>{
        if(Title=='' || Title==null ||Title == undefined){
            calltoastmessage('Please add title');
        }
        else{
            let body = {
                address_latitude: addresslat,
                address_longitude: addresslng,
                user_id:userID
            }
            let formData = new FormData();
            for (let key in body) {
                formData.append(key, body[key]);
            }
            setLoading(true);
            ApiDataService.Uploadapi('check-address?token='+userToken, formData).then(response => {
                if (response.data.status == 1) {
                    if(type==1){
                        submitfun();
                    }else{
                        updateaddressfun();
                    }
                }else{
                    setLoading(false);
                    calltoastmessage('Unfortunately, we do not provide service in this address. Please select another address. Thank you.');
                }
            }).catch(e => {
                setLoading(false);
                calltoastmessage('Unfortunately, we do not provide service in this address. Please select another address. Thank you.');
                console.log("error", e);
            });
        }
    }


    const updateaddressfun = () =>{
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
            setLoading(false);
            console.log("error",e);
        });
        
        
    }

    const submitfun = () =>{
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
            setLoading(false);
            console.log("error",e);
        });
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
        
        setCurrentLocation({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta
        });
        mapRef.current?.animateToRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta
        });
        setmarker([
            {
                id: 1,
                coords: {
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng
                }
            }
        ]);
    }
    const getFormattedAddress = (lat, lng) => {
       
    };
   
    const onMapPress = (e)=>{
        setCurrentLocation({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta
        });
        mapRef.current?.animateToRegion({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta
        });
        setmarker([
            {
                id: 1,
                coords: {
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude: e.nativeEvent.coordinate.longitude,
                }
            }
        ]);
        Geocoder.from(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude).then((json) =>{
            var location = json.results[0].formatted_address;
            ref.current?.setAddressText(location);
        }).catch((error) => {
            console.warn(error);
        });
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
                {
                    currentLocation&&
                    <MapView
                    style={{width:wp('100%'),height:'100%'}}
                    onRegionChangeComplete={({ latitude, longitude }) =>
                        getFormattedAddress(latitude, longitude)
                    }
                    ref={mapRef}  
                    onPress={e => onMapPress(e)}
                    initialRegion={currentLocation}>
                    {
                        (marker) ?
                        (marker.map((val, i) => {
                            return (
                                <Marker coordinate={
                                    {
                                        latitude: parseFloat(val.coords.latitude),
                                        longitude: parseFloat(val.coords.longitude),
                                    }
                                }  key={i}></Marker>)
                        })) : null
                    }
                </MapView>
                }
                
            </View>
            <View style={{position: "absolute", top: 70,zIndex:55,  right: "1%",width:'98%',height:'auto',backgroundColor:'#ffffff',borderRadius:10}}> 
                <GooglePlacesAutocomplete
                    ref={ref}
                    placeholder='Search for area'
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
                            height:'auto',
                            padding:5,
                            marginTop:-5,
                            color:"#000000",
                            width:'100%'
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
                    }}/>
            </View>
            <View style={{width:wp('100%'),height:'auto',backgroundColor:'#ffffff',borderTopStartRadius:30,borderTopEndRadius:30}}> 
                <ScrollView nestedScrollEnabled={true} style={{paddingBottom:250,marginBottom:280}}>
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
                        <TextInput placeholder="Phone" onChangeText={(text)=>setphone(text)} value={phone}  placeholderTextColor='#9D9D9D'  style={{color:"black",width:"100%"}}/>
                    </View>
                    <View style={{...StylesGloble.outerborderwei3,marginLeft:8,marginTop:14,alignItems:"flex-start"}}>
                        <TextInput placeholder="Receiver Name" onChangeText={(text)=>setname(text)} value={name}  placeholderTextColor='#9D9D9D'  style={{color:"black",width:"100%"}}/>
                    </View>
                    <View style={{...StylesGloble.outerborderwei3,marginLeft:10,marginTop:13,marginHorizontal:10,alignItems:"flex-start"}}>
                        <TextInput placeholder="House Number & Floor/Area/Town"  onChangeText={(text)=>sethousenumber(text)} value={housenumber} placeholderTextColor='#9D9D9D'  style={{color:"black",width:"100%"}}/>
                    </View>
                    <View style={{...StylesGloble.outerborderwei3,marginLeft:10,marginTop:15,margin:5,marginHorizontal:10,alignItems:"flex-start"}}>
                        <TextInput placeholder="Near by Landmark"  onChangeText={(text)=>setLandmark(text)} value={Landmark}   placeholderTextColor='#9D9D9D' style={{color:"black",width:"100%"}}/>
                    </View>
                    {
                        (action=='2')?(
                            <View style={{marginTop:15,margin:15}}>
                                <ButtonField label={'Update Address'} submitfun={()=>gotocheckaviblefun('2')}/>
                            </View>
                        ):(
                            <View style={{marginTop:15,margin:15}}>
                                <ButtonField label={'Save Address'} submitfun={()=>gotocheckaviblefun('1')}/>
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