import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import {MEALS} from "../../data/dummyData";
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import headerButton from "../../components/headerButton/headerButton";

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

    const mealId=props.navigation.getParam('mealId')
    const selection=MEALS.find((meal)=>{
        return meal.id===mealId
    })

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
                    return <View style={styles.listContainer}>
                        <Text key={ingredient} style={{fontFamily:'open-sans'}}>
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
                    return <View style={styles.listContainer}>
                        <Text key={step} style={{fontFamily:'open-sans'}}>
                            {step}
                        </Text>
                    </View>
                })}
            </View>
        </ScrollView>
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
            <Item title={'starIcon'} iconName={'ios-star'} iconSize={23} style={{color:'white'}}/>
        </HeaderButtons>}
    }
}

export default MealDetailScreen;