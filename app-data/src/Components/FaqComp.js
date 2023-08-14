import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text, ScrollView,StyleSheet,Modal,FlatList,Image, TouchableOpacity,ImageBackground } from 'react-native';
import imagePath from '../constants/imagePath';
import { StylesGloble } from '../helper/Globlecss';

const FaqComp = ({item,index}) => {
   
    return (
        <View style={{...style.outerstyle,marginTop:10}}>
            <Text  style={{fontSize:16,fontWeight:"700",color:"#000000",lineHeight:25}}>{index+1}. {item.question}</Text>
            <Text  style={{fontSize:14,fontWeight:"500",color:"#000000",lineHeight:20,marginTop:5}}>{item.answer}</Text>
        </View>
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
export default FaqComp;
