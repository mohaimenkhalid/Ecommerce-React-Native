import React from 'react';
import {
    View,
    Text,
    Input,
    ScrollView,
    Box,
    Heading,
    AspectRatio,
    Image,
    Center,
    HStack,
    Stack,
    NativeBaseProvider
} from "native-base";

const CheckoutScreen = () => {
    return (
        <ScrollView>
            <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700",
                }}
                _web={{
                    shadow: 2,
                    borderWidth: 0,
                }}
                _light={{
                    backgroundColor: "gray.50",
                }}
            >
            <Stack p="4" space={3}>
                <Heading size="sm" ml="-1">
                    Contact Details
                </Heading>
                <Stack space={2}>
                    <Input size="xs" placeholder="Enter Your Name" />
                </Stack>
                <Stack space={2}>
                    <Input size="xs" placeholder="Enter Phone No." />
                </Stack>
            </Stack>

            <Stack p="4" space={3}>
                <Heading size="sm" ml="-1">
                    Address
                </Heading>
                <Stack space={2}>
                    <Input size="xs" placeholder="Enter Your City" />
                </Stack>
                <Stack space={2}>
                    <Input size="xs" placeholder="Enter Your Area" />
                </Stack>
                <Stack space={2}>
                    <Input size="xs" placeholder="Enter Your Address" />
                </Stack>
            </Stack>
            </Box>
        </ScrollView>
    );
};

export default CheckoutScreen;
