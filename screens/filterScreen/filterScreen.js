import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Switch, Platform} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import headerButton from "../../components/headerButton/headerButton";
import color from "../../color/color";
import {useDispatch} from "react-redux";
import * as action from '../../store/action/index'

function FilterScreen(props) {
    const styles=StyleSheet.create({

    })

    const [gluten,setGluten]=useState(false)
    const [lactose,setLactose]=useState(false)
    const [vegan,setVegan]=useState(false)
    const [vegetarian,setVegetarian]=useState(false)

    const dispatch=useDispatch()

    const saveHandler=useCallback(()=>{
        const saved={
            isGlutenFree:gluten,
            isLactoseFree:lactose,
            isVegan:vegan,
            isVegetarian:vegetarian
        }
        dispatch(action.filter(saved))
    },[gluten,lactose,vegan,vegetarian,dispatch])

    useEffect(()=>{
        props.navigation.setParams({save:saveHandler})
    },[saveHandler])

    return (
        <View style={{alignItems:'center',flex:1,width:'100%'}}>
            <View style={{marginVertical:15}}>
                <Text style={{fontFamily:'open-sans-bold',fontSize:22}}>
                    Available Filters / Restriction
                </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:'77%',alignItems:'center',marginVertical:15}}>
                <Text style={{fontFamily:'open-sans'}}>
                    Gluten-free
                </Text>
                <Switch value={gluten} onValueChange={()=>{setGluten(!gluten)}} trackColor={{true:'#4a148c',false:'grey'}} thumbColor={Platform.OS==='android'?color.primary:null}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:'77%',alignItems:'center',marginVertical:15}}>
                <Text style={{fontFamily:'open-sans'}}>
                    Lactose-free
                </Text>
                <Switch value={lactose} onValueChange={()=>{setLactose(!lactose)}} trackColor={{true:'#4a148c',false:'grey'}} thumbColor={color.primary}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:'77%',alignItems:'center',marginVertical:15}}>
                <Text style={{fontFamily:'open-sans'}}>
                    Vegan
                </Text>
                <Switch value={vegan} onValueChange={()=>{setVegan(!vegan)}} trackColor={{true:'#4a148c',false:'grey'}} thumbColor={color.primary}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:'77%',alignItems:'center',marginVertical:15}}>
                <Text style={{fontFamily:'open-sans'}}>
                    Vegetarian
                </Text>
                <Switch value={vegetarian} onValueChange={()=>{setVegetarian(!vegetarian)}} trackColor={{true:'#4a148c',false:'grey'}} thumbColor={color.primary}/>
            </View>
        </View>
    );
}

FilterScreen.navigationOptions=(navigationData)=>{
    return{
        headerLeft:()=>{
            return <HeaderButtons HeaderButtonComponent={headerButton}>
                <Item title={'menu'} iconName={'ios-menu'} iconSize={23} onPress={()=>{navigationData.navigation.toggleDrawer()}}/>
            </HeaderButtons>
        },
        headerStyle:{
            backgroundColor:'#4a148c'
        },
        headerTitleStyle:{
            fontFamily:'open-sans-bold',
        },
        headerTintColor:'white',
        headerRight:()=>{
            return <HeaderButtons HeaderButtonComponent={headerButton}>
                <Item title={'save'} iconName={'ios-save'} iconSize={23} onPress={navigationData.navigation.getParam('save')}/>
            </HeaderButtons>
        }
    }
}

export default FilterScreen;