import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getProductByRemark } from '../../api/request/product';
import {
    Box,
    Heading,
    Icon,
    AspectRatio,
    Image,
    Center,
    HStack,
    Flex,
    Stack,
    NativeBaseProvider
  } from 'native-base';
import ProductCard from './ProductCard';

function ProductByRemark({productsType}) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        loadproducts();
    }, [])
    const loadproducts = async () => {
        const response = await getProductByRemark(productsType); //latest product = 3
        setProducts(response.data)
        console.log(response.data)
    }
    return (
        <View>
            <Flex
            direction="row"
            wrap="wrap"
            _text={{
              color: "coolGray.800",
            }}
          >
            {
                products && products.map((product, index) => {
                    return <ProductCard product={product} key={index} />
                }) 
            }
            </Flex>
        </View>
    );
}

export default ProductByRemark;