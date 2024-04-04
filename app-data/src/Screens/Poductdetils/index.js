import React, { useEffect, useState, useContext } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';
import { View, Text, ScrollView,Modal,FlatList,Image, TouchableOpacity,ImageBackground } from 'react-native';
import ButtonField  from './../../helper/ButtonField';
import { StylesGloble } from './../../helper/Globlecss';
import imagePath from './../../constants/ImagePath';
import HeaderComp from '../../Components/HeaderComp';
import ProductItem from '../../Components/ProductItem';
import Sliderdata  from './sliderdata.js';
import Cartminus from '../../assets/img/cartminus.svg';
import Cartplus from '../../assets/img/cartplus.svg';
import Rating from '../../assets/img/rating4.svg';
import Upside from '../../assets/img/upside.svg';
import Downside from '../../assets/img/downside.svg';
import { useSelector,useDispatch} from 'react-redux';
import { setcartData, setproductData } from './../../Redux/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import ApiDataService from "./../../services/Apiservice.service";
import Toast from 'react-native-simple-toast';

const imagelistfun = (image,Sliderimg) =>{
    var value = [];
    if(Sliderimg!=[] || Sliderimg!=null || Sliderimg!='')
    {
        if(Sliderimg.length > 0)
        {
            value = Sliderimg;
        }
        else{
            value = [image];
        }
    }
    else if( image!=null && image!=''){
        value = [image];
    }
    else{
        value = ['https://aliveztechnosoft.com/python-automations/GroceryApp/product-images/1686914068.png']
    }
    return value;
}
const dummay = {
    "id": "",
    "category_id": "",
    "brand_id": "",
    "offer_id": "",
    "is_trending": "",
    "is_best_deal": "",
    "suggested_of": "",
    "name": "",
    "image": "",
    "description": "",
    "similar_products": "",
    "recommended_products": "",
    "mrp": "",
    "price": "",
    "discount": "",
    "feature_name": "",
    "order_by": "",
    "enabled": "",
    "sku_value": "",
    "available_stock": "",
    "max_quantity_per_order": "",
    "min_stock_alert": "",
    "out_of_stock_action": "",
    "category_Name": "",
    "brand_name": "",
    "feature_values": [],
    "slider_images": []
}
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

