import React from 'react';
import {View,Text,StyleSheet} from "react-native";
import {MEALS} from "../../data/dummyData";
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import headerButton from "../../components/headerButton/headerButton";

function MealDetailScreen(props) {
    const styles=StyleSheet.create({
        screen:{
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            flex:1
        }
    })

    const mealId=props.navigation.getParam('mealId')
    const selection=MEALS.find((meal)=>{
        return meal.id===mealId
    })

    return (
        <View style={styles.screen}>
            <Text>
                {selection.title}
            </Text>
        </View>
    );
}

MealDetailScreen.navigationOptions=(navigationData)=>{
    const mealId=navigationData.navigation.getParam('mealId')
    const selection=MEALS.find((meal)=>{
        return meal.id===mealId
    })
    return {
        title:selection.title,
        headerRight:()=>{
            return <HeaderButtons HeaderButtonComponent={headerButton}>
            <Item title={'starIcon'} iconName={'ios-star'} iconSize={23}/>
        </HeaderButtons>}
    }
}

export default MealDetailScreen;