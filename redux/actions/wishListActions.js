import {wishList} from "../slices/wishListSlice";
import {store} from "../../store/store";
import AppStorage from "../../helpers/AppStorage";
import axios from "axios";
import AppURL from "../../api/AppURL";
const {actions: slices} = wishList;

export const setWishListAction = () => {
    const headers = {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization' : `Bearer ${AppStorage.getToken()}`
    }
    axios.get(AppURL.getFavouriteList, {headers: headers})
        .then(res => {
            store.dispatch(slices.setWishList(res.data))
        })
        .catch()

}
