import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {getFeaturedCategory} from "../../api/request/category"
import FeaturedCategoryCard from './FeaturedCategoryCard';
import { Flex } from "native-base"

function FeaturedcategoryList(props) {
    const [featuredCategory, setFeaturedCategory] = useState([])
    useEffect(() => {
        loadFeaturedCategory();
    }, [])
    const loadFeaturedCategory = async () => {
        const response = await getFeaturedCategory();
        setFeaturedCategory(response.data)
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
                    return <FeaturedCategoryCard category={category} key={index} />
                }) 
            }
            </Flex>
        </View>
    );
}

export default FeaturedcategoryList;