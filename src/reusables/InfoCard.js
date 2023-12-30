import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { Fonts } from '../../assets/fonts'

const InfoCard = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles?.top}><Text style={styles?.heading}>{item?.heading}</Text></View>
      <View style={styles?.bottom}>
        <Image
        source={item?.icon}
        style={styles?.img}
        resizeMode='contain'
        />
        <Text style={styles?.value}>{item?.value}</Text>
      </View>
    </View>
  )
}

export default InfoCard

const styles = StyleSheet.create({
  card:{backgroundColor:Colors.White,width:widthPercentageToDP(28),paddingVertical:heightPercentageToDP(1.5),borderRadius:widthPercentageToDP(5),elevation:10,alignItems:'center',justifyContent:'center'},
  top:{marginBottom:heightPercentageToDP(1)},
  heading:{color:Colors?.black60,fontFamily:Fonts?.Medium,fontSize:10.5,lineHeight:13.65},
  bottom:{flexDirection:'row',alignItems:'center'},
  img:{height:15,width:19},
  value:{fontSize:14,fontFamily:Fonts?.Bold,color:Colors?.Black}
})