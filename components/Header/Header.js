import { View, Text } from "react-native";
import React from "react";
import { FONTS } from "../../constants";

export const Header = ({
  containerStyle,
  title,
  leftComponent,
  rightComponent,
}) => {
  return (
    <View
      style={{ ...containerStyle, flexDirection: "row", alignItems: "center" }}
    >
      {leftComponent}
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={{ ...FONTS.h3 }}>{title.toUpperCase()}</Text>
      </View>
      {rightComponent}
    </View>
  );
};
