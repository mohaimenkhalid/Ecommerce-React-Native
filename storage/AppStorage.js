import * as SecureStore from 'expo-secure-store';

const store = (token, user) => {
    setToken(token)
    setUser(user)
}

const setToken = async token => {
    await SecureStore.setItemAsync("token", JSON.stringify(token))
}

const setUser = async user => {
    await SecureStore.setItemAsync("user_details", JSON.stringify(user))
}

const clear = async () => {
    await SecureStore.deleteItemAsync('token');
    await SecureStore.deleteItemAsync('user_details');
}

const getToken = async () => {
    return await JSON.parse(SecureStore.getItemAsync("token"));
}

const getUser = async () => {
    return await JSON.parse(SecureStore.getItemAsync("user_details"));
}

const getCart = async () => {
    let cart = await SecureStore.getItemAsync('cart');
    return  JSON.parse(cart);
}

const setCartItem = async (dataCart) => {
    await SecureStore.setItemAsync('cart', JSON.stringify(dataCart))
}

export default {
    store,
    clear,
    getToken,
    getUser,
    getCart,
    setCartItem
}

