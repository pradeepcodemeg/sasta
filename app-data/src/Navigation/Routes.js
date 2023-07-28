import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer , DefaultTheme, DarkTheme, } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import {ActivityIndicator,PermissionsAndroid,View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setselectaddressData,setUserData,sethomeData,setproductData,setcategoryData,setcartData,setorderData,setaddressData} from '../Redux/index';
import SplashScreen from 'react-native-splash-screen';
import Geolocation from '@react-native-community/geolocation';
import { GOOGLE_MAP_API } from "../services/Apiurl";
import Geocoder from 'react-native-geocoding';

function Routes() {

    const dispatch = useDispatch();
    const [IsLogin,setIslogin]=useState(false);
    const [authLoaded, setAuthLoaded] = React.useState(false);

    useEffect(()=>{
        uselogin();
       
    },[IsLogin])

    const usecurrentlocation = async ()=>{
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
    
    const getOneTimeLocation = async ()=>{
        Geolocation.getCurrentPosition(
            (position) => {
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
                    console.log("++++++++++++++++",address)
                    AsyncStorage.setItem('Selectaddress', JSON.stringify(address));
                    dispatch(setselectaddressData());
                })
            },
            (error) => {
                getOneTimeLocation();
            },
        );
    }

    const uselogin = async ()=>{
        try {
            const user = await AsyncStorage.getItem('isLogin');
            if (user=='1') {
                setAuthLoaded(true);
                SplashScreen.hide();
                setIslogin(true);
                dispatch(setUserData());
                dispatch(setselectaddressData());
                dispatch(sethomeData());
                dispatch(setproductData('','','','','',''));
                dispatch(setcategoryData());
                dispatch(setcartData());
                dispatch(setorderData());
                dispatch(setaddressData());
            } else {
                SplashScreen.hide();
                usecurrentlocation();
              
                setAuthLoaded(true);
                setIslogin(false);
            }
          } catch (error) {}
    }

    return (
       
        <>
            {authLoaded ==true ? (
                <NavigationContainer theme={DefaultTheme}>
                    {IsLogin==false ?      <AuthStack/> : <UserStack />}
                </NavigationContainer>
            ) : (
                <View style={{width:"100%",height:"100%",backgroundColor:"#fffffff"}}>
                    <ActivityIndicator />
                </View>
                
            )}
        </>
    )
}

export default Routes