import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, Divider } from "react-native-paper";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import GlobalTitle from "../Texts/GlobalTitle";
import GlobalCaption from "../Texts/GlobalCaption";

const DrawerProfileHeader = () => {
  return (
    <View style={styles.con}>
      <View style={styles.avatar}>
        <Avatar.Icon icon={"account"} size={80} style={styles.avtBg} />
      </View>
      <GlobalTitle title="Zwanga Muregu" customStyle={styles.name} />
      <GlobalCaption caption="zwangamuregu86@gmail.com" style={styles.caption}/>
      <View style={styles.div}/>
    </View>
  );
};

export default DrawerProfileHeader;

const styles = StyleSheet.create({
  con: {
    alignItems: "center",
    paddingVertical:8
  },
  avatar: {
    alignItems: "center",
    marginTop: 15,
  },
  avtBg: {
    backgroundColor: GlobalColors.bg,
  },
  name: {
    fontSize: 16,
  },
  caption:{
    marginTop:-5
  },
  div:{
    borderBottomWidth:0.3,
    borderBottomColor: GlobalColors.grey.l2,
    width: '90%',
    paddingHorizontal:10,
    paddingVertical:8
  }
});
