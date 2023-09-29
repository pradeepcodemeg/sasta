import React, { useEffect, useState, useContext } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text, ScrollView,StyleSheet,Modal,FlatList,Image, TouchableOpacity,ImageBackground } from 'react-native';
import ButtonField  from './../../helper/ButtonField';
import { StylesGloble } from './../../helper/Globlecss';
import imagePath from './../../constants/imagePath';
import HeaderComp from '../../Components/HeaderComp';
import Homeadd from '../../assets/img/homeadd.svg';
import Editadd from '../../assets/img/editadd.svg';
import Trashadd from '../../assets/img/trashadd.svg';
import LoadingPage  from './../../helper/LoadingPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiDataService from "./../../services/Apiservice.service";
import { useSelector,useDispatch} from 'react-redux';
import { setorderData,setaddressData,setselectaddressData } from './../../Redux/index';
import Toast from 'react-native-simple-toast';

const Address = ({ navigation,route }) => {

    const dispatch = useDispatch();
    const pagename = route.params.type;
    const [Loading,setLoading ]= useState(false);

    const usaerstate = useSelector((state) => state.UserReducer.userData);
    const userID = usaerstate ? usaerstate.userID : null;
    const userToken = usaerstate ? usaerstate.userToken : null;

    const CartData = useSelector((state) => state.CartReducer.data);
    const [cartsavedata,setcartsavedata]= useState('');

    const addressstate = useSelector((state) => state.AddressReducer);
    const addresslist = addressstate ?addressstate.data : null;

    const [addresdata,setaddresdata ]= useState('');
    const [chooseaddress,setchooseaddress ]= useState('');

    const [ deletepopup,setdeletepopup ] = useState(false);
    const [ deleteid,setdeleteid ] = useState('');

    useEffect(()=>{
       
        if(CartData){
            if(CartData != null){
                let  cartData =  CartData;
                let newcartdataIds = [];
                for(let i=0;i < cartData.length;i++){
                    let datafun ={
                        product_id:cartData[i].ProductId,
                        quantity:cartData[i].cartqty
                    }
                    newcartdataIds.push(datafun)
                }
                setcartsavedata(newcartdataIds);
            }
        }
    },[CartData])

    const addressfun = (item)=>{
        console.log('item_____adrr_________',item);
        var fulladdress = item.address_line1;
        let address = {
            title: item.type,
            address:fulladdress,
            lat:item.latitude,
            lng:item.longitude
        }
        AsyncStorage.setItem('Selectaddress', JSON.stringify(address));
        dispatch(setselectaddressData());
        navigation.goBack()

    }
    
 
    const delteaddress = () =>{
        setLoading(true);
        ApiDataService.Deleteapi('/user-addresses/'+deleteid+'token='+userToken).then(response => {
            setLoading(false);
            dispatch(setaddressData());
            calltoastmessage("Address delete successfully");
        }).catch(e => {
            setLoading(false);
            console.log("error",e);
        });
    }
    const calltoastmessage  = (data) => {
        Toast.showWithGravity(data, Toast.LONG, Toast.BOTTOM);
    };
    return (
        <>
            <HeaderComp text={'Address'} navigation={navigation} type={'3'}/>
            <View style={{...StylesGloble.container,position:"relative",paddingLeft:10,paddingRight:10,}}>
                {
                    Loading&&
                    <View style={{position:"absolute",top:0,left:0,height:"100%",width:"115%",zIndex:999999}}>
                        <LoadingPage/>
                    </View>
                }
                <TouchableOpacity onPress={() =>{ navigation.navigate('AddAddress',{type:pagename,action:"1",data:""}) }} style={{...StylesGloble.oneline,borderBottomColor:"#9D9D9D20",borderBottomWidth:1,paddingTop:15,paddingBottom:15}}>
                    <Text style={{fontSize:20,fontWeight:"500",color:"#9DC45A",marginTop:0}}>+</Text>
                    <Text style={{fontSize:20,fontWeight:"500",color:"#9DC45A",marginLeft:10}}>Add New Address</Text>
                </TouchableOpacity>
                <ScrollView nestedScrollEnabled={true} contentContainerStyle={{paddingBottom:110}}>
                {
                    (addresslist !=null)?(
                        addresslist.map((item,index)=>
                        <View key={index} style={[chooseaddress==item.id ? styles.activebox : styles.norbox ]}>
                            <TouchableOpacity onPress={()=>{ addressfun(item)}} style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
                                <Homeadd width={47} height={47}  />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{ addressfun(item)}}  style={{width:"60%",marginLeft:10,marginTop:0}}>
                                <Text style={{fontSize:16,fontWeight:"500",color:"#000000"}}>{item.type}</Text>
                                <Text style={{fontSize:12,fontWeight:"400",color:"#9D9D9D",marginTop:5,marginBottom:0}}>{item.address_line1}</Text>
                            </TouchableOpacity>
                            <View style={{...StylesGloble.oneline,width:"20%",justifyContent:"center",alignItems:"center"}}>
                                <TouchableOpacity onPress={() =>{ navigation.navigate('AddAddress',{type:pagename,action:"2",data:item}) }} >
                                    <Editadd  />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() =>{ setdeletepopup(true);setdeleteid(item.id) }}>
                                    <Trashadd  />
                                </TouchableOpacity>
                            </View>
                        </View>
                        )
                    ):(
                        <></>
                    )
                }
                </ScrollView>
            </View>
            <Modal  animationType="fade" transparent={true} visible={deletepopup}>
                <TouchableOpacity style={{position: 'absolute',bottom: 0,width:'100%',height:"100%",backgroundColor:"#1c191938"}} onPress={() =>{
                        setdeletepopup(false); }}>
                    <View  ></View>
                </TouchableOpacity>
                <View style={{position: "absolute", top: "39%",  right:wp('6%'),width:wp('70%'),backgroundColor:'#ffffff',borderRadius:20,alignItems:"center",padding:30,left:wp('15%'),}}> 
                    <Trashadd width={34} height={34}  />
                    <Text style={{fontSize:20,fontWeight:"600",color:"#000000",marginTop:10}}>Are you sure you want to delete this address?</Text>
                    <Text style={{fontSize:20,fontWeight:"600",color:"#000000"}}></Text>
                    <View style={{width:wp('60%')}}>
                        <View style={{flexDirection:"row",}}>
                            <TouchableOpacity onPress={() =>{  setdeletepopup(false); }} style={{borderRadius:50,marginLeft:"8%",width:"40%",borderColor:"#9DC45A",borderWidth:2,padding:8,alignItems:"center"}}>
                                <Text style={{fontSize:15,fontWeight:"600",color:"#000000",alignItems:"center"}}>No</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() =>{ setdeletepopup(false); delteaddress()}} style={{borderRadius:50,width:"40%",marginLeft:"6%",backgroundColor:"#9DC45A",alignItems:"center",padding:8}}>
                                <Text style={{fontSize:15,fontWeight:"600",color:"#FFFFFF",alignItems:"center"}}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};


const styles = StyleSheet.create({
    norbox: {
        backgroundColor:"#ffffff",
        marginTop:15,
      
       
        padding:5,
        paddingVertical:10,
        position:"relative",
        flexDirection:"row"
    },
    activebox: {
        marginTop:15,
        padding:5,
        backgroundColor:"#ffffff",
      
        paddingVertical:10,
        position:"relative",
        flexDirection:"row"
    }
});



export default Address;