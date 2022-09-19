import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";
import { useSelector } from "react-redux";
import { COLORS, dummyData, icons, SIZES } from "../constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { HeaderTab } from "../components/Header/HeaderTab";
import { DrawerActions } from "@react-navigation/native";

const MainLayout = ({ drawerAnimationStyle, navigation }) => {
  const onOpenMenu = () => {
    // navigation.openDrawer();
    // navigation.dispatch(DrawerActions.openDrawer());
    navigation.navigate("Settings");
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
      <HeaderTab onOpenMenu={onOpenMenu} />
      {/* <Header
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
      /> */}
      {/* Content */}
      <View style={{ flex: 1 }}>
        <Text>ayfsdfsout</Text>
        <MaterialCommunityIcons name="bell" />
      </View>
      {/* Footer */}
    </Animated.View>
  );
};

export default MainLayout;

// const styles = StyleSheet.create({
//   menuButton: {
//     borderRadius: SIZES.radius,
//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 1,
//     borderColor: COLORS.gray2,
//     width: 40,
//     height: 40,
//   },
//   profileImage: {
//     width: 40,
//     height: 40,
//     borderRadius: SIZES.radius,
//   },
// });
