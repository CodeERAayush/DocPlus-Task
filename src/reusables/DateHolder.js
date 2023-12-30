import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../constants/Colors'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { Fonts } from '../../assets/fonts'

const DateHolder = ({day}) => {
    // {"date": "04", "dayOfWeek": "Thursday", "isToday": false}
  return (
    <LinearGradient colors={!day?.isToday?[Colors?.LightGrey,Colors?.LightGrey]:[Colors?.gradient1,Colors?.gradient2]} style={styles?.card}>
      <Text style={day?.isToday?styles.date:styles.date_}>{day?.date}</Text>
      <Text style={day?.isToday?styles?.day:styles.day_}>{day?.dayOfWeek.slice(0,3)}</Text>
    </LinearGradient>
  )
}

export default DateHolder

const styles = StyleSheet.create({
    card:{width:'15%',height:heightPercentageToDP(8),borderRadius:15,alignItems:'center',justifyContent:'center'},
    date:{fontFamily:Fonts?.Bold,fontSize:16,color:Colors?.White},
    date_:{fontFamily:Fonts?.Bold,fontSize:16,color:Colors?.Black},
    day:{color:Colors?.White,fontFamily:Fonts?.Regular},
    day_:{color:Colors?.Black,fontFamily:Fonts?.Regular},
})