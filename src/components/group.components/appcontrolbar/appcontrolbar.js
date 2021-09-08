import React from 'react';
import { View } from 'react-native';
import { Ionicons, FontAwesome5, Entypo, SimpleLineIcons } from '@expo/vector-icons'; 
import { IconGradientButton } from "../../base.components";

import { GradientClass } from "../../../globals";

import { styles } from './styles.appcontrolbar';


const buttonGradients = {
      var1: new GradientClass('greenGradient', 2),
      var2: new GradientClass('greenGradient', 3),
      var3: new GradientClass('greenGradient', 6),
      var4: new GradientClass('greenGradient', 7),
      var5: new GradientClass('greenGradient', 8)
};

const AppControlBar = (props) => {

  const nav = (screen) => {
    props.navigation.navigate(screen)
  };

  return (
    <View style={styles.controlBar} >
      <IconGradientButton 
        onPress={() => nav("MenuScreen")} 
        icon={<SimpleLineIcons name="menu" size={24} />}
        style={styles.iconGradientButton}  
        gradient={buttonGradients.var1} 
      />
      <IconGradientButton 
        onPress={() => nav("MessengerScreen")} 
        icon={<Ionicons name="md-chatbox-ellipses" size={30} />}
        style={styles.iconGradientButton}
        gradient={buttonGradients.var2} 
      />
      <IconGradientButton 
        onPress={() => nav("ProfileScreen")} 
        icon={<FontAwesome5 name="user-alt" size={24} />}
        style={styles.iconGradientButton}
        gradient={buttonGradients.var3}    
      />
      <IconGradientButton 
        onPress={() => nav("FriendsScreen")} 
        icon={<FontAwesome5 name="user-friends" size={24} />}
        style={styles.iconGradientButton}
        gradient={buttonGradients.var4}  
      />
      <IconGradientButton 
        onPress={() => nav("PublicFeedScreen")} 
        icon={<Entypo name="quote" size={30} />}
        style={styles.iconGradientButton}
        gradient={buttonGradients.var5}  
      />
    </View >
  );
};

export { AppControlBar };