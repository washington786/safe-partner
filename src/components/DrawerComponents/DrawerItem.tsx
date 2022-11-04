import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import Icons from "react-native-vector-icons/Feather";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import GlobalCaption from "../Texts/GlobalCaption";
import { Divider } from "react-native-paper";

interface Di {
  icon: string;
  onPress?(): {};
  caption: string;
  style?: object;
  conStyle?:{},
  isDivider?:boolean;
}

const GlobalDrawerItem = (props: Di) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.conStyle}>
      <View style={styles.con}>

        <Icons name={props.icon} size={25} color={GlobalColors.bg} />

        <View style={styles.txt}>
          <GlobalCaption caption={props.caption} style={props.style} />
          {
            props.isDivider && <Divider/>
          }
        </View>

      </View>
    </TouchableOpacity>
  );
};

export default GlobalDrawerItem;

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 25,
    paddingTop: 10,
  },
  txt: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
