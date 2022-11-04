import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DrawerHeader from "../../components/DrawerHeader/DrawerHeader";
import DrawerScreensWrapper from "../../components/DrawerScreensWrapper/DrawerScreensWrapper";

import { Avatar, Snackbar } from "react-native-paper";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import GlobalInput from "../../components/TextInput/GlobalInput";
import GlobalButton from "../../components/Button/GlobalButton";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  const [isSnackBarVisible, setIsSnackBarVisible] = useState(false);

  const onUpdateProfile = () => {
    setIsSnackBarVisible(!isSnackBarVisible);
  };

  const onGoBack=()=>{
    navigation.goBack();
  }

  return (
    <DrawerScreensWrapper>
      <DrawerHeader title="Profile" onPress={onGoBack}/>
      <View style={{flex:1}}>
        <View style={styles.avatar}>
          <Avatar.Icon icon={"account"} size={80} style={styles.avtBg} />
        </View>

        <InputWrapper>
          <GlobalInput
            config={{
              placeholder: "Zwanga Blessing",
            }}
            customStyle={styles.input}
            icon="account"
          />
          <GlobalInput
            config={{
              placeholder: "Muregu",
            }}
            customStyle={styles.input}
            icon="account"
          />
          <GlobalInput
            config={{
              placeholder: "zwangamuregu086@gmail.com",
            }}
            customStyle={styles.input}
            icon="email"
          />
          <GlobalInput
            config={{
              placeholder: "+27817263718",
            }}
            customStyle={styles.input}
            icon="phone"
          />

          <GlobalButton
            title="update"
            style={styles.button}
            onPress={onUpdateProfile}
          />
        </InputWrapper>

      <Snackbar
          style={styles.snack}
          visible={isSnackBarVisible}
          onDismiss={onUpdateProfile}
          duration={3000}
          action={
            {
              label:'dismiss',
              onPress:onUpdateProfile
            }
          }
        >
          account details updated successfully.
        </Snackbar>
      </View>

    </DrawerScreensWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  avatar: {
    alignItems: "center",
    marginVertical: 20,
  },
  avtBg: {
    backgroundColor: GlobalColors.bg,
  },
  input: {
    backgroundColor: GlobalColors.whites.l1,
    borderWidth: 0.2,
    borderColor: GlobalColors.grey.l2,
    marginTop: 12,
  },
  button: {
    padding: 8,
    marginTop: 20,
  },
  snack:{
    backgroundColor:GlobalColors.green,
    position:'absolute',
    bottom:20,
    left:0,
    right:0
  }
});
