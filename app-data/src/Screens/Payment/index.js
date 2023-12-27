import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComp from '../../Components/HeaderComp';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StylesGloble } from './../../helper/Globlecss';
import imagePath from './../../constants/imagePath';
import Forwordcou from '../../assets/img/forwordcou.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setcartData, setproductData, setorderData } from './../../Redux/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingPage from '../../helper/LoadingPage';
import ApiDataService from '../../services/Apiservice.service'

const Payment = ({ navigation, route }) => {

    const dispatch = useDispatch();
    const [Loading, setLoading] = useState(false);
    const [allOrderdata, setallOrderdata] = useState({});

    const usaerstate = useSelector((state) => state.UserReducer.userData);
    const userID = usaerstate ? usaerstate.userID : null;
    const userToken = usaerstate ? usaerstate.userToken : null;

    useEffect(() => {
        AsyncStorage.getItem('Paymentdata', (err, credentials) => {
            let UserBase = JSON.parse(credentials);
            setallOrderdata(UserBase);
        })

    }, [])
    const submitfunto = () => {

        setLoading(true);
        let formData = new FormData();
        for (let key in allOrderdata) {
            formData.append(key, allOrderdata[key]);
        }
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
            console.log("error", e);
        });
    }
    return (
        <>
            <HeaderComp text={'Payment Method'} navigation={navigation} type={'3'} />
            {
                Loading &&
                <View style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "115%", zIndex: 999999 }}>
                    <LoadingPage />
                </View>
            }
            <View style={{ width: wp('100%'), height: hp('100%'), backgroundColor: '#ffffff', borderTopStartRadius: 10, borderTopEndRadius: 10, alignItems: "center" }}>

                <ScrollView style={{ marginTop: 15, marginBottom: 15 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "black", fontSize: 18, fontWeight: "600" }}>
                            Bill Total :
                        </Text>
                        <Text style={{ color: "black", fontSize: 18, fontWeight: "700", marginLeft: 5 }}>
                            ₹1000
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => { submitfunto() }} style={{ width: wp('100%') - 50, height: 170, padding: 5, borderColor: "#9D9D9D20", borderRadius: 8, borderWidth: 1, position: "relative", marginRight: 10, marginTop: 15, ...styles.box }}>
                        <View style={{ ...StylesGloble.oneline, marginTop: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 10, marginTop: 10, color: "#000000" }}>Online Payment</Text>
                        </View>
                        <View style={{ ...StylesGloble.oneline, marginTop: 20, marginLeft: 10 }}>
                            <View style={{ width: "20%", alignSelf: "center" }}>
                                <Image source={imagePath.upi} />
                            </View>
                            <View style={{ width: "70%", alignSelf: "center" }}>
                                <Text style={{ fontSize: 14, fontWeight: "500", color: "#000000", }}>BHIM UPI</Text>
                            </View>
                            <View style={{ width: "10%", justifyContent: "center", alignContent: "center" }}>
                                <Forwordcou width={15} height={30} fill={"green"} />
                            </View>
                        </View>
                        <View style={{ ...StylesGloble.oneline, marginTop: 20 }}>
                            <View style={{ width: "20%", alignSelf: "center" }}>
                                <Image source={imagePath.cardIcons} />
                            </View>
                            <View style={{ width: "70%", alignSelf: "center" }}>
                                <Text style={{ fontSize: 14, fontWeight: "500", color: "#000000", }}>Add Credit, Debit & ATM cards</Text>
                            </View>
                            <View style={{ width: "10%", justifyContent: "center", alignContent: "center" }}>
                                <Forwordcou width={15} height={30} fill={"green"} />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={{ width: wp('100%') - 50, height: 130, padding: 5, borderColor: "#9D9D9D20", borderRadius: 8, borderWidth: 1, position: "relative", marginRight: 10, marginTop: 15, ...styles.box }}>
                        <View style={{ ...StylesGloble.oneline, marginTop: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 10, marginTop: 10, color: "#000000" }}>Wallets</Text>
                        </View>
                        <View style={{ ...StylesGloble.oneline, marginTop: 20, marginLeft: 15 }}>
                            <View style={{ width: "20%", alignSelf: "center" }}>
                                <Image source={imagePath.Cashondel} />
                            </View>
                            <View style={{ width: "70%", alignSelf: "center" }}>
                                <Text style={{ fontSize: 14, fontWeight: "500", color: "#000000", }}>Use Wallets amount</Text>
                                <Text style={{ color: "black", fontSize: 14, fontWeight: "500" }}>
                                    ₹1000
                                </Text>
                            </View>
                            <View style={{ width: "10%", justifyContent: "center", alignContent: "center" }}>
                                <Forwordcou width={15} height={30} fill={"green"} />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: wp('100%') - 50, height: 130, padding: 5, borderColor: "#9D9D9D20", borderRadius: 8, borderWidth: 1, position: "relative", marginRight: 10, marginTop: 15, ...styles.box }}>
                        <View style={{ ...StylesGloble.oneline, marginTop: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 10, marginTop: 10, color: "#000000" }}>Credit amount</Text>
                        </View>
                        <View style={{ ...StylesGloble.oneline, marginTop: 20, marginLeft: 15 }}>
                            <View style={{ width: "20%", alignSelf: "center" }}>
                                <Image source={imagePath.Cashondel} />
                            </View>
                            <View style={{ width: "70%", alignSelf: "center" }}>
                                <Text style={{ fontSize: 14, fontWeight: "500", color: "#000000", }}>Use Credit amount</Text>
                                <Text style={{ color: "black", fontSize: 14, fontWeight: "500" }}>
                                    ₹1000
                                </Text>
                            </View>
                            <View style={{ width: "10%", justifyContent: "center", alignContent: "center" }}>
                                <Forwordcou width={15} height={30} fill={"green"} />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: wp('100%') - 50, height: 130, padding: 5, borderColor: "#9D9D9D20", borderRadius: 8, borderWidth: 1, position: "relative", marginRight: 10, marginTop: 15, ...styles.box }}>
                        <View style={{ ...StylesGloble.oneline, marginTop: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 10, marginTop: 10, color: "#000000" }}>Pay on delivery</Text>
                        </View>
                        <View style={{ ...StylesGloble.oneline, marginTop: 20, marginLeft: 15 }}>
                            <View style={{ width: "20%", alignSelf: "center" }}>
                                <Image source={imagePath.Cashondel} />
                            </View>
                            <View style={{ width: "70%", alignSelf: "center" }}>
                                <Text style={{ fontSize: 14, fontWeight: "500", color: "#000000", }}>Cash on delivery</Text>
                            </View>
                            <View style={{ width: "10%", justifyContent: "center", alignContent: "center" }}>
                                <Forwordcou width={15} height={30} fill={"green"} />
                            </View>
                        </View>
                    </View>
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