/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  SafeAreaView,
  Text,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from "react-native-flash-message";

import Login from './pages/auth/Login/Login';
import Sign from './pages/auth/Sign/Sign';

const Stack = createNativeStackNavigator();

function App() {
  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='LoginPage' component={Login} />
        <Stack.Screen name='SignPage' component={Sign} />
      </Stack.Navigator>

    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='AuthStack' component={AuthStack} />
        {/* <Stack.Screen name='SignPage' component={Sign} /> */}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}


export default App;
