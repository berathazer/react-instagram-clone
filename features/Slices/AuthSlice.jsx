import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'


export const AuthSlice= createSlice({
name:"auth",
initialState:{
     auth:false,
     username:"",
     password:"",
     page:"home"
},
reducers:{
     
    userLogin:(state,action)=>{
        state.username = action.payload.username
        state.password = action.payload.password
        localStorage.setItem("currentUser",`${state.username} : ${state.password}`);
    },

    setCurrentPage:(state,action)=>{
        localStorage.setItem("currentPage",action.payload);
    }
   }
})


export const authActions = AuthSlice.actions