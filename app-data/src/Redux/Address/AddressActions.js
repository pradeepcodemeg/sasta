
import { SET_ADDRESS_DATA } from './AddressActionsTypes';

import ApiDataService from "../../services/Apiservice.service";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const setaddressData = () => async (dispatch) => {
     try {
          AsyncStorage.getItem('UserBase', (err, credentials) => {
               let  UserBase =  JSON.parse(credentials);
               dispatch({ type: SET_ADDRESS_DATA });
               let url = 'user-addresses?order=DESC&order_by=id&row_count=10&page=1&token='+UserBase.userToken+'&by_user_id='+UserBase.userID;
            
               ApiDataService.Getapi(url).then(response =>{
                    let data = response.data;
                    dispatch({ type: SET_ADDRESS_DATA, payload: data });
               });
          })
     } catch (error) {
          let datayt = null
          dispatch({ type:SET_ADDRESS_DATA, payload: datayt });
     }
};


