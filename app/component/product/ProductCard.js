import React from 'react';
import {
    Box,
    Heading,
    AspectRatio,
    Image,
    Text,
    Center,
    HStack,
    Stack,
    Flex,
    NativeBaseProvider, Pressable,
} from "native-base"

function ProductCard({ product, onPress }) {
    return (
        <>
            <Pressable
                width="47.9%"
                m="1%"
                onPress={onPress}
            >
            <Box
            overflow="hidden"
            borderColor="coolGray.100"
            width="100%"
            minHeight="300"
            borderWidth="1"
            m="1"
            shadow={1}
            
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
            <Box>
                <AspectRatio ratio={16 / 16}>
                <Image
                    source={{
                    uri: product.image_path,
                    }}
                    alt="image"
                />
                </AspectRatio>
            </Box>
            <Stack p="2" space={3}>
                <Stack space={2} textAlign="center">
                <Center>
                <Heading size="xs" ml="-1">
                    {product.name}
                </Heading>
                <Heading mt="3">
                    <Text
                        fontSize="lg"
                        _light={{
                        color: "warning.600",
                        }}
                        fontWeight="700"
                        ml="-0.5"
                        mt="-1"
                    >
                        ৳{product.price}
                    </Text>
                </Heading>
                </Center>
                </Stack>
            </Stack>
        </Box>
            </Pressable>
        </>
    );
}

export default ProductCard;
