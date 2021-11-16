import React from 'react';
import {ScrollView, StyleSheet, View, Text, Pressable} from "react-native";
import {Button, Image, Center, Heading} from "native-base"
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { updateCartAction } from "../../redux/actions/cartActions"

const CartScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items)
    const updateCartProduct = (productId, type) => {
        console.log(productId, type)
        dispatch(updateCartAction(productId, type))
    };
    return (
        <ScrollView style={styles.container}>
            {
                cart === null || cart.length === 0 &&
                <>
                    <Image source={ require("../../assets/empty-cart.png")} alt="image base" width={"100%"} height={400} />
                    <Center flex={1} px="3">
                        <Heading>Your Cart is Empty</Heading>
                        <Button colorScheme="tertiary" mt="3"
                                onPress={() => navigation.navigate("Home")}
                        >Continue Shopping
                        </Button>
                    </Center>
                </>
            }
            {
                cart && cart.map((cartItem, index) => {
                    return (
                        <View style={styles.card} key={index}>
                            <View style={styles.cardBody}>
                                <View style={styles.cartImage}>
                                    <Image source={{uri: cartItem.image_path}} alt="image base" width={"90%"} height={100} roundedTop="md" />
                                </View>
                                <View style={styles.cartContent}>
                                    <Text style={styles.cardTitle}>
                                        {cartItem.name}
                                    </Text>
                                    <Text style={styles.cartPrice}>$155</Text>
                                    <View style={styles.quantityHandlerWrapper}>
                                        <Pressable
                                            onPress={() => updateCartProduct(cartItem.product_id, 'decrement')}
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
                                            <Text>{cartItem.quantity}</Text>
                                        </View>
                                        <Pressable
                                            onPress={() => updateCartProduct(cartItem.product_id, 'increment')}
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
                        </View>
                    );
                })
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
        paddingHorizontal: 15
    },
    card: {
        backgroundColor: "white",
        flex: 1,
        marginVertical: 5,
        borderRadius: 10
    },
    cardBody: {
        padding: 15,
        flex: 1,
        flexDirection: "row",
    },

    cartImage: {
        width: "30%",
    },
    cartContent: {
        width: "70%"
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "700"
    },
    cartPrice: {
        fontSize: 18,
        fontWeight: "700",
        color: "#ea580c"
    },
    quantityHandlerWrapper: {
        flexDirection: "row",
        marginVertical: 10
    }
})

export default CartScreen;
