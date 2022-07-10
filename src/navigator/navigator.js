import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MenuScreen, MessengerScreen, PublicFeedScreen, FriendsScreen, ProfileScreen, PasswordScreen, SplashScreen, SignInScreen } from "../containers";
import { AppControlBar } from "../components/group.components";


const Stack = createNativeStackNavigator(); 
const Tab = createBottomTabNavigator();

const SignedInScreen = () => {
    return (
        <Tab.Navigator tabBar={(props) => <AppControlBar {...props} />}>
            <Tab.Screen 
                name="PublicFeedScreen" 
                component={PublicFeedScreen} 
                options={{headerShown: false}}
            />
            <Tab.Screen 
                name="MenuScreen" 
                component={MenuScreen} 
                options={{headerShown: false}}
            />
            <Tab.Screen 
                name="FriendsScreen" 
                component={FriendsScreen} 
                options={{headerShown: false}}
            />
            <Tab.Screen 
                name="MessengerScreen" 
                component={MessengerScreen} 
                options={{headerShown: false}}
            />
            <Tab.Screen 
                name="ProfileScreen" 
                component={ProfileScreen} 
                options={{headerShown: false}}    
            />
        </Tab.Navigator>
    );
}

const Navigator = (props) => {
    
    if (props.isLoading) {
        return <SplashScreen />;
    }
    return (
        <Stack.Navigator>
            {props.userToken == null ? (
                <Stack.Screen 
                    name="SignInScreen" 
                    component={SignInScreen}
                    options={{
                        title: 'Sign In',
                        animationTypeForReplace: props.isSignout ? 'pop' : 'push',
                        headerShown: false
                    }}
                /> 
                //<Stack.Screen
                //    name="SignUpScreen"
                //    component={SignUpScreen}
                //    options={headerShown: false}
                ///>
            ) : (
                <Stack.Screen
                    name="SignedInScreen"
                    component={SignedInScreen}
                    options={{headerShown: false}}
                />
            )}
        </Stack.Navigator>
    );
}

export { Navigator };
  