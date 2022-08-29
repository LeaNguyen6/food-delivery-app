import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";
import { useSelector } from "react-redux";
import { Header } from "../components";
import { COLORS, dummyData, icons, SIZES } from "../constants";

const MainLayout = ({ drawerAnimationStyle, navigation }) => {
  const selectedTab = useSelector((state) => state.tab.selectedTab);
  const onOpenMenu = () => {
    navigation.openDrawer();
  };
  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        ...drawerAnimationStyle,
      }}
    >
      {/* Header */}
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
      {/* Content */}
      <View style={{ flex: 1 }}>
        <Text>MavdvdvinLayfsdfsout</Text>
      </View>
      {/* Footer */}
    </Animated.View>
  );
};

export default MainLayout;

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
