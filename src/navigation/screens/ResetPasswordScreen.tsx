import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import GlobalCard from "../../components/card/GlobalCard";
import Logo from "../../components/logo/Logo";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import GlobalTitle from "../../components/Texts/GlobalTitle";
import GlobalParagraph from "../../components/Texts/GlobalParagraph";
import GlobalInput from "../../components/TextInput/GlobalInput";
import GlobalButton from "../../components/Button/GlobalButton";
import { useNavigation } from "@react-navigation/native";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import BackIconButton from "../../components/BackIconButton/BackIconButton";
import GlobalModal from "../../components/GlobalModal/GlobalModal";

import Icons from "react-native-vector-icons/Feather";

const ResetPasswordScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const SCREEN_NAMES = {
    login: "auth",
  };

  const onShowModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onTransitToLogin = () => {
    navigation.navigate(`${SCREEN_NAMES.login}`);
    setModalVisible(!isModalVisible);
  };

  return (
    <Wrapper>
      <BackIconButton
        icon_name="x"
        style={styles.icon}
        onPress={() => navigation.goBack()}
      />
      <GlobalCard>
        <Logo />

        <InputWrapper>
          <GlobalTitle title="Forgot Your Password" />

          <GlobalParagraph
            paragraph="enter your registered email address to reset your password"
            style={styles.p}
          />

          <GlobalInput
            config={{
              placeholder: "Email",
            }}
            customStyle={styles.input}
            icon="email"
          />

          <GlobalButton
            title="submit"
            style={styles.button}
            onPress={onShowModal}
          />
        </InputWrapper>
      </GlobalCard>

      <GlobalModal isVisible={isModalVisible}>
        <Wrapper>
          <BackIconButton
            icon_name="x"
            style={styles.icon}
            onPress={onShowModal}
          />

          <GlobalCard>
            <Icons
              name="check-circle"
              size={60}
              color={GlobalColors.green}
              style={styles.check}
            />
            <GlobalParagraph
              paragraph="please reset link successfully sent to your email. Please check your email for more instructions."
              style={[styles.p, styles.pE]}
            />
            <View style={styles.mdBtn}>
              <GlobalButton
                title="go to login"
                style={[styles.button]}
                onPress={onTransitToLogin}
              />
            </View>
          </GlobalCard>
        </Wrapper>
      </GlobalModal>
    </Wrapper>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: GlobalColors.whites.l1,
    borderColor: GlobalColors.grey.l2,
    borderWidth: 0.2,
    marginVertical: 5,
  },
  p: {
    fontSize: 13,
    paddingBottom: 8,
  },
  button: {
    padding: 8,
    marginTop: 10,
  },
  icon: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  check: {
    marginTop: 15,
  },
  pE: {
    textAlign: "center",
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  mdBtn: {
    marginHorizontal: 15,
    display: "flex",
    padding: 6,
    width: "100%",
  },
});
