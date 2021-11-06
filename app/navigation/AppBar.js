import React from "react";
import { HStack, IconButton, Icon, Text, Box, StatusBar } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

function AppBar({pageTitle}){
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
            <IconButton icon={<Icon as={<MaterialIcons name='shopping-cart' />} size='sm' color="white" />} />
            <IconButton icon={<Icon as={<MaterialIcons name='search' />}
            color="white" size='sm'  />} />
            <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
          </HStack>
        </HStack>

    </>
  )
}

export default AppBar;