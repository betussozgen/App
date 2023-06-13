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

function App() {

  const checkDB = () => {

    const reference = database().ref('books/');
    reference.once('value')
      .then(snapshot => {
        const response = snapshot.val()
        console.log(response);
      });
  }

  const listenDB = () => {
    const reference = database().ref('books/1');
    reference.on('value', snapshot => {
      console.log(snapshot.val());
    });

  }


  return (
    <SafeAreaView>
      <Text>Hello Firebase</Text>
      <Button title="Check DB" onPress={checkDB} />
      <Button title="Listen DB" onPress={listenDB} />
    </SafeAreaView>
  );
}


export default App;
