//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComp from '../../Components/HeaderComp';


const Support = ({ navigation,route }) => {
    return (
        <>
            <HeaderComp text={'Support'} navigation={navigation} type={'3'}/>
        </>
    );
};



export default Support;