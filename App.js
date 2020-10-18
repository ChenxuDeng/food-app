import React,{useState} from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from "expo/build/launch/AppLoading";
import MealNavigation from "./components/navigation/mealNavigation/mealNavigation";
import {enableScreens} from "react-native-screens";

enableScreens()

const fetchFont=()=>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [font,setFont]=useState(false)

  if(!font){
    return <AppLoading startAsync={fetchFont} onFinish={()=>{setFont(true)}}/>
  }

  return (
    <MealNavigation/>
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
