import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MenuScreen, MessengerScreen, PublicFeedScreen, FriendsScreen, ProfileScreen, PasswordScreen, SplashScreen } from "./containers";
import { AppControlBar } from "./group.components";


const Stack = createStackNavigator(); 
const Tab = createBottomTabNavigator();

const SignedInScreen = () => {
    return (
        <Tab.Navigator tabBar={(props) => <AppControlBar {...props} />}>
            <Tab.Screen name="PublicFeedScreen" component={PublicFeedScreen} />
            <Tab.Screen name="MenuScreen" component={MenuScreen} />
            <Tab.Screen name="FriendsScreen" component={FriendsScreen} />
            <Tab.Screen name="MessengerScreen" component={MessengerScreen} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

const Navigator = () => {
    if (state.isLoading) {
        return <SplashScreen />;
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {state.userToken = null ? (
                    <Stack.Screen 
                        name="SignInScreen" 
                        component={SignInScreen}
                        options={{
                            title: 'Sign In',
                            animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                        }}
                    /> 
                ) : (
                    <Stack.Screen
                        name="SignedInScreen"
                        component={SignedInScreen}
                        options={{headerShown: false}}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export { Navigator };
  