import { View, StyleSheet, StatusBar } from "react-native";
import { Content } from "./Content.js";

const MainFeed = () => {
    return (
        <View style = {styles.page}>
            <StatusBar 
                    barStyle = "dark-content" 
                    hidden = {false} 
                    translucent = {true}
            />
            <Content />  
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

export { MainFeed };