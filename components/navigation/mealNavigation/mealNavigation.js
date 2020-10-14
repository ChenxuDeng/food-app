import React from 'react';
import {createStackNavigator} from "react-navigation-stack";
import CategoriesScreen from "../../../screens/categoriesScreen/categoriesScreen";
import CategoryMealsScreen from "../../../screens/categoryMealsScreen/categoryMealsScreen";
import MealDetailScreen from "../../../screens/mealDetailScreen/mealDetailScreen";
import {createAppContainer} from "react-navigation";

const MealNavigation=createStackNavigator({
    Categories:CategoriesScreen,
    CategoriesMeal:CategoryMealsScreen,
    MealDetail:MealDetailScreen
})

export default createAppContainer(MealNavigation)