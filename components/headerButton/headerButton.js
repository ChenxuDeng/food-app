import React from 'react';
import {HeaderButton} from "react-navigation-header-buttons";
import {Ionicons} from "@expo/vector-icons";

function headerButton(props) {
    return (
        <HeaderButton {...props} IconComponent={Ionicons} color={'white'}/>
    );
}

export default headerButton;