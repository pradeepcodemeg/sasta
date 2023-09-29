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


import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../../Redux/index';


const Setting = ({ navigation, route }) => {

    const [backpresscall, setbackpresscall] = useState(true);
    const [backpopup, setbackpopup] = useState(false);
  
    const usaerstate = useSelector((state) => state.UserReducer.userData);
    const userID = usaerstate ? usaerstate.userID : null;
    const userToken = usaerstate ? usaerstate.userToken : null;
    const userNoti = usaerstate ? usaerstate.isNotification : null;

    const [toggel,settoggle]= useState(userNoti);

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
    const submitfun = async(event) =>{
        try {
            let body = {
                action : "update_user",
                user_id:userID,
                isNotification:event,
              
            }
            setLoading(true);
            let formData = new FormData();
            for (let key in body) {
                formData.append(key, body[key]);
            }
            ApiDataService.Uploadapi('users?token='+userToken,formData).then(response => {
                if(response.data.status==1)
                {
                    dispatch(setUserData());
                    setTimeout(()=>{

                        setLoading(false);
                        calltoastmessage("Notification Status update successfully");
                    },2000)
                    //navigation.navigate('Home');
                }
                else{
                    setLoading(false);
                    calltoastmessage(response.data.msg);
                }
            }).catch(e => {
                setLoading(false);
                console.log("error",e);
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

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
                <TouchableOpacity onPress={() => { navigation.navigate('Aboutus',{pagetype:3}) }} style={{ ...StylesGloble.sidebarlistview }}>
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
                <TouchableOpacity  onPress={() => { navigation.navigate('Notification') }} style={{ ...StylesGloble.sidebarlistview,position:"relative" }}>
                    <View style={{ width: wp('10%') }}>
                       <Notification width={22} height={22}/>
                    </View>
                    <View style={{ width: wp('75%') }}>
                        <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 0,color:"black" }}>Notification</Text>
                    </View>
                    <View  style={{ width: wp('5%') }}>
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
                    <Logout width={22} height={22} style={{ fill: 'black' }} />
                    </View>
                    <View style={{ width: wp('75%') }}>
                        <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 0, color: "grey" }}>Logout</Text>
                    </View>
                    <View style={{ width: wp('5%') }}>
                        <Forwordcou width={15} height={30} fill={"green"} />

                    </View>
                </Pressable>
                {/* <View style={{...StylesGloble.tabbarse}}>
                    <TabItem type="4" navigation={navigation}/>
                </View> */}
            </View>
            <Modal animationType="fade" transparent={true} visible={backpopup}>
                <TouchableOpacity style={{position: 'absolute',bottom: 0,width:'100%',height:"100%", backgroundColor: '#00000030'}} onPress={() => { setbackpopup(false); }}>
                    <View  ></View>
                </TouchableOpacity>
                <View style={{ position: "absolute", top: "39%", right: 0, width: wp('70%'),left:wp('15%'), backgroundColor: '#ffffff', borderRadius: 10,  alignItems: "center",elevation:2,padding:30, }}>
                    <View style={{alignItems: "center", height:100 }}>
                        <Image source={imagePath.logout_2} style={{height:40,width:40,marginTop: 1,}}/>
                        <Text style={{ fontSize: 20, fontWeight: "600", color: "#000000",textAlign:"center" ,}}>Are you sure you want to Logout?</Text>
                    </View>
                    <View style={{width:wp('60%')}}>
                        <View style={{flexDirection:"row",marginTop:5}}>
                            <TouchableOpacity onPress={() => { setbackpopup(false); }} style={{borderRadius:50,marginLeft:"8%",width:"40%",borderColor:"#9DC45A",borderWidth:2,alignItems:"center",padding:8}}>
                                <Text style={{fontSize:15,fontWeight:"600",color:"#000000",alignItems:"center"}}>No</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setbackpopup(false);gotologoutfun()}} style={{borderRadius:50,width:"40%",marginLeft:"6%",backgroundColor:"#9DC45A",alignItems:"center",padding:8}}>
                                <Text style={{fontSize:15,fontWeight:"600",color:"#FFFFFF",alignItems:"center"}}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};



export default Setting;