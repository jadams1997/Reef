import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles.icongradientbutton.js';

const IconGradientButton = ({onPress, style, gradient, icon}) => (
    <TouchableOpacity onPress={onPress} style={style} >
      <MaskedView
        style={styles.maskedView}
        maskElement={
          <View style={styles.maskElement}>
            {icon}
          </View>
        }
      >
        <LinearGradient 
          colors={gradient.color} 
          start={gradient.start} 
          end={gradient.end} 
          style={styles.maskViewGradient} 
        />
      </MaskedView>
    </TouchableOpacity>
  );

export { IconGradientButton };