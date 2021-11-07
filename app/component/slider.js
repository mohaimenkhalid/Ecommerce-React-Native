import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
    Box,
    Heading,
    Icon,
    AspectRatio,
    Image,
    Center,
    HStack,
    Stack,
    NativeBaseProvider
  } from 'native-base';

function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [products, setProducts] = useState([
        {
            title:"Item 1",
            text: "Text 1",
        },
        {
            title:"Item 2",
            text: "Text 2",
        },
        {
            title:"Item 3",
            text: "Text 3",
        },
        {
            title:"Item 4",
            text: "Text 4",
        },
        {
            title:"Item 5",
            text: "Text 5",
        },
      ])

      const _renderItem = ({item,index}) =>{
        return (
            <Box
            rounded="lg"
            overflow="hidden"
            width="72"
            shadow={1}
            _light={{ backgroundColor: 'gray.50' }}
            _dark={{ backgroundColor: 'gray.700' }}
          >
            <Box>
              <AspectRatio ratio={16 / 9}>
                <Image
                  source={{
                    uri:
                      'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                  }}
                  alt="image"
                />
              </AspectRatio>
              <Center
                bg="violet.500"
                _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
                position="absolute"
                bottom={0}
                px="3"
                py="1.5"
              >
                PHOTOS
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  The Garden City
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{ color: 'violet.500' }}
                  _dark={{ color: 'violet.300' }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  The Silicon Valley of India.
                </Text>
              </Stack>
              <Text fontWeight="400">
                Bengaluru (also called Bangalore) is the center of India's high-tech
                industry. The city is also known for its parks and nightlife.
              </Text>
              <HStack alignItems="center" space={4} justifyContent="space-between">
                <HStack alignItems="center">
                  <Text color="gray.500" fontWeight="400">
                    6 mins ago
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>

        )
    }


    return (
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
            <Carousel
                layout={"default"}
                ref={ref => this.carousel = ref}
                data={products}
                sliderWidth={300}
                itemWidth={300}
                renderItem={_renderItem}
                onSnapToItem = { index => setActiveIndex(index) } />
        </View>
    );
}

export default Slider;