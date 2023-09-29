import React, { useEffect, useRef, useState } from 'react'
import { Text,TextInput,StyleSheet,View,TouchableOpacity,Modal,Image,Platform,PermissionsAndroid,ImageBackground} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import imagePath from '../constants/imagePath';
import ApiDataService from "../services/Apiservice.service";

const ImagePicker = require('react-native-image-picker');

const Uploadimage= (props) => {
    const ImageUploadincamera = async () =>{
       const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Camera Permission',
                message: 'App needs access to your camera' +'so you can take awesome pictures.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            let options = {
                base64: true,
                allowsEditing: false,
                includeBase64: true
        
            };
            ImagePicker.launchCamera(options, res => {
                if (res.didCancel) {
                    console.log('User cancelled image picker')
                }
                else if (res.error) {
                    console.log('ImagePicker Error: ', res.error)
                }
                else if (res.customButton) {
                    console.log('User tapped custom button: ', res.customButton)
                }
                else {
                  
                    addinserverfun(res);
                }
            });
    
        } 
        else {
            console.log('Camera permission denied');
        }
            
        
  }
  const ImageUploadingallery = async () =>{
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Camera Permission',
                message:'App needs access to your camera' + 'so you can take awesome pictures.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            let options = {
                base64: true,
                allowsEditing: false,
                includeBase64: true
        
            };
            ImagePicker.launchImageLibrary(options, res => {
                if (res.didCancel) {
                    console.log('User cancelled image picker')
                }
                else if (res.error) {
                    console.log('ImagePicker Error: ', res.error)
                }
                else if (res.customButton) {
                    console.log('User tapped custom button: ', res.customButton)
                }
                else {
                    addinserverfun(res);
                }
            });
        } 
        else {
            console.log('Camera permission denied');
        }
       
    }
    const addinserverfun = async (source) =>{
        props.closeimagepopup(2,source);
    }

    return<View >
           <Modal  animationType="slide" transparent={true} visible={true}>
                <View style={{   height: '100%',  marginTop: 'auto',position:"relative",  borderTopStartRadius: 30,borderTopEndRadius:30, alignItems: "center", paddingBottom: 50, borderColor:"#a5abab14",borderWidth:5,}}>
                    <TouchableOpacity style={{position: 'absolute',bottom: 0,width:'110%',height:"100%"}} onPress={() =>{
                         props.closeimagepopup(1,'') }}>
                        <View  ></View>
                    </TouchableOpacity>
                    <View style={{position: 'absolute',bottom: -5,left:-10,width:"110%",borderTopRadius:50,height:130,backgroundColor:"#ffffff",borderColor:"#a5abab14",borderWidth:5,}}>  
                        <ImageBackground style={{height:130,width:"100%",borderTopRadius:50,backgroundColor:"#ffffff"}} source={imagePath.Uploadimgback} >
                            <View style={StylesFirst.photoview}>
                                <View style={StylesFirst.photosec}> 
                                    <TouchableOpacity onPress={() =>{
                                            ImageUploadingallery();
                                        }}>
                                        <Image style={StylesFirst.photoicon}   source={imagePath.uploadgallery}/>
                                    </TouchableOpacity>
                                    <Text style={{...StylesFirst.phottext,color:"#000000"}}>Select Photo</Text>
                                </View>
                                <View style={StylesFirst.photosec}>
                                    <TouchableOpacity onPress={() =>{ ImageUploadincamera(); }}>
                                        <Image style={StylesFirst.photoicon}   source={imagePath.uploadcam}/>
                                    </TouchableOpacity>
                                    <Text style={{...StylesFirst.phottext,color:"#000000"}}>Camera</Text>
                                </View>
                            </View>
                        </ImageBackground> 
                    </View>
                    
                </View>
            </Modal>
       
    </View>;
  
}

export const StylesFirst = StyleSheet.create({
    footerdv:{
        width:"100%",
        height:60,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
        flexDirection: 'row', 
        alignItems:'center', 
    },
    bottomButtons: {
        width:"20%",
        alignItems:'center', 
    },
    footerText: {
        color:'#000000',
        fontWeight:'600',
        alignItems:'center',
        fontFamily:'Poppins-Regular',fontSize:18,
    },
    photoview:{
        flexDirection: 'row-reverse', 
        paddingTop:35,
        paddingBottom:25,
    },
    photosec:{
        width:"50%",
        height:"100%",
        alignItems:"center"
    },
    photoicon:{
        width :30,
        height :30,
    },
    phottext:{
        alignItems:"center",
        fontWeight:'600',
        color:"#000000",
        marginTop:15
    },
})

export default Uploadimage