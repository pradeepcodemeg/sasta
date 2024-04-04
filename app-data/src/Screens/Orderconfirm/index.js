import React, { useEffect, useState, useContext } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text, TouchableOpacity, BackHandler,} from 'react-native';
import ButtonField  from './../../helper/ButtonField';
import { StylesGloble } from './../../helper/Globlecss';
import Orderplaced from '../../assets/img/orderplaced.svg';
import { useSelector,useDispatch} from 'react-redux';
import { setcartData } from './../../Redux/index';
import { useFocusEffect } from '@react-navigation/native';
import ApiDataService from "../../services/Apiservice.service";
import LoadingPage from '../../helper/LoadingPage';

const Orderconfirm = ({ navigation,route }) => {
    const dispatch = useDispatch();
    const orderId = route.params.orderId;
    const [Loading, setLoading] = useState(false);
    console.log('orderId___________',orderId);
    const usaerstate = useSelector((state) => state.UserReducer.userData);
    const userID = usaerstate ? usaerstate.userID : null;
    const userToken = usaerstate ? usaerstate.userToken : null;
    const submitfun = () =>{
        //navigation.navigate('Trackorder',{orderId:orderId});
        setLoading(true)
        let url = 'orders?order=DESC&order_by=id&row_count=5&page=1&token='+userToken+"&by_user_id="+userID+"&by_delivery_boy_id=&includes=order_details,product_details,delivery_boy_details,payment_options,delivery_address";
        ApiDataService.Getapi(url).then(response =>{
             setLoading(false)
             let data = response.data;
             navigation.navigate('Trackorder', { data: data[0] })
        });
    }
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                navigation.navigate('Home');
                return true;
            };

            // Add Event Listener for hardwareBackPress
            BackHandler.addEventListener(
                'hardwareBackPress',
                onBackPress
            );

            return () => {
                // Once the Screen gets blur Remove Event Listener
                BackHandler.removeEventListener(
                    'hardwareBackPress',
                    onBackPress
                );
            };
        }, []),
    );
    useEffect(()=>{
        dispatch(setcartData());
    },[])
    return (
        <View style={{...StylesGloble.container,alignItems:"center",paddingLeft:10,paddingRight:10}}>
             {
                Loading &&
                <View style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "115%", zIndex: 999999 }}>
                    <LoadingPage />
                </View>
            }
            <Orderplaced style={{marginTop:90}}/>
            <Text style={{fontSize:25,marginTop:25,fontWeight:"700",color:"#000000"}}>Order Placed Successfully</Text>
            <Text style={{fontSize:14,fontWeight:"400",marginTop:15,color:"#9D9D9D"}}>Lorem Ipsum has been the industry's standard</Text>
            <Text style={{fontSize:14,fontWeight:"400",marginLeft:15,color:"#9D9D9D"}}>dummy text ever since the 1500s.</Text>
            <View style={{marginTop:hp('3%'),width:wp('90%')}}>
                <ButtonField label={'Track Order'} submitfun={submitfun}/>
            </View>
            <TouchableOpacity style={{marginTop:hp('3%')}} onPress={()=>navigation.navigate('Home') }>
                <Text style={{fontSize:16,marginTop:5,fontWeight:"400",color:"#000000"}}>Back to home</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Orderconfirm;