import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';

import {COLORS, FONTS, SIZES} from "../constants";

const TextButton = ({
    buttonContainerStyle,
    label,
    labelStyle,
    label2 = "",
    label2Style,
    onPress

}) => {
    return(
        <TouchableOpacity style={{
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:COLORS.primary,
            ...buttonContainerStyle
        }} onPress={onPress}>
            <Text style={{color:COLORS.white, ...FONTS.h3, ...labelStyle}}>
                {label}
            </Text>

            {label2 != "" &&
            <Text style={{flex:1, textAlign:"right", color:COLORS.white, ...FONTS.h3, ...labelStyle}}>
                {label2}
            </Text>
            }

        </TouchableOpacity>
    )

}

export default TextButton;