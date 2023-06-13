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

  const setDB = () => {
    const reference = database().ref('car/rentable');
    reference.set({
      brand: 'Audi',
      model: 'A8',
      price: 128,
    })
  }


  const updateDB = () => {
    const reference = database().ref('car/rentable');
    reference.update({
      model: 'A3',

    })

  }


  const pushDB = () => {
    const reference = database().ref('car/rentable');
    reference.push({
      brand: 'Passat',
      model: '98',
      price: 111,
    })
  }

  return (
    <SafeAreaView>
      <Text>Hello Firebase</Text>
      <Button title="Check DB" onPress={checkDB} />
      <Button title="Listen DB" onPress={listenDB} />
      <Button title="Set DB" onPress={setDB} />
      <Button title="Update DB" onPress={updateDB} />
      <Button title="Push DB" onPress={pushDB} />
    </SafeAreaView>
  );
}


export default App;
