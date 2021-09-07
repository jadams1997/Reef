import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MenuScreen, MessengerScreen, PublicFeedScreen, FriendsScreen, ProfileScreen } from "./src/containers";
import { AppControlBar } from "./src/components/group.components";

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

