import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text, Pressable} from "react-native";
import {Image} from "native-base"
import {MaterialCommunityIcons} from "@expo/vector-icons";

const CartScreen = () => {
    const [quantity, setQuantity] = useState(1);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardBody}>
                    <View style={styles.cartImage}>
                        <Image source={{uri: "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png"}} alt="image base" width={"90%"} height={100} roundedTop="md" />
                    </View>
                    <View style={styles.cartContent}>
                        <Text style={styles.cardTitle}>Polo Tshirt</Text>
                        <Text style={styles.cartPrice}>$155</Text>
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
            </View>
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
