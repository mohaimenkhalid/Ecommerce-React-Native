import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import FeaturedcategoryList from '../component/category/FeaturedcategoryList';
import Screen from '../component/layout/Screen';
import ProductByRemark from '../component/product/ProductByRemark';
import AppBar from '../navigation/AppBar';
import { Heading } from "native-base"

function HomeScreen(props) {
    return (
        <>
            <AppBar pageTitle="Home" />
            <ScrollView style={{padding: 10}}>
                <FeaturedcategoryList />
                <>
                    <View>
                        <Heading size="md"  mt="5" ml="2">
                            Latest Products
                        </Heading>
                    </View>
                    <ProductByRemark productsType="3" />

                    <View>
                        <Heading size="md"  mt="5" ml="2">
                            New Products
                        </Heading>
                    </View>
                    <ProductByRemark productsType="2" />

                    <View>
                        <Heading size="md"  mt="5" ml="2">
                            Featured Products
                        </Heading>
                    </View>
                    <ProductByRemark productsType="1" />
                </>
            </ScrollView>
        </>
    );
}

export default HomeScreen;