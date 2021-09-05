import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MenuScreen } from "./src/containers/menuscreen.js";
import { MessengerScreen } from "./src/containers/messengerscreen.js";
import { PublicFeedScreen } from "./src/containers/publicfeedscreen.js";
import { FriendsScreen } from "./src/containers/friendsscreen.js";
import { ProfileScreen } from "./src/containers/profilescreen.js";
import { AppControlBar } from "./src/components/multi-components/appcontrolbar.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <AppControlBar {...props} />}>
          <Tab.Screen name="PublicFeedScreen" component={PublicFeedScreen} />
          <Tab.Screen name="MenuScreen" component={MenuScreen} />
          <Tab.Screen name="FriendsScreen" component={FriendsScreen} />
          <Tab.Screen name="MessengerScreen" component={MessengerScreen} />
          <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
};

