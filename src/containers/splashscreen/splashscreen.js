import React from 'react';
import { View, Image } from 'react-native';

const SplashScreen = () => {
    return (
        <View 
            style={{
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
            }}
        >
            <Image 
                source={require("../../assets/Circle_Logo.png")}
                style={{
                    width: 50,
                    height: 50,
                }}
            />
        </View>
    )
}

export { SplashScreen };