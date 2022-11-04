import { StyleSheet } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import GlobalCard from "../../components/card/GlobalCard";
import Logo from "../../components/logo/Logo";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import GlobalInput from "../../components/TextInput/GlobalInput";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import GlobalTitle from "../../components/Texts/GlobalTitle";
import GlobalParagraph from "../../components/Texts/GlobalParagraph";
import GlobalButton from "../../components/Button/GlobalButton";
import GlobalBottomTexts from "../../components/BottomTexts/GlobalBottomTexts";
import TextButton from "../../components/TextButton/TextButton";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const SCREEN_NAMES={
    register:'register',
    reset:'reset'
  }

  return (
    <Wrapper>
      <GlobalCard>
        <Logo />

        <InputWrapper>
          <GlobalTitle title="Sign Into Account" />

          <GlobalParagraph
            paragraph="enter your registered credentials to sign into your account."
            style={styles.p}
          />

          <GlobalInput
            config={{
              placeholder: "Email",
            }}
            customStyle={styles.input}
            icon="email"
          />

          <GlobalInput
            config={{
              placeholder: "Password",
            }}
            customStyle={styles.input}
            secureTextEntry={true}
            icon="lock"
          />

          <TextButton onPress={()=>{navigation.navigate(`${SCREEN_NAMES.reset}`)}}/>

          <GlobalButton title="sign in" style={styles.button} onPress={()=>navigation.navigate('drawer')}/>
          
        </InputWrapper>
      </GlobalCard>

      <GlobalBottomTexts text2="Sign Up" text="Don't have an account?" onPress={()=>navigation.navigate(`${SCREEN_NAMES.register}`)}/>

    </Wrapper>
  );
};

export default LoginScreen;

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
  button:{
    padding:8,
    marginTop:10
  }
});
