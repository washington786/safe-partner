import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalColors } from '../../infrastructure/GlobalColors'

import Icons from 'react-native-vector-icons/Feather';
import { Caption } from 'react-native-paper';
import { GlobalFonts } from '../../infrastructure/GlobalFonts';

const Logo = () => {
  return (
    <View style={styles.con}>
      <Icons name='check-circle' size={40} color={GlobalColors.bg}/>
      <Caption style={styles.brand}>Safe Partner</Caption>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    con:{
        maxWidth: 130,
        minWidth:130,
        minHeight:130,
        height:'100%',
        width:'100%',
        maxHeight:130,
        backgroundColor:GlobalColors.whites.l8,
        alignItems:'center',
        borderRadius:100,
        justifyContent:'center',
        marginTop:-70,
        borderWidth:0.2,
        borderColor:GlobalColors.grey.l3
    },
    brand:{
        fontFamily: GlobalFonts.regular,
        fontSize: 14,
        color: GlobalColors.grey.l4
    }
})