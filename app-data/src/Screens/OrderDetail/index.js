import React, { useEffect, useState, useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text, StyleSheet, Modal, FlatList, Image, ActivityIndicator, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import ButtonField from './../../helper/ButtonField';
import { StylesGloble } from './../../helper/Globlecss';
import imagePath from './../../constants/ImagePath';
import HeaderComp from '../../Components/HeaderComp';
import Orderrigth from '../../assets/img/orderrigth.svg';
import { useSelector, useDispatch } from 'react-redux';
import ApiDataService from "./../../services/Apiservice.service";
import ImagePath from './../../constants/ImagePath';

const OrderDetail = ({ navigation, route }) => {
    const data = route?.params?.data;
    const OrderDatalist = useSelector((state) => state.OrderReducer.data);
    const usaerstate = useSelector((state) => state.UserReducer.userData);
    const userID = usaerstate ? usaerstate.userID : null;
    const userToken = usaerstate ? usaerstate.userToken : null;

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

    const gettex = (orderproduct)=>{
        let Tax = 0;
        let Deliveryfees = 0;
        for(let j = 0; j < orderproduct.length; j++){
            Deliveryfees = Deliveryfees + Number(orderproduct[j]?.product_details?.delivery_fees)
            Tax = Tax + Number(orderproduct[j]?.product_details?.tax)
        }
        let data = {Tax:Tax, Deliveryfees:Deliveryfees}
        return data
    }


    return (
        <>
            <HeaderComp text={'Order Details'} navigation={navigation} type={'3'} />
            <View style={{ ...StylesGloble.container, position: "relative", paddingLeft: 10, paddingRight: 10 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <View style={{ position: "relative", borderColor: "#9D9D9D20", borderWidth: 1, borderRadius: 15, marginTop: 15, }}>
                            <View style={{ backgroundColor: "#9DC45A50", borderTopLeftRadius: 12, borderTopRightRadius: 12, padding: 15 }}>
                                <Text style={{ color: "#06161C", fontSize: 14, fontWeight: "700" }}>
                                    Order Details
                                </Text>
                            </View>
                            <View style={{ paddingLeft: 15, paddingRight: 15 }}>
                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                    <Text style={{ color: "#A6A6A6", fontSize: 12, fontWeight: "400", width: "50%" }}>
                                        Order ID
                                    </Text>
                                    <Text style={{ color: "#000000", fontSize: 12, fontWeight: "400", width: "50%" }}>
                                        #{data?.id}
                                    </Text>

                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                    <Text style={{ color: "#A6A6A6", fontSize: 12, fontWeight: "400", width: "50%" }}>
                                        Order Placed
                                    </Text>
                                    <Text style={{ color: "#000000", fontSize: 12, fontWeight: "400", width: "50%" }}>
                                        {data?.date_time}
                                    </Text>

                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                    <Text style={{ color: "#A6A6A6", fontSize: 12, fontWeight: "400", width: "50%" }}>
                                        Order Status
                                    </Text>
                                    <Text style={{ color: "#000000", fontSize: 12, fontWeight: "400", width: "50%" }}>
                                       {data?.status}
                                    </Text>

                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 15 }}>
                                    <Text style={{ color: "#A6A6A6", fontSize: 12, fontWeight: "400", width: "50%" }}>
                                        Total Amount
                                    </Text>
                                    <Text style={{ color: "#000000", fontSize: 12, fontWeight: "400", width: "50%" }}>
                                        $ {data?.total_amount}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ position: "relative", borderColor: "#9D9D9D20", borderWidth: 1, borderRadius: 15, marginTop: 25, }}>
                            <View style={{ backgroundColor: "#9DC45A50", borderTopLeftRadius: 12, borderTopRightRadius: 12, padding: 15, }}>
                                <Text style={{ color: "#06161C", fontSize: 14, fontWeight: "700" }}>
                                    Items Detail
                                </Text>
                            </View>
                            {
                                data?.order_details&& data?.order_details.map((item,index) => (
                                    <View key={index} style={{ paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderBottomColor: "#9D9D9D20" }}>
                                        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 15 }}>
                                            <View style={{ width: '30%', justifyContent: 'center' }}>
                                                <Image source={{ uri: 'https://aliveztechnosoft.com/python-automations/GroceryApp/' + item?.product_details?.image }}style={{ alignSelf: "center", height: 60,width:60 }} />
                                            </View>
                                            <View>
                                                <Text style={{ color: "#000000", fontSize: 12, fontWeight: "400", width: "100%" }}>
                                                    {item.product_details.name}
                                                </Text>
                                                <Text style={{ color: "#9F9F9F", fontSize: 11, fontWeight: "400", width: "100%", marginTop: 10 }}>
                                                    weight {checkquentity(item.feature_values,item.product_feature_ids).feature_value} :  Quantity: {getprice(item.quantities)}
                                                </Text>
                                                <Text style={{ color: "#06161C", fontSize: 12, fontWeight: "700", width: "100%", marginTop: 10 }}>
                                                    ${checkquentity(item.feature_values,item.product_feature_ids).price * getprice(item.quantities)} 
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                ))
                            }
                            <View>
                                <View style={{ paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderBottomColor: "#9D9D9D20" }}>
                                    <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: "space-between" }}>
                                        <Text style={{ color: "#A6A6A6", fontSize: 12, fontWeight: "400", }}>
                                            Sub Total
                                        </Text>
                                        <Text style={{ color: "#000000", fontSize: 12, fontWeight: "400", }}>
                                            $ {data?.payment_options[0]?.actual_price}
                                        </Text>

                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: "space-between" }}>
                                        <Text style={{ color: "#A6A6A6", fontSize: 12, fontWeight: "400" }}>
                                            Tax
                                        </Text>
                                        <Text style={{ color: "#000000", fontSize: 12, fontWeight: "400" }}>
                                            $ {gettex(data?.order_details)?.Tax}
                                        </Text>

                                    </View>
                                    {
                                       data?.payment_options[0]?.discount > 0 &&
                                       <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: "space-between" }}>
                                            <Text style={{ color: "#A6A6A6", fontSize: 12, fontWeight: "400" }}>
                                                Coupon Discount
                                            </Text>
                                            <Text style={{ color: "#000000", fontSize: 12, fontWeight: "400" }}>
                                                ${data?.payment_options[0]?.discount}
                                            </Text>
                                        </View>
                                    }
                                    <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: "space-between" }}>
                                        <Text style={{ color: "#A6A6A6", fontSize: 12, fontWeight: "400" }}>
                                            Delivery Charges
                                        </Text>
                                        <Text style={{ color: "#000000", fontSize: 12, fontWeight: "400" }}>
                                            $ {gettex(data?.order_details)?.Deliveryfees}
                                        </Text>
                                    </View>
                                    {/* <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 15, justifyContent: "space-between" }}>
                                        <Text style={{ color: "#A6A6A6", fontSize: 12, fontWeight: "400" }}>
                                            Delivery boy tip
                                        </Text>
                                        <Text style={{ color: "#000000", fontSize: 12, fontWeight: "400" }}>
                                            $0
                                        </Text>
                                    </View> */}
                                </View>
                            </View>
                            <View style={{ padding: 15 }}>
                                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                    <Text style={{ color: "#06161C", fontSize: 14, fontWeight: "500", }}>
                                        Grand Total
                                    </Text>
                                    <Text style={{ color: "#9DC45A", fontSize: 14, fontWeight: "700", }}>
                                        ${data?.total_amount}
                                    </Text>
                                </View>
                            </View>

                        </View>
                        <View style={{ position: "relative", borderColor: "#9D9D9D20", borderWidth: 1, borderRadius: 15, marginTop: 20, marginBottom: 10 }}>
                            <View style={{ backgroundColor: "#9DC45A50", borderTopLeftRadius: 12, borderTopRightRadius: 12, padding: 15 }}>
                                <Text style={{ color: "#06161C", fontSize: 14, fontWeight: "700" }}>
                                    Address Details
                                </Text>
                            </View>
                            <View style={{ padding: 15 }}>
                                <View style={{}}>
                                    <Text style={{ color: "#000000", fontSize: 12, fontWeight: "400" }}>
                                        {data?.delivery_address[0]?.area}
                                    </Text>
                                </View>
                            </View>


                        </View>

                    </View>
                </ScrollView>

                {/* {
                    (orderlist)&&(
                        <FlatList
                            numColumns={1}                 
                            data={orderlist}
                            renderItem={({ item }) => <OrderlistReturn item={item} />}
                            keyExtractor={(item, index) => index}
                            onEndReached={addnewdata}
                            onEndReachedThreshold={0}
                            ListFooterComponent={renderFooter}
                        />
                    )
                }  */}
            </View>
        </>
    );
};

const style = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: "space-around"
    },
    footer: {
        height: 50,
    }
});

export default OrderDetail;