import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { GlobalColors } from "../../infrastructure/GlobalColors";

import Icons from "react-native-vector-icons/Feather";

interface Dr{
    onPress?():{}
}
const DrawerFAB = (props: Dr) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.con}>
        <Icons name="menu" size={33} color={GlobalColors.white} />
    </TouchableOpacity>
  );
};

export default DrawerFAB;

const styles = StyleSheet.create({
  con: {
    backgroundColor: GlobalColors.bg,
    maxHeight: 55,
    minHeight: 55,
    maxWidth: 55,
    minWidth: 55,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    position:'absolute',
    top:10,
    left:10,
    zIndex:100
  },
});
