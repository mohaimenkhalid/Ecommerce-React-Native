import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View, AspectRatio, Box, Button} from "native-base";
import {getProductDetails} from "../api/request/product";
import Heading from "native-base/src/components/primitives/Heading/index";
import {StyleSheet, Pressable} from "react-native";
import Modal from "react-native-modal";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const ProductDetailsScreen = ({route}) => {
    const [product, setProduct] = useState('');
    const [loading, setLoading] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

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
                                <View  style={styles.gridContainer}>
                                    <View>
                                        <Text style={styles.categoryBadge}>{product.category && product.category.name}</Text>
                                    </View>
                                    <Pressable
                                        onPress={toggleModal}
                                    >
                                        <Text style={styles.addToCartButton}>Add To Cart</Text>
                                    </Pressable>
                                    <Modal isVisible={isModalVisible} style={{ margin: 0 }}>
                                        <View style={styles.cardModalPanel}>
                                            <View style={styles.cardHeader}>
                                                <View style={styles.closeBtn}>
                                                    <Pressable
                                                        onPress={toggleModal}
                                                    >
                                                        <MaterialCommunityIcons
                                                            name='close'
                                                            size={30}
                                                        />
                                                    </Pressable>
                                                </View>
                                            </View>
                                            <View style={styles.cardBody}>
                                                <Image
                                                    source={{
                                                        uri: product.image_path
                                                    }}
                                                    alt="image"
                                                />
                                            </View>
                                        </View>
                                    </Modal>
                                </View>

                                <Heading py="5" size="md">
                                    {product.name}
                                </Heading>
                                <View>
                                    {
                                        product.special_price ?
                                            <>
                                                <Text fontSize="xl" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>Tk. {product.price}</Text>
                                                <View style={styles.gridContainer}>
                                                    <Text fontSize="3xl" color="danger.600" fontWeight="700">৳{product.special_price}</Text>
                                                    <Text > You Save ৳ { product.price - product.special_price}</Text>
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
                        <View style={styles.floatCart}>
                            <Text>Test</Text>
                        </View>
                    </>
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    productDetailsCard: {
        backgroundColor: "#fff",
        padding: 30,
        borderRadius: 10
    },
    categoryBadge: {
        fontSize: 14,
        fontWeight: "700",
        color: "coral",
        backgroundColor: "oldlace",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20
    },
    gridContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    addToCartButton: {
        fontSize: 14,
        fontWeight: "700",
        color: "white",
        backgroundColor: "red",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20
    },
    cardModalPanel: {
        flex: 1,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#fff",
        width: "100%",
        margin: 0,
        height: "60%",
        borderRadius: 10
    },
    cardHead: {
        flex: 1,
        height: 10,
        backgroundColor: "red"
    },
    closeBtn: {
        position: "absolute",
        top: 5,
        right: 0
    },
    cardBody: {
        flex: 1,
        position: "relative",
        height: "100%",
        width: "100%",
        marginVertical: 10
    }
})

export default ProductDetailsScreen;
