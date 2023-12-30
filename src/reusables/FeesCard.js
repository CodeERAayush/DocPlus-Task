import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { feesData } from '../helpers'
import FeeHolder from './feed_holder'
const FeesCard = () => {
  return (
    <View style={styles?.card}>
      {feesData?.map((item,index)=>{
          return <FeeHolder
          item={item}
          key={index}
          />
      })}
    </View>
  )
}

export default FeesCard

const styles = StyleSheet.create({
  card:{backgroundColor:'white',paddingVertical:hp(3),width:'100%',borderBottomLeftRadius:wp(3),borderBottomRightRadius:wp(3),borderTopLeftRadius:5,borderTopRightRadius:5,zIndex:100},


})