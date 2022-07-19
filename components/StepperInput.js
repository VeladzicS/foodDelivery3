import React from 'react';
import {
    View,
    Text
} from 'react-native';

import {icons, COLORS, FONTS, SIZES} from "../constants";
import {IconButton} from "./index";

const StepperInput = ({containerStyle, value=1, onAdd, onMinus}) => {
  return(
      <View style={{flexDirection:"row", height:60, width:130, backgroundColor:COLORS.lightGray2, borderRadius:SIZES.radius, ...containerStyle}}>
            <IconButton containerStyle={{
                width:50,
                alignItems:"center",
                justifyContent:"center"
            }} icon={icons.minus}
                 iconStyle={{height:25, width:25, tintColor: value > 1 ? COLORS.primary : COLORS.gray}}
                onPress={onMinus}
            />

          <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
              <Text style={{...FONTS.h2}}>
                  {value}
              </Text>
          </View>

          <IconButton containerStyle={{
                width:50,
                alignItems:"center",
                justifyContent:"center"
            }} icon={icons.plus}
                 iconStyle={{height:25, width:25, tintColor: value > 0 ? COLORS.primary : COLORS.gray}}
                onPress={onAdd}
            />
      </View>
  )
}

export default StepperInput;