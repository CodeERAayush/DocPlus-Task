import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from '../constants/Colors'
import { Fonts } from '../../assets/fonts'
const FeeHolder = ({item}) => {
    // {"fees_dollar": "$ 80.70", "heading": "In-Clinic Appointment", "icon": 10, "rupee": "Rs. 1400"}
  return (
    <View style={styles?.fee_card}>
        {/* {console.log(item)} */}
      <View style={styles?.img_holder}>
        <Image
        source={item?.icon}
        style={{height:24,width:24}}
        resizeMode='contain'
        />
      </View>
        <Text style={styles.heading}>{item?.heading}</Text>
        <View style={{alignItems:'flex-end'}}>
            <Text style={styles?.usd_text}>Fees: {item?.fees_dollar}</Text>
            <Text style={styles?.rupee_text}>{item?.rupee}</Text>
        </View>
    </View>
  )
}

export default FeeHolder

const styles = StyleSheet.create({
    fee_card:{height:hp(8),width:wp(80),borderRadius:10,backgroundColor:Colors?.backGround,elevation:10,marginTop:hp(2),alignSelf:'center',flexDirection:'row',alignItems:'center',paddingLeft:wp(5)},
    img_holder:{height:wp(10),width:wp(10),backgroundColor:Colors?.White,alignItems:'center',justifyContent:'center',borderRadius:999,elevation:10},
    heading:{color:Colors?.Black,marginHorizontal:wp(5),fontFamily:Fonts?.Medium,fontSize:12},
    rupee_text:{color:'black',fontFamily:Fonts?.Regular,fontSize:12},
    usd_text:{color:Colors?.Black,fontFamily:Fonts?.SemiBold,fontSize:12}
})