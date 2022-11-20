import { StyleSheet, Text, View,Image } from "react-native";
import React, { useState, useEffect } from "react";
import { Avatar, Divider } from "react-native-paper";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import GlobalTitle from "../Texts/GlobalTitle";
import GlobalCaption from "../Texts/GlobalCaption";
import { auth, firestore, storage } from "../../config/firebase";
import { collection, getDocs, doc } from "firebase/firestore";

const DrawerProfileHeader = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userCollectionRef = collection(firestore, "users");

    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(
        data.docs.map((doc) => ({
          name: doc.data().firstName,
          cellphone: doc.data().telNo,
          userId: doc.data().userId,
          email: doc.data().email,
          surname: doc.data().lastName,
          image: doc.data().imgUrl,
          password: doc.data().password,
        }))
      );
    };
    getUsers();
  }, []);

  let user = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].userId === auth.currentUser.uid) {
      user.push(users[i]);
    }
  }

  return (
    <View style={styles.con}>
      {user.map((info) => {
        return (
          <View>
            <View style={styles.avatar}>
            <Image
                  source={{ uri: info.image }}
                  
                  style={styles.avtBg}
                />
              {/* <Avatar.Icon icon={{ uri: info.image }}  size={100} style={styles.avtBg} /> */}
            </View>
            <GlobalTitle title={info.name +" "+ info.surname} customStyle={styles.name} />
            <GlobalCaption
              caption={info.email}
              style={styles.caption}
            />
            <View style={styles.div} />
          </View>
        );
      })}
    
    </View>
  );
};

export default DrawerProfileHeader;

const styles = StyleSheet.create({
  con: {
    alignItems: "center",
    paddingVertical: 8,
  },
  avatar: {
    alignItems: "center",
    marginTop: 15,
  },
  avtBg: {
    backgroundColor: GlobalColors.bg,
    width:120,
    height:120,
    borderRadius:60
  },
  name: {
    fontSize: 16,
  },
  caption: {
    marginTop: -5,
  },
  div: {
    borderBottomWidth: 0.3,
    borderBottomColor: GlobalColors.grey.l2,
    width: "90%",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
