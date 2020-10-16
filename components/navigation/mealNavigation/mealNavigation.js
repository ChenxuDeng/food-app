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
import {Platform} from "react-native";

const MealNavigation=createStackNavigator({
    Categories:CategoriesScreen,
    CategoriesMeal:CategoryMealsScreen,
    MealDetail:MealDetailScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:color.primary
        },
        headerTintColor:'#fff'
    }
})

const bottomTabs=Platform.OS==='android'?createMaterialBottomTabNavigator({
    Meals:{
        screen:MealNavigation,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
                return <Ionicons name={'ios-restaurant'} size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor:color.primary
        }
    },
    Favourites:{
        screen:FavouritesScreen,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
                return <Ionicons name={'ios-star'} size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor:color.secondary
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
        screen:FavouritesScreen,
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

export default createAppContainer(bottomTabs)