import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import FeaturedcategoryList from '../component/category/FeaturedcategoryList';
import Screen from '../component/layout/Screen';
import AppBar from '../navigation/AppBar';

function HomeScreen(props) {
    return (
        <Screen>
            <AppBar pageTitle="Home" />
            <ScrollView style={{padding: 10}}>
                <FeaturedcategoryList />
            </ScrollView>
        </Screen>
    );
}

export default HomeScreen;