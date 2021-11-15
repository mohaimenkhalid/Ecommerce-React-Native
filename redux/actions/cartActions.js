import {store} from "../../store/store";
import {cartSlice} from "../slices/cartSlice";
import AppStorage from "../../storage/AppStorage";
import { success } from "../../app/component/ToastComponent"

const {actions: cartSlices} = cartSlice;

export const addToCart = (product) => async (dispatch) => {
    return await new Promise(async (resolve, reject) => {
        let cart = await AppStorage.getCart();
        let dataCart = cart !== null ? cart : [];
        let findCartItem = dataCart.find((p) => p.product_id === product.product_id);
        if (dataCart.length === 0 || !findCartItem) {
            dataCart.push(product)
        } else if (findCartItem) {
            product.subtotal += findCartItem.subtotal
            product.quantity += findCartItem.quantity
            dataCart.splice(
                dataCart.findIndex((p) => p.product_id === product.product_id),
                1,
                product
            )
        }
        AppStorage.setCartItem(dataCart)
        dispatch(getCartAction());
        resolve('success', true);
        console.log("Product added your cart successfully!")
    })
}

export const getCartAction = () => async (dispatch) => {
    let cart = await AppStorage.getCart();
    dispatch(cartSlices.setCart(cart))
}

export const updateCartAction = (productId, type) => {
    let cart = AppStorage.getCart();
    var dataCart = cart !== null ? JSON.parse(cart) : [];

    let findCartItem = dataCart.find((p) => p.product_id === productId)
    if (type === 'increment') {
        findCartItem.quantity++;
        findCartItem.subtotal += parseInt(findCartItem.price);
    } else if (type === 'decrement') {
        findCartItem.quantity--;
        findCartItem.subtotal -= parseInt(findCartItem.price);
    }

    let cartIndex = dataCart.findIndex((p) => p.product_id === productId);
    if (findCartItem.quantity === 0) {
        dataCart.splice(cartIndex, 1)
    } else {
        dataCart[cartIndex].quantity = findCartItem.quantity;
        dataCart[cartIndex].subtotal = findCartItem.subtotal;
    }
    AppStorage.setCartItem(dataCart)
    store.dispatch(() => getCartAction());
}

export const cartProductDelete = (productId) => {
    let cart = JSON.parse(AppStorage.getCart());
    let findCartItem = cart.find((p) => p.product_id === productId)
    if (cart && findCartItem) {
        let cartIndex = cart.findIndex((p) => p.product_id === productId);
        cart.splice(cartIndex, 1)
        AppStorage.setCartItem(cart)
        store.dispatch(() => getCartAction());
        console.log("Product removed from Cart!")
    } else {
        console.log("Something went wrong!")
    }

}

export const setCollapseAction = (response) => {
    store.dispatch(cartSlices.setCollapse(response))
}
