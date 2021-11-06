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
    NativeBaseProvider,
  } from "native-base"

function FeaturedCategoryCard({category}) {
    return (
        <Box
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.100"
            width="1/3"
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
            <Box>
                <AspectRatio ratio={16 / 16}>
                <Image
                    source={{
                    uri: category.image,
                    }}
                    alt="image"
                />
                </AspectRatio>
            </Box>
            <Stack p="2" space={3}>
                <Stack space={2} textAlign="center">
                <Center>
                <Heading size="xs" ml="-1">
                    {category.name}
                </Heading>
                </Center>
                </Stack>
            </Stack>
        </Box>
    );
}

export default FeaturedCategoryCard;