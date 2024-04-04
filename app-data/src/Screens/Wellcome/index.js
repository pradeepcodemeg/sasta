//import liraries
import React, { useEffect, useState, useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import imagePath from './../../constants/ImagePath';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity, Modal, BackHandler, ImageBackground,Image } from 'react-native';
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
            <Modal animationType="fade" transparent={true} visible={backpopup}>
                <TouchableOpacity style={{position: 'absolute',bottom: 0,width:'100%',height:"100%", backgroundColor: '#00000030'}} onPress={() => { setbackpopup(false); }}>
                    <View  ></View>
                </TouchableOpacity>
                <View style={{ position: "absolute", top: "39%", right: 0, width: wp('70%'),left:wp('15%'), backgroundColor: '#ffffff', borderRadius: 10,  alignItems: "center",elevation:2,padding:30, }}>
                    <View style={{alignItems: "center", height:100 }}>
                        <Image source={imagePath.logout_2} style={{height:40,width:40,marginTop: 1,}}/>
                        <Text style={{ fontSize: 20, fontWeight: "600", color: "#000000",textAlign:"center" ,}}>Are you sure you want exit this app?</Text>
                    </View>
                    <View style={{width:wp('60%')}}>
                        <View style={{flexDirection:"row",marginTop:5}}>
                            <TouchableOpacity  onPress={() => { setbackpopup(false); }} style={{borderRadius:50,marginLeft:"8%",width:"40%",borderColor:"#9DC45A",borderWidth:2,alignItems:"center",padding:8}}>
                                <Text style={{fontSize:15,fontWeight:"600",color:"#000000",alignItems:"center"}}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { BackHandler.exitApp();}} style={{borderRadius:50,width:"40%",marginLeft:"6%",backgroundColor:"#9DC45A",alignItems:"center",padding:8}}>
                                <Text style={{fontSize:15,fontWeight:"600",color:"#FFFFFF",alignItems:"center"}}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};



export default Wellcome;