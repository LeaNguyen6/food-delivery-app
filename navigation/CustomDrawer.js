import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  COLORS,
  SIZES,
  icons,
  dummyData,
  FONTS,
  drawer_menu,
} from "../constants";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MainLayout, Notification } from "../screens";
import Animated from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTab } from "../stores/slices/tabSlice";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon, onSelectTab }) => {
  const selectedTab = useSelector((state) => state.tab.selectedTab);

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: SIZES.radius,
        borderRadius: SIZES.base,
        marginBottom: SIZES.base,
        height: 30,
        backgroundColor:
          selectedTab === label ? COLORS.transparentBlack1 : null,
      }}
      onPress={onSelectTab}
    >
      <Image
        source={icon}
        style={{ width: 20, height: 20, tintColor: COLORS.white }}
      />
      <Text
        style={{ color: COLORS.white, ...FONTS.h3, paddingLeft: SIZES.radius }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomContentDrawer = ({ navigation }) => {
  const dispatch = useDispatch();
  const onSelectTab = (menuItem) => {
    dispatch(setSelectedTab(menuItem.label));
    navigation.navigate(menuItem.path);
  };
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={{ flex: 1, paddingHorizontal: SIZES.radius }}>
        {/* Close button */}
        <TouchableOpacity onPress={navigation.closeDrawer}>
          <Image
            source={icons.cross}
            style={{
              height: 30,
              width: 30,
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>
        {/* Profile */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            alignItems: "center",
          }}
        >
          <Image
            source={dummyData.myProfile?.profile_image}
            style={{ width: 50, height: 50, borderRadius: SIZES.radius }}
          />
          <View style={{ margin: SIZES.radius }}>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              {dummyData.myProfile?.name}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
              View your profile
            </Text>
          </View>
        </TouchableOpacity>
        {/* List item */}
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
          {drawer_menu.top.map((menuItem) => (
            <CustomDrawerItem
              label={menuItem.label}
              key={menuItem.label}
              icon={menuItem.icon}
              onSelectTab={() => onSelectTab(menuItem)}
            />
          ))}
          <View
            style={{
              height: 1,
              backgroundColor: COLORS.lightGray1,
              margin: SIZES.radius,
            }}
          />
          {drawer_menu.bottom.map((menuItem) => (
            <CustomDrawerItem
              label={menuItem.label}
              key={menuItem.label}
              icon={menuItem.icon}
              onSelectTab={() => onSelectTab(menuItem.label)}
            />
          ))}

          <CustomDrawerItem label={"Log out"} icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
const CustomDrawer = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 26],
  });
  const animatedStyle = { borderRadius, transform: [{ scale }] };
  return (
    <View style={styles.wrapDrawer}>
      <Drawer.Navigator
        initialRouteName="MainLayout"
        drawerType="slide"
        drawerStyle={{
          backgroundColor: COLORS.primary,
          width: 240,
          minWidth: "65%",
          paddingRight: 20,
          flex: 1,
        }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        overlayColor="transparent"
        drawerContent={(props) => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);
          return <CustomContentDrawer navigation={props.navigation} />;
        }}
      >
        <Drawer.Screen name="MainLayout">
          {(props) => (
            <MainLayout {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Notification">
          {(props) => (
            <Notification {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  wrapDrawer: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
});
