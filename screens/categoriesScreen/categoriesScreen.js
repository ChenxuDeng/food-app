import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {CATEGORIES} from "../../data/dummyData";
import color from "../../color/color";

function CategoriesScreen(props) {
    const styles=StyleSheet.create({
        screen:{
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            flex:1
        },
        listContainer:{
            flex:1,
            margin:15,
            height:150
        }
    })

    return (
            <FlatList data={CATEGORIES}
                      numColumns={2}
                      renderItem={(itemData)=>{
                          return <TouchableOpacity style={styles.listContainer}
                                                   onPress={()=>{props.navigation.navigate({routeName:'CategoriesMeal',params:{categoryId:itemData.item.id}})}}
                          >
                              <View>
                                  <Text>
                                      {itemData.item.title}
                                  </Text>
                              </View>
                          </TouchableOpacity>
                      }}
            />
    );
}

CategoriesScreen.navigationOptions={
    headerStyle:{
        backgroundColor:color.primary
    },
    headerTintColor:'#fff'
}

export default CategoriesScreen;