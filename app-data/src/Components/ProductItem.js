
import React, { useEffect, useState, useContext, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text, ScrollView,Modal,FlatList,Image, TouchableOpacity,ImageBackground } from 'react-native';
import imagePath from '../constants/imagePath';
import { StylesGloble } from '../helper/Globlecss';
import Addpro from '../assets/img/addpro.svg';
import { setproductdtlData,setcartData} from '../Redux/index';
import { useSelector, useDispatch } from 'react-redux';

import Cartminus from '../assets/img/cartminus.svg';
import Cartplus from '../assets/img/cartplus.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cartcheck = (Data,id)=>{
    if(Data){
        if(Data == null){
           return 0;
        }
        else{
            if(Data == ''){
                return 0;
            }
            else{
                if(Data.length > 0){
                    let value = 0
                    for(let i=0; i < Data.length; i++){
                        if(Data[i].ProductId==id){
                            value = Data[i].cartqty;
                        }
                    }
                    return value;
                }
                else{
                    return 0;
                }
            }
        }
    }
    else{
        return 0;
    }   
       
}
const checkcartdatav = (Data) =>{
   
    if(Data){
        if(Data == null){
           return false;
        }
        else{
            if(Data == ''){
                return false;
            }
            else{
                if(Data.length > 0){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
    }
    else{
        return false;
    }
}

const checkprice = (item) =>{
    var price  = 0;
    if(item?.feature_values != null){
        price= item?.feature_values[0]?.price;
    }
    return price;
}

const ProductItem = ({item,navigation,prowdith}) => {

    const dispatch = useDispatch();
    const CartData = useSelector((state) => state.CartReducer.data);
    const usaerstate = useSelector((state) => state.UserReducer.userData);
    const userID = usaerstate ? usaerstate.userID : null;
    const price = checkprice(item);
    
    let cartcount = Cartcheck(CartData,item.id); 
    const gotoproductdetls = (item)=>{
        dispatch(setproductdtlData(item.id));
        navigation.navigate('Poductdetils');
    }
   


    const addremovefuncart = (type,item,price)=>{
      
        let quty = cartcount;
        if(type=='1'){
            quty = quty - 1;
        }
        else if(type=='3'){
            quty = 1;
        }
        else{
            quty = quty + 1;
        }
        if(checkcartdatav(CartData)==true){
            let  newcartdata = [];
            let checkplz = 1;
            for(let j=0;j < CartData.length;j++){
                if(CartData[j].ProductId==item.id){
                    if(CartData[j].Size==item.feature_values[0].id){
                        if(quty > 0){
                            let  makecartdata ={
                                userId:CartData[j].userId,
                                ProductId:CartData[j].ProductId,
                                Size:CartData[j].Size,
                                cartqty:quty
                            } 
                            newcartdata.push(makecartdata);
                        }
                            checkplz = 2;
                    }
                }
                else{
                    let  makecartdata ={
                        userId:CartData[j].userId,
                        ProductId:CartData[j].ProductId,
                        Size:CartData[j].Size,
                        cartqty:CartData[j].cartqty
                    } 
                    newcartdata.push(makecartdata);
                }
                
            }
            if(checkplz == 1){
                let  makecartdata ={
                    userId:userID,
                    ProductId:item.id,
                    Size:item.feature_values[0].id,
                    cartqty:quty
                } 
                newcartdata.push(makecartdata);
            }
            cartcount = quty;
            AsyncStorage.setItem('Cartdata',JSON.stringify(newcartdata));
        }
        else{
            let  newcartdata = [];
            let  makecartdata ={
                userId:userID,
                ProductId:item.id,
                Size:item.feature_values[0].id,
                cartqty:quty
            } 
            newcartdata.push(makecartdata);
            AsyncStorage.setItem('Cartdata',JSON.stringify(newcartdata));
            cartcount = quty;
        }
        dispatch(setcartData());
    }
    return (
        <TouchableOpacity onPress={()=>{ gotoproductdetls(item)}} style={{...StylesGloble.productView,height:220,maxWidth:wp(prowdith)}} >
            {
                (item.image != '' || item.image != null)?(
                    <Image style={{...StylesGloble.productimg}}  imageStyle={{alignItems:"center"}} source={{uri :item.image}} />
                ):(
                    <Image style={{...StylesGloble.productimg}}  imageStyle={{alignItems:"center"}} source={imagePath.meat} />                
                ) 
            }
            <View style={{...StylesGloble.productviewdata}}>
                <Text numberOfLines={2} style={{fontSize:13,fontWeight:"500",marginTop:5,color:"#000000",width:120}}>{item.name}</Text>
                <Text numberOfLines={1} style={{...StylesGloble.fontsmallsimple,color:"#000000",marginBottom:10,fontSize:10,width:120}}>{item.category_Name}</Text>
                <Text style={{fontSize:15,fontWeight:"600",marginTop:0,color:"#9DC45A"}}>₹{price}</Text>
            </View>
            {
                (cartcount==0)?(
                    <TouchableOpacity  onPress={()=>{addremovefuncart('3',item,price)}}  style={{...StylesGloble.addbutton,}}>
                       <Text style={{fontSize:12,color:"#ffffff",fontWeight:"600"}}>ADD</Text>
                    </TouchableOpacity>
                ):( 
                    <View style={{...StylesGloble.oneline,position:"absolute",top:176,right:0,padding:5,paddingBottom:10}}>
                        <TouchableOpacity onPress={()=>{ addremovefuncart('1',item,price)}} style={{zIndex:9999,padding:8}}>
                            <Cartminus width={22} height={22}/>
                        </TouchableOpacity>
                        <Text style={{fontSize:15,color:"#000000",marginLeft:-8,marginTop:8}}> {cartcount} </Text>
                        <TouchableOpacity onPress={()=>{ addremovefuncart('2',item,price)}}  style={{ zIndex:9999,marginLeft:-8,padding:8}}>
                            <Cartplus width={22} height={22}/>
                        </TouchableOpacity>
                    </View>
                )
            }
        </TouchableOpacity>
    );
};


export default ProductItem;
