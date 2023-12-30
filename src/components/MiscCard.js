import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../constants/Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Images } from '../../assets/Images'
import { Fonts } from '../../assets/fonts'

import FeesCard from '../reusables/FeesCard'
import ReviewCard from '../reusables/ReviewCard'
import DateCard from './DateCard'

const MiscCard = () => {

    const [tab,setTab]=useState(2)

    const _handleTabClick=(num)=>{
        setTab(num)
    }


    const _switchTab=(num)=>{
        switch(num){
            case 1:
                return <View style={{backgroundColor:'white',height:hp(20),width:'100%',borderBottomLeftRadius:wp(3),borderBottomRightRadius:wp(3),borderTopLeftRadius:5,borderTopRightRadius:5,zIndex:100,justifyContent:'center',alignItems:'center'}}>
                     <Text style={styles.tab_text}>This is a text for tab one.</Text>
                      </View>
            case 2:
                return <DateCard/>
            case 3:
                return <FeesCard/>
            case 4:
                return <ReviewCard/>
        }
    }


  return (
    <View style={styles?.card}>
        <View style={styles?.tabs_holder}>
      <TouchableOpacity
        onPress={()=>_handleTabClick(1)}
      style={[tab==1?styles?.tab_ext:styles?.tab,styles?.center]}>
        {
            tab==1?<Text style={styles?.tab_text}>Dummy</Text>:<Image
            source={Images?.user}
            style={styles?.icn_style}
            resizeMode='contain'
            />
        }
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=>_handleTabClick(2)}
      style={[tab==2?styles?.tab_ext:styles?.tab,styles?.center]}>
         {
            tab==2?<Text style={styles?.tab_text}>Availibility</Text>:<Image
            source={Images?.calender}
            style={styles?.icn_style}
            resizeMode='contain'
            />
        }
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=>_handleTabClick(3)}
        style={[tab==3?styles?.tab_ext:styles?.tab,styles?.center]}>
             {
            tab==3?<Text style={styles?.tab_text}>Fees</Text>:<Image
            source={Images?.cashImage}
            style={styles?.icn_style}
            resizeMode='contain'
            />
        }
        </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=>_handleTabClick(4)}
        style={[tab==4?styles?.tab_ext:styles?.tab,styles?.center]}>
             {
            tab==4?<Text style={styles?.tab_text}>Reviews</Text>:<Image
            source={Images?.pen}
            style={styles?.icn_style}
            resizeMode='contain'
            />
        }
        </TouchableOpacity>
      </View>
      {_switchTab(tab)}
    </View>
  )
}

export default MiscCard

const styles = StyleSheet.create({
    card:{backgroundColor:Colors?.backGround,width:wp(90),alignSelf:'center',borderRadius:wp(2),marginBottom:hp(1),elevation:5},
    tabs_holder:{width:'100%',flexDirection:'row',justifyContent:'center'},
    center:{alignItems:'center',justifyContent:'center'},
    tab:{width:'23%',height:hp(6),backgroundColor:Colors?.backGround,borderTopLeftRadius:wp(2),borderTopRightRadius:wp(2),elevation:10,marginTop:1},
    tab_ext:{width:'30.5%',height:hp(6),backgroundColor:Colors?.White,borderTopLeftRadius:wp(2),borderTopRightRadius:wp(2),elevation:10,marginTop:1,zIndex:10},
    icn_style:{width:wp(7),height:wp(7)},
    tab_text:{color:Colors?.pink,fontFamily:Fonts?.Medium,fontSize:17}
})