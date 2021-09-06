import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { _iconGradientButtonStyles } from '../../styles/_styles.icongradientbutton.js';

const IconGradientButton = (props) => (
    <TouchableOpacity onPress={props.onPress} style={props.style} >
      <MaskedView
        style={_iconGradientButtonStyles.maskedView}
        maskElement={
          <View style={_iconGradientButtonStyles.maskElement}>
            {props.icon}
          </View>
        }
      >
        <LinearGradient 
          colors={props.gradient.color} 
          start={props.gradient.coords.start} 
          end={props.gradient.coords.end} 
          style={_iconGradientButtonStyles.maskViewGradient} 
        />
      </MaskedView>
    </TouchableOpacity>
  );

export { IconGradientButton };