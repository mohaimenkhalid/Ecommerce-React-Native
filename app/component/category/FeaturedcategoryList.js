import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {getFeaturedCategory} from "../../api/request/category"
import FeaturedCategoryCard from './FeaturedCategoryCard';
import { Flex } from "native-base"
import { useNavigation } from '@react-navigation/native';

function FeaturedcategoryList(props) {
    const [featuredCategory, setFeaturedCategory] = useState([])
    const navigation = useNavigation();

    useEffect(() => {
        loadFeaturedCategory();
    }, [])
    
    const loadFeaturedCategory = async () => {
        const response = await getFeaturedCategory();
        setFeaturedCategory(response.data)
    }

    const detailsView = (category) => {
        navigation.navigate("CategoryProduct", {slug: category.slug, title: category.name})
    }
    return (
        <View>
            <Flex
            direction="row"
            wrap="wrap"
            _text={{
              color: "coolGray.800",
            }}
          >
            {
                featuredCategory && featuredCategory.map((category, index) => {
                    return <FeaturedCategoryCard 
                                category={category} 
                                key={index} 
                                onPress={() => detailsView(category)}
                            />
                }) 
            }
            </Flex>
        </View>
    );
}

export default FeaturedcategoryList;
