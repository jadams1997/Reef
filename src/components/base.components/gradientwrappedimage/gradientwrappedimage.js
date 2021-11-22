import React from "react";
import { View, Image} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles.gradientwrappedimage";

const GradientWrappedImage = ({gradient, source, style}) => {
    return(
        <LinearGradient
            colors={gradient.color} 
            start={gradient.start} 
            end={gradient.end} 
            style={[styles(style).linearGradient, style]}
        >  
            <View style={styles(style).view}>
                <Image 
                    source = {source}
                    style = {styles(style).image} 
                />
            </View>
        </LinearGradient>
    );
}

export { GradientWrappedImage };