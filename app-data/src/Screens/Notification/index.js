import React, { useEffect, useState, useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text, ScrollView, Modal, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';
import ButtonField from '../../helper/ButtonField';
import { StylesGloble } from '../../helper/Globlecss';

import HeaderComp from '../../Components/HeaderComp';
import ToggleSwitch from 'toggle-switch-react-native';


const Notification = ({ navigation, route }) => {
    
    const [toggel,settoggle]= useState(false);
    return (
        <>
            <HeaderComp text={'Notification'} navigation={navigation} type={'3'} />
            <View  style={{flexDirection:"row",width:"100%",height:100,elevation:5,backgroundColor:"#ededed" }}>
                <View style={{width:"70%",justifyContent:"center",marginLeft:15}}>
                    <Text style={{fontSize:15,marginTop:0,fontWeight:"400",color:"#9DC45A"}}>WhattsApp Messages</Text>
                    <Text style={{fontSize:18,marginTop:2,fontWeight:"600",color:"#9DC45A"}}>Get update From us WhattsApp</Text>
                </View>
                <View style={{width:"30%",alignItems:"center",justifyContent:"center"}}>
                    <ToggleSwitch
                        isOn={toggel}
                        onColor="#9DC45A"
                        offColor="#dbe5c7"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="large"
                        onToggle={(isOn) =>{ settoggle(!toggel);}}
                    />
                </View>
            </View>
        </>
    );
};



export default Notification;