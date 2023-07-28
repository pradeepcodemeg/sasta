import React, { useEffect, useState, useContext, useRef } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text, ScrollView, Modal, FlatList, Image, TouchableOpacity, ImageBackground, PermissionsAndroid, Dimensions } from 'react-native';
import ButtonField from './../../helper/ButtonField';
import { StylesGloble } from './../../helper/Globlecss';

import imagePath from './../../constants/imagePath';
import SearchField from './../../helper/SearchField';
import Sliderdata from '../../helper/sliderdata';
import TabItem from '../../helper/Tab';
import CategoryComp from '../../Components/CategoryComp';
import ProductItem from '../../Components/ProductItem';
import OfferComp from '../../Components/OfferComp';
import Locationicon from '../../assets/img/locationicon.svg';
import Downarray from '../../assets/img/downarray.svg';

import Searchicon from '../../assets/img/searchicon.svg';
import Avatar from '../../assets/img/avatar.svg';
import { useSelector, useDispatch } from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import Carousel from "pinar";

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { setproductData, sethomeData, setsubcategoryData } from './../../Redux/index';
import { getFormattedAddress, requestLocationPermission } from '"./../../services/LocationServices';





export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
const width = Dimensions.get('window').width;

const data = [
    {
        image: imagePath.banner1,
    },
    {
        image: imagePath.banner2,
    },
    {
        image: imagePath.banner3,
    },
];



