import React from 'react';
import { View, SafeAreaView, StatusBar} from "react-native";
import { styles } from "./styles.basicscreenwrappers";


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

export { ViewScreenWrapper, SafeScreenWrapper};