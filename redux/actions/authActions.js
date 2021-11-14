import {authSlice} from "../slices/authSlice";
import {store} from "../../store/store";
import AppStorage from "../../helpers/AppStorage";
import axios from "axios";
import AppURL from "../../api/AppURL";
import {toast} from "react-toastify";
import {Redirect} from "react-router-dom";
import React from "react";
const {actions: authSlices} = authSlice;

//login actions
export const loginAction = (loginFormData) => {
        axios.post(AppURL.login, loginFormData)
            .then(res => {
                if(res.status === 200 && res.data.access_token) {
                    AppStorage.store(res.data.access_token, res.data.user)
                    store.dispatch(authSlices.setLogin(res.data))
                    toast.success("Login Successfully!");
                    return (<Redirect to="/" />)
                }else {
                    if(res.data.error) {
                        toast.error(res.data.error)
                    }
                    if(res.data.email && res.data.email.length > 0) {
                        toast.error(res.data.email[0])
                    }
                    if(res.data.password && res.data.password.length > 0) {
                        toast.error(res.data.password[0])
                    }
                }
            })
            .catch(error => {
                //console.log(error)
            })
}

//Logout actions
export const logoutAction = () => {
    AppStorage.clear();
    store.dispatch(authSlices.setLogout())
}

//Login from google
export const loginWithGoogle = (loginResponseData, socialAuthService) => {
    if(loginResponseData.tokenId) {
        axios.post(AppURL.socialLogin, {socialAuthResponse: loginResponseData.profileObj, 'socialAuthService': socialAuthService})
            .then(res=> {
                console.log(res);
                if(res.status === 200 && res.data.access_token) {
                    AppStorage.store(res.data.access_token, res.data.user)
                    store.dispatch(authSlices.setLogin(res.data))
                    toast.success("Login Successfully!");
                    return (<Redirect to="/" />)
                }
            })
            .carch(err => console.log(err))
    }
}

export const setUserDetails = (user) => {
    AppStorage.setUser(user);
    store.dispatch(authSlices.setUser(user));
}
