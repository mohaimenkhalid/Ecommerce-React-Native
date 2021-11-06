import React from 'react';
import { View, Text } from 'react-native';
import Screen from '../../component/layout/Screen';
import AppBar from '../../navigation/AppBar';

function LoginScreen(props) {
    return (
        <Screen>
             <AppBar pageTitle="Login" />
            <View>
              <Text>Login</Text>
            </View>
        </Screen>
    );
}

export default LoginScreen;