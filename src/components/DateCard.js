import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../constants/Colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import moment from 'moment'
import Icon, { Icons } from '../../assets/Icons/Icons'
import DatePicker from 'react-native-date-picker'
import { getSixDatesObject } from '../helpers'
import DateHolder from '../reusables/DateHolder'
const DateCard = () => {

  const [date,setDate]=useState(new Date())
  const [sixDayObject,setObj]=useState([])
  const [open,setOpen]=useState(false)
  const _getMonthName=(d)=>{
    return moment(d).format('MMMM, yyyy')
  }

  useEffect(()=>{
    setObj(getSixDatesObject(date))
  },[date])

  return (
    <View style={styles.card}>
      <TouchableOpacity 
      onPress={()=>setOpen(true)}
      style={styles?.top}>
        <Text style={styles?.month_text_btn}>{_getMonthName(date)}</Text>
        <Icon type={Icons?.Entypo} name="chevron-small-down" size={24} color={Colors.Black} style={{marginLeft:wp(1)}}/>
      </TouchableOpacity>

      <View style={styles?.bottom}>
        {sixDayObject.map((item,index)=><DateHolder
        day={item}
        key={index}
        />)}
      </View>

      <DatePicker
        modal
        open={open}
        date={date}
        mode='date'
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </View>
  )
}

export default DateCard

const styles = StyleSheet.create({
  card:{backgroundColor:'white',height:hp(20),width:'100%',borderBottomLeftRadius:wp(3),borderBottomRightRadius:wp(3),borderTopLeftRadius:5,borderTopRightRadius:5,zIndex:100},
  top:{paddingVertical:hp(2),justifyContent:'center',flexDirection:'row',alignItems:'center'},
  month_text_btn:{fontSize:20,color:Colors?.Black},
  bottom:{width:'95%',height:hp(10),alignSelf:'center',marginTop:wp(1),flexDirection:'row',justifyContent:'space-between'}
})