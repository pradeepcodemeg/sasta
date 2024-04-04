import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComp from '../../Components/HeaderComp';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StylesGloble } from './../../helper/Globlecss';
import imagePath from './../../constants/ImagePath';
import Forwordcou from '../../assets/img/forwordcou.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setcartData, setproductData, setorderData } from './../../Redux/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingPage from '../../helper/LoadingPage';
import ApiDataService from '../../services/Apiservice.service'
import RazorpayCheckout from 'react-native-razorpay';
import Geocoder from 'react-native-geocoding';
import Toast from 'react-native-simple-toast';

const Payment = ({ navigation, route }) => {

    const dispatch = useDispatch();
    const [Loading, setLoading] = useState(false);
    const [allOrderdata, setallOrderdata] = useState({});
    const [prdouctdata, setprdouctdata] = useState([]);

    const usaerstate = useSelector((state) => state.UserReducer.userData);
    const userID = usaerstate ? usaerstate.userID : null;
    const userToken = usaerstate ? usaerstate.userToken : null;
    const WelletBalance = usaerstate?.wallet_balance?usaerstate?.wallet_balance:0;
    const Craditscore = usaerstate?.craditscore_balance ? usaerstate?.craditscore_balance:0;

    useEffect(() => {
        AsyncStorage.getItem('Paymentdata', (err, credentials) => {
            let UserBase = JSON.parse(credentials);
          
            setallOrderdata(UserBase);
            setprdouctdata(UserBase.order_details);
            // Geocoder.from(UserBase.latitude,UserBase.longitude)
            // .then(json => {
            //     console.log('JSON___________',json)
            // })
        })
       
    }, [])
    const submitfunto = () => {
       
        const options = {
            description: 'Credits towards consultation',
            image: imagePath.sclogo,
            currency: 'INR',
            key: 'rzp_live_9sgIEs7XjXtTYy', // Your API key
            //amount: allOrderdata.actual_price*100,
            amount: 100,
            name: 'Sasta',
            prefill: {
                email: 'void@razorpay.com',
                contact: '9191919191',
                name: 'Razorpay Software',
            },
            theme: { color: '#9DC45A' },
        };

        RazorpayCheckout.open(options)
            .then(data => {
                let formData = new FormData();
                for (let key in allOrderdata) {
                    if(key !='order_details'){
                        formData.append(key, allOrderdata[key]);
                    }
                }
                formData.append('payment_id', data.razorpay_payment_id);
                formData.append('payment_option', 'Online');
                formData.append('payment_status', 'received');
                formData.append('order_details', JSON.stringify(prdouctdata));
                setLoading(true);
                ApiDataService.Uploadapi('orders?token=' + userToken, formData).then(response => {
                    console.log('Payment re',response)
                    setLoading(false);
                    if (response.data.status == 1) {
                        AsyncStorage.removeItem('Cartdata');
                        dispatch(setorderData());
                        navigation.navigate('Orderconfirm', { orderId: response.data.order_id });
                    }
                    else {
                        calltoastmessage(response.data.msg);
                    }
                }).catch(e => {
                    setLoading(false);
                    console.log("error-----------", e);
                });
            })
            .catch(error => {
                console.error('Payment error:', error);
            })
            .finally(() => {
                setLoading(false);
            });


    }
    const submitfun = (type) => {
        setLoading(true);
        let formData = new FormData();
        for (let key in allOrderdata) {
            if(key !='order_details'){
                formData.append(key, allOrderdata[key]);
            }
        }
        formData.append('payment_option', type);
        formData.append('order_details', JSON.stringify(prdouctdata));
        ApiDataService.Uploadapi('orders?token=' + userToken, formData).then(response => {
            setLoading(false);
            if (response.data.status == 1) {
                AsyncStorage.removeItem('Cartdata');
                dispatch(setorderData());
                navigation.navigate('Orderconfirm', { orderId: response.data.order_id });
            }
            else {
                calltoastmessage(response.data.msg);
            }
        }).catch(e => {
            setLoading(false);
            console.log("error______________", e);
        });
    }

    const calltoastmessage = (data) => {
        Toast.showWithGravity(data, Toast.LONG, Toast.BOTTOM);
    };
    return (
        <>
            <HeaderComp text={'Payment Method'} navigation={navigation} type={'3'} />
            {
                Loading &&
                <View style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "115%", zIndex: 999999 }}>
                    <LoadingPage />
                </View>
            }
            <View style={{ width: wp('100%'),height: hp('100%'), backgroundColor: '#ffffff', borderTopStartRadius: 10, borderTopEndRadius: 10, alignItems: "center" }}>

                <ScrollView style={{ marginTop: 15, marginBottom: 55 }}>
                    <View style={{ flexDirection: "row",marginLeft:wp('3%') }}>
                        <Text style={{ color: "black", fontSize: 18, fontWeight: "600" }}>
                            Bill Total :
                        </Text>
                        <Text style={{ color: "black", fontSize: 18, fontWeight: "700", marginLeft: 5 }}>
                            ₹{allOrderdata.totalprice}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => { submitfunto() }} style={{ width: wp('96%'),margin:wp('2%') , height: 'auto', padding: 5,paddingBottom:15, borderColor: "#9D9D9D20", borderRadius: 8, borderWidth: 1, position: "relative", marginRight: 10, marginTop: 15, ...styles.box }}>
                        <View style={{ ...StylesGloble.oneline, marginTop: -8}}>
                            <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 10, marginTop: 10, color: "#000000" }}>Online Payment</Text>
                        </View>
                        <View style={{ ...StylesGloble.oneline, marginTop: 20, marginLeft: 10 }}>
                            <View style={{ width: "16%",marginTop:5 }}>
                                <Image source={imagePath.upi} />
                            </View>
                            <View style={{ width: "74%" }}>
                                <Text style={{ fontSize: 14, fontWeight: "500", color: "#000000", }}>BHIM UPI</Text>
                            </View>
                            <View style={{ width: "10%"}}>
                                <Forwordcou width={15} height={30} fill={"green"} />
                            </View>
                        </View>
                        <View style={{ ...StylesGloble.oneline, marginTop: 5 }}>
                            <View style={{ width: "18%" ,marginTop:0}}>
                                <Image source={imagePath.cardIcons} />
                            </View>
                            <View style={{ width: "72%" }}>
                                <Text style={{ fontSize: 14, fontWeight: "500", color: "#000000", }}>Add Credit, Debit & ATM cards</Text>
                            </View>
                            <View style={{ width: "10%"}}>
                                <Forwordcou width={15} height={30} fill={"green"} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={WelletBalance < allOrderdata.totalprice} onPress={() => { submitfun('wallet') }} style={{ width: wp('96%'),margin:wp('2%') , height: 'auto', padding: 5,paddingBottom:15, borderColor: "#9D9D9D20", borderRadius: 8, borderWidth: 1, position: "relative",  marginTop: 0, ...styles.box,opacity:WelletBalance < allOrderdata.totalprice?0.5:1 }}>
                        <View style={{ ...StylesGloble.oneline }}>
                            <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 10,color: "#000000" }}>Wallets</Text>
                        </View>
                        <View style={{ ...StylesGloble.oneline, marginTop: 10, marginLeft: 15 }}>
                            <View style={{ width: "15%",marginTop:5}}>
                                <Image source={imagePath.Cashondel} />
                            </View>
                            <View style={{ width: "75%"}}>
                                <Text style={{ fontSize: 14, fontWeight: "500", color: "#000000", }}>Use Wallets amount</Text>
                                <Text style={{ color: "black", fontSize: 14, fontWeight: "500" }}>
                                    ₹{WelletBalance}
                                </Text>
                            </View>
                            <View style={{width: "10%"}}>
                                <Forwordcou width={15} height={30} fill={"green"} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={Craditscore < allOrderdata.totalprice} onPress={() => { submitfun('credit') }} style={{ width: wp('96%'),margin:wp('2%') , height: 'auto', padding: 5,paddingBottom:15, borderColor: "#9D9D9D20", borderRadius: 8, borderWidth: 1, position: "relative",  marginTop: 0, ...styles.box,opacity:Craditscore < allOrderdata.totalprice?0.5:1 }}>
                        <View style={{ ...StylesGloble.oneline, marginTop: 0 }}>
                            <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 10, marginTop: 0, color: "#000000" }}>Credit amount</Text>
                        </View>
                        <View style={{ ...StylesGloble.oneline, marginTop: 20, marginLeft: 15 }}>
                            <View style={{ width: "15%",marginTop:5 }}>
                                <Image source={imagePath.Cashondel} />
                            </View>
                            <View style={{ width: "75%" }}>
                                <Text style={{ fontSize: 14, fontWeight: "500", color: "#000000", }}>Use Credit amount</Text>
                                <Text style={{ color: "black", fontSize: 14, fontWeight: "500" }}>
                                    ₹{Craditscore}
                                </Text>
                            </View>
                            <View style={{ width: "10%"}}>
                                <Forwordcou width={15} height={30} fill={"green"} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { submitfun('COD') }} style={{ width: wp('96%'),margin:wp('2%') ,  height: 'auto', padding: 5,paddingBottom:15,  borderColor: "#9D9D9D20", borderRadius: 8, borderWidth: 1, position: "relative", marginTop: 0, ...styles.box }}>
                        <View style={{ ...StylesGloble.oneline }}>
                            <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 10,  color: "#000000" }}>Pay on delivery</Text>
                        </View>
                        <View style={{ ...StylesGloble.oneline, marginTop: 20, marginLeft: 15 }}>
                            <View style={{ width: "15%",marginTop:5 }}>
                                <Image source={imagePath.Cashondel} />
                            </View>
                            <View style={{ width: "75%",marginTop:2 }}>
                                <Text style={{ fontSize: 14, fontWeight: "500", color: "#000000", }}>Cash on delivery</Text>
                            </View>
                            <View style={{ width: "10%" }}>
                                <Forwordcou width={15} height={30} fill={"green"} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>

        </>
    );
};
const styles = StyleSheet.create({
    green: {
        borderColor: '#9DC45A',
    },
    white: {
        borderColor: "#c4c4c450",
    },
    box: {
        shadowColor: '#c1c0be4f',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 3,
    },
    addressbox: {
        elevation: 3,
        borderColor: "#c4c4c450",
        borderWidth: 1,
        height: 'auto',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#ffffff',
        borderRadius: 6,
        marginTop: 5,
        position: "relative"
    },
    pagepadding: {
        paddingBottom: 30
    },
    nopaddingpage: {
        paddingBottom: 0
    },
    deliveroptionsel: {
        width: 210,
        height: 110,
        padding: 5,
        borderColor: '#9DC45A',
        borderRadius: 8,
        borderWidth: 2,
        marginRight: 10
    },
    deliveroptionunsel: {
        width: 210,
        height: 110,
        padding: 5,
        borderColor: "#C4C4C480",
        borderRadius: 8,
        borderWidth: 1,
        marginRight: 10
    }


});


export default Payment;