import React from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar} from "react-native";


const ViewScreenWrapper = ({children}) => {
    return (
        <View style = {styles.page}>
            <StatusBar 
                barStyle = "dark-content" 
                hidden = {false} 
                translucent = {true}
            />
            {children}
        </View>
    );
}

const SafeScreenWrapper = ({children}) => {
    return (
        <SafeAreaView style = {styles.page}>
            <StatusBar 
                barStyle = "dark-content" 
                hidden = {false} 
                translucent = {true}
            />
            {children}
        </SafeAreaView>
    );
}

const styles =  StyleSheet.create({
    page: {
      flex:1,
      backgroundColor: "white",
      marginTop: 0
    },
});

export {ViewScreenWrapper, SafeScreenWrapper};