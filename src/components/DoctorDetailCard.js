import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp ,widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Fonts } from '../../assets/fonts'
import { Colors } from '../constants/Colors'
import Icon, { Icons } from '../../assets/Icons/Icons'
import { docData } from '../helpers'
import InfoCard from '../reusables/InfoCard'

const DoctorDetailCard = () => {

  return (
    <View style={styles?.card}>
      <View style={styles?.top}>
        <View style={styles?.name_holder}>
            <Text style={styles?.heading}>Dr. Anuj Verma</Text>
            <Text style={styles?.subHeading}>General Physcian | MBBS, NBD</Text>
        </View>
        <TouchableOpacity style={styles?.btn}>
            <Icon type={Icons?.Ionicons} name={"chatbubble-outline"} size={24} color={Colors?.Primary}/>
        </TouchableOpacity>
      </View>
      <View style={styles?.bottom}>
        {
            docData.map((item,index)=><InfoCard
            item={item}
            key={index}
            />)
        }
      </View>
    </View>
  )
}

export default DoctorDetailCard

const styles = StyleSheet.create({
    card:{height:hp(22),width:wp(90),alignSelf:'center',marginTop:hp(2)},
    top:{width:'100%',flexDirection:'row',height:'35%',justifyContent:'space-between'},
    heading:{fontFamily:Fonts?.SemiBold,fontSize:24,color:Colors?.Black},
    subHeading:{fontSize:16,fontFamily:Fonts?.Regular,color:Colors?.Primary},
    name_holder:{width:'70%'},
    btn:{backgroundColor:Colors?.White,elevation:5,width:wp(15),height:wp(15),alignItems:'center',justifyContent:'center',borderRadius:999,marginRight:wp(2)},
    bottom:{width:'100%',flexDirection:'row',height:'55%',justifyContent:'space-between',alignItems:'center',paddingHorizontal:2},
})