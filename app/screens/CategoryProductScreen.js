import { View, Flex } from 'native-base';
import React, { useEffect, useState } from 'react';
import {ScrollView} from 'react-native'
import {getCategoryAndProductByCategory} from "../api/request/product"
import FeaturedCategoryCard from '../component/category/FeaturedCategoryCard';
import { useNavigation } from '@react-navigation/native';
import {
    Spinner,
    HStack,
    Heading,
    Center,
    NativeBaseProvider,
  } from "native-base"
import ProductCard from "../component/product/ProductCard";

function CategoryProductScreen({route}) {
    const natigation = useNavigation();

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadCategoryOrProduct(route.params.slug);
    }, []);

    const loadCategoryOrProduct = async (category_slug) => {
        setLoading(true)
        const response = await getCategoryAndProductByCategory(category_slug)

        if(response.data.response_type === 'product') {
            setProducts(response.data.data)
            setCategories([])
        } else {
            setCategories(response.data.data.single_children)
            setProducts([])
        }
        setLoading(false)
        console.log(response.data)
    }

    const detailsView = (category) => {
        natigation.push("CategoryProduct", {slug: category.slug, title: category.name})
    }

    return (
        <ScrollView>
            {loading ? 
                <Center mt="8">
                    <HStack space={2} alignItems="center">
                        <Spinner accessibilityLabel="Loading posts" />
                        <Heading color="primary.500" fontSize="lg">
                            Loading...
                        </Heading>
                    </HStack>
                </Center>
            :
            <Flex
            direction="row"
            wrap="wrap"
            _text={{
              color: "coolGray.800",
            }}
          >
            {
                products.length !== 0 ? 
                    products.map((product, index) => {
                        return <ProductCard product={product} key={index} />
                    }) 
                    :
                    categories.map((category, index) => {
                        return <FeaturedCategoryCard 
                                    category={category} 
                                    key={index} 
                                    onPress={() => detailsView(category)}
                                />
                    }) 
            }
            </Flex>
}
        </ScrollView>
    );
}

export default CategoryProductScreen;
