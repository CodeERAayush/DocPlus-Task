import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from '../constants/Colors'
import { Fonts } from '../../assets/fonts'
import { Images } from '../../assets/Images'
const ReviewCard = () => {
    return (
        <View style={styles?.card}>
            <View style={styles?.top}>
                <Text style={styles?.heading}>Patients Review</Text>
                <Image
                    source={Images?.plus}
                    style={{ height: 24, width: 24 }}
                />
            </View>
            <View
                style={{ height: 1, width: wp(80), alignSelf: 'center', backgroundColor: Colors?.black20 }}
            />
            <View style={styles?.mid}>
                <Image
                    source={Images?.patientImg}
                    style={{ height: 64, width: 64 }}
                />
                <View style={styles?.middle_section}>
                    <Text style={styles?.name_text}>Maggie Rhee</Text>
                    <Text style={styles?.for_text}>Visited for Pain</Text>
                    <Image
                        source={Images?.starBunch}
                        style={{ height: 20,width:80 }}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles?.end_section}>
                    <Text style={styles?.days_left}>16 days ago</Text>
                </View>
            </View>
            <Text style={[styles?.days_left,{color:Colors?.Black}]}>“Great caring doctor & practice. Very accessible, especially during these times.Highly recommend.”</Text>
        </View>
    )
}

export default ReviewCard

const styles = StyleSheet.create({
    card: { backgroundColor: 'white', paddingBottom:hp(2), width: '100%', borderBottomLeftRadius: wp(3), borderBottomRightRadius: wp(3), borderTopLeftRadius: 5, borderTopRightRadius: 5, zIndex: 100 },
    top: { flexDirection: 'row', height: hp(5), justifyContent: 'space-between', width: wp(80), alignSelf: 'center', alignItems: 'center' },
    mid: { flexDirection: 'row', height: hp(10), width: wp(80), alignSelf: 'center', paddingVertical: hp(1) },
    heading: { fontFamily: Fonts?.SemiBold, color: Colors?.Black, },
    middle_section: { width: '50%', height: '100%',marginLeft:wp(2) },
    name_text:{fontFamily:Fonts?.Bold,color:Colors?.Black,fontSize:14},
    for_text:{fontFamily:Fonts?.Regular,color:Colors?.Black,fontSize:12},
    days_left:{color:Colors?.skyBlue,fontFamily:Fonts?.Medium,fontSize:13,alignSelf:'center',textAlign:'left'}



})