import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import imagePath from '../constants/ImagePath';
import { StylesGloble } from '../helper/Globlecss';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const CategoryComp = (props) => {
    return (
        <>
            <View style={{ height: 85, width: wp('97.5%') / 4}}>
                <TouchableOpacity onPress={() => { props.gotosuncategoryfun(props.item) }} style={{ ...StylesGloble.catView, alignContent: "center", justifyContent: "center", backgroundColor: "#F5F9EF" }} >
                    {
                        (props.item.image != '' || props.item.image != null) ? (
                            <Image source={{ uri: props.item.image }} style={{ height: 78, width: 79, }} />
                        ) : (
                            <Image source={{ uri: imagePath.product_deflt_img }} style={{ height: 78, width: 79 }} />
                        )
                    }

                </TouchableOpacity>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    Textcass: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: "600",

    },
    textview: {
        position: "absolute",
        left: 50,
        top: 15,
    },
    backimg: {
        width: 20,
        height: 20
    },
    searchview: {
        position: "absolute",
        top: 15,
        right: 10
    }

})

export default CategoryComp;
