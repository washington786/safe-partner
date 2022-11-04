import React from 'react'
import { StyleSheet } from 'react-native';
import { Title } from 'react-native-paper'
import { GlobalColors } from '../../infrastructure/GlobalColors';
import { GlobalFonts } from '../../infrastructure/GlobalFonts';

interface Text{
    title: string;
    customStyle?:object;
}
const GlobalTitle = (props: Text) => {
  return (
    <Title style={[props.customStyle,styles.text]}>{props.title}</Title>
  )
}

export default GlobalTitle

const styles = StyleSheet.create({
    text:{
        fontFamily: GlobalFonts.medium,
        color: GlobalColors.grey.l6
    }
})
