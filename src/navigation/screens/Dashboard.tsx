import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { GlobalColors } from "../../infrastructure/GlobalColors";

import MapView, { Callout, Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

import * as Location from "expo-location";
import DrawerFAB from "../../components/DrawerFAB/DrawerFAB";
import { DUMMY_DATA } from "../../data/DUMMY_DATA";
import { Snackbar } from "react-native-paper";

import Icons from "react-native-vector-icons/Feather";
import GlobalParagraph from "../../components/Texts/GlobalParagraph";
import GlobalCaption from "../../components/Texts/GlobalCaption";

const Dashboard = () => {
  const navigation = useNavigation();

  const onToggleDrawerMenu = () => {
    navigation.openDrawer();
  };

  const [isSnackBarVisible, setIsSnackBarVisible] = useState(false);

  const onOpenSnack = () => {
    setIsSnackBarVisible(!isSnackBarVisible);
  };

  const [location, setLocation] = useState({});
  const [error, setError] = useState("");

  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
      var { latitude, longitude } = coords;
      setLatitude(latitude);
      setLongitude(longitude);
    })();
  }, []);

  return (
    <>
      <DrawerFAB onPress={onToggleDrawerMenu} />
      <MapView
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.029,
        }}
      >
        {DUMMY_DATA.map((place) => {
          return (
            <>
              <Marker
                key={place.id}
                title={place.place}
                coordinate={{
                  latitude: place.coords.latitude,
                  longitude: place.coords.longitude,
                }}
              >
                <Callout onPress={onOpenSnack}>
                  <GlobalCaption caption={place.place}/>
                </Callout>
              </Marker>
            </>
          );
        })}
      </MapView>

      <Snackbar
        style={styles.snack}
        visible={isSnackBarVisible}
        onDismiss={onOpenSnack}
        duration={200000}
        action={{
          label: "X",
          onPress: onOpenSnack,
        }}
      >
        <Icons name="alert-triangle" size={16} color={GlobalColors.white} style={styles.icon}/>
        please note this is an unsafe zone, you are advised to keep low profile.
      </Snackbar>

    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  con: {
    backgroundColor: GlobalColors.white,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 0,
    margin: 0,
  },
  map: {
    height: "100%",
    width: "100%",
  },
  snack: {
    backgroundColor: GlobalColors.bg,
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  icon:{
    paddingHorizontal:5
  }
});
