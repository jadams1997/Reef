import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import { LinearGradient } from "expo-linear-gradient";

const IconGradientButton = (props) => (
    <TouchableOpacity onPress={props.onPress} style={styles.smallButton} >
      <MaskedView
        style={styles.maskedView}
        maskElement={
          <View style={styles.maskElement}>
            {props.icon}
          </View>
        }
      >
        <LinearGradient 
          colors={['#00d3ff','#00efe3','#00fe67','#00ff79','#00ffcc','#00eff9','#00b6ff','#0068ff']} 
          start={props.start} 
          end={props.end} 
          style={styles.maskViewGradient} 
        />
      </MaskedView>
    </TouchableOpacity>
  );


const {width} = Dimensions.get('window');
const buttonWidth = width/5;

const styles =  StyleSheet.create({
    smallButton: {
      alignItems: "center",
      justifyContent: "center",
      width: buttonWidth,
      backgroundColor: "white"
    },
    maskedView: { 
      flex: 1, 
      flexDirection: 'row', 
      height: '100%' 
    },
    maskElement: {
      backgroundColor: 'transparent',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    maskViewGradient: {
      flex: 1, 
      height: '100%',
    }
});

export { IconGradientButton };