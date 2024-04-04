//import liraries
import React, { useEffect, useState, useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import imagePath from './../../constants/ImagePath';
import { View, Text, StyleSheet, PermissionsAndroid,TouchableOpacity, Modal, BackHandler, ImageBackground,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StylesGloble } from './../../helper/Globlecss';
import ButtonField from './../../helper/ButtonField';
import Welllogo from '../../assets/img/Welllogo.svg';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { setproductData, sethomeData, setsubcategoryData } from './../../Redux/index';
import Avatar from '../../assets/img/avatar.svg';
import ApiDataService from "./../../services/Apiservice.service";
import Geolocation from 'react-native-geolocation-service';
import Locationicon from '../../assets/img/locationicon.svg';
import Downarray from '../../assets/img/downarray.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CheckLoc = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const usaerstate = useSelector((state) => state.UserReducer.userData);
    const userID = usaerstate ? usaerstate.userID : null;
    const userToken = usaerstate ? usaerstate.userToken : null;
    const username = usaerstate ? usaerstate.fullname : null;
    const userimg = usaerstate ? usaerstate.profile_pic : null;
    
    const selectaddresstate = useSelector((state) => state.SelectAddressReducer.data);

    const locationname = selectaddresstate ? selectaddresstate.title : '';
    const currentadd = selectaddresstate ? selectaddresstate.address : '';
   
    const [backpopup, setbackpopup] = useState(false);
    const [noloaction, setnoloaction] = useState(true);

    
    const gotolocation = () => {
        navigation.navigate('GooglePlacesInput','1');
    }
    useEffect(() => {
        if(selectaddresstate != null && selectaddresstate){
            AsyncStorage.getItem('UserBase', (err, credentials) => {
                let  UserBase =  JSON.parse(credentials);
                gotocheckaviblefun(selectaddresstate.lat,selectaddresstate.lng,UserBase.userID,UserBase.userToken)
            })
        }else{
            requestLocationPermission()
        }
    }, [selectaddresstate])
    const requestLocationPermission = async () => {
        AsyncStorage.getItem('Selectaddress', (err, addressdata) => {
            let  newaddressdata =  JSON.parse(addressdata);
            AsyncStorage.getItem('UserBase', (err, credentials) => {
                let  UserBase =  JSON.parse(credentials);
                gotocheckaviblefun(newaddressdata.lat,newaddressdata.lng,UserBase.userID,UserBase.userToken)
            })
        });
    };
 

 
    const gotocheckaviblefun = (lat,lng,id,token)=>{
        let body = {
            address_latitude: lat,
            address_longitude: lng,
            user_id: id
        }
        let formData = new FormData();
        for (let key in body) {
            formData.append(key, body[key]);
        }
        ApiDataService.Uploadapi('check-address?token='+token, formData).then(response => {
            if (response.data.status == 1) {
                AsyncStorage.setItem('checkavilbale','1');
                navigation.navigate('Home');
            }else{
                AsyncStorage.setItem('checkavilbale','1');
                navigation.navigate('Home');
                setnoloaction(true);
            }
        }).catch(e => {
            AsyncStorage.setItem('checkavilbale','1');
            navigation.navigate('Home');
            setnoloaction(true);
            console.log("error", e);
        });
    }

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                setbackpopup(true);
                return true;
            };

            // Add Event Listener for hardwareBackPress
            BackHandler.addEventListener(
                'hardwareBackPress',
                onBackPress
            );

            return () => {
                // Once the Screen gets blur Remove Event Listener
                BackHandler.removeEventListener(
                    'hardwareBackPress',
                    onBackPress
                );
            };
        }, []),
    );
    return (
        <>
            <View style={{height:"100%",width:"100%"}}>
              
                {
                    noloaction&&
                    <View style={{...StylesGloble.locationnotaviable}}>
                        <Image style={{ width: 144, height: 150 }} source={imagePath.NoService} />
                        <Text numberOfLines={1} style={{ marginTop: 35,fontSize: 22, fontWeight: "800", color: "#06161C" }}>Comeing <Text numberOfLines={1} style={{ fontSize: 22, fontWeight: "800", color: "#9DC45A" }}>Soon..</Text></Text>
                        <Text numberOfLines={1} style={{ marginTop: 35,fontSize: 18, fontWeight: "800", color: "#06161C" }}>Location not serviceable</Text>
                        <Text numberOfLines={1} style={{fontSize: 15,marginTop:10, color: "#06161C" }}>Our team is working hard to provide speedy</Text>
                        <Text numberOfLines={1} style={{fontSize: 15,marginTop:5, color: "#06161C" }}>deliveries to your loaction.</Text>
                        <View style={{flexDirection:"row",marginTop:55}} >
                            <View style={{backgroundColor:"#dfe3d8",padding:10,borderRadius:4}}>
                                <Locationicon  width={15} height={15} />
                            </View>
                            <View style={{justifyContent:"center"}}>
                                <Text  style={{ marginHorizontal: 5,fontSize: 12, fontWeight: "600", color: "#06161C" }}>{locationname} : <Text style={{fontSize: 12,fontWeight: "400",  color: "#06161C" }}>{currentadd}</Text></Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 45, marginBottom: 50, width: wp('80%') }}>
                            <ButtonField label={'Change Location'} submitfun={()=>gotolocation()} />
                        </View>
                    </View>
                }
                
            </View>            
        </>
    );
};



export default CheckLoc;