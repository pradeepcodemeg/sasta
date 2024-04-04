import React, { useEffect, useState, useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text, ScrollView, Modal, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';
import ButtonField from './../../helper/ButtonField';
import { StylesGloble } from './../../helper/Globlecss';
import imagePath from './../../constants/ImagePath';
import HeaderComp from '../../Components/HeaderComp';
import Stepindicator from './../../helper/Stepindicator';
// import CircularProgress from 'react-native-circular-progress-indicator';
import Helpicon from '../../assets/img/helpicon.svg';
import Address_one from '../../assets/img/address_one.svg';
import Trakpnoneround from '../../assets/img/trakpnoneround.svg';
import { useSelector, useDispatch } from 'react-redux';


const Trackorder = ({ navigation, route }) => {
    const data = route?.params?.data;

    const OrderDatalist = useSelector((state) => state.OrderReducer.data);
    const usaerstate = useSelector((state) => state.UserReducer.userData);

    const userID = usaerstate ? usaerstate.userID : null;
    const userToken = usaerstate ? usaerstate.userToken : null;

    const [pageLoad, setpageLoad] = useState(1);
    const [orderlist, setorderlist] = useState(OrderDatalist);
    const [Activeloading, setActiveloading] = useState(false);
    const [alldataupload, setalldataupload] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setalldataupload(0)
        }, 100)
    }, [])

    const checkquentity =  (alldata,id)=>{
        let checkId = JSON.parse(id);
        let alldataer = alldata.filter((item)=>item.id==checkId[0])
        return alldataer[0];
    }
    const getprice = (newqty) =>{
        let qtyval1 = newqty.replace('[','');
        let qtyval2 = qtyval1.replace(']','');
        return Number(qtyval2);
    }



    return (
        <>
            <View style={{ position: "relative", height: hp('100%'), width: wp('100%'), backgroundColor: "#9DC45A20" }}>
                <HeaderComp text={'Order Details'} navigation={navigation} type={'3'} />
                <View style={{ ...StylesGloble.helptrachbtn, top: 20 }}>
                    <Helpicon width={74} height={29} />
                </View>
                <View style={{flex:1 , marginTop: hp('5%'), height: hp('55%'), alignItems: "center", position: "relative" }}>
                    <Text style={{ position: "absolute", top: 40, fontWeight: '500', fontSize: 15, color: '#000000' }}>Arriving in</Text>
                    {/* <CircularProgress
                        value={30}
                        radius={100}
                        duration={2000}
                        titleFontSize={13}
                        progressValueStyle={{ fontWeight: '600', fontSize: 24, color: '#000000', marginTop: 25, marginBottom: -5 }}
                        activeStrokeColor={'#9DC45A'}
                        inActiveStrokeColor={'#FFFFFF'}
                        inActiveStrokeOpacity={0.5}
                        title={'minutes'}
                        maxValue={60}
                        titleColor={'#000000'}
                        inActiveStrokeWidth={15}
                        activeStrokeWidth={15}
                        progressFormatter={(value) => {
                            'worklet';
                            return value.toFixed(2);
                        }}
                    /> */}
                </View>

                <ScrollView style={{ flex:2,position: "absolute", bottom: 0, right: 0, width: wp('100%'), height: hp('55%'), backgroundColor: '#ffffff', borderTopStartRadius: 30, borderTopEndRadius: 30 }}>
                    <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 15, marginLeft: 25, color: "#000000" }}>Delivery Status</Text>
                    <View style={{ height: 180,marginLeft:15,marginTop:20,position:"relative" }}>
                        <Image source={imagePath.p1} style={{height:125}} />
                        <Text style={{position:"absolute",top:-4,left:20, fontSize: 15,  color: "#9DC45A" }}>Packing</Text>
                        <Text style={{position:"absolute",top:52,left:20, fontSize: 15,  color: "#9D9D9D" }}>On the Way</Text>
                        <Text style={{position:"absolute",top:108,left:20, fontSize: 15,  color: "#9D9D9D" }}>Delivered</Text>
                    </View>
                    <View style={{ marginTop: -50,width: wp("100%")}}>
                        <View style={{  padding: wp('5%') }}>
                            <View style={{ width: wp("90%"), borderRadius: 10, paddingVertical: 15, position: "relative", borderBottomColor: "#9D9D9D20", borderBottomWidth: 1 }}>
                                <View style={{ backgroundColor: "rgba(157, 196, 90, 0.1)" }}>
                                    <Address_one width={47} height={47} style={{ position: "absolute", left: 5 }} />
                                </View>
                                <Text style={{ fontSize: 14, marginTop: 0, marginLeft: 60, color: "black" }}>{data.delivery_address[0]?.area}</Text>
                            </View>
                            {
                                data?.delivery_boy_details?.length > 0  && <View style={{ flexDirection: "row", position: "relative", padding: 10, width: wp("100%") - 35 }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Image source={imagePath.trackprofile} />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={{ fontSize: 12, marginTop: 3, color: "#9D9D9D" }}>Your delivery hero</Text>
                                                <Text style={{ fontSize: 15, marginTop: 0, color: "#000000" }}>Abdulmalik Qasim </Text>
                                            </View>
                                        </View>
                                        <View style={{ marginLeft: "auto" }}>
                                            <Trakpnoneround width={47} height={47} />
                                        </View>
                                    </View>
                            }
                           
                            <View style={{ position: "relative", padding: 10 }}>
                                <View style={{ ...StylesGloble.oneline }}>
                                    <Text style={{ fontSize: 14, fontWeight: "400", color: "#000000" }}>Order ID: </Text>
                                    <Text style={{ fontSize: 14, fontWeight: "600", color: "#9D9D9D" }}> #{data.payment_options[0]?.order_id}</Text>
                                </View>
                                <View style={{ ...StylesGloble.oneline }}>
                                    <Text style={{ fontSize: 14, fontWeight: "400", color: "#000000" }}> Items: {data.order_details?.length}</Text>

                                </View>
                                <View style={{ ...StylesGloble.oneline }}>
                                    <Text style={{ fontSize: 14, fontWeight: "600", color: "#000000" }}> Total amount : ₹  {data.payment_options[0]?.actual_price}</Text>
                                </View>
                                <View style={{ ...StylesGloble.oneline }}>
                                    <Text style={{ fontSize: 14, fontWeight: "600", color: "#000000" }}> Payment Option : {data.payment_options[0]?.payment_option}</Text>
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate('OrderDetail', { data: data })} style={{ ...StylesGloble.helptrachbtn, ...StylesGloble.oneline, right: 0, top: 35 }}>
                                    <Text style={{ fontSize: 16, fontWeight: "400", color: "#9DC45A" }}>Order Details</Text>
                                    <Image style={{ marginTop: 10, marginLeft: 10 }} source={imagePath.frontorde} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    );
};



export default Trackorder;