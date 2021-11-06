import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AuthNavigator from './AuthNatigator';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function AppNavigator(props) {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                  name="Home"
                  component={HomeScreen}
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
    );
}

export default AppNavigator;