import { StyleSheet, View } from "react-native";
import React from "react";

import Icons from "react-native-vector-icons/Feather";
import { Callout, Marker } from "react-native-maps";
import { Caption } from "react-native-paper";

interface map {
  coordinates: object | any;
  place: string;
  onOpenSnack(): void;
  id:number
}
const CustomMapMarker = (props: map) => {
  return (
    <Marker coordinate={props.coordinates} key={props.id}>
      <View style={styles.con}>
        <Icons name="map-pin" size={25} color={"white"} />
        <Caption style={[styles.text,{color:"white"}]}>unsafe</Caption>
      </View>

      <Callout onPress={props.onOpenSnack}>
        <Caption style={styles.text}>{props.place}</Caption>
        {/* <GlobalCaption caption={props.place} /> */}
      </Callout>
    </Marker>
  );
};

{/* <Marker
                key={place.id}
                title={place.place}
                coordinate={{
                  latitude: place.coords.latitude,
                  longitude: place.coords.longitude,
                }}
              >
               
                <Callout onPress={onOpenSnack}>
                  <GlobalCaption caption={place.place} />
                </Callout>
              </Marker> */}

export default CustomMapMarker;

const styles = StyleSheet.create({
  con: {
    backgroundColor: "red",
    maxHeight: 50,
    minHeight: 50,
    minWidth: 50,
    maxWidth: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"column",
    padding:2
  },
  text:{
    fontSize:8
  }
});
