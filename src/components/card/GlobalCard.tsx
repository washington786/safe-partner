import { StyleSheet, View } from "react-native";
import React from "react";

import { GlobalColors } from "../../infrastructure/GlobalColors";

const GlobalCard = (props: any) => {
  return (
    <>
      <View style={styles.con}>{props.children}</View>
    </>
  );
};

export default GlobalCard;

const styles = StyleSheet.create({
  con: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalColors.white,
    borderRadius:5
  },
});
