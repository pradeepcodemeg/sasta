//import liraries
import React, { useEffect, useState, useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import imagePath from './../../constants/imagePath';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity, Modal, BackHandler, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StylesGloble } from './../../helper/Globlecss';
import WhiteButtonField from './../../helper/WhiteButtonField';
import Welllogo from '../../assets/img/Welllogo.svg';
import { useFocusEffect } from '@react-navigation/native';


const Wellcome = ({ navigation, route }) => {

    const [backpopup, setbackpopup] = useState(false);

    const submitfun = () => {
        navigation.navigate('Addmobile')
    }
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                console.log('Back Press handled and doing no action');
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
            <ImageBackground style={{ flex: 1, width: wp('100%'), height: hp('100%'), position: "relative" }} source={imagePath.welbg} >
                <View style={{ ...StylesGloble.ScreenHorigental, ...StylesGloble.wellcomeouter, ...StylesGloble.centerclass }}>
                    <View style={{ ...StylesGloble.widthheight100, marginBottom: 50 }}>
                        <Welllogo width={85} height={88} fill={"#9DC45A"} />
                    </View>
                    <Text style={{ ...StylesGloble.fontmedium, fontSize: 32, lineHeight: 33 }}>Welcome to</Text>
                    <Text style={{ ...StylesGloble.fontmedium, fontSize: 32, lineHeight: 33 }}>our grocery savings</Text>
                    <Text style={{ ...StylesGloble.fontmedium, fontSize: 32, lineHeight: 33 }}>platform</Text>
                    <Text style={{ ...StylesGloble.fontsmallsimple, marginTop: 40, color: "#000000", fontSize: 14 }}>The smart way to shop for groceries.</Text>
                    <View style={{ marginTop: 45, marginBottom: 50, width: wp('80%') }}>
                        <WhiteButtonField label={'Get Start'} submitfun={submitfun} />
                    </View>
                </View>
            </ImageBackground>
            <Modal animationType="slide" transparent={true} visible={backpopup}>

                <View style={{ position: "absolute", top: "32%", right: 0, width: wp('90%'),left:wp('5%'), height: 250, backgroundColor: '#ffffff', borderRadius: 10,  alignItems: "center" }}>
                    <View style={{alignItems: "center", justifyContent: "center", backgroundColor: "#FFFFFF",height:200 }}>
                        <Text style={{ fontSize: 32, marginTop: 10, fontWeight: "600", color: "#e91e63" }}>Are you sure?</Text>
                        <Text style={{ fontSize: 18, marginTop: 30, fontWeight: "600", color: "#000000" }}>Are you sure you want exit this app</Text>
                    </View>
                    <View style={{flexDirection:"row",width:"100%",height:70}}>
                        <TouchableOpacity style={{ backgroundColor: "#bcbdda",width:'50%',alignItems:"center",justifyContent:"center" }} onPress={() => { setbackpopup(false); }}>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: "600", color: "#000000" }}>No</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#E91E63",width:'50%',alignItems:"center",justifyContent:"center" }} onPress={() => { BackHandler.exitApp(); }}>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: "600", color: "#ffffff" }}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};



export default Wellcome;