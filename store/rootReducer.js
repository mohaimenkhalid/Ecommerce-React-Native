import  {combineReducers} from "@reduxjs/toolkit"
import {authSlice} from "../redux/slices/authSlice";
import {cartSlice} from "../redux/slices/cartSlice";
import {wishList} from "../redux/slices/wishListSlice";

export const rootReducer =  combineReducers({
    // auth: authSlice.reducer,
    cart: cartSlice.reducer,
     //wishList: wishList.reducer
})
