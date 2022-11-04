import { StyleSheet} from 'react-native'
import React from 'react'
import { Paragraph } from 'react-native-paper'
import { GlobalFonts } from '../../infrastructure/GlobalFonts';
import { GlobalColors } from '../../infrastructure/GlobalColors';

interface Text{
    paragraph: string;
    style?: object;
}

const GlobalParagraph = (props: Text) => {
  return (
    <Paragraph style={[props.style,styles.text]}>{props.paragraph}</Paragraph>
  )
}

export default GlobalParagraph

const styles = StyleSheet.create({
    text:{
        fontFamily: GlobalFonts.extraLight,
        color: GlobalColors.grey.l6
    }
})