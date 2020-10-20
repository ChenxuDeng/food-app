import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import headerButton from "../../components/headerButton/headerButton";
import {useSelector} from "react-redux";

function FavouritesScreen(props) {
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

    const availableMeal=useSelector((state)=>{
        return state.meals.favouriteMeals
    })

    if(!availableMeal || availableMeal.length===0){
        return <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontFamily:'open-sans'}}>
                No favourite food yet,start adding some!
            </Text>
        </View>
    }

    return (
        <View style={styles.screen}>
            <FlatList data={availableMeal}
                      style={{width:'100%'}}
                      renderItem={(itemData)=>{
                          return <TouchableOpacity onPress={()=>{
                              props.navigation.navigate({
                                  routeName:'MealDetail',
                                  params:{
                                      mealId:itemData.item.id,
                                      mealTitle:itemData.item.title
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
                                      <Text style={{fontFamily:'open-sans'}}>
                                          {itemData.item.duration}m
                                      </Text>
                                      <Text style={{fontFamily:'open-sans'}}>
                                          {itemData.item.complexity.toUpperCase()}
                                      </Text>
                                      <Text style={{fontFamily:'open-sans'}}>
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

FavouritesScreen.navigationOptions=(navigationData)=>{
    const mealTitle=navigationData.navigation.getParam('mealTitle')
    return{
        headerLeft:()=>{
            return <HeaderButtons HeaderButtonComponent={headerButton}>
                <Item title={'menu'} iconName={'ios-menu'} iconSize={23} onPress={()=>{navigationData.navigation.toggleDrawer()}}/>
            </HeaderButtons>
        },
        headerStyle:{
            backgroundColor:'#ff6f00'
        },
        headerTintColor:'white',
        headerTitleStyle:{
            fontFamily:'open-sans-bold'
        },
        title:mealTitle
    }
}

export default FavouritesScreen;