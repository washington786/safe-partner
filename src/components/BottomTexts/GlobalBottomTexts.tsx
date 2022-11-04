import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import GlobalParagraph from "../Texts/GlobalParagraph";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import { GlobalFonts } from "../../infrastructure/GlobalFonts";
import { Paragraph } from "react-native-paper";

interface Text {
  text: string;
  text2: string;
  onPress?():{};
}

const GlobalBottomTexts = (props: Text) => {
  return (
    <View style={styles.con}>
      <Paragraph style={styles.texts}>{props.text}</Paragraph>

      <TouchableOpacity
        onPress={props.onPress}
        style={{ paddingHorizontal: 8 }}
      >
        <Paragraph style={[styles.texts,{fontWeight:'700'}]}>{props.text2}</Paragraph>
      </TouchableOpacity>
    </View>
  );
};

export default GlobalBottomTexts;

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 35,
    color: GlobalColors.white,
  },
  texts: {
    color: GlobalColors.white,
    fontFamily: GlobalFonts.regular,
    zIndex: 100,
    fontSize:16
  },
});
