import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { _iconGradientButtonStyles } from '../../styles/_styles.buttons.js';

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
          start={props.gradient.start} 
          end={props.gradient.end} 
          style={_iconGradientButtonStyles.maskViewGradient} 
        />
      </MaskedView>
    </TouchableOpacity>
  );

export { IconGradientButton };