
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import imagePath from './../../constants/imagePath';
import { Dimensions, View,StyleSheet,ImageBackground,Image,TouchableOpacity } from 'react-native';


const width= Dimensions.get('window').width;
const height= Dimensions.get('window').height;
const SliderItem = ({item}) =>{
   
    return(
        <View style={{...styles.cardView}}>
            {
                (item!=null || item!='' || item)?(
                    <Image style={{width:260,height:280}} resizeMode={'stretch'} source={{uri :item}}/>
                ):(
                    <Image style={{width:260,height:280}} resizeMode={'stretch'} source={imagePath.product_deflt_img}/>
                )
            }
           
        </View>
    )
}
const styles = StyleSheet.create({
    cardView: {
        width : wp('100%'),
        height : 300,
        paddingHorizontal:15,
        alignItems:"center",
        justifyContent:"center"
    },
    image: {
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    textView: {
        color: '#2b3668', 
        

    }
    
});

export default SliderItem;