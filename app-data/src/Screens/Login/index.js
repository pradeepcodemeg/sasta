//import liraries
import React, { useEffect, useState, useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { PermissionsAndroid, Platform, View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import ButtonField from './../../helper/ButtonField';
import { StylesGloble } from './../../helper/Globlecss';
import imagePath from './../../constants/imagePath';
import TextField from './../../helper/TextField';
import PasswordTextField from '../../helper/PasswordTextField';
import Geolocation from '@react-native-community/geolocation';
import Sclogo from '../../assets/img/sclogo.svg';
import Googleicon from '../../assets/img/googleicon.svg';
import Check from '../../assets/img/check.svg';
import { useSelector,useDispatch} from 'react-redux';
import Uncheck from '../../assets/img/uncheck.svg'
import Geocoder from 'react-native-geocoding';
import { GOOGLE_MAP_API } from "../../services/Apiurl";
import AsyncStorage from '@react-native-async-storage/async-storage';
Geocoder.init(GOOGLE_MAP_API, {language : "en"});



const Login = ({ navigation, route }) => {

    const dispatch = useDispatch();

    const [checkterms, setcheckterms] = useState(false);
    const [secureText, setsecureText] = useState(true);
    const [inputmobile, setInputmobile] = useState({
        value: null,
        message: '',
        isValid: false,
    });
    const [inputpassword, setInputpassword] = useState({
        value: null,
        message: '',
        isValid: false,
    });

    useEffect(() => {
        addcurrentlocation();

    }, [])

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
                    dispatch(setselectaddressData());
                   
                })
                .catch(error => console.warn(error));
            },
            (error) => {
                console.log(error.message);
            },
           
        );

        
    }


    const validatemobile = (_in) => {
        try {
            setInputmobile(prev => ({ ...prev, value: _in }));
            if (!_in) {
                setInputmobile(prev => ({ ...prev, isValid: true, message: "Please enter mobile" }));
            }
            else if (_in.length === 0) {
                setInputmobile(prev => ({ ...prev, isValid: true, message: "Please enter mobile" }));
            }
            else {
                setInputmobile(prev => ({ ...prev, isValid: false, message: '' }));
            }
        } catch (error) {
        }
    }
    const validatepassword = (_in) => {
        try {
            setInputpassword(prev => ({ ...prev, value: _in }));
            if (!_in) {
                setInputpassword(prev => ({ ...prev, isValid: true, message: "Please enter password" }));
            }
            else if (_in.length === 0) {
                setInputpassword(prev => ({ ...prev, isValid: true, message: "Please enter password" }));
            }
            else {
                setInputpassword(prev => ({ ...prev, isValid: false, message: '' }));
            }
        } catch (error) {
        }
    }
    const submitfun = () => {
        navigation.navigate('Addmobile')
    }

    return (
        <View style={{ ...StylesGloble.container,  paddingHorizontal:hp('3%')}}>
            <View style={{ ...StylesGloble.widthheight100, ...StylesGloble.topheigth }}>
                <Sclogo width={67} height={75} fill={"#9DC45A"} />
            </View>
            <View style={{ ...StylesGloble.widthheight100, ...StylesGloble.centerclass, marginTop: hp('2%') }}>
                <View style={{ ...StylesGloble.oneline }}>
                    <Text style={{ ...StylesGloble.fontmedium }}>Save more on</Text>
                    <Text style={{ ...StylesGloble.fontmedium, color: "#9DC45A", marginLeft: 10 }}>groceries</Text>
                </View>
                <Text style={{ ...StylesGloble.fontmedium, marginTop: 8 }}>when you sign in.</Text>
            </View>
            <View style={{ marginTop: hp('3%') }}>
                <TextField
                    value={inputmobile.value}
                    label="Email"
                    Placeholder='Email or Phone number'
                    type='text'
                    sectext='false'
                    errorText={inputmobile.message}
                    onChangeText={mobile => validatemobile(mobile)} />

            </View>
            <View style={{ marginTop: hp('3%') }}>
                <PasswordTextField
                    value={inputpassword.value}
                    label='password'
                    Placeholder='Password'
                    type='password'
                    errorText={inputpassword.message}
                    onChangeText={mobile => validatepassword(mobile)} />
            </View>
            <View style={{ ...StylesGloble.oneline, marginTop: hp('2%'), position: "relative" }}>
                <TouchableOpacity onPress={() => { setcheckterms(!checkterms) }} style={{ width: 25 }} >
                    {
                        (checkterms) ? (
                            <Check/>
                        ) : (
                            <Uncheck/>
                        )
                    }
                </TouchableOpacity>
                <Text style={{ ...StylesGloble.fontsmall, marginLeft: 5,top:2 }}>Remember Me</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Login') }} style={{ position: "absolute", top: 0, right: 0 }}>
                    <Text style={{ ...StylesGloble.fontsmall, color: "#9DC45A" }}>Forgot Password</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: hp('3%') }}>
                <ButtonField label={'Sign In'} submitfun={submitfun} />
            </View>
            <View style={{ position: "relative", borderColor: "#00000010", borderWidth: .5, marginTop: 30 }}>
                <Text style={{ ...StylesGloble.fontsmallsimple, marginTop: 5, marginLeft: 15, color: "#000000", fontSize: 17, position: "absolute", top: -30, left: "37%", backgroundColor: "#FFFFFF", padding: 15 }}>OR</Text>
            </View>
            <TouchableOpacity style={{ alignItems: "center", flexDirection: "row", justifyContent: "center", ...StylesGloble.widthheight100, backgroundColor: "#F5F5F5", padding: 15, marginTop: 30, borderRadius: 8 }}>
                <Googleicon width={20} height={20} fill={"#9DC45A"} />
                <Text style={{ ...StylesGloble.fontsmallsimple, marginTop: 5, marginLeft: 15, color: "#000000", fontSize: 16 }}>Continue with Google</Text>
            </TouchableOpacity>
            <View style={{ alignItems: "center", justifyContent: "center", ...StylesGloble.widthheight100, padding: 15, marginTop: hp('6%'), flexDirection: "row" }}>
                <Text style={{ ...StylesGloble.fontsmall, marginLeft: 10 }}>Don’t have an account?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Signup') }}>
                    <Text style={{ ...StylesGloble.fontsmall, color: "#9DC45A" }}>  Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};



export default Login;