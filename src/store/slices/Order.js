import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrderLists = createAsyncThunk('orders/get',async (params)=>{
    console.log(`params===>`)
    console.log(params.page)
    try {
        const res = await axios.get(`https://aliveztechnosoft.com/python-automations/GroceryApp/orders?order=DESC&order_by=id&row_count=10&page=${params.page}&token=test&includes=order_details,product_details,delivery_address,delivery_boy_details`,{
            // params:{
            //     page:params.page
            // }
        })
        console.log(res.data)
        return res.data
    } catch (error) {
        if(axios.isAxiosError(error) && error.response){
            console.log(response.data)
            throw new Error(response.data)
        }
    }
})


export const fetchOrdersLength = createAsyncThunk('orders/length',async()=>{
    try {
        const res = await axios.get(`https://aliveztechnosoft.com/python-automations/GroceryApp/orders?order=DESC&order_by=id&token=test&includes=order_details,product_details,delivery_address,delivery_boy_details`)
        console.log('res.data.length')
        console.log(res.data.length)
        return res.data.length
    } catch (error) {
        if(axios.isAxiosError(error) && error.response){
            console.log(response.data)
            throw new Error(response.data)
        }
    }
})

const initialState = {
    orderlength:null,
    orderlist:{pending:false,data:[],error:null}
}

const orderSlice = createSlice({
    name:'orders',
    initialState,
    reducers:{
        // add
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchOrderLists.pending,(state,action)=>{
            state.orderlist.pending = true
        })
        .addCase(fetchOrderLists.fulfilled,(state,action)=>{
            state.orderlist.pending = false
            state.orderlist.data = action.payload
        })
        .addCase(fetchOrderLists.rejected,(state,action)=>{
            state.orderlist.pending = false
            state.orderlist.error = action.payload
        })

        // orderlength
        .addCase(fetchOrdersLength.fulfilled,(state,action)=>{
            state.orderlength = action.payload
        })
    }
})


export default orderSlice.reducer