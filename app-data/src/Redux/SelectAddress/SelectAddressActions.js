
import { SET_SELECT_ADDRESS_DATA } from './SelectAddressActionsTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const setselectaddressData = () => async (dispatch) => {
     try {
          AsyncStorage.getItem('Selectaddress', (err, credentials) => {
               let  data =  JSON.parse(credentials);
               dispatch({ type: SET_SELECT_ADDRESS_DATA, payload: data });
          })
     } catch (error) {
          let datayt = null
          dispatch({ type:SET_SELECT_ADDRESS_DATA, payload: datayt });
     }
};


