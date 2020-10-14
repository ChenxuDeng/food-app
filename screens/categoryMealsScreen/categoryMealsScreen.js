import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import {CATEGORIES} from "../../data/dummyData";
import color from "../../color/color";

function CategoryMealsScreen(props) {
    const styles=StyleSheet.create({
        screen:{
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            flex:1
        }
    })

    const categoryId=props.navigation.getParam('categoryId')
    const selection=CATEGORIES.find((catId)=>{
        return catId.id===categoryId
    })

    return (
        <View style={styles.screen}>
            <Text>
                CategoryMealsScreen
            </Text>
            <Text>
                {selection.title}
            </Text>
            <Button title={'go to detail'} onPress={()=>{
                props.navigation.navigate({routeName:'mealDetail'})
            }}/>
        </View>
    );
}

CategoryMealsScreen.navigationOptions=(navigationData)=>{
    const categoryId=navigationData.navigation.getParam('categoryId')
    const selection=CATEGORIES.find((catId)=>{
        return catId.id===categoryId
    })
    return{
        title:selection.title,
        headerStyle:{
            backgroundColor:color.primary
        },
        headerTintColor:'#fff'
    }
}

export default CategoryMealsScreen;