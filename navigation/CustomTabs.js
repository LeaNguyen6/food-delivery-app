import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Favorite, Home, MainLayout } from "../screens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Text, View } from "react-native";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator({});
const CustomTabs = () => {
  return (
    <Tab.Navigator
      headerMode="screen"
      tabBarOptions={{
        activeTintColor: "#e91e63",
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainLayout}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Favorite}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomTabs;
