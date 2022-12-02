import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
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
import  {auth, firestore}  from '../../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {collection, addDoc, GeoPoint } from "firebase/firestore";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [telNo,setTelNo] = useState('');
  const [password,setPassword] = useState('');

  const SCREEN_NAMES={
    login:'login',
  }

  async function registerUser(){
  
    const collectionRef = collection(firestore, 'users');
        if(firstName&&lastName&&email&&telNo&&password){
           
            try{
                await createUserWithEmailAndPassword(auth,email,password).then((results)=>{
                    const userId = results.user.uid;
                    addDoc(collectionRef,{
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        telNo: telNo,
                        password: password,
                        userId: userId,
                        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/safe-partner.appspot.com/o/Avatar.png?alt=media&token=6bcc4c15-c26c-40c1-945c-f5484b75848a',
                        
                    }).then(()=>{
                      navigation.navigate('auth');
                       
                    })
                })
            }catch(e){
                alert(e.message);
            }
        }else{
            alert('complete the form')
        }
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
              onChangeText:(e)=>{setFirstName(e)}
            }}
            customStyle={styles.input}
            icon="account"
          />

          <GlobalInput
            config={{
              placeholder: "Last name",
              onChangeText:(e)=>{setLastName(e)}
            }}
            customStyle={styles.input}
            icon="account"
          />

          <GlobalInput
            config={{
              placeholder: "Phone number",
              onChangeText:(e)=>{setTelNo(e)}
            }}
            customStyle={styles.input}
            icon="phone"
          />

          <GlobalInput
            config={{
              placeholder: "Email",
              onChangeText:(e)=>{setEmail(e)}
            }}
            customStyle={styles.input}
            icon="email"
          />

          <GlobalInput
            config={{
              placeholder: "Password",
              onChangeText:(e)=>{setPassword(e)}
            }}
            customStyle={styles.input}
            secureTextEntry={true}
            icon="lock"
          />

          <GlobalButton title="register" style={styles.button} onPress={registerUser}/>
          
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