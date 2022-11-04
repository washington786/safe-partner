import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Icons from 'react-native-vector-icons/Feather';
import { GlobalColors } from '../../infrastructure/GlobalColors';
import GlobalTitle from '../Texts/GlobalTitle';

interface Dr{
    title: string;
    onPress?():{};
}
const DrawerHeader = (props: Dr) => {
  return (
    <View style={styles.con}>
      <TouchableOpacity onPress={props.onPress}>
        <Icons name='arrow-left' size={20} color={GlobalColors.black}/>
      </TouchableOpacity>
      <View style={styles.txtCon}>
        <GlobalTitle title={props.title}/>
      </View>
    </View>
  )
}

export default DrawerHeader

const styles = StyleSheet.create({
    con:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingVertical:15
    },
    txtCon:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})