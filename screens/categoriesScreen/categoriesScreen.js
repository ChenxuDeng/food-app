import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity,Platform,TouchableNativeFeedback} from "react-native";
import {CATEGORIES} from "../../data/dummyData";
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import headerButton from "../../components/headerButton/headerButton";

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
        },
        itemContainer:{
            flex:1,
            borderRadius:5,
            justifyContent:'flex-end',
            alignItems:'flex-end',
            padding:15,
            shadowColor:'black',
            shadowOpacity:0.26,
            shadowRadius:10,
            shadowOffset: {width:0,height:2},
            elevation:3
        }
    })

    const CustomTouchable=Platform.OS==='android' && Platform.Version>=21?TouchableNativeFeedback:TouchableOpacity

    return (
            <FlatList data={CATEGORIES}
                      numColumns={2}
                      renderItem={(itemData)=>{
                          return <View style={styles.listContainer}>
                              <CustomTouchable onPress={()=>{props.navigation.navigate({routeName:'CategoriesMeal',params:{categoryId:itemData.item.id}})}}
                                               style={{height:150}}
                              >
                                  <View style={[{backgroundColor:itemData.item.color},styles.itemContainer]}>
                                      <Text numberOfLines={2} style={{fontFamily:'open-sans-bold',fontSize:22,textAlign:'right'}}>
                                          {itemData.item.title}
                                      </Text>
                                  </View>
                              </CustomTouchable>
                          </View>
                      }}
            />
    );
}

CategoriesScreen.navigationOptions=(navigationData)=>{
    return {
        headerLeft:()=><HeaderButtons HeaderButtonComponent={headerButton}>
            <Item title={'menu'} iconName={'ios-menu'} iconSize={23} onPress={()=>{navigationData.navigation.toggleDrawer()}}/>
        </HeaderButtons>
    }
}

export default CategoriesScreen;