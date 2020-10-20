import {MEALS} from "../../data/dummyData";
import * as actionType from '../action/actionType'

const initialState={
    meals:MEALS,
    filteredMeals:MEALS,
    favouriteMeals:[]
}

const meals=(state=initialState,action)=>{
    switch (action.type){
        case (actionType.TOGGLE_FAVOURITE):
            const liked=state.favouriteMeals.findIndex((meal)=>{
                return meal.id===action.id
            })
            if(liked>=0){
                const updatedFavMeals=[...state.favouriteMeals]
                updatedFavMeals.splice(liked,1)
                return {
                    ...state,
                    favouriteMeals:updatedFavMeals
                }
            }else {
                const meal=state.meals.find((meal)=>{
                    return meal.id===action.id
                })
                return {
                    ...state,
                    favouriteMeals:state.favouriteMeals.concat(meal)
                }
            }
        case (actionType.FILTER):
            const filteredMeals=state.meals.filter((meal)=>{
                if(action.filter.isGlutenFree && !meal.isGlutenFree){
                    return false
                }
                if(action.filter.isLactoseFree && !meal.isLactoseFree){
                    return false
                }
                if(action.filter.isVegan && !meal.isVegan){
                    return false
                }
                if(action.filter.isVegetarian && !meal.isVegetarian){
                    return false
                }
                return true
            })
            return {
                ...state,
                filteredMeals:filteredMeals
            }
        default:
            return state
    }

}

export default meals