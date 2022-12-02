import { StyleSheet, Text, View,Image } from "react-native";
import React, { useState,useEffect } from "react";
import DrawerHeader from "../../components/DrawerHeader/DrawerHeader";
import DrawerScreensWrapper from "../../components/DrawerScreensWrapper/DrawerScreensWrapper";
import { Avatar, Snackbar } from "react-native-paper";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import GlobalInput from "../../components/TextInput/GlobalInput";
import GlobalButton from "../../components/Button/GlobalButton";
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, firestore,storage } from '../../config/firebase';
import { useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {

  const navigation = useNavigation();

  const {userData} = useSelector(state=>state.user);
  // 
  console.log(userData[0].firsstName);
  const [lastName, setLastName] = useState(userData[0].lastName);
  const [firstName, setFirstName] = useState(userData[0].firstName);
  const [email, setEmail] = useState(userData[0].email);
  const [telNo, setTelNo] = useState(userData[0].telNo);
  const [password, setPassword] = useState(userData[0].password);
  const [confPassword, setConfPassword] = useState(userData[0].password);
  const [image, setImage] = useState(userData[0].imgUrl);
  const [users, setUsers] = useState([]);
  const [isOpen,setIsOpen] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [isSnackBarVisible, setIsSnackBarVisible] = useState(false);



  // const onUpdateProfile = () => {
  //   setIsSnackBarVisible(!isSnackBarVisible);
  // };

  const onGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const userCollectionRef = collection(firestore, "users")

    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(
        data.docs.map((doc) => ({
          name: doc.data().firstName,
          cellphone: doc.data().telNo,
          userId: doc.data().userId,
          email: doc.data().email,
          surname: doc.data().lastName,
          image:doc.data().imgUrl,
          password: doc.data().password,
        }))
      );
    }
    getUsers();
  }, []);

  let user = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].userId === auth.currentUser.uid) {
      user.push(users[i]);

    }
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  

  const onUpdateProfile = async () => {
    setIsLoading(true);
    const storageRef = ref(
      storage,
      `/images/${Date.now()}image`
    );
    const response = await fetch(image);
  const blob = await response.blob();

  await uploadBytesResumable(storageRef, blob).then((uploadTask)=>{
    getDownloadURL(uploadTask.ref).then(async(url) => {
      await updateDoc(doc(firestore,'users', userData[0].docId),{
              firstName: firstName,
              lastName: lastName,
              telNo: telNo,
              email: email,
              imgUrl: url,
              password: password,
    
            }).then(()=>{
              setIsLoading(false);
              setIsSnackBarVisible(!isSnackBarVisible);
            }).catch(e=>{
              alert(e.message);
              setIsLoading(false);
            });
     
  }).then(()=>{
   
    setIsLoading(false);
  })
  })
  };


  return (
    <DrawerScreensWrapper>
      <DrawerHeader title="Profile" onPress={onGoBack} />
      {user.map((info)=>{
        return(

      
      <View style={{ flex: 1 }}>
        <View style={styles.avatar}>
        <Image
                  source={{ uri: image }}
                  
                  style={styles.avtBg}
                />
                
          <GlobalButton
            title="update"
            style={styles.button}
            onPress={pickImage}
          />
          {/* <Avatar.Icon icon={{ uri: info.image }} size={100} style={styles.avtBg} /> */}
          {/* <View style={{ ...styles.imageIcon }}>
          <GlobalButton
            title="update"
            style={styles.button}
            onPress={pickImage}
          />
                </View> */}

        </View>

        <InputWrapper>
          <GlobalInput
            config={{
              placeholder: "Zwanga Blessing",
              value:firstName,
              onChangeText:(e)=>setFirstName(e),
           
            }}
            customStyle={styles.input}
            icon="account"
          />
          <GlobalInput
            config={{
              placeholder: "Muregu",
              value:lastName,
              onChangeText:(e)=>setLastName(e),
            }}
            customStyle={styles.input}
            icon="account"
          />
          <GlobalInput
            config={{
              placeholder: "zwangamuregu086@gmail.com",
              value:email,
              onChangeText:(e)=>setEmail(e),
            }}
            customStyle={styles.input}
            icon="email"
          />
          <GlobalInput
            config={{
            
              value:telNo,
              onChangeText:(e)=>setTelNo(e),
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
          action={{
            label: "dismiss",
            onPress: onUpdateProfile,
          }}
        >
          account details updated successfully.
        </Snackbar>
      </View>
        )
      })}
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
    width:120,
    height:120,
    borderRadius:60
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
  snack: {
    backgroundColor: GlobalColors.green,
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  
  imageIcon: {
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    bottom: 0,
    height: '24%',
    
  },
});
