import React, {useEffect} from "react";
import { View, StyleSheet, ScrollView, Text, Dimensions, TouchableOpacity } from "react-native";
import MaskedView from '@react-native-community/masked-view';
import { LinearGradient } from "expo-linear-gradient";

import { SafeScreenWrapper, GradientWrappedImage } from "../components/base.components";


import { profilePictureProperties } from "../globalstyles/profilepicture";

const {width} = Dimensions.get('window');




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
                <View>
                    <Text style = {styles.profileButtonNames}>
                        {props.label}
                    </Text>
                </View>
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

    const [buttonsStatus, setButtonsStatus] = React.useState({ // Declare Button Names here in the state
        Timeline: true,
        Photos: false,
        Posts: false,
        Articles: false
    });
    
    var buttonsList = []
    Object.entries(buttonsStatus).forEach(([key])  => {
            buttonsList.push(<ProfileTabButton buttonsStatus = {buttonsStatus} setButtonsStatus = {setButtonsStatus} label = {key} key = {key}/>);
    });

    return (
        <View style = {styles.profileTabBar}>
            {buttonsList}
        </View>
    );
}


const ProfileScreen = () => {
    return (
        <SafeScreenWrapper>
            <ScrollView style = {styles.scrollView} >
                <View style = {styles.headerWrapper} >
                    <Text style = {styles.pageHeader} >
                        Profile
                    </Text>
                </View>
                <GradientWrappedImage
                    source = {require('../assets/LinkedIn_Profile.jpg')}
                    gradient = {profilePictureProperties.gradient}
                    style =  {profilePictureProperties.style}
                />
                <Text style = {styles.name}>
                    Jamie Adams
                </Text>
                <ProfileTabBar />
            </ScrollView>
        </SafeScreenWrapper>
    );
}

const styles =  StyleSheet.create({
    
    scrollView: {
        flex: 1
    },


    headerWrapper: {
        position: 'relative',
        width: width-width/20,
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
        marginHorizontal: width/40,
        alignItems: 'center',
        flexDirection: 'row'
    },
    profileTabButton: {
        height: width/7,
        width: (width-width/20)/4,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#D3D3D3'
    },
    profileButtonNames: {
        fontSize: 18,
        color: '#373737',
        textAlign: "center",
    },
    maskedView: { 
        flexDirection: 'row', 
        height: width/7,
        overflow: 'visible' //required to get borders to overlap
      },
    maskElement: {
        backgroundColor: 'transparent',
        height: '100%',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1   
    },
    maskViewGradient: {
        flex: 1, 
    }
});

export { ProfileScreen };