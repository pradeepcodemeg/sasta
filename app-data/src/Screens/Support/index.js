//import liraries
import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet,ActivityIndicator,ScrollView,Image,FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FaqComp from '../../Components/FaqComp';
import { useSelector } from 'react-redux';
import ApiDataService from "../../services/Apiservice.service";
import { StylesGloble } from './../../helper/Globlecss';
import HeaderComp from '../../Components/HeaderComp';

const Support = ({ navigation,route }) => {

   
    const usaerstate = useSelector((state) => state.UserReducer.userData);
    const userID = usaerstate ? usaerstate.userID : null;
    const userToken = usaerstate ? usaerstate.userToken : null;
    const [faqlist,setfaqlist]=useState([]);
    const [pageLoad,setpageLoad ]= useState(1);
    const [Activeloading, setActiveloading] = useState(false);
    const [alldataupload,setalldataupload ]= useState(0);

    useEffect(()=>{
        loadfun();
    },[])

    const loadfun =()=>{
        let url = 'faqs?order=DESC&order_by=id&token='+userToken+'&row_count=10&page='+pageLoad;
        ApiDataService.Getapi(url).then(response => {
            console.log('response------------',response.data);
            if(response.data.length > 0)
            {
                setfaqlist(response.data);
            }
            else{
                setalldataupload(1);
            }
           
        }).catch(e => {
           
        });
    }

    const addnewdata = () =>{
        if(Activeloading == false && alldataupload ==0)
        {
            setActiveloading(true);
            let newpageLoad = Number(pageLoad)+1; 
            setpageLoad(newpageLoad);
            let url = 'faqs?order=DESC&order_by=id&token='+userToken+'&row_count=10&page='+newpageLoad;
            ApiDataService.Getapi(url).then(response => {
               
                if(response.data.length > 0)
                {
                    let newarray =[...faqlist,...response.data];
                    setfaqlist(newarray);
                }
                else{
                    setalldataupload(1);
                }
                setActiveloading(false);
            }).catch(e => {
                setActiveloading(false);
            });
        }
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
                                style={{marginLeft: 8,marginTop:10,fontSize:25}} />
                        </View>
                    ) : null
                }
            </>
        );
    };
    return (
        <>
            <HeaderComp text={'Customer Support & FAQ'} navigation={navigation} type={'3'}/>
            <View style={{position:"relative",padding:5,paddingBottom:65}}>
                <View style={{paddingHorizontal:5,marginTop:10}}>
                <Text  style={{fontSize:20,fontWeight:"600",color:"#000000",lineHeight:25}}>FAQ</Text>
                </View>
                {
                    (faqlist)&&(
                        <FlatList
                            data={faqlist}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item, index }) => <FaqComp item={item}  index={index} />}
                            keyExtractor={(item, index) => index}
                            style={{marginBottom:50}}
                            onEndReached={addnewdata}
                            onEndReachedThreshold={0}
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
    footer:{
        height:50,
    },
    outerstyle:{
        width:"100%",
        height:"auto",
        paddingHorizontal:5
    }
});


export default Support;