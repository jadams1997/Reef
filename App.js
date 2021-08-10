import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainFeed } from "./MainFeed.js";
import { FriendsScreen } from "./FriendsScreen.js";
import { ProfileScreen } from "./ProfileScreen.js";
import { ControlBar } from "./ControlBar.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <ControlBar {...props} />}>
          <Tab.Screen name="MainFeed" component={MainFeed} />
          <Tab.Screen name="FriendsScreen" component={FriendsScreen} />
          <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
};