const checkdescript = (data)=>{
   
    if(data.length > 208)
    {
        return data.slice(0,208);
    }
    else{
        return  data;
    }
} 
const checkPricefun = (data)=>{
    let newdata = {
        "id": "",
        "store_id": "",
        "active": "",
        "product_id": "",
        "feature_value": "",
        "mrp": "0",
        "price": "0",
        "discount": "0",
        "available_stock": "0",
        "max_quantity_per_order": "0",
        "min_stock_alert": "0",
        "out_of_stock_action": "0"
    }
    if(data != null){
        newdata = data[0];
    }
    return newdata;
} 
const Poductdetils = ({ navigation,route }) => {
    const dispatch = useDispatch();
    const usaerstate = useSelector((state) => state.UserReducer.userData);
    const userID = usaerstate ? usaerstate.userID : null;
    const userToken = usaerstate ? usaerstate.userToken : null;

    const ProductdtlDataRe = useSelector((state) => state.ProductdtlReducer.data);
    const ProductdtlData =ProductdtlDataRe?ProductdtlDataRe:dummay;
   
    
    const CartData = useSelector((state) => state.CartReducer.data);
    const Slideimagecome = ProductdtlData.slider_images?ProductdtlData.slider_images:'';
    const Imagecome = ProductdtlData.image?ProductdtlData.image:'';
    const Sliderimg = imagelistfun(Imagecome,Slideimagecome); 
    const Proname = ProductdtlData.name?ProductdtlData.name:'';

    const ffeatvalue =checkPricefun(ProductdtlData?.feature_values?ProductdtlData?.feature_values:'');
    const [Firstfeatvalue,setFirstfeatvalue]=useState(ffeatvalue);
    const [ChooseFetureval,setChooseFetureval]=useState(ffeatvalue?.feature_value);

    
    const Featurename = ProductdtlData.feature_name?ProductdtlData.feature_name:'';
    const Featurevalues = ProductdtlData.feature_values?ProductdtlData.feature_values:'';
    const Description = ProductdtlData?.description;

    const [showdesDesc,setshowdesDesc]= useState(false);
    const [cartval,setcartval]=useState(0);
    const [skletonshow, setskletonshow] = useState(1);
    const [suggestdata,setsuggestdata]= useState('');

 


    useEffect(() => {
        setTimeout(()=>{
            setskletonshow(2)
        },2000)
    },[])


    useEffect(() => {
        let ffeatvalue22 =checkPricefun(ProductdtlData?.feature_values?ProductdtlData?.feature_values:'');

        setcartval(0);
        setFirstfeatvalue(ffeatvalue22);
        setChooseFetureval(ffeatvalue22?.feature_value);
        if(CartData != null && CartData != '' &&CartData.length > 0){
            let  cartData =  CartData;
            for(let i=0;i < cartData.length;i++){
                if(cartData[i].ProductId==ProductdtlData.id){
                    if(cartData[i].Size==ffeatvalue22?.id){
                        setcartval(cartData[i].cartqty)
                    }
                } 
            }
        }
    },[ProductdtlData])
   

    useEffect(()=>{
       callsuggestfun();
    },[])

    const callsuggestfun = ()=>{
        let url = 'products?order=DESC&order_by=id&row_count=7&page=1&token='+userToken+'&include_similar_products='+ProductdtlData.id+'&include_recommended_products='+ProductdtlData.id;
        ApiDataService.Getapi(url).then(response =>{
            if(checkcartdatav(response.data)==true){
                let cartdatafu = response.data;
                setsuggestdata(cartdatafu)
            }
        });
    }

    const addremovefuncart = (type,price)=>{
      
        let quty = cartval;
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
                if(CartData[j].ProductId==ProductdtlData.id){
                    if(CartData[j].Size==Firstfeatvalue?.id){
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
                    ProductId:ProductdtlData?.id,
                    Size:Firstfeatvalue?.id,
                    cartqty:quty
                } 
                newcartdata.push(makecartdata);
            }
            setcartval(quty);
            AsyncStorage.setItem('Cartdata',JSON.stringify(newcartdata));
        }
        else{
            let  newcartdata = [];
            let  makecartdata ={
                userId:userID,
                ProductId:ProductdtlData?.id,
                Size:Firstfeatvalue?.id,
                cartqty:quty
            } 
            newcartdata.push(makecartdata);
            AsyncStorage.setItem('Cartdata',JSON.stringify(newcartdata));
            setcartval(quty);
        }
        dispatch(setcartData());
    }
   

    
    const gotoSimlierproductfun = () => {
        dispatch(setproductData('', '', '', '',ProductdtlData.id,''));
        navigation.navigate('Product',{pagename:'Similar Products'});
    }

    const gotoMigthlikeproductfun = () => {
        dispatch(setproductData('', '', '', '','',ProductdtlData.id));
        navigation.navigate('Product',{pagename:'You Might Also Like'});
    }
    const calltoastmessage = (data) => {
        Toast.showWithGravity(data, Toast.LONG, Toast.BOTTOM);
    };
    
    // const submitfun = () =>{
    //     if(cartval < 1){
    //         calltoastmessage("Minimum one count in cart");
    //     }
    //     else{
    //         let  makecartdata ={
    //             userId:userID,
    //             ProductId:ProductdtlData.id,
    //             Size:featureValid,
    //             cartqty:cartval
    //         } 
    //         AsyncStorage.getItem('Cartdata', (err, credentials) => {
    //             let  cartData =  JSON.parse(credentials);
              
    //             let  newcartdata = [];
    //             if(cartData == null || cartData == '' || cartData == []){
    //                 newcartdata.push(makecartdata);
    //             }else{
    //                 for(let i=0;i < cartData.length;i++){
    //                     if(cartData[i].ProductId!=ProductdtlData.id){
    //                         newcartdata.push(cartData[i])
    //                     }
    //                     else{
                           
    //                         if(cartData[i].Size!=sizeval){
    //                             cartData[i].qty=cartval;
    //                             newcartdata.push(cartData[i])
    //                         }
                            
    //                     }
    //                 }
    //                 newcartdata.push(makecartdata);
    //             }
    //             AsyncStorage.setItem('Cartdata',JSON.stringify(newcartdata));
    //             dispatch(setcartData());
    //         })
    //         navigation.navigate('Cartscreen');
    //     }
    // }

    const clickchoosefun = (item)=>{
        setFirstfeatvalue(item);
        setChooseFetureval(item.feature_value);
        setcartval(0);
        if(CartData != null && CartData != '' &&CartData.length > 0){
            let  cartData =  CartData;
            for(let i=0;i < cartData.length;i++){
                if(cartData[i].ProductId==ProductdtlData.id){
                    if(cartData[i].Size==item.id){
                        setcartval(cartData[i].cartqty)
                    }
                } 
            }
        }
    }
    return (
        <>
            <HeaderComp text={''} navigation={navigation} type={'2'}/>
            {
                skletonshow==1&&
                <View style={{width:"100%",height:'100%' , position: "relative"}}>
                    <SkeletonPlaceholder borderRadius={4}  >
                        <TouchableOpacity style={{ marginTop: 12, marginLeft: -1, width: "99%",height:270 }}>
                            <SkeletonPlaceholder.Item marginLeft={'5%'} width={'90%'} height={250} borderRadius={20}/>
                        </TouchableOpacity>
                        <View style={{ marginLeft: 25, marginTop: 8 }}>
                            <View style={{flexDirection:"row",width:"100%"}}>
                                <View style={{width:"80%"}}>
                                    <SkeletonPlaceholder.Item width={120} height={20}/>
                                    <SkeletonPlaceholder.Item width={80} height={20}  marginTop={15} />
                                    <SkeletonPlaceholder.Item width={80} height={20}  marginTop={15} />
                                    <SkeletonPlaceholder.Item width={80} height={20}  marginTop={15} />
                                    <SkeletonPlaceholder.Item width={80} height={20}  marginTop={15} />
                                </View>
                                <View style={{width:"40%"}}>
                                    <SkeletonPlaceholder.Item width={60} height={20}  marginTop={15} />
                                    <SkeletonPlaceholder.Item width={60} height={20}  marginTop={15} />
                                </View>
                            </View>
                            
                        </View>
                        
                        <View style={{flexDirection:"row", marginTop: 20, marginLeft: 0,width:'90%',height:250 }}>
                            <SkeletonPlaceholder.Item marginLeft={'5%'} width={150} height={220} borderRadius={20}/>
                            <SkeletonPlaceholder.Item marginLeft={'5%'} width={150} height={220} borderRadius={20}/>
                            <SkeletonPlaceholder.Item marginLeft={'5%'} width={150} height={220} borderRadius={20}/>
                        </View>
                    </SkeletonPlaceholder>
                </View>
            }
           
            <ScrollView  nestedScrollEnabled={true} contentContainerStyle={{paddingBottom:2}}>
                <View style={{width:"100%",height:325,position:"relative",backgroundColor:"#ffffff"}}>
                    <View style={{position:"absolute",top:0,left:0,}}>
                        <Sliderdata data={Sliderimg}/>
                    </View>
                </View>
                <View style={{...StylesGloble.container,position:"relative"}}>
                    <View style={{marginTop:5,paddingLeft:10,paddingRight:10}}>
                        <Text style={{...StylesGloble.listheading}}>{Proname}</Text>
                    </View>
                    <View style={{...StylesGloble.oneline,marginTop:10,position:"relative",paddingLeft:10,paddingRight:10}}>
                        <Text style={{fontSize:18,fontWeight:"600",color:"#9DC45A"}}>₹ {Firstfeatvalue?.price}</Text>
                        <Text style={{fontSize:16,fontWeight:"600",marginLeft:5,textDecorationLine:"line-through",color:"#9D9D9D"}}>₹ {Firstfeatvalue?.mrp}</Text>
                    
                        <View style={{backgroundColor:"#9DC45A",padding:3,paddingHorizontal:5,marginLeft:15,borderRadius:5}}>
                            <Text style={{fontSize:14,color:"#000000",fontWeight:"500"}}>{(Firstfeatvalue?.discount*100/Firstfeatvalue?.mrp).toFixed(2)} %   OFF</Text>
                        </View>
                        {
                            (cartval==0)?(
                                <TouchableOpacity  onPress={()=>{addremovefuncart('3')}}  style={{...StylesGloble.addbutton,width:80,height: 35,borderRadius:25,bottom:0}}>
                                    <Text style={{fontSize:15,color:"#ffffff",fontWeight:"600"}}>ADD</Text>
                                </TouchableOpacity>
                            ):(
                                <View style={{...StylesGloble.oneline,marginLeft:"auto"}}>
                                    <TouchableOpacity onPress={()=>{ addremovefuncart('1') }} style={{marginLeft:10}}>
                                        <Cartminus/>
                                    </TouchableOpacity>
                                    <Text style={{fontSize:20,color:"#000000",marginLeft:10}}>{cartval}</Text>
                                    <TouchableOpacity onPress={()=>{ addremovefuncart('2') }}  style={{marginLeft:10}}>
                                        <Cartplus/>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    </View>
                    <View style={{marginTop:15,paddingLeft:10,paddingRight:10}}>
                        <Text style={{...StylesGloble.listheading}}>{Featurename}</Text>
                        <View style={{...StylesGloble.oneline,marginTop:10,marginLeft:0}}>
                            {
                                (Featurevalues.length>0)&&(
                                    Featurevalues.map((item,index)=>(
                                        <TouchableOpacity onPress={()=>{ clickchoosefun(item) }} key={index} style={(item?.feature_value==ChooseFetureval ? StylesGloble.cyheckouterborderwei : StylesGloble.outerborderwei)} >
                                            <Text style={{fontSize:12,color:"#757575"}}>{item?.feature_value}</Text>
                                        </TouchableOpacity>
                                    ))
                                )
                            }
                        </View>
                    </View>
                    <TouchableOpacity  onPress={()=>{setshowdesDesc(!showdesDesc)}} style={{backgroundColor:"#f4fbe55e",width:"100%",padding:10,marginTop:15}}>
                        <Text style={{...StylesGloble.listheading}}>Description</Text>
                        <TouchableOpacity onPress={()=>{setshowdesDesc(!showdesDesc)}} style={{position:"absolute",top:0,right:-5,padding:15}}>
                            {
                                showdesDesc==false?
                                <Downside width="15" height="15" />
                                :
                                <Upside width="15" height="15"/>
                            }
                        </TouchableOpacity>
                        {
                            showdesDesc&&
                            <View style={{marginTop:5,position:"relative"}}>
                                <Text style={{fontSize:12,color:"#A6A6A6",width:wp('93%')}}>{Description}</Text>
                            </View>
                        }
                    </TouchableOpacity>
                    <View style={{...StylesGloble.oneline,marginTop:20,paddingLeft:10,paddingRight:10}}>
                        <View style={{width:wp('79%')}}>
                            <Text style={{...StylesGloble.listheading}}>Similar Products</Text>
                        </View>
                        <TouchableOpacity onPress={()=>{gotoSimlierproductfun()}} style={{alignItems:"flex-end",justifyContent:"flex-end"}}>
                            <Text style={{...StylesGloble.listviewallfont}}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:2,paddingLeft:10,paddingRight:10}}>
                        {
                            suggestdata&&
                            <FlatList
                                horizontal={true}
                                data={suggestdata}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({item}) => <ProductItem prowdith={'100%'} item={item} navigation={navigation}/>}
                                keyExtractor={(item, index) => index}
                            />    
                        }   
                    </View>
                    <View style={{...StylesGloble.oneline,marginTop:20,paddingLeft:10,paddingRight:10}}>
                        <View style={{width:wp('79%')}}>
                            <Text style={{...StylesGloble.listheading}}>You Might Also Like</Text>
                        </View>
                        <TouchableOpacity  onPress={()=>{gotoMigthlikeproductfun()}} style={{alignItems:"flex-end",justifyContent:"flex-end"}}>
                            <Text style={{...StylesGloble.listviewallfont}}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:2,paddingLeft:10,paddingRight:10}}>
                        {
                            suggestdata&&
                            <FlatList
                                horizontal={true}
                                data={suggestdata}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({item}) => <ProductItem prowdith={'100%'} item={item} navigation={navigation}/>}
                                keyExtractor={(item, index) => index}
                            />    
                        }    
                    </View>
                </View>
            </ScrollView>
            {/* <View style={{width:wp('100%'),height:63,paddingHorizontal:wp('5%'),paddingTop:8,backgroundColor:"#FFFFFF"}}>
                <ButtonField label={'Add to Cart'} submitfun={submitfun}/>
            </View> */}
        </>
    );
};



export default Poductdetils;