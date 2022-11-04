import { StyleSheet } from 'react-native'
import React from 'react'
import { Caption } from 'react-native-paper'
import { GlobalFonts } from '../../infrastructure/GlobalFonts';
import { GlobalColors } from '../../infrastructure/GlobalColors';

interface Text{
    caption:string;
    style?: object;
}

const GlobalCaption = (props: Text) => {
  return (
    <Caption style={[props.style,styles.text]}>{props.caption}</Caption>
  )
}

export default GlobalCaption

const styles = StyleSheet.create({
    text:{
        fontFamily: GlobalFonts.medium,
        color: GlobalColors.grey.l6
    }
})