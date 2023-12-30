import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { Colors } from '../constants/Colors'
import LinearGradient from 'react-native-linear-gradient'
import { Fonts } from '../../assets/fonts'
import Icon, { Icons } from '../../assets/Icons/Icons'

const BookButton = () => {
    return (
        <View style={styles?.button_holder}>
            <TouchableOpacity style={[styles?.button_holder]}>
                <LinearGradient colors={[Colors?.gradient1, Colors?.gradient2]} style={styles?.linearGradient}>
                    <View style={styles?.left}>
                        <Text style={styles?.btnText}>Next Available</Text>
                        <Text style={styles?.btnText2}>Now</Text>
                    </View>
                    <View style={styles?.right}>
                        <Text style={styles.book_btn}>Book</Text>
                        <Icon type={Icons.AntDesign} name={'caretright'} size={24} color={Colors?.White} />
                    </View>

                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default BookButton

const styles = StyleSheet.create({
    button_holder: {
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(14),
        elevation: 20,
        backgroundColor: Colors?.backGround,
        alignItems: 'center',
        justifyContent: 'center'
    },
    linearGradient: { width: '90%', height: '70%', borderRadius: widthPercentageToDP(3), flexDirection: 'row', justifyContent: 'space-between' },
    left: { width: '60%', marginHorizontal: widthPercentageToDP(3), height: '100%', justifyContent: 'center' },
    btnText: { fontSize: 12, fontFamily: Fonts?.Regular, color: Colors?.White },
    btnText2: { fontSize: 14, fontFamily: Fonts?.SemiBold, color: Colors?.White },
    right: { width: '30%', marginRight: widthPercentageToDP(3), height: '100%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' },
    book_btn: {
        color: Colors?.White, fontFamily: Fonts?.Bold, letterSpacing: 0.6, fontSize: 16, marginRight: 2, marginBottom: 5
    }
})