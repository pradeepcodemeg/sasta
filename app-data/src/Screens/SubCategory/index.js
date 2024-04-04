import React, { useEffect, useState, useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import { View, Text, FlatList, Image, TouchableOpacity, } from 'react-native';
import imagePath from './../../constants/ImagePath';
import HeaderComp from '../../Components/HeaderComp';
import ProductItem from '../../Components/ProductItem';
import { setproductData } from './../../Redux/index';
import { useSelector, useDispatch } from 'react-redux';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import ApiDataService from "./../../services/Apiservice.service";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StylesGloble } from './../../helper/Globlecss';
import FastImage from 'react-native-fast-image';

const SubCategory = ({ navigation, route }) => {

    const dispatch = useDispatch();
    const Subcategorystate = useSelector((state) => state.SubcategoryReducer.data);
    const Subcategorieslist = Subcategorystate ? Subcategorystate : null;
    
    const [skletonshow, setskletonshow] = useState(1);
    const [usertoken, setusertoken] = useState('');
    const [userId, setuserId] = useState('');
    const [productlistre, setproductlistre] = useState([]);


    const pagename = route.params.data.name;
    const [checkid, setcheckid] = useState('');
    useEffect(() => {
        if (Subcategorieslist && Subcategorieslist.length > 0) {
            setcheckid(Subcategorieslist[0]?.id);
            AsyncStorage.getItem('UserBase', (err, credentials) => {
                let UserBase =  JSON.parse(credentials);
                setusertoken(UserBase.userToken);
                setuserId(UserBase.userID);
                callallproductlist(Subcategorieslist[0]?.id, UserBase.userToken, UserBase.userID)
            })
        }
    }, [Subcategorieslist])

    useEffect(() => {
        setTimeout(() => {
            setskletonshow(2)
        }, 3000)
    }, [])

    const changvaluefun = (id) => {
        setcheckid(id);
        callallproductlist(id, usertoken,userId)
    }

    const callallproductlist = (by_category_id,token,userId)=>{
        let url = 'products?order=DESC&order_by=id&row_count=50&page=1&user_id='+userId+'&token='+token+"&by_category_id="+by_category_id;
        ApiDataService.Getapi(url).then(response =>{
            let alldata = response.data;
            let newdata = alldata.filter((item)=>item.active=='1')
            setproductlistre(newdata);
            
       });
    }
    const renderNodata = () => {
        return (
            <View style={{width:"100%",height:500,alignSelf: "center", justifyContent: "center",backgroundColor:"green"}}>
                <FastImage  style={{ width: 270, height: 270 }}   source={imagePath.product_deflt_img}   resizeMode={FastImage.resizeMode.contain} />
                <Text style={{ ...StylesGloble.listheading }}>No Products</Text>
            </View>
        );
    };
    return (
        <>
            <HeaderComp text={pagename} navigation={navigation} type={'1'} />
            {
                skletonshow == 1 &&
                <View style={{ width: "100%", height: '100%', position: "relative" }}>
                    <SkeletonPlaceholder borderRadius={4}  >
                        <View style={{ flexDirection: "row", width: "100%" }}>
                            <View style={{ backgroundColor: "#ffffff", width: "20%", height: "100%", marginBottom: 30, paddingBottom: 50 }}>
                                <SkeletonPlaceholder.Item marginLeft={5} marginTop={20} width={80} height={80} borderRadius={50} />
                                <SkeletonPlaceholder.Item marginLeft={5} marginTop={20} width={80} height={80} borderRadius={50} />
                                <SkeletonPlaceholder.Item marginLeft={5} marginTop={20} width={80} height={80} borderRadius={50} />
                                <SkeletonPlaceholder.Item marginLeft={5} marginTop={20} width={80} height={80} borderRadius={50} />
                                <SkeletonPlaceholder.Item marginLeft={5} marginTop={20} width={80} height={80} borderRadius={50} />
                                <SkeletonPlaceholder.Item marginLeft={5} marginTop={20} width={80} height={80} borderRadius={50} />
                            </View>
                            <View style={{ backgroundColor: "#F5F5F5", paddingHorizontal: hp('1%'), width: "80%", marginBottom: 30, paddingBottom: 50 }}>
                                <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 0, width: '90%', height: 180 }}>
                                    <SkeletonPlaceholder.Item marginLeft={'5%'} width={130} height={180} borderRadius={10} />
                                    <SkeletonPlaceholder.Item marginLeft={'5%'} width={130} height={180} borderRadius={10} />
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 0, width: '90%', height: 180 }}>
                                    <SkeletonPlaceholder.Item marginLeft={'5%'} width={130} height={180} borderRadius={10} />
                                    <SkeletonPlaceholder.Item marginLeft={'5%'} width={130} height={180} borderRadius={10} />
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 0, width: '90%', height: 180 }}>
                                    <SkeletonPlaceholder.Item marginLeft={'5%'} width={130} height={180} borderRadius={10} />
                                    <SkeletonPlaceholder.Item marginLeft={'5%'} width={130} height={180} borderRadius={10} />
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 0, width: '90%', height: 180 }}>
                                    <SkeletonPlaceholder.Item marginLeft={'5%'} width={130} height={180} borderRadius={10} />
                                    <SkeletonPlaceholder.Item marginLeft={'5%'} width={130} height={180} borderRadius={10} />
                                </View>
                            </View>
                        </View>
                    </SkeletonPlaceholder>
                </View>
            }

            <View style={{ flexDirection: "row", width: "100%" }}>
                <View style={{ backgroundColor: "#ffffff", width: wp('20%'), height: hp("100%"), marginBottom: 20, paddingBottom: 120 }}>
                    {
                        <FlatList
                            data={Subcategorieslist}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <SubcatItem item={item} checkid={checkid} changvaluefun={changvaluefun} />}
                            keyExtractor={(item, index) => index}
                        />
                    }
                </View>

                <View style={{ backgroundColor: "#f5f5f5", paddingHorizontal: hp('1%'), width: wp('80%'), marginBottom: 30, paddingBottom: 75, paddingTop: 5 }}>
                    <FlatList
                        columnWrapperStyle={{ justifyContent: 'flex-start' }}
                        numColumns={2}
                        data={productlistre}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <ProductItem prowdith={'48%'} item={item} navigation={navigation} />}
                        keyExtractor={(item, index) => index}
                        renderEmptyListComponent= {()=>renderNodata()}
                    />
                </View>
            </View>



        </>
    );
};
const SubcatItem = ({ item, checkid, changvaluefun }) => (
    <>
    {
        <View>
            {
                (item.id == checkid) ? (
                    <TouchableOpacity style={{
                        marginTop: 20,
                        marginBottom: 10,
                        height: 80,
                        width: "100%",

                    }} >
                        <View style={{ backgroundColor: "#9DC45A", width: '90%', borderTopRightRadius: 30, borderBottomRightRadius: 30, padding: 3 }}>
                            <View style={{ backgroundColor: '#e2e9d3', padding: 3, borderRadius: 40, marginLeft: 10 }}>
                                <Image style={{ width: 50, height: 50, alignSelf: "center", borderRadius: 50, justifyContent: "center", }} source={{ uri: item.image }} />
                            </View>
                        </View>


                        <View style={{ alignSelf: "center",  paddingLeft: 3, paddingRight: 3 }}>
                            <Text style={{
                                fontSize: 12, lineHeight: 15,
                                fontWeight: "600",
                                color: '#9DC45A'
                            }} numberOfLines={2} >{item.name}</Text>
                        </View>

                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => { changvaluefun(item.id) }} style={{
                        marginTop: 20,
                        marginBottom: 10,
                        height: 80,
                        width: "100%",
                    }} >
                        <View style={{ backgroundColor: "#FFFFFF", width: '90%', borderTopRightRadius: 30, borderBottomRightRadius: 30, padding: 3 }}>
                            <View style={{ backgroundColor: '#e2e9d3', padding: 3, borderRadius: 50, marginLeft: 10 }}>
                                <Image style={{ width: 50, height: 50, alignSelf: "center", borderRadius: 50, justifyContent: "center", }} source={{ uri: item.image }} />
                            </View>
                        </View>


                        <View style={{ alignSelf: "center",  paddingLeft: 3, paddingRight: 3 }}>
                            <Text style={{
                                color: "#000000", fontSize: 12, lineHeight: 15,
                                fontWeight: "600",
                            }} numberOfLines={2}>{item.name}</Text>
                        </View>

                    </TouchableOpacity>
                )
            }
        </View>
    }
    </>
);


export default SubCategory;