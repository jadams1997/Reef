import React from "react";
import { SafeAreaView, View, StyleSheet, StatusBar, ScrollView, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import MaskedView from '@react-native-community/masked-view';
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";

const {height, width} = Dimensions.get('window');
const profilePictureDiameter = width*(1/2);


const ProfileTabButton = (props) => {
    
    const buttonsStatus = props.buttonsStatus;
    
    const onPress = () => {
        if (buttonsStatus[props.label] === false) {
            const previousButtonKey = Object.keys(buttonsStatus).find(key => buttonsStatus[key] === true);
            props.setButtonsStatus(previousStatus => ({
                ...previousStatus,
                [previousButtonKey]: false ,
                [props.label]:  true
            }));
            
        };
    };
   
    
    const ButtonText = () => {
        if (buttonsStatus[props.label]) {
            return (
                <MaskedView
                    style={styles.maskedView}
                    maskElement={
                        <View style={styles.maskElement}>
                            <Text style = {styles.profileButtonNames}>
                                {props.label}
                            </Text>
                        </View>
                    }
                >
                    <LinearGradient 
                        colors={['#00d3ff','#00efe3','#00fe67','#00ff79','#00ffcc','#00eff9','#00b6ff','#0068ff']} 
                        start={{x:0, y:0}} 
                        end={{x:0.8, y:0.8}} 
                        style={styles.maskViewGradient} 
                    />
                </MaskedView>
            );
        } else {
            return (
                <Text style = {styles.profileButtonNames}>
                    {props.label}
                </Text>
            )
        }
    };
        
    return (
        <TouchableOpacity
            style={styles.profileTabButton}
            onPress={onPress}
        >
           <ButtonText />
        </TouchableOpacity>
    );
}


const ProfileTabBar = () => {

    const [buttonsStatus, setButtonsStatus] = React.useState({
        Timeline: true,
        Pictures: false,
        Posts: false,
        Articles: false,
        Friends: false
    });

    useEffect(() => console.log(buttonsStatus), [buttonsStatus]);
    
    const buttons = ['Timeline', 'Pictures', 'Posts', 'Articles', 'Friends'];
    const buttonsList = buttons.map((button, index) => {
            return <ProfileTabButton buttonsStatus = {buttonsStatus} setButtonsStatus = {setButtonsStatus} label = {button} key = {index} />;
        }
    );

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator = 'false' style = {styles.profileTabBar}>
            {buttonsList}
        </ScrollView>
    );
}


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
                <ProfileTabBar />
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
    },
    profileTabBar: {
        height: width/7,
        marginTop: width/20,
        marginHorizontal: width/40
    },
    profileTabButton: {
        flex:1,
        height: width/7,
        width: width/3.5,
        marginHorizontal: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'   
    },
    profileButtonNames: {
        fontSize: 20,
        color: '#373737',
        textAlign: "center"
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
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D3D3D3'
    },
    maskViewGradient: {
        flex: 1, 
        height: '100%',
    }
});

export { ProfileScreen };