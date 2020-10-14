import React from 'react';
import {View,Text,StyleSheet} from "react-native";

function FilterScreen(props) {
    const styles=StyleSheet.create({
        screen:{
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            flex:1
        }
    })

    return (
        <View style={styles.screen}>
            <Text>
                FilterScreen
            </Text>
        </View>
    );
}
export default FilterScreen;