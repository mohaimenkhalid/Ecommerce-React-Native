import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from '../screens/HomeScreen';
import CategoryProductScreen from '../screens/CategoryProductScreen';
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CartScreen from "../screens/CartScreen";


const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen 
            name="CategoryProduct" 
            component={CategoryProductScreen}
            options={({route}) => ({title: route.params.title})}
         />
         <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
            options={({route}) => ({title: route.params.title})}
         />

        <Stack.Screen
            name="CartDetails"
            component={CartScreen}
            options={{title: "Cart Details"}}
        />
    </Stack.Navigator>
);

export default HomeNavigator;
