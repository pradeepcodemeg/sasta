import React, { Component,useEffect } from 'react';
import { View, Text, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import ApiDataService from "./../../services/Apiservice.service";

const Aboutus = ({ navigation,route }) => {
    console.log('route-----------',route?.params?.pagetype);
    const page_type = route?.params?.pagetype

    useEffect(() => {
        getAboutus()
    }, [])

    const getAboutus = async () => {
        let url = `main-data`
        ApiDataService.Getapi(url).then(response => {
            console.log('response----------------',response.data);
        }).catch(e => {
        })
    }

    return (
        <>
            <HeaderComp text={page_type == 1 ?'Terms of Service' : page_type ==2 ? 'Privacy Policy' :  page_type ==3 ? 'About Us' :null} navigation={navigation} type={'3'}/>
            
        </>
    );
};



export default Aboutus;