import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GlobalParagraph from '../Texts/GlobalParagraph'
import { GlobalFonts } from '../../infrastructure/GlobalFonts'

interface txt{
    onPress?:()=>{}
}
const TextButton = (props: txt) => {
  return (
    <View style={styles.con}>
      <TouchableOpacity onPress={props.onPress}>
        <GlobalParagraph paragraph='Forgot Your Password?' style={styles.txt}/>
      </TouchableOpacity>
    </View>
  )
}

export default TextButton

const styles = StyleSheet.create({
    con:{
        alignItems:'flex-end',
        justifyContent:'flex-end',
        paddingVertical:8
    },
    txt:{
        fontFamily:GlobalFonts.semiBold,
        fontSize: 16
    }
})