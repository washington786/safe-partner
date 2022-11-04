import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import DrawerScreensWrapper from '../../components/DrawerScreensWrapper/DrawerScreensWrapper'
import DrawerHeader from '../../components/DrawerHeader/DrawerHeader'
import { useNavigation } from '@react-navigation/native'
import GlobalTitle from '../../components/Texts/GlobalTitle'
import { GlobalColors } from '../../infrastructure/GlobalColors'
import { HELP_DATA } from '../../data/TextsData'
import GlobalParagraph from '../../components/Texts/GlobalParagraph'

const Help = () => {
  const navigation = useNavigation();

  const onGoBack=()=>{
    navigation.goBack();
  }

  return (
    <DrawerScreensWrapper>
      <DrawerHeader title='Need Help?' onPress={onGoBack}/>
      <ScrollView showsVerticalScrollIndicator={false}>

        <GlobalTitle title='What to do if you are in danger?' customStyle={styles.title}/>

        {
          HELP_DATA.map((text)=>{
            return(
              <View key={text.id}>
                <GlobalParagraph paragraph={text.text} style={styles.paragraph}/>
              </View>
            )
          })
        }

      </ScrollView>
    </DrawerScreensWrapper>
  )
}

export default Help

const styles = StyleSheet.create({
  title:{
    fontSize:16,
    paddingVertical:10,
    color: GlobalColors.black
  },
  paragraph:{
    textAlign:'justify',
    paddingVertical:10,
    paddingHorizontal:5
  }
})