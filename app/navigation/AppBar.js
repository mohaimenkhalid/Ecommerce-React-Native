import React, {useEffect} from "react";
import { HStack, IconButton, Icon, Text, Box, StatusBar, Badge, View } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import {useDispatch, useSelector} from "react-redux";
import { useNavigation } from '@react-navigation/native';
import {getCartAction} from "../../redux/actions/cartActions";

function AppBar({pageTitle}){
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items)

    useEffect(() => {
        dispatch(getCartAction())
    }, [])

  return (
    <>
        <StatusBar backgroundColor="#3700B3" barStyle="light-content" />

        <Box safeAreaTop backgroundColor="#6200ee" />

        <HStack bg='#5400ee' px="1" py="3" justifyContent='space-between' alignItems='center'>
          <HStack space="4" alignItems='center'>
            <IconButton onPress={() => alert("Done")} icon={<Icon size="sm" as={<MaterialIcons name='menu' />} color="white" />} />
            <Text color="white" fontSize="20" fontWeight='bold'>{pageTitle && pageTitle}</Text>
          </HStack>
          <HStack space="2">
            <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' color="white" />} />
              <IconButton icon={<Icon as={<MaterialIcons name='shopping-cart' />}
                                      size='sm' color="white" />}
                onPress={() => navigation.navigate("CartDetails")}
              />
              <View rounded="full" style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 30,
                  height: 23,
                  padding: 0,
                  fontSize: 10,
                  backgroundColor: "red",
                  position: "absolute",
                  left: 73,
                  top: -5
              }}>
                  <Text style={{color: "white"}}>{cart.length}</Text>
              </View>

            <IconButton icon={<Icon as={<MaterialIcons name='search' />}
            color="white" size='sm'  />} />
            <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
          </HStack>
        </HStack>

    </>
  )
}

export default AppBar;
