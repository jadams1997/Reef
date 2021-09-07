import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles.icongradientbutton.js';

const IconGradientButton = (props) => (
    <TouchableOpacity onPress={props.onPress} style={props.style} >
      <MaskedView
        style={styles.maskedView}
        maskElement={
          <View style={styles.maskElement}>
            {props.icon}
          </View>
        }
      >
        <LinearGradient 
          colors={props.gradient.color} 
          start={props.gradient.coords.start} 
          end={props.gradient.coords.end} 
          style={styles.maskViewGradient} 
        />
      </MaskedView>
    </TouchableOpacity>
  );

export { IconGradientButton };