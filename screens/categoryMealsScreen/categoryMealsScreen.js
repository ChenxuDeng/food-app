import React from 'react';
import {View, StyleSheet, FlatList, Text, ImageBackground, TouchableOpacity} from "react-native";
import {CATEGORIES} from "../../data/dummyData";
import {MEALS} from "../../data/dummyData";

function CategoryMealsScreen(props) {
    const styles=StyleSheet.create({
        screen:{
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            flex:1,
            paddingHorizontal:10,
            paddingTop:10
        },
        mealContainer:{
            width:'100%',
            height:200,
            backgroundColor:'#ccc',
            borderRadius:5,
            overflow:'hidden',
            marginBottom:10
        },
        bottomText:{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:'auto',
            padding:6
        },
        bgImage:{
            height:'100%',
            width:'100%',
            justifyContent:'flex-end'
        },
        title:{
            fontFamily:'open-sans-bold',
            fontSize:20,
            color:'white',
            textAlign:'center'
        },
        titleContainer:{
            backgroundColor:'rgba(0,0,0,0.5)',
            padding:5
        }
    })

    const catId=props.navigation.getParam('categoryId')
    const displayedMeal=MEALS.filter((meal)=>{
        return meal.categoryId.indexOf(catId)>=0
    })

    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeal}
                      style={{width:'100%'}}
                      renderItem={(itemData)=>{
                          return <TouchableOpacity onPress={()=>{
                              props.navigation.navigate({
                                  routeName:'MealDetail',
                                  params:{
                                      mealId:itemData.item.id
                                  }
                              })
                          }}>
                              <View style={styles.mealContainer}>
                                  <View style={{height:'85%'}}>
                                      <ImageBackground source={{uri:itemData.item.imageUrl}} style={styles.bgImage}>
                                          <View style={styles.titleContainer}>
                                              <Text style={styles.title} numberOfLines={1}>
                                                  {itemData.item.title}
                                              </Text>
                                          </View>
                                      </ImageBackground>
                                  </View>
                                  <View style={styles.bottomText}>
                                      <Text>
                                          {itemData.item.duration}m
                                      </Text>
                                      <Text>
                                          {itemData.item.complexity.toUpperCase()}
                                      </Text>
                                      <Text>
                                          {itemData.item.affordability.toUpperCase()}
                                      </Text>
                                  </View>
                              </View>
                          </TouchableOpacity>
                      }}
            />
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
    }
}

export default CategoryMealsScreen;