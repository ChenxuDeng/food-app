import React,{useState} from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from "expo/build/launch/AppLoading";
import MealNavigation from "./components/navigation/mealNavigation/mealNavigation";
import {enableScreens} from "react-native-screens";
import {createStore,combineReducers} from "redux";
import {Provider} from "react-redux";
import meals from "./store/reducer/meals";

enableScreens()

const rootReducer=combineReducers({
    meals:meals
})

const store=createStore(rootReducer)

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
      <Provider store={store}>
        <MealNavigation/>
      </Provider>
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
