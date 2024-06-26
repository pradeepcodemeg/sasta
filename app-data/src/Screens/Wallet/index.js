import React, { useEffect, useState, useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text, ScrollView, Modal, FlatList, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import ButtonField from './../../helper/ButtonField';
import { StylesGloble } from './../../helper/Globlecss';
import imagePath from './../../constants/ImagePath';
import HeaderComp from '../../Components/HeaderComp';
import Redeem from '../../assets/img/redeem.svg';
import Frontaerrow from '../../assets/img/frontaerrow.svg';
import Gpay from '../../assets/img/gpay.svg';
import { useSelector, useDispatch } from 'react-redux';
import ApiDataService from "../../services/Apiservice.service";
import { setUserData } from '../../Redux/index';


const Wallet = ({ navigation, route }) => {
    const [custum, setcustum] = useState(false);
    const [trans,translist]= useState([]);
    const [amount, setamount] = useState('0');
 
    const usaerstate = useSelector((state) => state.UserReducer.userData);
    const userToken = usaerstate ? usaerstate.userToken : null;
    const WelletBalance = usaerstate.wallet_balance;
    const userID = usaerstate ? usaerstate.userID : null;
    const CrLimitBalance = 0;
    const CrLeftBalance = 0;

    useEffect(()=>{
        getdatadata()
    },[])
    const getdatadata = () =>{
        let url = 'transactions?order=DESC&order_by=id&row_count=10&page=1&token='+userToken+'&by_user_id='+userID;
        ApiDataService.Getapi(url).then(response => {
            if(response.data.length > 0)
            {
                translist(response.data);
            }
        }).catch(e => {
        });
        
    }

    const submitfun = () => {

    }
    return (
        <>
            <HeaderComp text={'My Wallet'} navigation={navigation} type={'3'} />
            <View style={{ ...StylesGloble.container, paddingTop: hp('1%'), paddingLeft: 10, paddingRight: 10 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground style={{ width: '100%', height: 220 }} source={imagePath.Balance}>
                    <View style={{ width: '100%', alignItems: "center" }}>
                        <Text style={{ fontSize: 12, marginTop: 60, fontWeight: "400", color: "#FFFFFF" }}>Main balance</Text>
                        <Text style={{ fontSize: 25, marginTop: 5, fontWeight: "900", color: "#FFFFFF" }}>₹{WelletBalance}</Text>
                    </View>

                    <View style={{ width: "100%", height: 1, backgroundColor: "#FFFFFF40", marginTop: 26 }}></View>
                    <View style={{ ...StylesGloble.oneline, marginTop: 5 }}>
                        <View style={{ width: "50%", alignItems: "center", justifyContent: "center", borderRightWidth: 1, borderRightColor: "#ffffff" }}>
                            <Text style={{ fontSize: 12, marginTop: 0, fontWeight: "400", color: "#FFFFFF" }}>Credit Left</Text>
                            <Text style={{ fontSize: 15, marginTop: 2, fontWeight: "600", color: "#FFFFFF" }}>₹{CrLeftBalance}</Text>
                        </View>
                        <View style={{ width: "50%", alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: 12, marginTop: 0, fontWeight: "400", color: "#FFFFFF" }}>Credit Limit</Text>
                            <Text style={{ fontSize: 15, marginTop: 2, fontWeight: "600", color: "#FFFFFF" }}>₹{CrLimitBalance}</Text>
                        </View>
                    </View>
                </ImageBackground>

                <View style={{ ...StylesGloble.oneline, marginTop: -5 }}>
                    <TouchableOpacity >
                        <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Add money to your wallet</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={{ width: "100%", height: 'auto', marginTop: 15, borderColor: "#C4C4C450", borderRadius: 8, borderWidth: 1 }}>
                    <View style={{ padding: 10 }}>
                        {/* {
                            custum ? */}
                                <TextInput
                                    value={amount}
                                    keyboardType='numeric'
                                    placeholder='Enter Money'
                                    placeholderTextColor='grey'
                                    onChangeText={name => setamount(name)}
                                    style={{width: "100%", backgroundColor: "#9DC45A10", borderRadius: 10, paddingVertical: 15,height:50,paddingLeft:20,color:"#000000"}}
                                />
                                {/* :
                                <View style={{ width: "100%", backgroundColor: "#9DC45A10", borderRadius: 10, paddingVertical: 15 }}>
                                <Text style={{ fontSize: 16, marginLeft: 10, color: '#000000' }}>₹1000</Text>
                            </View>
                            } */}
                       
                        <View style={{ ...StylesGloble.oneline, marginTop: 15, }}>
                            <TouchableOpacity onPress={() => setamount('10')} style={{ ...StylesGloble.outerborderwei2,backgroundColor:amount==10 ? "#9DC45A" : "#ffffff" }}>
                                <Text style={{ fontSize: 12, color: amount==10 ? "#ffffff" : "#000000", marginLeft: 5 }}>₹10</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setamount('500')} style={{ ...StylesGloble.outerborderwei, marginLeft: 15 ,backgroundColor:amount==500 ? "#9DC45A" : "#ffffff" }}>
                                <Text style={{ fontSize: 12, color: amount==500 ? "#ffffff" : "#000000", marginLeft: 5 }}>₹500</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setamount('1000')} style={{ ...StylesGloble.outerborderwei, backgroundColor:amount==1000 ? "#9DC45A" : "#ffffff" , marginLeft: 15 }}>
                                <Text style={{ fontSize: 12, color: amount==1000 ? "#ffffff" : "#000000", marginLeft: 5 }}>₹1000</Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity style={{ ...StylesGloble.outerborderwei, backgroundColor:custum? '#9DC45A'  :"white", marginLeft: 15 }} onPress={() => setcustum(true)}>
                                <Text style={{ fontSize: 12, color: custum? '#ffffff'  :"#000000", marginLeft: 5 }}>Custum</Text>
                            </TouchableOpacity> */}
                        </View>
                        <View style={{ marginTop: 25 }}>
                            <ButtonField label={'Top Up'} submitfun={submitfun} />
                        </View>
                    </View>
                </View>

                {/* <View style={{ ...StylesGloble.oneline, marginTop: 15, marginLeft: 5 }}>
                    <View style={{ marginLeft: 5 }}>
                        <Text style={{ ...StylesGloble.listheading }}>Recent Activity</Text>
                    </View>
                    <TouchableOpacity style={{ marginLeft: "auto" }} onPress={()=>navigation.navigate('WalletSeeAll')}>
                        <Text style={{ ...StylesGloble.listviewallfont }}>See All</Text>
                    </TouchableOpacity>
                </View>
                
                    <View style={{ ...StylesGloble.oneline, marginTop: 25 }}>
                        <View style={{ alignItems: "flex-start", width: '20%' }}>
                            <Gpay width={66} height={65} />
                        </View>
                        <View style={{ alignItems: "center", width: '60%', justifyContent: "center" }}>
                            <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Cash deposit failure</Text>
                            <Text style={{ fontSize: 14, fontWeight: "300", color: "#9D9D9D" }}>07/04/2023 at 06:20pm</Text>
                        </View>
                        <View style={{ alignItems: "flex-end", width: '20%', justifyContent: "center" }} >
                            <Text style={{ fontSize: 18, fontWeight: "600", color: "#000000" }}>₹500</Text>
                        </View>
                    </View>
                    <View style={{ ...StylesGloble.oneline, marginTop: 25 }}>
                        <View style={{ alignItems: "flex-start", width: '20%' }}>
                            <Gpay width={66} height={65} />
                        </View>
                        <View style={{ alignItems: "center", width: '60%', justifyContent: "center" }}>
                            <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Cash deposit failure</Text>
                            <Text style={{ fontSize: 12, fontWeight: "300", color: "#9D9D9D" }}>07/04/2023 at 06:20pm</Text>
                        </View>
                        <View style={{ alignItems: "flex-end", width: '20%', justifyContent: "center" }} >
                            <Text style={{ fontSize: 18, fontWeight: "600", color: "#000000" }}>₹500</Text>
                        </View>
                    </View>
                    <View style={{ ...StylesGloble.oneline, marginTop: 25, paddingBottom: 20 }}>
                        <View style={{ alignItems: "flex-start", width: '20%' }}>
                            <Gpay width={66} height={65} />
                        </View>
                        <View style={{ alignItems: "center", width: '60%', justifyContent: "center" }}>
                            <Text style={{ fontSize: 16, fontWeight: "500", color: "#000000" }}>Cash deposit failure</Text>
                            <Text style={{ fontSize: 12, fontWeight: "300", color: "#9D9D9D" }}>07/04/2023 at 06:20pm</Text>
                        </View>
                        <View style={{ alignItems: "flex-end", width: '20%', justifyContent: "center" }} >
                            <Text style={{ fontSize: 18, fontWeight: "600", color: "#000000" }}>₹500</Text>
                        </View>
                    </View> */}
                </ScrollView>
                
            </View>

        </>
    );
};



export default Wallet;