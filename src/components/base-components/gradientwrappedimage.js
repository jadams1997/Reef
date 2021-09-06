import React from "react";
import { View, Image} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { gradientWrappedImageStyles } from "../../styles/_styles.gradientwrappedimage"


const GradientWrappedImage = (props) => {
    return(
        <LinearGradient
            colors={props.gradient.color} 
            start={props.gradient.coords.start} 
            end={props.gradient.coords.end} 
            style={gradientWrappedImageStyles(props.sr).pictureBackgroundGradient}
        >  
            <View style={gradientWrappedImageStyles(props.sr).pictureWhiteBackground}>
                <Image 
                    source = {props.source}
                    style = {gradientWrappedImageStyles(props.sr).profilePicture} 
                />
            </View>
        </LinearGradient>
    );
}




export { GradientWrappedImage };