import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getStorageToken = () => {
    const token = localStorage.getItem('token')
    return token
}
export const fetchUsers = createAsyncThunk('userlist/fetch',async(params)=>{
    const {search,page} = params
    console.log('hey')
    try {
        let response;
        if(search.length > 0){
            response = await axios.get(`https://aliveztechnosoft.com/python-automations/GroceryApp/users?search=${search}&order=DESC&order_by=id&row_count=10&page=${page}&includes=address&token=test`)
        }
        else{
            response = await axios.get(`https://aliveztechnosoft.com/python-automations/GroceryApp/users?order=DESC&token=test&row_count=10&page=${page}&includes=address`)
        }
        return response.data
        
    } catch (error) {
        console.log('fetchuser error')
        console.log(error)
    }
})
export const editUser = createAsyncThunk('user/edit',async(id)=>{
    try {
        const res = await axios.get(`https://aliveztechnosoft.com/python-automations/GroceryApp/users/${id}?token=test&includes=address`)
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log('edit user in user slice error')
        console.log(error)
    }
})
export const getSingleUser = createAsyncThunk('user/single',async(id)=>{
    try {
        const res = await axios.get(`https://aliveztechnosoft.com/python-automations/GroceryApp/users/${id}?token=test&includes=address`)
        return res.data
    } catch (error) {
        console.log('edit user in user slice error')
        console.log(error)
    }
})
export const addNewUser = createAsyncThunk('user/addnewuser',async(credential)=>{
    console.log('add user credentials')
    console.log(credential)
    try {
        const res = await axios.post('https://aliveztechnosoft.com/python-automations/GroceryApp/users',credential)
        console.log(res.data)
        if (res.data.status === 1) {
            console.log(res.data)
            return {msg:res.data.msg}
        } else {
            console.log('ok error')
            // Handle a login error case
            return { error: res.data.msg };
        }
    } catch (error) {
        throw error
    }
})
export const updateExistingUser = createAsyncThunk('user/updates',async(user)=>{
    const res = await axios.post('https://aliveztechnosoft.com/python-automations/GroceryApp/users?token=test',user)
    console.log(res.data)
})
export const toggleBlockUnblockUser = createAsyncThunk('user/block',async(userId)=>{
    try {
        console.log(userId)
        const res = await axios.post('https://aliveztechnosoft.com/python-automations/GroceryApp/users?token=test',userId)
        console.log('toggle block user')
        console.log(res.data)
        if (res.data.status === 1) {
            return { msg: res.data };
        } else {
            // Handle a login error case
            return { error: res.data.msg };
        }
    }   catch (error) {
        throw error
    }
})




const initialState = {
    userlist:{pending:false,users:[],error:null},
    editUser:{pending:false,user:null,error:null},
    singleUser:{pending:false,user:null,error:null},
    addNewUser:{pending:false,success:false,error:null},
    toggleUserBlockStatusAction:{pending:false,success:false,error:null},
}

const userSlice = createSlice({
    name:'Users',
    initialState,
    reducers:{
        // add reducers
        clearEditUser: (state) => {
            state.editUser.pending = false;
            state.editUser.error = null;
            state.editUser.user = null;
          },
          clearAddUser: (state) => {
            state.addNewUser.pending = false;
            state.addNewUser.error = null;
            state.addNewUser.success = false;
          },
          CleartoggleUserBlocksSliceAction: (state) => {
            state.toggleUserBlockStatusAction.pending = false;
            state.toggleUserBlockStatusAction.error = null;
            state.toggleUserBlockStatusAction.success = false;
          },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUsers.pending,(state,action)=>{
            state.userlist.pending = true
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.userlist.pending = false
            state.userlist.users = action.payload
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.userlist.pending = false
            state.userlist.error = action.payload
        })

        // get user to edit case
        .addCase(editUser.pending,(state,action)=>{
            state.editUser.pending = true
        })
        .addCase(editUser.fulfilled,(state,action)=>{   
            state.editUser.pending = false
            state.editUser.user = action.payload
        })
        .addCase(editUser.rejected,(state,action)=>{
            state.editUser.pending = false
            state.editUser.error = action.payload
        })

        // get single user to edit case
        .addCase(getSingleUser.pending,(state,action)=>{
            state.singleUser.pending = true
        })
        .addCase(getSingleUser.fulfilled,(state,action)=>{   
            state.singleUser.pending = false
            state.singleUser.user = action.payload
        })
        .addCase(getSingleUser.rejected,(state,action)=>{
            state.singleUser.pending = false
            state.singleUser.error = action.payload
        })

        // add new user
        .addCase(addNewUser.pending,(state,action)=>{
            state.addNewUser.pending = true
        })
        .addCase(addNewUser.fulfilled,(state,action)=>{   
            state.addNewUser.pending = false
            if (action.payload.msg) {
                state.addNewUser.success = true;
              } else {
                console.log(`===>this is error ${action.payload.error}`)
                state.addNewUser.error = action.payload.error;
              }
        })
        .addCase(addNewUser.rejected,(state,action)=>{
            state.addNewUser.pending = false
            state.addNewUser.error = action.payload.error
        })


        // toggle block status
        .addCase(toggleBlockUnblockUser.pending,(state,action)=>{
            state.addNewUser.pending = true
        })
        .addCase(toggleBlockUnblockUser.fulfilled, (state, action) => {
            state.toggleUserBlockStatusAction.pending = false;
            if (action.payload.msg) {
              state.toggleUserBlockStatusAction.success = true;
            } else {
              state.toggleUserBlockStatusAction.error = action.payload.error;
            }
          })
          .addCase(toggleBlockUnblockUser.rejected, (state, action) => {
            state.toggleUserBlockStatusAction.pending = false;
            state.toggleUserBlockStatusAction.error = action.error.message;
          });
    }
})
export const {clearEditUser,clearAddUser,CleartoggleUserBlocksSliceAction} = userSlice.actions
export default userSlice.reducer