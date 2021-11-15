import React from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import { NativeBaseProvider } from "native-base";
import { store } from "./store/store"
import {Provider} from "react-redux";
import Toast from 'react-native-toast-message';

export default function App() {
  return (
      <Provider store={store}>
        <NativeBaseProvider>
          <AppNavigator />
          <Toast />
        </NativeBaseProvider>
      </Provider>
  );
}
