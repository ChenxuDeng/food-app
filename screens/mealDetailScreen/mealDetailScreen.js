import React, {useCallback, useEffect} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import headerButton from "../../components/headerButton/headerButton";
import {useDispatch, useSelector} from "react-redux";
import * as action from "../../store/action";

function MealDetailScreen(props) {
    const styles=StyleSheet.create({
        bottomText:{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:'auto',
            paddingVertical:10,
            paddingHorizontal:50
        },
        listContainer:{
            borderBottomColor:'black',
            borderWidth:1,
            padding:7,
            marginHorizontal:20,
            marginVertical:10
        }
    })

    const availableMeal=useSelector((state)=>{
        return state.meals.meals
    })

    const favouriteMeal=useSelector((state)=>{
        return state.meals.favouriteMeals
    })

    const mealId=props.navigation.getParam('mealId')
    const selection=availableMeal.find((meal)=>{
        return meal.id===mealId
    })

    const isFav=favouriteMeal.some((meal)=>{
        return meal.id===mealId
    })

    const dispatch=useDispatch()
    const toggleFavourite=useCallback(()=>{
        dispatch(action.toggleFavourite(mealId))
    },[dispatch,mealId])

    useEffect(()=>{
        props.navigation.setParams({toggleFav: toggleFavourite})
    },[toggleFavourite])

    useEffect(()=>{
        props.navigation.setParams({isFav:isFav})
    },[isFav])

    return (
        <ScrollView>
            <View style={{height:200,width:'100%'}}>
                <Image source={{uri:selection.imageUrl}} style={{height:'100%',width:'100%'}}/>
            </View>
            <View style={styles.bottomText}>
                <Text style={{fontFamily:'open-sans'}}>
                    {selection.duration}m
                </Text>
                <Text style={{fontFamily:'open-sans'}}>
                    {selection.complexity.toUpperCase()}
                </Text>
                <Text style={{fontFamily:'open-sans'}}>
                    {selection.affordability.toUpperCase()}
                </Text>
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={{fontFamily:'open-sans-bold',fontSize:22}}>
                    Ingredients
                </Text>
            </View>
            <View>
                {selection.ingredients.map((ingredient)=>{
                    return <View style={styles.listContainer} key={ingredient}>
                        <Text style={{fontFamily:'open-sans'}}>
                            {ingredient}
                        </Text>
                    </View>
                })}
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={{fontFamily:'open-sans-bold',fontSize:22}}>
                    Steps
                </Text>
            </View>
            <View>
                {selection.step.map((step)=>{
                    return <View style={styles.listContainer} key={step}>
                        <Text style={{fontFamily:'open-sans'}}>
                            {step}
                        </Text>
                    </View>
                })}
            </View>
        </ScrollView>
    );
}

MealDetailScreen.navigationOptions=(navigationData)=>{
    const mealTitle=navigationData.navigation.getParam('mealTitle')
    const toggleFavourite=navigationData.navigation.getParam('toggleFav')
    const isFav=navigationData.navigation.getParam('isFav')

    return {
        title:mealTitle,
        headerRight:()=>{
            return <HeaderButtons HeaderButtonComponent={headerButton}>
            <Item title={'starIcon'} iconName={isFav?'ios-star':'ios-star-outline'} iconSize={23} style={{color:'white'}} onPress={toggleFavourite}/>
        </HeaderButtons>}
    }
}

export default MealDetailScreen;