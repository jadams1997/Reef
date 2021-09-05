import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Ionicons, FontAwesome5, Entypo, SimpleLineIcons } from '@expo/vector-icons'; 

import { IconGradientButton } from '../base-components/buttons.js'
import { tabBarButtonStyles } from '../../styles/styles.buttons.js';

const buttonStyle = tabBarButtonStyles.buttonStyle;
const buttonGradients = tabBarButtonStyles.buttonGradientVariations;


const AppControlBar = (props) => {

  const nav = (screen) => {
    props.navigation.navigate(screen)
  };

  return (
    <View style={styles.control} >
      <IconGradientButton 
        onPress={() => nav("MenuScreen")} 
        icon={<SimpleLineIcons name="menu" size={24} />}
        style={buttonStyle}  
        gradient={buttonGradients.var1} 
      />
      <IconGradientButton 
        onPress={() => nav("MessengerScreen")} 
        icon={<Ionicons name="md-chatbox-ellipses" size={30} />}
        style={buttonStyle}
        gradient={buttonGradients.var2} 
      />
      <IconGradientButton 
        onPress={() => nav("ProfileScreen")} 
        icon={<FontAwesome5 name="user-alt" size={24} />}
        style={buttonStyle}
        gradient={buttonGradients.var3}    
      />
      <IconGradientButton 
        onPress={() => nav("FriendsScreen")} 
        icon={<FontAwesome5 name="user-friends" size={24} />}
        style={buttonStyle}
        gradient={buttonGradients.var4}  
      />
      <IconGradientButton 
        onPress={() => nav("PublicFeedScreen")} 
        icon={<Entypo name="quote" size={30} />}
        style={buttonStyle}
        gradient={buttonGradients.var5}  
      />
    </View >
  );
};

const {height, width} = Dimensions.get('window');
const controlHeight = height/10;

const styles =  StyleSheet.create({
    control: {
      width: width,
      height: controlHeight,
      position: "absolute",
      bottom: 0,
      backgroundColor: "white",
      opacity: .98,
      flexDirection: "row",
      shadowColor: "#000",
      shadowOffset: {width: 0, height: 10},
      shadowOpacity: 0.51,
      shadowRadius: 13.16,
      elevation: 20,
    }
});

export { AppControlBar };