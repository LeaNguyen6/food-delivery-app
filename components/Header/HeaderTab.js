import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, dummyData, icons, SIZES } from "../../constants";
import { useSelector } from "react-redux";
import { Header } from "./Header";

export const HeaderTab = (onOpenMenu) => {
  const selectedTab = useSelector((state) => state.tab.selectedTab);

  return (
    <Header
      containerStyle={{
        height: 50,
        paddingHorizontal: SIZES.padding,
        marginTop: 20,
      }}
      title={selectedTab}
      leftComponent={
        <TouchableOpacity style={styles.menuButton} onPress={onOpenMenu}>
          <Image source={icons.menu} />
        </TouchableOpacity>
      }
      rightComponent={
        <TouchableOpacity>
          <Image
            style={styles.profileImage}
            source={dummyData?.myProfile?.profile_image}
          />
        </TouchableOpacity>
      }
    />
  );
};
const styles = StyleSheet.create({
  menuButton: {
    borderRadius: SIZES.radius,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.gray2,
    width: 40,
    height: 40,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: SIZES.radius,
  },
});
