
import { SET_CATEGORY_DATA } from './CategoryActionsTypes';

import ApiDataService from "../../services/Apiservice.service";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const setcategoryData = () => async (dispatch) => {
     try {
          AsyncStorage.getItem('UserBase', (err, credentials) => {
               let  UserBase =  JSON.parse(credentials);
               dispatch({ type:SET_CATEGORY_DATA });
               let url = 'categories?order=DESC&order_by=id&row_count=50&parent_id=0&token='+UserBase.userToken;
               ApiDataService.Getapi(url).then(response =>{
                    let alldata = response.data;
                    let newdata = alldata.filter((item)=>item.active=='1') 
                    let secoundnewdata = newdata.filter((item)=>item.sub_categories > 0) 
                    let listdata = {
                         data : secoundnewdata,
                         row_count:24,
                         page: 1
                    } 
                    
                    dispatch({ type:SET_CATEGORY_DATA, payload: listdata });
               });
          })
     } catch (error) {
          let datayt = null
          dispatch({ type:SET_CATEGORY_DATA, payload: datayt });
     }
};


