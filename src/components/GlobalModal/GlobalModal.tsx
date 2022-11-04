import { Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import SafeAreaWrapper from "../SafeAreaWrapper/SafeAreaWrapper";

interface mod {
  children: any;
  isVisible: boolean;
}
const GlobalModal = (props: mod) => {
  return (
    <Modal
      animationType="fade"
      visible={props.isVisible}
      statusBarTranslucent={false}
      style={styles.con}
    >
      <SafeAreaWrapper>{props.children}</SafeAreaWrapper>
    </Modal>
  );
};

export default GlobalModal;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: GlobalColors.white,
  },
});
