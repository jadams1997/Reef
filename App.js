import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MenuScreen } from "./src/containers/MenuScreen.js";
import { MessengerScreen } from "./src/containers/MessengerScreen.js";
import { PublicFeedScreen } from "./src/containers/PublicFeedScreen.js";
import { FriendsScreen } from "./src/containers/FriendsScreen.js";
import { ProfileScreen } from "./src/containers/ProfileScreen.js";
import { ControlBar } from "./src/components/multi-components/ControlBars.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <ControlBar {...props} />}>
          <Tab.Screen name="PublicFeedScreen" component={PublicFeedScreen} />
          <Tab.Screen name="MenuScreen" component={MenuScreen} />
          <Tab.Screen name="FriendsScreen" component={FriendsScreen} />
          <Tab.Screen name="MessengerScreen" component={MessengerScreen} />
          <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
};

