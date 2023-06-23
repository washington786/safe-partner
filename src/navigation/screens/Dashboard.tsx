import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { GlobalColors } from "../../infrastructure/GlobalColors";

import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

import * as Location from "expo-location";
import DrawerFAB from "../../components/DrawerFAB/DrawerFAB";
import { DUMMY_DATA } from "../../data/DUMMY_DATA";
import { Provider, Snackbar } from "react-native-paper";

import Icons from "react-native-vector-icons/Feather";
import GlobalCaption from "../../components/Texts/GlobalCaption";
import CustomMapMarker from "../../components/CustomeMapMarker/CustomMapMarker";
import IconMap from "../../components/CustomeMapMarker/IconMap";

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

  // geo
  const geofenceRegions = [
    {
      identifier: "unsafe spots",
      latitude: latitude,
      longitude: longitude,
      radius: 100,
    },
  ];

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

      await Location.startGeofencingAsync("geofencingTask", geofenceRegions);
    })();
  }, []);

  // trigger opening of the snapshot
  useEffect(() => {
    if (longitude && latitude) {
      setTimeout(() => {
        onOpenSnack();
      }, 50000);
    }
  }, [isSnackBarVisible]);

  return (
    <>
      <Provider>
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
          {DUMMY_DATA.map((place, index) => {
            return (
              <>
                <Circle
                  key={index}
                  center={{
                    latitude: place.coords.latitude,
                    longitude: place.coords.longitude,
                  }}
                  radius={1000}
                  strokeWidth={2}
                  strokeColor="rgba(255, 0, 0, 0.5)"
                  fillColor="rgba(255, 0, 0, 0.1)"
                />
                <CustomMapMarker
                  key={place.id}
                  coordinates={{
                    latitude: place.coords.latitude,
                    longitude: place.coords.longitude,
                  }}
                  onOpenSnack={onOpenSnack}
                  place={place.place} id={0}                />
              </>
            );
          })}

          <Marker
            coordinate={{ latitude: latitude, longitude: longitude }}
            style={{ zIndex: 100 }}
          >
            <IconMap />
          </Marker>
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
          <Icons
            name="alert-triangle"
            size={16}
            color={GlobalColors.white}
            style={styles.icon}
          />
          please note this is an unsafe zone, your application won't
          authenticate until you are safe.
        </Snackbar>
      </Provider>
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
  icon: {
    paddingHorizontal: 5,
  },
});
