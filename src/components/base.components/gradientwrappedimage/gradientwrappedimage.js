import React from "react";
import { View, Image} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles.gradientwrappedimage";


/*
Gradient Wrapped Image
*/



const GradientWrappedImage = ({gradient, source, size, radius, style}) => {
    return(
        <LinearGradient
            colors={gradient.color} 
            start={gradient.coords.start} 
            end={gradient.coords.end} 
            style={[styles(size, radius).pictureBackgroundGradient, style]}
        >  
            <View style={styles(size, radius).pictureWhiteBackground}>
                <Image 
                    source = {source}
                    style = {styles(size, radius).profilePicture} 
                />
            </View>
        </LinearGradient>
    );
}

export { GradientWrappedImage };