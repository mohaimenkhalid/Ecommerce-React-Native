import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View, AspectRatio, Box, Button} from "native-base";
import {getProductDetails} from "../api/request/product";
import Heading from "native-base/src/components/primitives/Heading/index";
import {StyleSheet, Pressable} from "react-native";
import Modal from "react-native-modal";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import {useToast} from "native-base"


const ProductDetailsScreen = ({route}) => {
    const toast = useToast()
    const [product, setProduct] = useState('');
    const [loading, setLoading] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
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
    }

    const addToCartSet = () => {
        let products = {
            'product_id' : product.id,
            'name' : product.name,
            'image' : product.image,
            'price' : product.price,
            'quantity' : quantity,
            'subtotal' : product.price * quantity,
            'description' : product.product_details ? product.product_details.short_description : '',
        }
        dispatch(addToCart(products))
            .then(res =>
                toast.show({
                    title: "Product added your cart successfully",
                    status: "success",
                    placement: "top",
                })
            );
    };
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
                                        <ScrollView style={styles.cardModalPanel}>
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
                                                <View style={styles.ImageContainer}>
                                                    <Image
                                                        style={{height: "100%", width: 150}}
                                                        source={{
                                                            uri: product.image_path
                                                        }}
                                                        alt="image"
                                                    />
                                                    <View style={{marginVertical: 30}}>
                                                        <Heading>{product.name}</Heading>
                                                        <Heading>৳{product.special_price}</Heading>
                                                    </View>
                                                </View>
                                                <View style={styles.quantityContainer}>
                                                    <Text>Quantity</Text>
                                                    <View style={styles.quantityHandlerWrapper}>
                                                        <Pressable
                                                            onPress={() => quantity > 1 && setQuantity(quantity - 1)}
                                                        >
                                                            <MaterialCommunityIcons
                                                                name='minus'
                                                                size={20}
                                                                style={{
                                                                    borderWidth: 1,
                                                                    borderColor: "#d1d1d1",
                                                                    paddingVertical: 2,
                                                                    paddingHorizontal: 8,
                                                                }}
                                                                color="#999797"
                                                            />
                                                        </Pressable>
                                                        <View style={{
                                                            borderWidth: 1,
                                                            borderColor: "#d1d1d1",
                                                            paddingVertical: 2,
                                                            paddingHorizontal: 8,
                                                        }}>
                                                            <Text>{quantity}</Text>
                                                        </View>
                                                        <Pressable
                                                            onPress={() => setQuantity(quantity + 1)}
                                                        >
                                                            <MaterialCommunityIcons
                                                                name='plus'
                                                                size={20}
                                                                style={{
                                                                    borderWidth: 1,
                                                                    borderColor: "#d1d1d1",
                                                                    paddingVertical: 2,
                                                                    paddingHorizontal: 8
                                                                }}
                                                                color="#999797"
                                                            />
                                                        </Pressable>
                                                    </View>
                                                </View>
                                            </View>
                                        </ScrollView>
                                        <View style={{
                                            position: "absolute",
                                            flex: 1,
                                            width: "100%",
                                            bottom: 0
                                        }}>
                                            <Button size="md" style={{backgroundColor: "red"}} onPress={() => addToCartSet()}>
                                                Add To Cart
                                            </Button>
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
        height: 50,
        backgroundColor: "red"
    },
    closeBtn: {
        top: 5,
        right: 5,
        position: "absolute"
    },
    cardBody: {
        flex: 1,
        marginVertical: 10,
    },
    ImageContainer: {
        flex: 1,
        height: 200,
        flexDirection: "row",
        alignContent: "flex-start",

    },
    quantityContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        borderWidth: 1,
        borderColor: "#ddd"
    },

    quantityHandlerWrapper: {
        flexDirection: "row",
    }
})

export default ProductDetailsScreen;
