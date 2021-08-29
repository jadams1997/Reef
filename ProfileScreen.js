import React from "react";
import { SafeAreaView, View, StyleSheet, StatusBar, ScrollView, Text, Image, Dimensions } from "react-native";

const {height, width} = Dimensions.get('window');
const profilePictureDiameter = width*(1/2);

const ProfileScreen = () => {
    return (
        <SafeAreaView style = {styles.page}>
            <StatusBar 
                    barStyle = "dark-content" 
                    hidden = {false} 
                    translucent = {true}
            />
            <ScrollView style = {styles.scrollView} >
                <View style = {styles.headerWrapper} >
                    <Text style = {styles.pageHeader} >
                        Profile
                    </Text>
                </View>
                <Image 
                    source = {{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                    style = {styles.profilePicture} 
                />
                <Text style = {styles.name}>
                    Jamie Adams
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles =  StyleSheet.create({
    page: {
      flex:1,
      marginTop: 0,
      backgroundColor: "white"
    },
    scrollView: {
        flex: 1
    },
    headerWrapper: {
        position: 'relative',
        width: width - width/20,
        paddingLeft: width/40,
        paddingBottom: width/30,
        marginLeft: width/40,
        marginTop: width/10,
        marginBottom: width/20,
        borderBottomWidth: 1,
        backgroundColor: 'white',
        borderColor: '#D3D3D3'
    },
    pageHeader: {
        flex: 1,
        fontSize: 30,
        color: '#373737'
    },
    profilePicture: {
        height: profilePictureDiameter, 
        width: profilePictureDiameter,
        borderRadius: profilePictureDiameter/2,
        position: 'relative',
        alignSelf: 'center',
        marginTop: width/30 
    },
    name: {
        fontSize: 30,
        alignSelf: "center",
        marginTop: width/20,
        color: '#373737',
        backgroundColor: 'white'
    }
});

export { ProfileScreen };