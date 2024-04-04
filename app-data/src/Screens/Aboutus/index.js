import React, { Component,useEffect,useState } from 'react';
import { View, Text, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import ApiDataService from "./../../services/Apiservice.service";
import RenderHtml from 'react-native-render-html';

const Aboutus = ({ navigation,route }) => {
    const page_type = route?.params?.pagetype;
    const [about,setabouts]= useState('');

    useEffect(() => {
        getAboutus()
    }, [])

    const getAboutus = async () => {
        let url = `main-data`
        ApiDataService.Getapi(url).then(response => {
            console.log('response-----------',response.data);
            setabouts(response?.data?.about_us)
        }).catch(e => {
            console.log('error-----------',e);
        })
    }

    return (
        <>
            <HeaderComp text={page_type == 1 ?'Terms of Service' : page_type ==2 ? 'Privacy Policy' :  page_type ==3 ? 'About Us' :null} navigation={navigation} type={'3'}/>
            <View style={{height:"100%",width:"100%",padding:10,paddingTop:5}}>
                <ScrollView>
                    <RenderHtml
                            contentWidth={'80%'}
                            source={{html:about}}
                            />
                </ScrollView>
            </View>
           
        </>
    );
};



export default Aboutus;