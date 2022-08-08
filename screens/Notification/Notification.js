import React from "react";
import { Text } from "react-native";
import Animated from "react-native-reanimated";

const Notification = ({ drawerAnimationStyle }) => {
  return (
    <Animated.View style={drawerAnimationStyle}>
      <Text>Notification</Text>
    </Animated.View>
  );
};

export default Notification;
