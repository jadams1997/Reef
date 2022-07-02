import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from "expo-linear-gradient";
import { SafeScreenWrapper, GradientWrappedImage, PhotoViewer } from "../../components/base.components";

import { styles } from "./styles.profilescreen";
import { GradientClass } from "../../globals";





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
                    source = {require('../../assets/LinkedIn_Profile.jpg')}
                    gradient = {new GradientClass('greenGradient', 1)}
                    style =  {styles.gradientWrappedImage}
                />
                <Text style = {styles.name}>
                    Jamie Adams
                </Text>
                <ProfileTabBar />
            </ScrollView>
        </SafeScreenWrapper>
    );
}



export { ProfileScreen };