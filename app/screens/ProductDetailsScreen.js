import React, {useEffect, useState} from 'react';
import {Text, View} from "native-base";
import {getProductDetails} from "../api/request/product";

const ProductDetailsScreen = ({route}) => {
    const [productDetails, setProductDetails] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        loadProductDetails(route.params.slug)
    }, []);


    const loadProductDetails = async (slug) => {
        setLoading(true)
        const response = await getProductDetails(slug)
        setProductDetails(response)
        setLoading(false)
    }
    return (
        <View>
            <Text>Testing</Text>
        </View>
    );
};

export default ProductDetailsScreen;
