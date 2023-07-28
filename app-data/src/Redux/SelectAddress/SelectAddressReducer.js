import {  SET_SELECT_ADDRESS_DATA } from './SelectAddressActionsTypes';
const initialState = {
    data: null
};

export default SelectAddressReducer = (state = initialState, action) => {
    
     switch (action.type) {
          case SET_SELECT_ADDRESS_DATA:
               return {
                    ...state,
                    data: action.payload,
               };
          default:
          return state;
     }
};
