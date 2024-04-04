import React, { useEffect, useState, useContext } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text,ActivityIndicator,StyleSheet, ScrollView,Modal,FlatList,Image, TouchableOpacity,ImageBackground } from 'react-native';
import ButtonField  from './../../helper/ButtonField';
import { StylesGloble } from './../../helper/Globlecss';
import imagePath from './../../constants/ImagePath';
import HeaderComp from '../../Components/HeaderComp';
import TabItem from '../../helper/Tab';
import CategoryComp from '../../Components/CategoryComp';
import { setsubcategoryData } from './../../Redux/index';
import { useSelector, useDispatch } from 'react-redux';
import ApiDataService from "../../services/Apiservice.service";


const Category = ({ navigation,route }) => {

    const dispatch = useDispatch();
    const usaerstate = useSelector((state) => state.UserReducer.userData);
    const userID = usaerstate ? usaerstate.userID : null;
    const userToken = usaerstate ? usaerstate.userToken : null;

    const categorystate = useSelector((state) => state.CategoryReducer.data);
    const catlist =  categorystate?categorystate.data:null;
    const page=  categorystate?categorystate.page:null;
    const row_count=  categorystate?categorystate.row_count:null;
    const [pageLoad,setpageLoad ]= useState(page);
    const [categorieslist,setcategorieslist]=useState(catlist);
    const [Activeloading, setActiveloading] = useState(false);
    const [alldataupload,setalldataupload ]= useState(0);

    const gotosuncategoryfun = (data) =>{
        dispatch(setsubcategoryData(data.id))
        navigation.navigate('SubCategory',{data:data})
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
            <HeaderComp text={'All Categories'} navigation={navigation} type={'1'}/>
            <View style={{...StylesGloble.container,position:"relative",padding:5,paddingBottom:15,width:"100%"}}>
                {
                    (categorieslist)&&(
                        <FlatList
                            numColumns={4}
                            data={categorieslist}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) => <CategoryComp item={item} navigation={navigation}  gotosuncategoryfun={gotosuncategoryfun}/>}
                            keyExtractor={(item, index) => index}
                            style={{marginBottom:50}}
                            onEndReachedThreshold={0}
                            ListFooterComponent={renderFooter}
                        />  
                    )
                      
                } 
                <View style={{...StylesGloble.tabbarse}}>
                    <TabItem type="2" navigation={navigation}/>
                </View>
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
    }
});



export default Category;