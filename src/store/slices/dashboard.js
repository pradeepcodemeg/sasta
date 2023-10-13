import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDashboardData = createAsyncThunk('dashboard/fetch',async()=>{
    try {
        const res = await axios.get('https://aliveztechnosoft.com/python-automations/GroceryApp/dashboard?token=test',{
        param:{
            token:'test'
        }
        })
        return res.data

    } catch (error) {
        if(axios.isAxiosError(error) && error.response){
            console.log(response.data)
            throw new Error(response.data)
        }
    }
})


const initialState = {
    dashboard:{pending:false,data:null,error:null}
}

const DashboardSlice = createSlice({
    name:'dashboard',
    initialState,
    reducers:{
        // add reducers 
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchDashboardData.pending,(state,action)=>{
            state.dashboard.pending = true
        })
        .addCase(fetchDashboardData.fulfilled,(state,action)=>{
            state.dashboard.pending = false
            state.dashboard.data = action.payload
        })
        .addCase(fetchDashboardData.rejected,(state,action)=>{
            state.dashboard.pending = false
            state.dashboard.error = action.payload
        })
    }
})

export default DashboardSlice.reducer