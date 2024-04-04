import { SET_SUBCATEGORY_DATA } from './SubcategoryActionsTypes';
import ApiDataService from "../../services/Apiservice.service";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const setsubcategoryData = (id) => async (dispatch) => {
     try {
          console.log('cateid',id)
          AsyncStorage.getItem('UserBase', (err, credentials) => {
               let  UserBase =  JSON.parse(credentials);
               dispatch({ type:SET_SUBCATEGORY_DATA });
               let url = 'categories?order=DESC&order_by=id&row_count=100&parent_id='+id+'&token='+UserBase.userToken;
               ApiDataService.Getapi(url).then(response =>{
                    let alldata = response.data;
                    let newdata = alldata.filter((item)=>item.active=='1')
                    let secoundnewdata = newdata.filter((item)=>item.products > 0) 
                    if(secoundnewdata.length > 0)
                    {
                         dispatch({ type:SET_SUBCATEGORY_DATA, payload: secoundnewdata });
                    }
                    else{
                        
                         dispatch({ type:SET_SUBCATEGORY_DATA, payload: null });
                    }
                  
               });
          })
     } catch (error) {
          let datayt = null
          dispatch({ type:SET_SUBCATEGORY_DATA, payload: datayt });
     }
};


