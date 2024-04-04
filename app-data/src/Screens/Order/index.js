import React, { useEffect, useState, useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text, StyleSheet, Modal, FlatList, Image, ActivityIndicator, TouchableOpacity, ImageBackground } from 'react-native';
import ButtonField from './../../helper/ButtonField';
import { StylesGloble } from './../../helper/Globlecss';
import imagePath from './../../constants/ImagePath';
import HeaderComp from '../../Components/HeaderComp';
import Orderrigth from '../../assets/img/orderrigth.svg';
import { useSelector, useDispatch } from 'react-redux';
import ApiDataService from "./../../services/Apiservice.service";

const Order = ({ navigation, route }) => {

    const OrderDatalist = useSelector((state) => state.OrderReducer.data);

    console.log('OrderDatalist___',OrderDatalist)
  

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

    const addnewdata = () => {
        // if (Activeloading == false && alldataupload == 0) {
        //     setActiveloading(true);
        //     let newpageLoad = Number(pageLoad) + 1;
        //     setpageLoad(newpageLoad);
        //     let url = 'orders?order=DESC&order_by=id&row_count=10&page=' + pageLoad + '&token=' + userToken + "&by_user_id=" + userID + "&by_delivery_boy_id=&includes=order_details,product_details";
        //     ApiDataService.Getapi(url).then(response => {
        //         if (response.data.length > 0) {
        //             let newarray = [...orderlist, ...response.data];
        //             setorderlist(newarray);
        //         }
        //         else {
        //             setalldataupload(1);
        //         }
        //         setActiveloading(false);
        //     }).catch(e => {
        //         setActiveloading(false);
        //     });
        // }
    }

    const renderFooter = () => {
        return (
            <>
                {
                    Activeloading ? (
                        <View style={style.footer}>
                            <ActivityIndicator
                                color="green"
                                size="large"
                                style={{ marginLeft: 8, marginTop: 10, fontSize: 25 }} />
                        </View>
                    ) : null
                }
            </>
        );
    };

    const checkotherproduct = (item)=>{
        if(item.length > 1){
            return ` + ${item.length-1} More Items`; 
        }else{
            return '';
        }
    }

    const OrderlistReturn = ({item,navigation}) => {
        return (
            <View style={{ position: "relative", paddingVertical: 20, borderColor: "#9D9D9D20", borderWidth: 1, borderRadius: 15, marginTop: 15, }}>
                <TouchableOpacity  style={{ ...StylesGloble.oneline }}>
                    <Orderrigth width={47} height={47} style={{ marginLeft: 20 }} />
                    {
                        item?.order_details&&<View style={{ width: ('100%'), alignSelf: "center", justifyContent: "center" }} >
                                <Text numberOfLines={2} style={{ fontSize: 16, marginLeft: 15, fontWeight: "600", color: "#000000",width:"71%" }}>{item?.order_details[0]?.product_details?.name+checkotherproduct(item?.order_details)}  </Text>
                                <Text style={{ fontSize: 13, fontWeight: "600", marginLeft: 15,marginTop:15, color: "#9D9D9D" }}>{item?.date_time}</Text>
                                <View style={{ marginTop: 15, alignSelf: "center", justifyContent: "center",marginRight:'35%' }}>
                                    <Image style={{ width: 80, height: 80 }} source={{ uri: 'https://aliveztechnosoft.com/python-automations/GroceryApp/' + item?.order_details[0]?.product_details?.image }} />
                                </View>
                            </View>
                    }
                    
                    <View style={{ position: "absolute", top: 38, right: '5%', alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 12, fontWeight: "400", marginLeft: 18, color: "#9DC45A",textTransform: 'capitalize' }}>{item?.status}</Text>
                        <Text style={{ fontSize: 16, fontWeight: "600", marginLeft: 15, color: "#06161C", marginTop: 5 }}>₹ {item?.total_amount}</Text>
                    </View>
                </TouchableOpacity>
                {
                    (item?.status=='pending')?(
                        <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", borderTopColor: "#9D9D9D20", borderTopWidth: 1, marginTop: 15 }} onPress={() => navigation.navigate('Trackorder', { data: item })}>
                            <Text style={{ fontSize: 15, fontWeight: "600", marginTop: 15, color: "#9DC45A" }}>Track Order</Text>
                        </TouchableOpacity>
                    ):(
                        <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", borderTopColor: "#9D9D9D20", borderTopWidth: 1, marginTop: 15 }} onPress={() => navigation.navigate('OrderDetail', { data: item })}>
                            <Text style={{ fontSize: 15, fontWeight: "600", marginTop: 15, color: "#9DC45A" }}>Order Details</Text>
                        </TouchableOpacity>
                    )
                }
                
            </View>
        );
    };
    return (
        <>
            <HeaderComp text={'Orders'} navigation={navigation} type={'3'} />
            <View style={{ ...StylesGloble.container, position: "relative", paddingLeft: 10, paddingRight: 10 }}>
                {
                    (orderlist) && (
                        <FlatList
                            numColumns={1}
                            data={orderlist}
                            renderItem={({ item }) => <OrderlistReturn item={item} navigation={navigation} />}
                            keyExtractor={(item, index) => index}
                            onEndReached={addnewdata}
                            onEndReachedThreshold={0}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            ListFooterComponent={renderFooter}
                        />
                    )
                }
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

export default Order;