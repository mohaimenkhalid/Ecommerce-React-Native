import {createSlice} from "@reduxjs/toolkit";

export const wishList = createSlice({
    name: 'wishList',
    initialState: {
        items: [],
    },
    reducers: {
        setWishList(state, action) {
            state.items = action.payload;
        }
    }
});
