import React from 'react';
import {createStackNavigator} from "react-navigation-stack";
import CategoriesScreen from "../../../screens/categoriesScreen/categoriesScreen";
import CategoryMealsScreen from "../../../screens/categoryMealsScreen/categoryMealsScreen";
import MealDetailScreen from "../../../screens/mealDetailScreen/mealDetailScreen";
import {createAppContainer} from "react-navigation";
import color from "../../../color/color";
import {createBottomTabNavigator} from "react-navigation-tabs";
import FavouritesScreen from "../../../screens/favouritesScreen/favouritesScreen";
import {Ionicons} from "@expo/vector-icons";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {Platform, Text} from "react-native";
import FilterScreen from "../../../screens/filterScreen/filterScreen";
import {createDrawerNavigator} from "react-navigation-drawer";

const MealNavigation=createStackNavigator({
    Categories:CategoriesScreen,
    CategoriesMeal:CategoryMealsScreen,
    MealDetail:MealDetailScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:color.primary
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontFamily:'open-sans-bold'
        }
    }
})

const FavNavigation=createStackNavigator({
    Favourites:FavouritesScreen,
    MealDetail:MealDetailScreen
})

const bottomTabs=Platform.OS==='android'?createMaterialBottomTabNavigator({
    Meals:{
        screen:MealNavigation,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
                return <Ionicons name={'ios-restaurant'} size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor:color.primary,
            tabBarLabel:<Text style={{fontFamily:'open-sans-bold'}}>Meals</Text>
        }
    },
    Favourites:{
        screen:FavNavigation,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
                return <Ionicons name={'ios-star'} size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor:color.secondary,
            tabBarLabel:<Text style={{fontFamily:'open-sans-bold'}}>Favourites</Text>
        }
    }
},{
    activeColor:'white',
    shifting:true
}):createBottomTabNavigator({
    Meals:{
        screen:MealNavigation,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
                return <Ionicons name={'ios-restaurant'} size={25} color={tabInfo.tintColor}/>
            }
        }
    },
    Favourites:{
        screen:FavNavigation,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
                return <Ionicons name={'ios-star'} size={25} color={tabInfo.tintColor}/>
            }
        }
    }
},{
    tabBarOptions:{
        activeTintColor:color.secondary
    }
})

const filter=createStackNavigator({
    Filter:FilterScreen
})

const drawer=createDrawerNavigator({
    Meals:bottomTabs,
    Filter:filter
},{
    contentOptions:{
        activeTintColor:color.secondary,
        labelStyle:{
            fontFamily:'open-sans-bold'
        }
    }
})

export default createAppContainer(drawer)