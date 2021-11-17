import React from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import { NativeBaseProvider } from "native-base";
import { store } from "./store/store"
import {Provider} from "react-redux";
export default function App() {
  return (
      <Provider store={store}>
        <NativeBaseProvider>
          <AppNavigator />
        </NativeBaseProvider>
      </Provider>
  );
}
