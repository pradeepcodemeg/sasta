//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComp from '../../Components/HeaderComp';
import ApiDataService from "./../../services/Apiservice.service";

const Aboutus = ({ navigation,route }) => {

    const onPress= ()=>{
        let body = {
            action: 1,
            fireStoreDocId: '07aa41c6bee642da9f46',
           
        }

      
        let formData = new FormData();
        for (let key in body) {
            formData.append(key, body[key]);
        }
      
        ApiDataService.checkpaipost('https://api-uat.makemyhouse.com/customer/media/actionApproval_v2/PRJ202307250001', formData).then(response => {
            console.log("response==========",response.data)
            
        }).catch(e => {
            
            console.log(e);
        });
    }



    return (
        <>
            <HeaderComp text={'About us'} navigation={navigation} type={'3'}/>
            <TouchableOpacity onPress={() => { onPress() }}>
                <Text style={{ color: "#9DC45A" }}>  Sign Up</Text>
            </TouchableOpacity>
        </>
    );
};



export default Aboutus;