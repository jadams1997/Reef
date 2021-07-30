import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainFeed } from "./MainFeed.js";
import { ControlBar } from "./ControlBar.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <ControlBar {...props} />}>
          <Tab.Screen name="MainFeed" component={MainFeed} />
        </Tab.Navigator>
    </NavigationContainer>
  );
};

