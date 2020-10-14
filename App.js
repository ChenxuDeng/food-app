import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from "expo/build/launch/AppLoading";
import MealNavigation from "./components/navigation/mealNavigation/mealNavigation";

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
