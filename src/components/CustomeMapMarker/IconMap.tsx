import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Icons from 'react-native-vector-icons/MaterialIcons';

const IconMap = () => {
  return (
    <View style={styles.icon}>
      <Icons name='person-pin-circle' size={30} color={'blue'}/>
    </View>
  )
}

export default IconMap

const styles = StyleSheet.create({
    icon:{
        zIndex:100,
        // position:"absolute",
        bottom: 1,
        backgroundColor:"white",
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center"
    }
})