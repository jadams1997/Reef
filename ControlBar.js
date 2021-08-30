import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, FontAwesome5, Entypo, SimpleLineIcons } from '@expo/vector-icons'; 
import MaskedView from '@react-native-community/masked-view';
import { LinearGradient } from "expo-linear-gradient";

const {height, width} = Dimensions.get('window');
const controlHeight = height/10;
const buttonWidth = width/5;

const Button = (props) => (
  <TouchableOpacity onPress={props.nav} style={styles.smallButton} >
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

const ControlBar = (props) => {

  const menuNav = () => {
    props.navigation.navigate("MenuScreen")
  };
  const friendsNav = () => {
    props.navigation.navigate("FriendsScreen");
  };

  const messengerNav = () => {
    props.navigation.navigate("MessengerScreen");
  };
  
  const profileNav = () => {
    props.navigation.navigate("ProfileScreen");
  };
  
  const feedNav = () => {
    props.navigation.navigate("PublicFeedScreen");
  };

  return (
    <View style={styles.control} >
      <Button 
        nav={menuNav} 
        icon={<SimpleLineIcons name="menu" size={24} />}
        start={{x: 0.8, y: 0.2}}
        end={{x: 0.2, y: 0.8}}  
      />
      <Button 
        nav={messengerNav} 
        icon={<Ionicons name="md-chatbox-ellipses" size={30} />}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}  
      />
      <Button 
        nav={profileNav} 
        icon={<FontAwesome5 name="user-alt" size={24} />}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}  
      />
      <Button 
        nav={friendsNav} 
        icon={<FontAwesome5 name="user-friends" size={24} />}
        start={{x: 0.8, y: 0.2}}
        end={{x: 0.2, y: 0.8}}  
      />
      <Button 
        nav={feedNav} 
        icon={<Entypo name="quote" size={30} />}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}  
      />
    </View >
  );
};

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
    },
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

export { ControlBar };