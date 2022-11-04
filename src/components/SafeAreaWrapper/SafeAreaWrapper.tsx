import { SafeAreaView, StyleSheet, Platform,StatusBar } from 'react-native'
import React from 'react'
import { GlobalColors } from '../../infrastructure/GlobalColors';

const isAndroid = Platform.OS ==='android';

const SafeAreaWrapper = (props: any) => {
  return (
    <SafeAreaView style={styles.con}>
        {props.children}
    </SafeAreaView>
  )
}

export default SafeAreaWrapper

const styles = StyleSheet.create({
    con:{
        paddingTop: isAndroid? 0: 0,
        // paddingTop: isAndroid? StatusBar.currentHeight: 0,
        flex:1,
        backgroundColor: GlobalColors.white
    }
})