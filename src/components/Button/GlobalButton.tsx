import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { GlobalColors } from '../../infrastructure/GlobalColors';

interface btn{
    style?: object;
    title: string;
    onPress?():{};
}

const GlobalButton = (props: btn) => {
  return (
    <Button style={[props.style, styles.btn]} mode='contained' onPress={props.onPress}>{props.title}</Button>
  )
}

export default GlobalButton

const styles = StyleSheet.create({
    btn:{
        width: '100%',
        backgroundColor: GlobalColors.bg,
        textTransform:'uppercase'
    }
})