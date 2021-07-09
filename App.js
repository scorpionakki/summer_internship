import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from "expo-app-loading";
import { useFonts} from "expo-font";
import MealsNavigator from './navigation/MealsNavigator';

export default function App() {

  let [fontsLoaded] =  useFonts({
    'open-sans': require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  

  if (!fontsLoaded) {
    //This AppLoading comes in handy when you want to load something before the app starts in our case its the font. startAsync is a handler provided by expo itself so the value has to be a function and which returns a promise.
    return (
      <AppLoading/>
    );
  }

  return (
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
