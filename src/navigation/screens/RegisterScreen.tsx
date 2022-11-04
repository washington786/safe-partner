import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Wrapper from '../../components/Wrapper/Wrapper';
import GlobalCard from '../../components/card/GlobalCard';
import Logo from '../../components/logo/Logo';
import InputWrapper from '../../components/InputWrapper/InputWrapper';
import GlobalTitle from '../../components/Texts/GlobalTitle';
import GlobalParagraph from '../../components/Texts/GlobalParagraph';
import GlobalInput from '../../components/TextInput/GlobalInput';
import GlobalButton from '../../components/Button/GlobalButton';
import GlobalBottomTexts from '../../components/BottomTexts/GlobalBottomTexts';
import { GlobalColors } from '../../infrastructure/GlobalColors';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();

  const SCREEN_NAMES={
    login:'login',
  }

  return (
    <Wrapper>
      <GlobalCard>
        <Logo />

        <InputWrapper>
          <GlobalTitle title="Create an Account" />

          <GlobalParagraph
            paragraph="please enter all your credentials to get started with our app."
            style={styles.p}
          />

          <GlobalInput
            config={{
              placeholder: "First name",
            }}
            customStyle={styles.input}
            icon="account"
          />

          <GlobalInput
            config={{
              placeholder: "Last name",
            }}
            customStyle={styles.input}
            icon="account"
          />

          <GlobalInput
            config={{
              placeholder: "Phone number",
            }}
            customStyle={styles.input}
            icon="phone"
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

          <GlobalButton title="register" style={styles.button} onPress={()=>navigation.navigate('drawer')}/>
          
        </InputWrapper>
      </GlobalCard>

      <GlobalBottomTexts text2="Sign In" text="Already have an account?" onPress={()=>navigation.goBack()}/>
      
    </Wrapper>
  );
};

export default RegisterScreen

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
})