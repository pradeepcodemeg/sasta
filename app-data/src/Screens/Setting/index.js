import React, { useEffect, useState, useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text, ScrollView, Modal,Pressable,BackHandler,  FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';
import ButtonField from './../../helper/ButtonField';
import { StylesGloble } from './../../helper/Globlecss';
import imagePath from './../../constants/imagePath';
import HeaderComp from '../../Components/HeaderComp';
import TabItem from '../../helper/Tab';
import Order from '../../assets/img/order.svg';
import Forwordcou from '../../assets/img/forwordcou.svg';
import Support from '../../assets/img/support.svg';
import Address from '../../assets/img/address.svg';
import Profile from '../../assets/img/profile.svg';
import Aboutus from '../../assets/img/aboutus.svg';
import Notification from '../../assets/img/notification.svg';
import Wallet from '../../assets/img/wallet.svg';
import Logout from '../../assets/img/logout.svg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

import { useFocusEffect } from '@react-navigation/native';


const Setting = ({ navigation, route }) => {

    const [backpresscall, setbackpresscall] = useState(true);
    const [backpopup, setbackpopup] = useState(false);

    const logoutfun = () =>{
        setbackpopup(true);
    }
    const onLongPressLogout= ()=>{
        setbackpresscall(false);
        calltoastmessage('Press back again to exit')

        setTimeout(()=>{
            setbackpresscall(true);
        },5000)
    }
    const gotologoutfun = ()=>{
         AsyncStorage.removeItem('Cartdata');
        AsyncStorage.removeItem('Selectaddress');
        AsyncStorage.removeItem('isLogin');
        navigation.navigate('AuthStack');
    }
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                if(backpresscall==false){
                    navigation.back();
                }
                else{
                    BackHandler.exitApp(); 
                }
                return true;
            };
            BackHandler.addEventListener(
                'hardwareBackPress',
                onBackPress
            );
            return () => {
                BackHandler.removeEventListener(
                    'hardwareBackPress',
                    onBackPress
                );
            };
        }, []),
    );
    const calltoastmessage  = (data) => {
        Toast.showWithGravity(data, Toast.LONG, Toast.BOTTOM);
    };

    return (
        <>
            <HeaderComp text={'Settings'} navigation={navigation} type={'3'} />
            <View style={{position: "relative",height:"100%",backgroundColor:"#ffffff" }}>
                <TouchableOpacity onPress={() => { navigation.navigate('Order') }} style={{ ...StylesGloble.sidebarlistview }}>
                    <View style={{ width: wp('10%') }}>
                        <Order width={22} height={22}/>
                    </View>
                    <View style={{ width: wp('75%') }}>
                        <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 0,color:"black" }}>Orders</Text>
                    </View>
                    <View style={{ width: wp('5%') }}>
                        <Forwordcou width={15} height={30} fill={"green"} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Support') }} style={{ ...StylesGloble.sidebarlistview }}>
                    <View style={{ width: wp('10%') }}>
                        <Support width={22} height={22}  />
                </View>
                    <View style={{ width: wp('75%') }}>
                        <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 0 ,color:"black"}}>Customer Support & FAQ</Text>
                    </View>
                    <View style={{ width: wp('5%') }}>

                        <Forwordcou width={15} height={30} fill={"green"} />

                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Address',{type:'2'}) }} style={{ ...StylesGloble.sidebarlistview }}>
                    <View style={{ width: wp('10%') }}>
                        <Address width={22} height={22}  />
                   </View>
                    <View style={{ width: wp('75%') }}>
                        <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 0,color:"black" }}>Address</Text>
                    </View>
                    <View style={{ width: wp('5%') }}>
                       <Forwordcou width={15} height={30} fill={"green"} />
                   </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Myprofile') }} style={{ ...StylesGloble.sidebarlistview }}>
                    <View style={{ width: wp('10%') }}>
                    <Profile width={22} height={22}  />
                    </View>
                    <View style={{ width: wp('75%') }}>
                        <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 0,color:"black" }}>Profile</Text>
                    </View>
                    <View style={{ width: wp('5%') }}>
                        <Forwordcou width={15} height={30} fill={"green"} />
                   </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Aboutus') }} style={{ ...StylesGloble.sidebarlistview }}>
                    <View style={{ width: wp('10%') }}>
                    <Aboutus width={22} height={22}/>
                    </View>
                    <View style={{ width: wp('75%') }}>
                        <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 0,color:"black" }}>About Us</Text>
                    </View>
                    <View style={{ width: wp('5%') }}>
                        <Forwordcou width={15} height={30} fill={"green"} />

                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Notification') }} style={{ ...StylesGloble.sidebarlistview }}>
                    <View style={{ width: wp('10%') }}>
                       <Notification width={22} height={22}/>
                    </View>
                    <View style={{ width: wp('75%') }}>
                        <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 0,color:"black" }}>Notification</Text>
                    </View>
                    <View style={{ width: wp('5%') }}>
                        <Forwordcou width={15} height={30} fill={"green"} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Wallet') }} style={{ ...StylesGloble.sidebarlistview }}>
                    <View style={{ width: wp('10%') }}>
                       <Wallet  width={22} height={22}/>
                    </View>
                    <View style={{ width: wp('75%') }}>
                        <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 0,color:"black" }}>Wallet</Text>
                    </View>
                    <View style={{ width: wp('5%') }}>
                        <Forwordcou width={15} height={30} fill={"green"} />

                    </View>
                </TouchableOpacity>
                <Pressable onPress={() => { logoutfun() }} 
                    onLongPress={() => { onLongPressLogout() }} style={({pressed}) => [
                        {
                            backgroundColor: pressed ? '#F5F9EF' : 'white',
                        },{
                            ...StylesGloble.sidebarlistview, borderBottomWidth:0
                        }
                      ]} >
                    <View style={{ width: wp('10%') }}>
                     <Logout  width={22} height={22}/>
                    </View>
                    <View style={{ width: wp('75%') }}>
                        <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 0, color: "#FE5B5B" }}>Logout</Text>
                    </View>
                    <View style={{ width: wp('5%') }}>
                        <Forwordcou width={15} height={30} fill={"green"} />

                    </View>
                </Pressable>
                {/* <View style={{...StylesGloble.tabbarse}}>
                    <TabItem type="4" navigation={navigation}/>
                </View> */}
            </View>
            <Modal animationType="slide" transparent={true} visible={backpopup}>
                <View style={{ position: "absolute", top: "32%", right: 0, width: wp('90%'),left:wp('5%'), height: 250, backgroundColor: '#ffffff', borderRadius: 10,  alignItems: "center" }}>
                    <View style={{alignItems: "center", justifyContent: "center", backgroundColor: "#FFFFFF",height:200 }}>
                        <Text style={{ fontSize: 32, marginTop: 10, fontWeight: "600", color: "#e91e63" }}>Are you sure?</Text>
                        <Text style={{ fontSize: 18, marginTop: 30, fontWeight: "600", color: "#000000" }}>Are you sure you want Logout</Text>
                    </View>
                    <View style={{flexDirection:"row",width:"100%",height:70}}>
                        <TouchableOpacity style={{ backgroundColor: "#bcbdda",width:'50%',alignItems:"center",justifyContent:"center" }} onPress={() => { setbackpopup(false); }}>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: "600", color: "#000000" }}>No</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#E91E63",width:'50%',alignItems:"center",justifyContent:"center" }} onPress={() => { gotologoutfun()}}>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: "600", color: "#ffffff" }}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};



export default Setting;