const Home = ({ navigation, route }) => {
    const allpagedata = [{}];
    const dispatch = useDispatch();
    const isCarousel = useRef(null);
    const mySlide = useRef();
    const [timesec, settimesec] = useState('');
    const [currentlat, setcurrentlat] = useState('');
    const [currentlng, setcurrentlng] = useState('');


    const usaerstate = useSelector((state) => state.UserReducer.userData);

    const selectaddresstate = useSelector((state) => state.SelectAddressReducer.data);

    const locationname = selectaddresstate ? selectaddresstate.title : '';
    const currentadd = selectaddresstate ? selectaddresstate.address : '';
    const userID = usaerstate ? usaerstate.userID : null;
    const userToken = usaerstate ? usaerstate.userToken : null;
    const username = usaerstate ? usaerstate.fullname : null;
    const userimg = usaerstate ? usaerstate.profile_pic : null;
    const useraddress = usaerstate ? usaerstate.address : null;

    const homestate = useSelector((state) => state.HomeReducer.data);
    const categorieslist = homestate ? homestate.categories : null;
    const sliderImageslist = homestate ? homestate.slider_images : null;
    const mini_slider_images = homestate ? homestate.mini_slider_images : null;
    const topTrendslist = homestate ? homestate.top_trends : null;
    const bestDealslist = homestate ? homestate.best_deals : null;
    const best_offerslist = homestate ? homestate.best_offers : null;



    const [search, setsearch] = useState('');
    const [skletonshow, setskletonshow] = useState(1);

    const Changevalue = (text) => {
        setsearch(text);
    }
    useEffect(() => {
        setTimeout(() => {
            setskletonshow(2)
        }, 3000)
    }, [])
    useEffect(() => {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 12) {
            settimesec('Good morning');
        } else if (hours >= 12 && hours < 18) {
            settimesec('Good afternoon');
        } else if (hours >= 18 && hours < 20) {
            settimesec('Good evening');
        } else {
            settimesec('Good night');
        }
    }, [])

    useEffect(() => {
        const requestLocationPermission = async () => {
            if (Platform.OS === 'ios') {
                getOneTimeLocation();
            } else {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Location Access Required',
                            message: 'This App needs to Access your location',
                        },
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        getOneTimeLocation();
                    }
                } catch (err) {
                    console.warn(err);
                }
            }
        };
        requestLocationPermission();
        dispatch(sethomeData());

    }, [])

    const getOneTimeLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                setcurrentlat(position.coords.latitude);
                setcurrentlng(position.coords.longitude);

            }, (error) => {
                getOneTimeLocation();
            },
        );
    };


    const gotoProductlistfun = (type) => {
        dispatch(setproductData('', '', type, '','',''));
        navigation.navigate('Product');
    }
    const gotosuncategoryfun = (data) => {
        dispatch(setsubcategoryData(data.parent_id))
        navigation.navigate('SubCategory', { data: data })
    }



    return (
        <>
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
                        <TouchableOpacity style={{ ...StylesGloble.homeheaderouter, marginTop: 12, marginLeft: -1, width: "99%", position: "relative", alignSelf: "center" }}>
                            <SkeletonPlaceholder.Item marginLeft={'5%'} width={'90%'} height={60} borderRadius={20} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 12, marginLeft: -1, width: "99%", height: 270 }}>
                            <SkeletonPlaceholder.Item marginLeft={'5%'} width={'90%'} height={250} borderRadius={20} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 0, marginLeft: 0, width: '90%', height: 250 }}>
                            <SkeletonPlaceholder.Item marginLeft={'5%'} width={150} height={220} borderRadius={20} />
                            <SkeletonPlaceholder.Item marginLeft={'5%'} width={150} height={220} borderRadius={20} />
                            <SkeletonPlaceholder.Item marginLeft={'5%'} width={150} height={220} borderRadius={20} />
                        </View>
                    </SkeletonPlaceholder>
                </View>
            }
            <View style={{ ...StylesGloble.container, position: "relative"}}>
                <FlatList
                    data={allpagedata}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 60 }}
                    renderItem={({ item }) =>
                        <>
                            <View style={{ ...StylesGloble.homeheaderouter, marginTop: 10, paddingLeft: 5, paddingRight: 5 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Setting')} style={{ ...StylesGloble.homeheaderprofile,marginLeft:-8 }}>
                                    {
                                        (!userimg || userimg == ''|| userimg == null ) ? (
                                            <Avatar  width={55} height={55} />
                                        ) : (
                                            <Image style={{ width: 55, height: 55, borderRadius: 50 }} source={{ uri: userimg }} />
                                        )
                                    }
                                </TouchableOpacity>
                                <View style={{ ...StylesGloble.homeheadername, marginLeft: -15, marginTop: -13 }}>
                                    <Text style={{ ...StylesGloble.fontsmallsimple,color: "#979899", fontSize: 12, fontWeight: "500" }}>{timesec}</Text>
                                    <Text style={{ fontSize: 16, fontWeight: "500",color: "#000000" }}>{username}</Text>
                                </View>
                                <TouchableOpacity onPress={() => { navigation.navigate('GooglePlacesInput'); }} style={{ position: "absolute", top: 10, right: -7, flexDirection: "row", backgroundColor: "#eaf3e0a8", padding: 10, paddingHorizontal: 10, borderRadius: 20, zIndex: 99999 }}>
                                    <Locationicon width={15} height={18} fill={"green"} />
                                    <View style={{ marginTop: -5, width:130 }}>
                                        <Text numberOfLines={1} style={{ marginHorizontal: 5, marginTop: 0, fontSize: 12, fontWeight: "500", color: "#06161C" }}>{locationname}</Text>
                                        <Text numberOfLines={1} style={{ marginHorizontal: 5, marginTop: 0, fontSize: 10, color: "#06161C" }}>{currentadd}</Text>
                                    </View>
                                    <Downarray width={15} height={20} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{
                                ...StylesGloble.homeheaderouter, marginTop: -7, marginLeft: 0, width: "100%",
                                position: "relative", alignSelf: "center", paddingHorizontal: 5
                            }} onPress={() => { navigation.navigate('Search') }}>
                                <View style={{
                                    padding: 10,
                                    backgroundColor: "#EEEEEE",
                                    borderRadius: 12,
                                    fontSize: 15,
                                    padding: 15,
                                    margin:5,
                                    borderRadius: 60
                                }}>
                                    <Searchicon width={16} height={16} style={{
                                        position: "absolute",
                                        top: 18,
                                        left: 20,
                                        zIndex: 9,
                                        paddingRight: 5
                                    }} />
                                    <View style={{ paddingLeft: 30, paddingRight: 5 }}>
                                        <Text style={{ color: "#000000", }}>Search over 500 products.</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {
                                (sliderImageslist) && (
                                    
                                    <View style={{ justifyContent: 'center', alignContent: 'center',marginTop:-10,paddingHorizontal:8}}>
                                        <Carousel
                                            style={{ width: '100%', height: 250 }}
                                            showsControls={false}
                                            dotStyle={{
                                                width: 10,
                                                height: 10,
                                                borderRadius: 5,
                                                marginHorizontal: 5,
                                                marginTop:0,
                                                borderWidth: 1,
                                                borderColor: "grey"
                                            }}
                                            activeDotStyle={{
                                                width: 10,
                                                height: 10,
                                                borderRadius: 5,
                                                marginHorizontal: 5,
                                                marginTop:0,
                                                backgroundColor: 'green',
                                            }}
                                            dotsContainerStyle={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                position: 'absolute',
                                                bottom: 10,
                                                alignSelf: 'center',
                                            }}
                                            loop={true}
                                            autoplay={true}
                                        >
                                            {
                                                (sliderImageslist != null && sliderImageslist != undefined && sliderImageslist.length > 0) && (
                                                    sliderImageslist.map((item, index) => {
                                                        return (
                                                            <View key={index} style={{ padding: 5 }}>
                                                                {
                                                                    (item.image) ? (
                                                                        <Image source={{ uri: item.image }}  style={{ height:210, width: '100%'}} />
                                                                    ) : (
                                                                        <Image source={imagePath.banner1} style={{ height:210, width: '100%' }} />
                                                                    )
                                                                }
                                                            </View>
                                                        )
                                                    })
                                                )
                                            }
                                        </Carousel>
                                    </View>
                                )
                            }
                            <View style={{ width: width , marginTop: 0,paddingHorizontal:8 }}>
                                {
                                    (best_offerslist) && (
                                        <FlatList
                                            horizontal={true}
                                            data={best_offerslist}
                                            showsHorizontalScrollIndicator={false}
                                            renderItem={({ item }) => <OfferComp item={item} navigation={navigation} />}
                                            keyExtractor={(item, index) => index}
                                        />
                                    )

                                }
                            </View>
                            {
                                (bestDealslist) && (
                                    <>
                                        <View style={{ ...StylesGloble.homeheaderouterpage, ...StylesGloble.oneline, marginTop: 4, marginLeft: 0,paddingHorizontal:8, justifyContent: "space-between" }}>
                                            <View style={{ marginLeft: 5 }}>
                                                <Text style={{ ...StylesGloble.listheading }}>Best Deals</Text>
                                            </View>
                                            <TouchableOpacity onPress={() => { gotoProductlistfun('best_deal') }} style={{ marginRight: 0 }}>
                                                <Text style={{ ...StylesGloble.listviewallfont }}>See All</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ width: width,marginTop:10,paddingHorizontal:8 }}>
                                            <FlatList
                                                horizontal={true}
                                                data={bestDealslist}
                                                showsHorizontalScrollIndicator={false}
                                                renderItem={({ item }) => <ProductItem item={item} navigation={navigation} />}
                                                keyExtractor={(item, index) => index}
                                            />
                                        </View>
                                    </>
                                )

                            }
                            {
                                ( mini_slider_images != null && mini_slider_images != undefined && mini_slider_images.length > 0) && (
                                    <View style={{paddingHorizontal:5,marginLeft:-13,paddingLeft:13}}>
                                        <FlatList
                                            horizontal={true}
                                            data={mini_slider_images}
                                            showsHorizontalScrollIndicator={false}
                                            renderItem={({ item }) => <View  style={{ width: 330, height: 150,margin:5}}>
                                                    {
                                                        (item.image) ? (
                                                            <Image source={item.image}  style={{ width: 330, height: 150}}/>
                                                        ) : (
                                                            <Image source={{ uri: imagePath.banner1 }} style={{ height:150, width: '100%' }} />
                                                        )
                                                    }
                                                </View>
                                            }
                                            keyExtractor={(item, index) => index}
                                        />
                                    </View>
                                   
                                )
                            }
                            {
                                (categorieslist) && (
                                    <>
                                        <View style={{ ...StylesGloble.homeheaderouterpage, ...StylesGloble.oneline, marginTop: 12, marginBottom: 10, marginLeft: 0,paddingHorizontal:5 , justifyContent: "space-between" }}>
                                            <View style={{ marginLeft: 5 }}>
                                                <Text style={{ ...StylesGloble.listheading }}>Categories</Text>
                                            </View>
                                            <TouchableOpacity onPress={() => { navigation.navigate('Category') }} style={{ marginRight: 10 }}>
                                                <Text style={{ ...StylesGloble.listviewallfont }}>See All</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ ...StylesGloble.homeheaderouterpage, marginLeft: 0,paddingHorizontal:5 }}>
                                            <FlatList
                                                numColumns={4}
                                                data={categorieslist}
                                                showsHorizontalScrollIndicator={false}
                                                renderItem={({ item }) => <CategoryComp item={item} navigation={navigation} gotosuncategoryfun={gotosuncategoryfun} />}
                                                keyExtractor={(item, index) => index}
                                            />
                                        </View>
                                    </>
                                )
                            }
                            {
                                (topTrendslist) && (
                                    <>
                                        <View style={{ ...StylesGloble.homeheaderouterpage, ...StylesGloble.oneline, marginTop: 10, marginBottom: 10, marginLeft: 0, marginRight: 0,paddingHorizontal:5, justifyContent: "space-between" }}>
                                            <View style={{ marginLeft: 5 }}>
                                                <Text style={{ ...StylesGloble.listheading }}>Top Trends</Text>
                                            </View>
                                            <TouchableOpacity onPress={() => { gotoProductlistfun('trending') }} style={{ marginRight: 10 }}>
                                                <Text style={{ ...StylesGloble.listviewallfont }}>See All</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ width: width,paddingLeft:7 }}>
                                            <FlatList
                                                horizontal={true}
                                                data={topTrendslist}
                                                showsHorizontalScrollIndicator={false}
                                                renderItem={({ item }) => <ProductItem item={item} navigation={navigation} />}
                                                keyExtractor={(item, index) => index}
                                            />
                                        </View>
                                    </>
                                )
                            }
                        </>
                    }
                    keyExtractor={(item, index) => index}
                />
                <View style={{ ...StylesGloble.tabbarse }}>
                    <TabItem type="1" navigation={navigation} />
                </View>


            </View>
        </>
    );
};



export default Home;

