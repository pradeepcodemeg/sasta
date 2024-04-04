
import {  SET_HOME_DATA } from './HomeActionsTypes';

import ApiDataService from "../../services/Apiservice.service";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const sethomeData = () => async (dispatch) => {
     try {
          AsyncStorage.getItem('UserBase', (err, credentials) => {
               let  UserBase =  JSON.parse(credentials);
               dispatch({ type: SET_HOME_DATA });
               //let url = 'home-data?user_id='+UserBase.userID+'&token='+UserBase.userToken;
               let url = 'home-data?user_id='+UserBase.userID;
               ApiDataService.Getapi(url).then(response =>{
                    let data = response.data;
                    let catdata = data?.categories.filter((item)=>item.active=='1') 
                    let secoundcatdata = catdata.filter((item)=>item.sub_categories > 0)
                    let newdata = {
                         best_deals: data.best_deals,
                         best_offers: data.best_offers,
                         categories: secoundcatdata,
                         mini_slider_images: data.mini_slider_images,
                         slider_images: data.slider_images,
                         top_trends: data.top_trends,
                         user_details: data.user_details
                    }
                    dispatch({ type: SET_HOME_DATA, payload: newdata });
               });
          })
     } catch (error) {
          let datayt = null
          dispatch({ type: SET_HOME_DATA, payload: datayt });
     }
};


