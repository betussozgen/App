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

function App() {

  const signUp = () => {

    auth().createUserWithEmailAndPassword(
      'jane.doe@example.com',
      'SuperSecretPassword!',
    )
      .then(res => console.log(res))
      .catch(err => console.log(err));

  };

  const signIn = () => {
    auth().signInWithEmailAndPassword(
      'jane.doe@example.com',
      'SuperSecretPassword!',
    )
      .then(res => console.log('Signed in.'))
      .catch(err => console.log(err));

  };

  const signOut = () => {
    auth()
      .signOut()
      .then(res => console.log('Signed out.'))
      .catch(err => console.log(err));
  };

  const CheckOut = () => {
    const user = auth().currentUser;
    console.log(user)
  }

  return (
    <SafeAreaView>
      <Text>Hello Firebase</Text>
      <Button title="Sign In" onPress={signIn} />
      <Button title="Sign Up" onPress={signUp} />
      <Button title="Sign Out" onPress={signOut} />
      <Button title="Check User" onPress={CheckOut} />
    </SafeAreaView>
  );
}


export default App;
