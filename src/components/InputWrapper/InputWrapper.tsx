import { View,StyleSheet} from 'react-native'
import React from 'react'

const InputWrapper = (props: any) => {
  return (
    <View style={styles.con}>
      {props.children}
    </View>
  )
}

export default InputWrapper

const styles = StyleSheet.create({
    con:{
        marginVertical:10,
        width:'100%',
        paddingHorizontal:10
    }
})