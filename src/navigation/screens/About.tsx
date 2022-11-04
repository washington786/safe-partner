import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerScreensWrapper from '../../components/DrawerScreensWrapper/DrawerScreensWrapper'
import DrawerHeader from '../../components/DrawerHeader/DrawerHeader'
import { ABOUT_DATA } from '../../data/TextsData'
import GlobalParagraph from '../../components/Texts/GlobalParagraph'
import { useNavigation } from '@react-navigation/native'

const About = () => {
  const navigation = useNavigation();

  const onGoBack=()=>{
    navigation.goBack();
  }
  return (
    <DrawerScreensWrapper>
      <DrawerHeader title='About App' onPress={onGoBack}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          ABOUT_DATA.map((text)=>{return (
            <View key={text.id}>
              <GlobalParagraph paragraph={text.text} style={styles.paragraph}/>
            </View>
          )})
        }
      </ScrollView>
    </DrawerScreensWrapper>
  )
}

export default About

const styles = StyleSheet.create({
  paragraph:{
    textAlign:'justify',
    paddingVertical:10,
    paddingHorizontal:5
  }
})