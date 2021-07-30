import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { ControlBar } from "./ControlBar.js";
import { Content } from "./Content.js";

export default function App() {
  return (
    <View style = {styles.page}>
      <StatusBar 
        barStyle = "dark-content" 
        hidden = {false} 
        translucent = {true}
      />
      <Content />  
      <ControlBar />
    </View>
  );
};

const styles =  StyleSheet.create({
  page: {
    flex:1,
    backgroundColor: "white",
    marginTop: 0
  },
});