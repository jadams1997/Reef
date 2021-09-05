import React from 'react';
import { View } from 'react-native';
import { Ionicons, FontAwesome5, Entypo, SimpleLineIcons } from '@expo/vector-icons'; 
import { IconGradientButton } from '../base-components/buttons.js'

import { _controlBarStyle } from '../../styles/_styles.appcontrolbar.js';
import { tabBarButtonStyles } from '../../styles/styles.buttons.js';

const buttonStyle = tabBarButtonStyles.buttonStyle;
const buttonGradients = tabBarButtonStyles.buttonGradientVariations;


const AppControlBar = (props) => {

  const nav = (screen) => {
    props.navigation.navigate(screen)
  };

  return (
    <View style={_controlBarStyle} >
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

export { AppControlBar };