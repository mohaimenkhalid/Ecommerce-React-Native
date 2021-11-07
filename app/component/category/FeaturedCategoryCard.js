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
            width="23%"
            m="1%"
            shadow={1}
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
                <AspectRatio ratio={16 / 10}>
                <Image
                    source={{
                    uri: category.image,
                    }}
                    alt="image"
                />
                </AspectRatio>
            </Box>
            <Stack p="2">
                <Stack>
                <Center>
                <Heading size="xs">
                <Text
                    fontSize="xs"
                    fontWeight="700"
                    >
                    {category.name}
                </Text>
                </Heading>
                </Center>
                </Stack>
            </Stack>
        </Box>
    );
}

export default FeaturedCategoryCard;