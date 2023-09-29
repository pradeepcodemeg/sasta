import {  SET_ADDRESS_DATA } from './AddressActionsTypes';
const initialState = {
    data: null
};

export default AddressReducer = (state = initialState, action) => {
    
     switch (action.type) {
          case SET_ADDRESS_DATA:
               return {
                    ...state,
                    data: action.payload,
               };
          default:
          return state;
     }
};
