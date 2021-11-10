import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View, AspectRatio, Box, Button} from "native-base";
import {getProductDetails} from "../api/request/product";
import Heading from "native-base/src/components/primitives/Heading/index";
import {StyleSheet} from "react-native";
import {flex} from "styled-system";

const ProductDetailsScreen = ({route}) => {
    const [product, setProduct] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        loadProductDetails(route.params.slug)
    }, []);


    const loadProductDetails = async (slug) => {
        setLoading(true)
        const response = await getProductDetails(slug)
        setProduct(response.data)
        setLoading(false)
        console.log(response.data)
    }
    return (
        <ScrollView>
            {
                loading ? <Text>Loading...</Text> :
                    <>
                        <View>
                            <AspectRatio ratio={16 / 16}>
                                <Image
                                    source={{
                                        uri: product.image_path
                                    }}
                                    alt="image"
                                />
                            </AspectRatio>
                        </View>

                        <View m="2">
                            <View shadow={2}
                              style={styles.productDetailsCard}
                            >
                                <Heading py="5" size="md">
                                    {product.name}
                                </Heading>
                                <View>
                                    <Text>{product.category && product.category.name}</Text>
                                </View>
                                <View>
                                    {
                                        product.special_price ?
                                            <>
                                                <Text>Tk. {product.price}</Text>
                                                <View>
                                                    <Text>Tk. {product.special_price}</Text>
                                                    <Text> You Save TK. { product.price - product.special_price}</Text>
                                                </View>
                                            </>
                                             :
                                            <Text>Tk. {product.price}</Text>
                                    }

                                </View>
                                <Heading py="5" size="md">
                                    Description
                                </Heading>
                                <Text fontWeight="400">
                                    {product.product_details && product.product_details.description}
                                </Text>
                            </View>
                        </View>
                    </>
            }

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    productDetailsCard: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10
    },
    categoryBadge: {
        backgroundColor: "#fdf2f8",
        padding: 10
    }
})

export default ProductDetailsScreen;
