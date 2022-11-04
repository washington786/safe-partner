import { StyleSheet, View } from 'react-native'
import React from 'react'
import { GlobalColors } from '../../infrastructure/GlobalColors'
interface wr{
  style:object;
  children:any;
}
const Wrapper = (props: wr) => {
  return (
    <View style={[styles.con,props.style]}>
      {props.children}
    </View>
  )
}

export default Wrapper

const styles = StyleSheet.create({
    con:{
        flex: 1,
        backgroundColor: GlobalColors.bg,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:15
    }
})