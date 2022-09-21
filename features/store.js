import { configureStore } from '@reduxjs/toolkit'
//import rootReducer from './reducers'  reducerlar import edilecek
import {AuthSlice} from './Slices/AuthSlice';

const store = configureStore({
  //reducer: rootReducer,  buraya reducerlar geçilecek
  reducer:{
    authHandle:AuthSlice.reducer
  },
})
export default store;