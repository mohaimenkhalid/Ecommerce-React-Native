import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNatigator';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HomeNavigator from './HomeNatigator';


const Tab = createBottomTabNavigator();

function AppNavigator(props) {

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen 
                    name="Home"
                    component={HomeNavigator}
                    options={{
                        tabBarIcon: ({color, size}) => 
                        <MaterialCommunityIcons
                                name="home"
                                size={size}
                                color={color}
                            />,
                            headerShown: false
                    }}
                    />
                    <Tab.Screen 
                        name="Category"
                        component={AuthNavigator}
                        options={{
                            tabBarIcon: ({color, size}) => 
                            <MaterialCommunityIcons
                                name='format-list-bulleted'
                                size={size}
                                color={color}
                            />
                        }}
                    />
                    <Tab.Screen 
                        name="Search"
                        component={AuthNavigator}
                        options={{
                            tabBarIcon: ({color, size}) => 
                            <MaterialCommunityIcons
                            name='magnify'
                            size={size}
                            color={color}
                            />,
                        }}
                    />
                    <Tab.Screen 
                        name="Account"
                        component={AuthNavigator}
                        options={{
                            tabBarIcon: ({color, size}) => 
                            <MaterialCommunityIcons
                            name='account'
                            size={size}
                            color={color}
                            />
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default AppNavigator;