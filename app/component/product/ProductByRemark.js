import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getProductByRemark } from '../../api/request/product';
import {Flex} from 'native-base';
import ProductCard from './ProductCard';
import { useNavigation } from '@react-navigation/native';

function ProductByRemark({productsType}) {
    const navigation = useNavigation();
    const [products, setProducts] = useState([])
    useEffect(() => {
        loadProducts();
    }, [])
    const loadProducts = async () => {
        const response = await getProductByRemark(productsType); //latest product = 3
        setProducts(response.data)
        console.log(response.data)
    }

    const viewProductDetails = (product) =>{
        navigation.navigate("ProductDetails", {slug: product.slug, title: product.name})
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
                    return <ProductCard product={product} key={index} onPress={() => viewProductDetails(product)} />
                }) 
            }
            </Flex>
        </View>
    );
}

export default ProductByRemark;
