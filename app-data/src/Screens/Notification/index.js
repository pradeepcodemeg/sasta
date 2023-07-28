import React, { useEffect, useState, useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text, ScrollView, Modal, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';
import ButtonField from '../../helper/ButtonField';
import { StylesGloble } from '../../helper/Globlecss';

import HeaderComp from '../../Components/HeaderComp';



const Notification = ({ navigation, route }) => {
    
    
    return (
        <>
            <HeaderComp text={'Notification'} navigation={navigation} type={'3'} />
        </>
    );
};



export default Notification;