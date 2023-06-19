/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
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
import Messages from './pages/Messages';
import colors from './styles/colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

function App() {

  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    })
  }, [])

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

      {!userSession ? (
        // <Stack.Screen
        //   name='AuthStack'
        //   component={AuthStack}
        //   options={{ headerShown: false }} />
        // {AuthStack()}
        <AuthStack />
      ) : (
        <Stack.Navigator >
          <Stack.Screen
            name='MessagesScreen'
            component={Messages}
            options={{
              title: 'dertler', headerTintColor: colors.darkgreen, headerRight: () => (<Icon
                name="logout"
                size={30}
                color={colors.darkgreen}
                onPress={() => auth().signOut()} />
              ),
            }}
          />
        </Stack.Navigator>
      )}
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}


export default App;
