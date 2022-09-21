import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'


export const AuthSlice= createSlice({
name:"auth",
initialState:{
     auth:false,
     username:"",
     password:""
},
reducers:{
     
    userLogin:(state,action)=>{
        state.username = action.payload.username
        state.password = action.payload.password
        localStorage.setItem("currentUser",`${state.username} : ${state.password}`);
    }
   }
})


export const authActions = AuthSlice.actions