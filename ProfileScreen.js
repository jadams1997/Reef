import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

const ProfileScreen = () => {
    return (
        <View style = {styles.page}>
            <StatusBar 
                    barStyle = "dark-content" 
                    hidden = {false} 
                    translucent = {true}
            />
 
        </View>
    );
}

const styles =  StyleSheet.create({
    page: {
      flex:1,
      backgroundColor: "white",
      marginTop: 0
    },
});

export { ProfileScreen };