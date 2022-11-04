import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalColors } from '../../infrastructure/GlobalColors'

const DrawerScreensWrapper = (props: any) => {
  return (
    <View style={styles.con}>
      {props.children}
    </View>
  )
}

export default DrawerScreensWrapper

const styles = StyleSheet.create({
    con:{
        backgroundColor: GlobalColors.white,
        flex:1,
        paddingHorizontal:10
    }
})