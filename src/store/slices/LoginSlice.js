import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    signInUserCredentials:{pending:false,user:null,error:null}
}

export const signInUser = createAsyncThunk("user/signin", async (credentials) => {
    console.log(credentials)
    try {
        const res = await axios.post('https://aliveztechnosoft.com/python-automations/GroceryApp/users', credentials);
        console.log(res.data)
        if (res.data.status === 1) {
            // Handle a successful login
            localStorage.setItem('token', res.data.token); // Store the token in local storage
            return { user: res.data };
        } else {
            // Handle a login error case
            return { error: res.data.msg };
        }
    } catch (error) {
        throw error;
    }
});

const loginSlice = createSlice({
    name:'signIn',
    initialState,
    reducers:{
        // add reducers
        clearActions : (state,action) => {
          state.signInUserCredentials.pending = false
          state.signInUserCredentials.user = null
          state.signInUserCredentials.error = null
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(signInUser.pending, (state) => {
            state.signInUserCredentials.pending = true;
          })
          .addCase(signInUser.fulfilled, (state, action) => {
            state.signInUserCredentials.pending = false;
            if (action.payload.user) {
              state.signInUserCredentials.user = true;
            } else {
              state.signInUserCredentials.error = action.payload.error;
            }
          })
          .addCase(signInUser.rejected, (state, action) => {
            state.signInUserCredentials.pending = false;
            state.signInUserCredentials.error = action.error.message;
          });
    }
})

export default loginSlice.reducer