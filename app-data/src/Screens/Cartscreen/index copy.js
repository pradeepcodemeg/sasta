import React, { useEffect, useState, useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text, ScrollView, StyleSheet, Modal, FlatList, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import ButtonField from './../../helper/ButtonField';
import { StylesGloble } from './../../helper/Globlecss';
import imagePath from './../../constants/ImagePath';
import HeaderComp from '../../Components/HeaderComp';
import ProductItem from '../../Components/ProductItem';
import TabItem from '../../helper/Tab';
import CartrightIcon from '../../assets/img/cartrightIcon.svg';
import Couponicon from '../../assets/img/couponicon.svg';
import Forwordcou from '../../assets/img/forwordcou.svg';
import Cartminus from '../../assets/img/cartminus.svg';
import Cartplus from '../../assets/img/cartplus.svg';
import EmptyBag from '../../assets/img/emptyBag.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setcartData, setproductData, setorderData } from './../../Redux/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingPage from './../../helper/LoadingPage';
import ApiDataService from "./../../services/Apiservice.service";
import Toast from 'react-native-simple-toast';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';



const couponlistco = [
    {
        "id": "2",
        "coupon_name": "25% OFF",
        "coupon_code": "RAJ25",
        "type": "",
        "discount": "25",
        "discount_upto": "0",
        "details": "This is Details of this coupon code"
    },
    {
        "id": "1",
        "coupon_name": "30% OFF2",
        "coupon_code": "RAJ30",
        "type": "",
        "discount": "30",
        "discount_upto": "0",
        "details": "This is details of this coupon"
    },
    {
        "id": "2",
        "coupon_name": "25% OFF",
        "coupon_code": "RAJ25",
        "type": "",
        "discount": "25",
        "discount_upto": "0",
        "details": "This is Details of this coupon code"
    },
    {
        "id": "1",
        "coupon_name": "30% OFF2",
        "coupon_code": "RAJ30",
        "type": "",
        "discount": "30",
        "discount_upto": "0",
        "details": "This is details of this coupon"
    }
]


const checkcartdatav = (Data) => {
    if (Data) {
        if (Data == null) {
            return false;
        }
        else {
            if (Data == '') {
                return false;
            }
            else {
                if (Data.length > 0) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    }
    else {
        return false;
    }
}
const Cartscreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const CartData = useSelector((state) => state.CartReducer.data);

    const ProductdtlDataRe = useSelector((state) => state.ProductdtlReducer.data);

    const homestate = useSelector((state) => state.HomeReducer.data);
    const bestDealslist = homestate ? homestate.best_deals : null;

    const selectaddresstate = useSelector((state) => state.SelectAddressReducer.data);
    const locationname = selectaddresstate ? selectaddresstate.title : '';
    const currentadd = selectaddresstate ? selectaddresstate.address : '';

    const usaerstate = useSelector((state) => state.UserReducer.userData);
    const userID = usaerstate ? usaerstate.userID : null;
    const userToken = usaerstate ? usaerstate.userToken : null;


    const [Loading, setLoading] = useState(false);
    const [cartalldata, setcartalldata] = useState('');
    const [suggestdata, setsuggestdata] = useState('');

    const [cartsavedata, setcartsavedata] = useState('');
    const [couponPopup, setcouponPopup] = useState(false);
    const [couponlist, setcouponlist] = useState([]);
    const [deliverins, setdeliverins] = useState([]);
    const [choosecoupon, setchoosecoupon] = useState('');
    const [paymentPopup, setpaymentPopup] = useState(false);


    const [coustmdprt, setcoustmdprt] = useState(0);
    const [coustmpop, setcoustmpop] = useState(0);
    const [checkdeltprt, setcheckdeltprt] = useState(0);

    const [couponamt, setcouponamt] = useState(0);
    const [couponprice, setcouponprice] = useState(0);

    const [deliveryprt, setdeliveryprt] = useState(0);
    const [deliveryaddress, setdeliveryaddress] = useState(0);

    const [handlecrgamt, sethandlecrgamt] = useState(0);
    const [deliveryfees, setdeliveryfees] = useState(0);
    const [donetionfees, setdonetionfees] = useState(0);
    const [smallChargesfees, setsmallChargesfees] = useState(0);
    const [carttotalPrice, setcarttotalPrice] = useState(0);
    const [totalPrice, settotalPrice] = useState(0);

    const [delivertype, setdelivertype] = useState(-1);
    const [taxvalue, settaxvalue] = useState(0);
    const [nodata, setnodata] = useState(0);
    const [skletonshow, setskletonshow] = useState(1);


    useEffect(() => {
        if (selectaddresstate == null || selectaddresstate == '' || selectaddresstate == undefined) {
            setdeliveryaddress(1)
        } else {
            setdeliveryaddress(0)
        }

    }, [selectaddresstate])


    useEffect(() => {
        if (CartData) {
            if (CartData != null) {
                if (CartData.length > 0) {
                    let cartData = CartData;
                    let newcartdata = [];
                    let newcartdataIds = [];
                    for (let i = 0; i < cartData.length; i++) {
                        newcartdata.push(cartData[i]);
                        newcartdataIds.push(cartData[i].ProductId)
                    }
                    setcartsavedata(newcartdata);
                    callapigetalldata(newcartdataIds, newcartdata);
                }
                else {
                    setnodata(1)
                }
            }
            else {
                setnodata(1)
            }
        }
        else {
            setnodata(1)
        }

    }, [CartData])

    useEffect(() => {
        setTimeout(() => {
            setskletonshow(2)
        }, 2000)
    }, [])

    useEffect(() => {
        calldeliverlist();
    }, [])

    const calldeliverlist = () => {
        let url = 'instructions?order=DESC&order_by=id&row_count=10&page=1&token=' + userToken;
        ApiDataService.Getapi(url).then(response => {
            if (checkcartdatav(response.data) == true) {
                let cartdatafu = response.data;
                setdeliverins(cartdatafu)
            }
        });
    }

    useEffect(() => {
        if (checkcartdatav(ProductdtlDataRe) == true) {
            callsuggestfun(ProductdtlDataRe.id);
        }
        else {
            if (checkcartdatav(bestDealslist) == true) {
                callsuggestfun(bestDealslist[0].id);
            }
        }
    }, [ProductdtlDataRe])

    const callsuggestfun = (id) => {
        let url = 'products?order=DESC&order_by=id&row_count=7&page=1&token=' + userToken + '&include_similar_products=0&include_recommended_products=0';
        ApiDataService.Getapi(url).then(response => {
            if (checkcartdatav(response.data) == true) {
                let cartdatafu = response.data;
                setsuggestdata(cartdatafu)
            }
        });

    }

    const getcartprice = (feturndata, size) => {
        for (let j = 0; j < feturndata.length; j++) {
            if (size == feturndata[j].id) {
               
                return feturndata[j];
            }
        }
    }

    const checkcartvalue = (alldata, item) => {
        let value = '';
        for (let i = 0; i < alldata.length; i++) {
            if (alldata[i].id == item.ProductId) {

                let size = item.Size;
                let qty = item.cartqty > 0 ? item.cartqty : 0;
                let featurealldata = getcartprice(alldata[i].feature_values, size);
                let price = featurealldata.price;
                let Weight = featurealldata.feature_value;
                let totalPrice = Number(qty) * Number(price);
                value = {
                    userId: userID,
                    ProductId: item.ProductId,
                    size: size,
                    qty:item.cartqty,
                    price: price,
                    Weight:Weight,
                    feature_name:alldata[i].feature_name,
                    totalPrice: totalPrice,
                    delivery_fees: alldata[i].delivery_fees,
                    feed_donation: alldata[i].feed_donation,
                    tax: alldata[i].tax,
                    handleCharge: 0,
                    name: alldata[i].name,
                    image: alldata[i].image,
                    stock: alldata[i].min_stock_alert
                }
            }
        }
        return value;
    }
    const callapigetalldata = (ids, alldata) => {
        let url = 'products?order=DESC&order_by=id&row_count=100&page=1&token=' + userToken + '&include_similar_products=0&include_recommended_products&by_product_ids=[' + ids + ']';
        ApiDataService.Getapi(url).then(response => {
            if (response.data) {
                let cartdatafu = response.data;
                let makedatalist = [];
                for (let i = 0; i < alldata.length; i++) {
                    let cartdata = checkcartvalue(cartdatafu, alldata[i]);
                    makedatalist.push(cartdata)
                }
                setcartalldata(makedatalist);
                var totalamount = 0;
                var Deliveryfees = 0;
                var feedDonation = 0;
                var Tax = 0;
                var HandleCharge = 0;
                for (let j = 0; j < makedatalist.length; j++) {
                    totalamount = totalamount + Number(makedatalist[j].totalPrice)
                    Deliveryfees = Deliveryfees + Number(makedatalist[j].delivery_fees)
                    feedDonation = feedDonation + Number(makedatalist[j].feed_donation)
                    Tax = Tax + Number(makedatalist[j].tax)
                    HandleCharge = HandleCharge + Number(makedatalist[j].handleCharge)
                }
                sethandlecrgamt(HandleCharge);
                setdeliveryfees(Deliveryfees);
                setdonetionfees(feedDonation);
                setsmallChargesfees(0);
                settaxvalue(Tax);
                setcarttotalPrice(totalamount);
                gettotalamountcal(totalamount, HandleCharge, Deliveryfees, feedDonation, deliveryprt, 0, couponamt,Tax);
            }
        });
    }
    const calltoastmessage = (data) => {
        Toast.showWithGravity(data, Toast.LONG, Toast.BOTTOM);
    };
    const getcartdata = () => {
        if (CartData) {
            if (CartData != null) {
                let cartData = CartData;
                let newcartdataIds = [];
                for (let i = 0; i < cartData.length; i++) {
                    let datafun = {
                        product_id: cartData[i].ProductId,
                        quantity: cartData[i].cartqty
                    }
                    newcartdataIds.push(datafun)
                }
                return newcartdataIds;
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
    }
    const sendcartdata = (data) =>{
        return data.map((item)=>{
            let newdata = {
                product_id:item.ProductId,
                quantity:item.cartqty,
                product_feature_ids:[item.Size]
            }
            return newdata;

        })
    }
    const submitfun = () => {
        if (getcartdata() == '') {
            calltoastmessage("Please add Product in your cart");
        } else if (deliveryaddress == 1) {
            calltoastmessage("Please add delivery address");
        } else {
            let body = {
                action: "add_new_order",
                user_id: userID,
                order_details: JSON.stringify(sendcartdata(cartsavedata)),
                state: 'state',
                city: 'city',
                pincode: '486001',
                latitude: selectaddresstate.lat,
                longitude: selectaddresstate.lng,
                used_coupon: choosecoupon,
                actual_price: carttotalPrice,
                discount: couponamt,
                area: currentadd,
                payment_option: "COD",
                payment_status: "pending",
                delivery_instructions: "delivery_instructions"

            }
            AsyncStorage.setItem('Paymentdata', JSON.stringify(body))
            navigation.navigate('Payment');
        }
    }


    const gotoaddress = () => {
        navigation.navigate('Address', { type: '1' })
    }

    const clickcouponfun = (item) => {
        setcouponamt(item.discount);
        setchoosecoupon(item.coupon_code);
        setcouponPopup(false);
        gettotalamountcal(carttotalPrice, handlecrgamt, deliveryfees, donetionfees, deliveryprt, smallChargesfees, item.discount,taxvalue);
    }


    const gettotalamountcal = (am1, am2, am3, am4, am5, am6, am7,am8) => {
        if (am7 == 0) {
            setcouponprice(0);
            let totalamt = Number(am1) + Number(am2) + Number(am3) + Number(am4) + Number(am5) + Number(am6)+ Number(am8);
            settotalPrice(totalamt);
        }
        else {
            let coupontotl = Number(am1) * Number(am7) / 100;
            let carttoytal = Number(am1) - coupontotl;
            setcouponprice(coupontotl);
            let totalamt = Number(carttoytal) + Number(am2) + Number(am3) + Number(am4) + Number(am5) + Number(am6)+ Number(am8);
            settotalPrice(totalamt);
        }

    }
    const addremovefuncart = (type, item) => {
        let productId = item.ProductId;
        let totalamount = 0;
        let qty = item.qty;
        let Newprolist = [];
        let Showprolist = [];
        if (type == '1') {
            qty = qty - 1;
        }
        else {
            qty = qty + 1;
        }
        for (let j = 0; j < cartalldata.length; j++) {

            if (cartalldata[j].ProductId == productId) {
                if (qty > 0) {
                    let totalPrice = Number(qty) * Number(cartalldata[j].price);
                    let proqrt = qty;
                    var value = {
                        userId: cartalldata[j].userID,
                        ProductId: cartalldata[j].ProductId,
                        size: cartalldata[j].size,
                        qty: proqrt,
                        price: cartalldata[j].price,
                        totalPrice: totalPrice,
                        name: cartalldata[j].name,
                        image: cartalldata[j].image,
                        stock: cartalldata[j].min_stock_alert
                    }
                    cartalldata[j].totalPrice=totalPrice;
                    cartalldata[j].qty=proqrt;
                    Newprolist.push(value);
                    Showprolist.push(...cartalldata);
                }
            }
            else {
                let totalPrice = Number(cartalldata[j].qty) * Number(cartalldata[j].price);
                var value = {
                    userId: cartalldata[j].userID,
                    ProductId: cartalldata[j].ProductId,
                    size: cartalldata[j].size,
                    qty: cartalldata[j].qty,
                    price: cartalldata[j].price,
                    totalPrice: totalPrice,
                    name: cartalldata[j].name,
                    image: cartalldata[j].image,
                    stock: cartalldata[j].min_stock_alert
                }
                cartalldata[j].totalPrice=totalPrice;
                Newprolist.push(value);
                Showprolist.push(...cartalldata);
            }
        }
        setcartalldata(Showprolist);
        for (let j = 0; j < Newprolist.length; j++) {
            totalamount = totalamount + Number(Newprolist[j].totalPrice)
        }
        setcarttotalPrice(totalamount);
        let newcartdata = [];
        for (let j = 0; j < Newprolist.length; j++) {
            if (Newprolist[j].qty > 0) {
                let makecartdata = {
                    userId: Newprolist[j].userId,
                    ProductId: Newprolist[j].ProductId,
                    Size: Newprolist[j].size,
                    cartqty: Newprolist[j].qty
                }
                newcartdata.push(makecartdata);
            }

        }
        AsyncStorage.setItem('Cartdata', JSON.stringify(newcartdata));
        gettotalamountcal(totalamount, handlecrgamt, deliveryfees, donetionfees, coustmdprt, smallChargesfees, couponamt,taxvalue);
       // callsuggestfun(bestDealslist[0].id);
        //dispatch(setcartData());
    }
    const gotoProductlistfun = (type) => {
        dispatch(setproductData('', '', type, '', '', ''));
        navigation.navigate('Product');
    }
    const gotoadddeliverypartner = (type) => {
        if (checkdeltprt == type) {
            setcheckdeltprt(0);
            setdeliveryprt(0);
            setcoustmpop(0);
            gettotalamountcal(carttotalPrice, handlecrgamt, deliveryfees, donetionfees, 0, smallChargesfees, couponamt,taxvalue);
        }
        else {
            setcheckdeltprt(type);
            if (type == 4) { setcoustmpop(1); } else { setcoustmpop(0); }
            if (type == 1) {
                setdeliveryprt(10);
                gettotalamountcal(carttotalPrice, handlecrgamt, deliveryfees, donetionfees, 10, smallChargesfees, couponamt,taxvalue);
            }
            else if (type == 2) {
                setdeliveryprt(20);
                gettotalamountcal(carttotalPrice, handlecrgamt, deliveryfees, donetionfees, 20, smallChargesfees, couponamt,taxvalue);
            }
            else if (type == 3) {
                setdeliveryprt(30);
                gettotalamountcal(carttotalPrice, handlecrgamt, deliveryfees, donetionfees, 30, smallChargesfees, couponamt,taxvalue);
            } else {
                setdeliveryprt(0);
            }
        }

    }
    const choosedeliveryoption = (item) => {
        if(item.id==delivertype){
            setdelivertype('')

        }else{
            setdelivertype(item.id)
        }
    }
    const removedonationfeesfun = ()=>{
        setdonetionfees(0);
        calltoastmessage("Feeding India donation has been removed from your order");
        gettotalamountcal(carttotalPrice, handlecrgamt, deliveryfees, 0, deliveryprt, smallChargesfees, couponamt,taxvalue);
    }

    return (
        <>
            <HeaderComp text={'My Cart'} navigation={navigation} type={'3'} />
            {
                skletonshow == 1 &&
                <View style={{ width: "100%", height: '100%', position: "relative" }}>
                    <SkeletonPlaceholder borderRadius={4}  >
                        <View style={{ ...StylesGloble.homeheaderouter, marginTop: 0, marginLeft: '5%', width: '90%', height: 100 }}>
                            <View style={{ marginLeft: 0, height: 70 }}>
                                <SkeletonPlaceholder.Item width={60} height={60} marginTop={25} borderRadius={50} />
                            </View>
                            <View style={{ ...StylesGloble.homeheadername, marginLeft: 5, marginTop: 8 }}>
                                <SkeletonPlaceholder.Item width={120} height={20} />
                                <SkeletonPlaceholder.Item width={80} height={20} marginTop={15} />
                            </View>
                            <TouchableOpacity style={{ position: "absolute", top: 10, right: -15, flexDirection: "row", backgroundColor: "#eaf3e0a8", padding: 10, paddingHorizontal: 10, borderRadius: 20 }}>
                                <SkeletonPlaceholder.Item width={100} height={50} borderRadius={30} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ ...StylesGloble.homeheaderouter, marginTop: 0, marginLeft: '5%', width: '90%', height: 100 }}>
                            <View style={{ marginLeft: 0, height: 70 }}>
                                <SkeletonPlaceholder.Item width={60} height={60} marginTop={25} borderRadius={50} />
                            </View>
                            <View style={{ ...StylesGloble.homeheadername, marginLeft: 5, marginTop: 8 }}>
                                <SkeletonPlaceholder.Item width={120} height={20} />
                                <SkeletonPlaceholder.Item width={80} height={20} marginTop={15} />
                            </View>
                            <TouchableOpacity style={{ position: "absolute", top: 10, right: -15, flexDirection: "row", backgroundColor: "#eaf3e0a8", padding: 10, paddingHorizontal: 10, borderRadius: 20 }}>
                                <SkeletonPlaceholder.Item width={100} height={50} borderRadius={30} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ ...StylesGloble.homeheaderouter, marginTop: 0, marginLeft: '5%', width: '90%', height: 100 }}>
                            <View style={{ marginLeft: 0, height: 70 }}>
                                <SkeletonPlaceholder.Item width={60} height={60} marginTop={25} borderRadius={50} />
                            </View>
                            <View style={{ ...StylesGloble.homeheadername, marginLeft: 5, marginTop: 8 }}>
                                <SkeletonPlaceholder.Item width={120} height={20} />
                                <SkeletonPlaceholder.Item width={80} height={20} marginTop={15} />
                            </View>
                            <TouchableOpacity style={{ position: "absolute", top: 10, right: -15, flexDirection: "row", backgroundColor: "#eaf3e0a8", padding: 10, paddingHorizontal: 10, borderRadius: 20 }}>
                                <SkeletonPlaceholder.Item width={100} height={50} borderRadius={30} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ ...StylesGloble.homeheaderouter, marginTop: 0, marginLeft: '5%', width: '90%', height: 100 }}>
                            <View style={{ marginLeft: 0, height: 70 }}>
                                <SkeletonPlaceholder.Item width={60} height={60} marginTop={25} borderRadius={50} />
                            </View>
                            <View style={{ ...StylesGloble.homeheadername, marginLeft: 5, marginTop: 8 }}>
                                <SkeletonPlaceholder.Item width={120} height={20} />
                                <SkeletonPlaceholder.Item width={80} height={20} marginTop={15} />
                            </View>
                            <TouchableOpacity style={{ position: "absolute", top: 10, right: -15, flexDirection: "row", backgroundColor: "#eaf3e0a8", padding: 10, paddingHorizontal: 10, borderRadius: 20 }}>
                                <SkeletonPlaceholder.Item width={100} height={50} borderRadius={30} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ ...StylesGloble.homeheaderouter, marginTop: 0, marginLeft: '5%', width: '90%', height: 100 }}>
                            <View style={{ marginLeft: 0, height: 70 }}>
                                <SkeletonPlaceholder.Item width={60} height={60} marginTop={25} borderRadius={50} />
                            </View>
                            <View style={{ ...StylesGloble.homeheadername, marginLeft: 5, marginTop: 8 }}>
                                <SkeletonPlaceholder.Item width={120} height={20} />
                                <SkeletonPlaceholder.Item width={80} height={20} marginTop={15} />
                            </View>
                            <TouchableOpacity style={{ position: "absolute", top: 10, right: -15, flexDirection: "row", backgroundColor: "#eaf3e0a8", padding: 10, paddingHorizontal: 10, borderRadius: 20 }}>
                                <SkeletonPlaceholder.Item width={100} height={50} borderRadius={30} />
                            </TouchableOpacity>
                        </View>
                    </SkeletonPlaceholder>
                </View>
            }
            <View style={{ ...StylesGloble.container, position: "relative", paddingHorizontal: 15 }}>
                {
                    Loading &&
                    <View style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "115%", zIndex: 999999 }}>
                        <LoadingPage />
                    </View>
                }
                <ScrollView nestedScrollEnabled={true} contentContainerStyle={[checkcartdatav(cartalldata) == true ? styles.pagepadding : styles.nopaddingpage]} showsVerticalScrollIndicator={false}>
                    {
                        (checkcartdatav(cartalldata) == true) ? (
                            cartalldata.map((item, index) => {
                                return <View key={index} style={{ ...StylesGloble.oneline, position: "relative", paddingTop: 20, paddingBottom: 20, borderBottomColor: "#9D9D9D20", borderBottomWidth: 1 }}>
                                    {
                                        (item.image) && (
                                            <Image style={{ width: 75, height: 75 }} source={{ uri: item.image }} />
                                        )
                                    }
                                    <View style={{ marginTop: 10, width: ('40%') }} >
                                        <Text numberOfLines={2} style={{ fontSize: 13, marginLeft: 15, fontWeight: "600", color: "#000000", height: 'auto' }}>{item.name}</Text>
                                        <Text numberOfLines={1} style={{ fontSize: 13, marginLeft: 15, fontWeight: "400", color: "#000000", height: 'auto'  }}>{item.feature_name} : {item.Weight}</Text>
                                        <View style={{ ...StylesGloble.oneline, marginTop: 0 }}>
                                            <Text style={{ fontSize: 16, fontWeight: "600", marginLeft: 15, color: "#9D9D9D" }}>₹ {item.price}  </Text>
                                            <Text style={{ fontSize: 16, fontWeight: "600", marginLeft: 7, color: "#9DC45A" }}> ₹ {item.totalPrice}</Text>
                                        </View>
                                    </View>
                                    <View style={{ ...StylesGloble.oneline, position: "absolute", top: 40, right: -2 }}>
                                        <TouchableOpacity onPress={() => { addremovefuncart('1', item) }} style={{ marginLeft: 10 }}>
                                            <Cartminus />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 18, color: "#000000", marginLeft: 10 }}> {item.qty}</Text>
                                        <TouchableOpacity onPress={() => { addremovefuncart('2', item) }} style={{ marginLeft: 10, right: 2 }}>
                                            <Cartplus />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            })
                        ) : (
                            <>
                                <View style={{ height: hp('50%'), width: "100%", alignItems: "center", justifyContent: "center" }}>
                                    <EmptyBag height="220" width="220" />
                                    <Text style={{ ...StylesGloble.listheading, fontSize: 22 }}>No product is added?</Text>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Home'); }} style={{ marginTop: 15 }}>
                                        <Text style={{ ...StylesGloble.listviewallfont, fontSize: 18 }}>Continue Shopping</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )
                    }
                    {
                        (checkcartdatav(cartalldata) == true) ? (

                            <>
                                <View style={{ ...StylesGloble.oneline, marginTop: 20 }}>
                                    <View style={{ width: wp('80%') }}>
                                        <Text style={{ ...StylesGloble.listheading }}>Before You Checkout</Text>
                                    </View>
                                </View>
                                <View>
                                    {
                                        suggestdata &&
                                        <FlatList
                                            horizontal={true}
                                            data={suggestdata}
                                            showsHorizontalScrollIndicator={false}
                                            renderItem={({ item }) => <ProductItem item={item} navigation={navigation} prowdith={'40%'}/>}
                                            keyExtractor={(item, index) => index}
                                        />
                                    }
                                </View>
                                <TouchableOpacity onPress={() => { setcouponPopup(true); }} style={{ ...StylesGloble.oneline, marginTop: 25, backgroundColor: "#9DC45A10", borderRadius: 8, height: 50, alignItems: "center", justifyContent: "center" }}>
                                    <View style={{ width: wp('25%'), left: 10, flex: 0.7 }}>
                                        <Couponicon />
                                    </View>
                                    <View style={{ width: wp('55%'), flex: 3, justifyContent: "flex-start" }}>
                                        <Text style={{ fontSize: 13, fontWeight: "500", color: "#000000" }}>Use Coupon Code</Text>
                                    </View>
                                    <View style={{ width: wp('5%'), right: -15, flex: 0.5 }}>
                                        <Forwordcou />
                                    </View>
                                </TouchableOpacity>
                                <View style={{ marginTop: 25, borderBottomColor: "#9D9D9D20", borderBottomWidth: 1, paddingBottom: 20 }}>
                                    <Text style={{ ...StylesGloble.listheading }}>Delivery Partner Tip</Text>
                                    <View style={{ marginTop: 5 }}>
                                        <Text style={{ fontSize: 12, color: "#A6A6A6", width: wp('80%') }}>The entire amount will be sent to your delivery partner.</Text>
                                    </View>
                                    <View style={{ ...StylesGloble.oneline, marginTop: 10, marginLeft: 0 }}>
                                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                            {
                                                (coustmpop == 1) ? null : (
                                                    <>
                                                        <TouchableOpacity onPress={() => { gotoadddeliverypartner(1); }} style={[StylesGloble.outerborderwei, StylesGloble.oneline, checkdeltprt == 1 ? styles.green : styles.white]} >
                                                            <Image source={imagePath.smail10} style={{ height: 20, width: 20 }} />
                                                            <Text style={{ fontSize: 12, color: "#000000", marginLeft: 5 }}>₹10</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity onPress={() => { gotoadddeliverypartner(2); }} style={[StylesGloble.outerborderwei, StylesGloble.oneline, checkdeltprt == 2 ? styles.green : styles.white]}>
                                                            <Image source={imagePath.smail20} style={{ height: 20, width: 20 }} />
                                                            <Text style={{ fontSize: 12, color: "#000000", marginLeft: 5 }}>₹20</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity onPress={() => { gotoadddeliverypartner(3); }} style={[StylesGloble.outerborderwei, StylesGloble.oneline, checkdeltprt == 3 ? styles.green : styles.white]}>
                                                            <Image source={imagePath.smail30} style={{ height: 20, width: 20 }} />
                                                            <Text style={{ fontSize: 12, color: "#000000", marginLeft: 5 }}>₹30</Text>
                                                        </TouchableOpacity>
                                                    </>

                                                )
                                            }

                                            <TouchableOpacity onPress={() => { gotoadddeliverypartner(4); }} style={[StylesGloble.outerborderwei, StylesGloble.oneline, checkdeltprt == 4 ? styles.green : styles.white]}>
                                                <Text style={{ fontSize: 12, color: "#000000" }}>Custom</Text>
                                            </TouchableOpacity>
                                        </ScrollView>

                                    </View>
                                    {
                                        coustmpop == 1 &&
                                        <View style={{ ...StylesGloble.oneline, marginTop: 10, marginLeft: 0, borderColor: "#d7d7d7", width: 170, padding: 5 }}>
                                            <TextInput keyboardType='numeric' style={{ borderBottomColor: "#9DC45A", borderBottomWidth: 1, width: 70 }} onChangeText={(text) => setcoustmdprt(text.toString())} value={coustmdprt.toString()} />
                                            <TouchableOpacity onPress={() => { setdeliveryprt(coustmdprt); gettotalamountcal(carttotalPrice, handlecrgamt, deliveryfees, donetionfees, coustmdprt, smallChargesfees, couponamt,taxvalue); }} style={{ width: 85, height: 35, borderRadius: 25, alignItems: "center", justifyContent: "center", borderColor: "#9DC45A", borderWidth: 2, marginTop: 15 }}>
                                                <Text style={{ fontSize: 15, color: "#9DC45A", paddingBottom: 0 }}>Submit</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{alignSelf: 'center', marginLeft: '98%'}} onPress={()=>setcoustmpop(0)}>
                                                <Image source={imagePath.cross} style={{ width: 15, height: 15, tintColor: "red"}} />
                                            </TouchableOpacity>

                                        </View>
                                    }
                                </View>
                                <View style={{ marginTop: 20 }}>
                                    <Text style={{ ...StylesGloble.listheading }}>Bill Details</Text>
                                    <View style={{ ...StylesGloble.oneline, marginTop: 15 }}>
                                        <View>
                                            <Text style={{ fontSize: 14, fontWeight: "500", marginTop: 0, color: "#000000" }}>Item total (incl.taxes)</Text>
                                        </View>
                                        <View style={{ ...StylesGloble.oneline, marginLeft: "auto" }}>
                                            <Text style={{ fontSize: 14, fontWeight: "500", color: "#9D9D9D", textDecorationLine: "line-through" }}>₹0</Text>
                                            <Text style={{ fontSize: 14, fontWeight: "500", marginLeft: 10, color: "#000000", marginRight: 10 }}>₹{carttotalPrice}</Text>
                                        </View>
                                    </View>
                                    <View style={{ ...StylesGloble.oneline, marginTop: 12 }}>
                                        <View style={{flexDirection:"row"}}>
                                            <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 0, color: "#c7c7c7" }}>Handling Charge</Text>
                                            <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 0, color: "#9DC45A" }}> (0 Saved)</Text>
                                        </View>
                                        <View style={{ ...StylesGloble.oneline, marginLeft: "auto" }}>
                                            <Text style={{ fontSize: 14, fontWeight: "500", color: "#9D9D9D", textDecorationLine: "line-through" }}>₹0</Text>
                                            <Text style={{ fontSize: 14, fontWeight: "500", marginLeft: 10, color: "#000000", marginRight: 10 }}>₹{handlecrgamt}</Text>
                                        </View>
                                    </View>
                                    <View style={{ ...StylesGloble.oneline, marginTop: 12 }}>
                                        <View style={{flexDirection:"row"}}>
                                            <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 0, color: "#c7c7c7" }}>Delivery Fee</Text>
                                            <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 0, color: "#9DC45A" }}> (0 Saved)</Text>
                                        </View>
                                        
                                        <View style={{ ...StylesGloble.oneline, marginLeft: "auto" }}>
                                            <Text style={{ fontSize: 14, fontWeight: "400", color: "#9D9D9D", textDecorationLine: "line-through" }}>₹0</Text>
                                            <Text style={{ fontSize: 14, fontWeight: "500", marginLeft: 10, marginRight: 10 }}>₹{deliveryfees}</Text>
                                        </View>
                                    </View>
                                    <View style={{ ...StylesGloble.oneline, marginTop: 12 }}>
                                        <View style={{ ...StylesGloble.oneline, width: "65%" }}>
                                            <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 0, alignItems: "center", justifyContent: "center", color: "#c7c7c7" }}>Feeding India Donation | </Text>
                                            <TouchableOpacity onPress={()=>{removedonationfeesfun()}}><Text style={{ fontSize: 14, fontWeight: "500", color: "#9DC45A" }}> Remove  </Text></TouchableOpacity>
                                        </View>
                                        <View style={{ ...StylesGloble.oneline, marginLeft: "auto" }}>
                                            <Text style={{ fontSize: 13, fontWeight: "500", color: "#9D9D9D", textDecorationLine: "line-through" }}></Text>
                                            <Text style={{ fontSize: 13, fontWeight: "500", marginLeft: 10, marginRight: 10 }}>₹{donetionfees}</Text>
                                        </View>
                                    </View>
                                    <View style={{ ...StylesGloble.oneline, marginTop: 12 }}>
                                        <View>
                                            <Text style={{ fontSize: 13, fontWeight: "500", marginTop: 0, color: "#c7c7c7" }}>Delivery Partner Tip</Text>
                                        </View>
                                        <View style={{ ...StylesGloble.oneline, marginLeft: "auto" }}>
                                            <Text style={{ fontSize: 13, fontWeight: "500", color: "#9D9D9D", textDecorationLine: "line-through" }}></Text>
                                            <Text style={{ fontSize: 13, fontWeight: "500", marginLeft: 10, marginRight: 10 }}>₹{deliveryprt}</Text>
                                        </View>
                                    </View>
                                    {
                                        (couponamt > 0) && (
                                            <View style={{ ...StylesGloble.oneline, marginTop: 15 }}>
                                                <View>
                                                    <Text style={{ fontSize: 13, fontWeight: "600", marginTop: 0, marginLeft: -3, color: "#9DC45A" }}> Coupon Applied : {choosecoupon}</Text>
                                                </View>
                                                <View style={{ ...StylesGloble.oneline, marginLeft: "auto" }}>
                                                    <Text style={{ fontSize: 15, fontWeight: "600", marginRight: 10, color: "#9DC45A" }}>₹{couponprice}</Text>
                                                </View>
                                            </View>
                                        )
                                    }

                                    <View style={{ ...StylesGloble.oneline, marginTop: 25 }}>
                                        <View>
                                            <Text style={{ ...StylesGloble.listheading }}>Grand Total</Text>
                                        </View>
                                        <View style={{ ...StylesGloble.oneline, marginLeft: "auto" }}>
                                            <Text style={{ fontSize: 15, fontWeight: "600", marginRight: 10 }}>₹{totalPrice}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ marginTop: 10 }}>
                                    <View style={{ ...StylesGloble.oneline, alignItems: "center", justifyContent: "center", backgroundColor: "#9DC45A10", padding: 15 }}>
                                        <CartrightIcon />
                                        <Text style={{ fontSize: 18, fontWeight: "800", marginLeft: 10, color: "#9DC45A" }}>₹{couponprice}</Text>
                                        <Text style={{ fontSize: 18, marginLeft: 10, color: "#000000" }}>Saved on this order</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: 10 }}>
                                    <Text style={{ ...StylesGloble.listheading }}>Delivery Instruction</Text>
                                    <ScrollView horizontal={true} style={{ marginTop: 5 }} showsHorizontalScrollIndicator={false} >
                                        {
                                            deliverins.map((item, index) => {
                                                return <TouchableOpacity onPress={() => { choosedeliveryoption(item) }} key={index} style={{ width: 210, height: 160, position: "relative", marginRight: 10, paddingTop: 25 }}>
                                                    <View style={(delivertype == item.id) ? styles.deliveroptionsel : styles.deliveroptionunsel}>
                                                        <View style={{ position: "absolute", top: -23, left: 25, borderColor: "#C4C4C480", borderRadius: 50, backgroundColor: "#ffffff", borderWidth: 1, padding: 10 }}>
                                                            <Image style={{ width: 20, height: 20 }} imageStyle={{ alignItems: "center" }} source={{ uri: item.icon }} />
                                                        </View>
                                                        <Text numberOfLines={1} style={{ fontSize: 18, marginLeft: 10, marginTop: 10, color: "#000000" }}>{item.title}</Text>
                                                        <Text numberOfLines={3} style={{ fontSize: 14, marginTop: 5, marginLeft: 10 }}>{item.text}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            })
                                        }
                                    </ScrollView>
                                </View>
                                {
                                    (deliveryaddress == 0) ? (
                                        <View style={{ marginTop: 0 }}>
                                            <Text style={{ ...StylesGloble.listheading }}>Delivery Address</Text>
                                            <View style={{ ...styles.addressbox }}>
                                                <Text numberOfLines={1} style={{ fontSize: 18, color: "#000000", width: 200 }}>{locationname}</Text>
                                                <Text style={{ fontSize: 14, color: "#4e5859", marginTop: 8, width: 250 }}>{currentadd}</Text>
                                                <TouchableOpacity onPress={() => { gotoaddress() }} style={{ position: "absolute", top: 10, right: 10 }} >
                                                    <Text style={{ fontSize: 15, color: "#9DC45A", fontWeight: "600" }}>Change address</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    ) : (
                                        <View style={{ marginTop: 10, alignItems: "center", justifyContent: "center" }}>
                                            <Text style={{ fontSize: 15, color: "#9DC45A", fontWeight: "600" }}>Add Delivery Address</Text>
                                        </View>
                                    )
                                }
                                <View style={{ height: 63, marginTop: 20 }}>
                                    <ButtonField label={'Proceed to Payment'} submitfun={submitfun} />
                                </View>
                            </>
                        ) : (
                            <></>
                        )
                    }
                    <Modal animationType="slide" transparent={true} visible={couponPopup}>

                        <View style={{ position: "absolute", bottom: 0, right: 0, width: '100%', height: '100%', backgroundColor: '#ffffff', borderTopStartRadius: 10, borderTopEndRadius: 10, alignItems: "center" }}>
                            <TouchableOpacity onPress={() => { setcouponPopup(false) }} style={{ position: "absolute", top: 15, right: 15 }}>
                                <Image source={imagePath.closepopup} />
                            </TouchableOpacity>
                            <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#FFFFFF", position: "relative" }}>
                                <Text style={{ fontSize: 18, marginTop: 10, fontWeight: "600", color: "#000000" }}>All Coupons</Text>
                            </View>
                            <ScrollView style={{ marginTop: 15, marginBottom: 15 }}  >
                                {
                                    couponlistco.map((item, index) => {
                                        return <View key={index} style={{ width: wp('100%') - 50, height: 170, padding: 5, borderColor: "#9D9D9D20", borderRadius: 8, borderWidth: 1, position: "relative", marginRight: 10, marginTop: 15, ...styles.box }}>
                                            <View style={{ ...StylesGloble.oneline, marginTop: 10 }}>
                                                <Couponicon style={{ marginTop: 10, marginLeft: 10 }} />
                                                <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 10, marginTop: 10, color: "#000000" }}>{item.coupon_name}</Text>
                                            </View>
                                            <Text style={{ fontSize: 14, marginTop: 8, marginLeft: 10 }}>Save to {item.discount}% with this <Text style={{ fontSize: 18, fontWeight: "700", marginTop: 5, marginLeft: 10, color: "#9DC45A" }}>{item.coupon_code}</Text> Code</Text>
                                            <TouchableOpacity onPress={() => { clickcouponfun(item) }} style={{ padding: 5, borderTopColor: "#d7d7d7", borderTopWidth: 1, marginTop: 30, alignItems: "center", justifyContent: "center" }}>
                                                <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 10, marginLeft: 10, color: "#9DC45A" }}>TAP TO APPLY</Text>
                                            </TouchableOpacity>
                                        </View>
                                    })
                                }
                            </ScrollView>
                        </View>
                    </Modal>

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


export default Cartscreen;