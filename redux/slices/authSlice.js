// import {createSlice} from "@reduxjs/toolkit";
// import AppStorage from "../../helpers/AppStorage";
//
// export const authSlice = createSlice({
//     name: "auth",
//     initialState: {
//         isAuth: !!AppStorage.getToken(),
//         access_token: AppStorage.getToken(),
//         user: AppStorage.getUser(),
//     },
//     reducers: {
//         setLogin(state, action) {
//             state.isAuth = true;
//             state.access_token = action.payload.access_token;
//             state.user = action.payload.user;
//         },
//         setLogout(state, action) {
//             state.isAuth = !!AppStorage.getToken();
//             state.access_token = AppStorage.getToken();
//             state.user = AppStorage.getUser();
//         },
//
//         setUser(state, action) {
//             state.user =  AppStorage.getUser();
//         }
//     }
// })
