import React, {useEffect} from "react";
import { View, StyleSheet, ScrollView, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import MaskedView from '@react-native-community/masked-view';

import { LinearGradient } from "expo-linear-gradient";

import { SafeScreenWrapper } from "../components/page-components/BasicScreenWrappers";




const {height, width} = Dimensions.get('window');
const profilePictureDiameter = width*(1/2);

const ProfilePictureMain = () => {
    return(
        <LinearGradient
            colors={['#00d3ff','#00efe3','#00fe67','#00ff79','#00ffcc','#00eff9','#00b6ff','#0068ff']} 
            start={{x: 0, y: 0}} 
            end={{x: 1, y: 1}} 
            style={styles.pictureBackgroundGradient}
        >  
            <View style={styles.pictureWhiteBackground}>
                <Image 
                    source = {require('../assets/LinkedIn_Profile.jpg')}
                    style = {styles.profilePicture} 
                />
            </View>
        </LinearGradient>
    );
}

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

    const [buttonsStatus, setButtonsStatus] = React.useState({
        Timeline: true,
        Pictures: false,
        Posts: false,
        Articles: false,
        Friends: false
    });

    useEffect(() => console.log(buttonsStatus), [buttonsStatus]);
    
    const buttons = ['Timeline', 'Pictures', 'Posts', 'Articles'];
    const buttonsList = buttons.map((button, index) => {
            return <ProfileTabButton buttonsStatus = {buttonsStatus} setButtonsStatus = {setButtonsStatus} label = {button} key = {index} />;
        }
    );

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
                <ProfilePictureMain />
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


    pictureBackgroundGradient: {
        width: profilePictureDiameter+8,
        height: profilePictureDiameter+8,
        borderRadius: (profilePictureDiameter+8)/2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        alignSelf: 'center',
        marginTop: width/30 
    },
    pictureWhiteBackground: {
        height: profilePictureDiameter+4,
        width: profilePictureDiameter+4,
        borderRadius:(profilePictureDiameter+4)/2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',  
    },
    profilePicture: {
        height: profilePictureDiameter, 
        width: profilePictureDiameter,
        borderRadius: profilePictureDiameter/2,
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