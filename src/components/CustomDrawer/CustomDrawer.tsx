import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

import { SafeAreaView } from "react-native-safe-area-context";
import DrawerProfileHeader from "../DrawerComponents/DrawerProfileHeader";
import GlobalDrawerItem from "../DrawerComponents/DrawerItem";
import { Drawer } from "react-native-paper";
import GlobalCaption from "../Texts/GlobalCaption";

const CustomDrawer = (props) => {
  const navigation = useNavigation();

  const onTransitHome = () => {
    navigation.navigate("dashboard");
  };
  const onTransitProfile = () => {
    navigation.navigate("profile");
  };
  const onTransitHelp = () => {
    navigation.navigate("help");
  };
  const onTransitAbout = () => {
    navigation.navigate("about");
  };
  const onLogout = () => {
    navigation.navigate("auth");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={{ flex: 1 }}>
        <DrawerProfileHeader />

        <DrawerContentScrollView {...props}>
          <View style={{ paddingVertical: 30, paddingHorizontal: 8 }}>
            <GlobalDrawerItem
              caption="Home"
              icon="home"
              onPress={onTransitHome}
              isDivider={true}
            />
            <GlobalDrawerItem
              caption="Profile"
              icon="user"
              onPress={onTransitProfile}
              isDivider={true}
            />
            <GlobalDrawerItem
              caption="About App"
              icon="info"
              onPress={onTransitAbout}
              isDivider={true}
            />
            <GlobalDrawerItem
              caption="Need Help?"
              icon="help-circle"
              onPress={onTransitHelp}
              isDivider={true}
            />
          </View>
        </DrawerContentScrollView>
        <View style={styles.logout}>
          <GlobalDrawerItem
            caption="Logout"
            icon="log-out"
            onPress={onLogout}
            isDivider={true}
          />
          <GlobalCaption caption="version 1.0.0" style={styles.cap}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  logout: {
    position: "absolute",
    bottom: 40,
    left: 25,
    width:'100%'
  },
  cap:{
    marginTop:-20,
    paddingHorizontal:55,
    fontSize:8
  }
});
