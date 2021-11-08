import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from '../screens/HomeScreen';
import CategoryProductScreen from '../screens/CategoryProductScreen';


const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen 
            name="CategoryProduct" 
            component={CategoryProductScreen}
            options={({route}) => ({title: route.params.title})}
         />
    </Stack.Navigator>
);

export default HomeNavigator;