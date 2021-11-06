import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Screen from '../component/layout/Screen';
import AppBar from '../navigation/AppBar';

function HomeScreen(props) {
    return (
        <Screen>
            <AppBar pageTitle="Home" />
            <View>
              <Text>Home Screen</Text>
            </View>
        </Screen>
    );
}

export default HomeScreen;