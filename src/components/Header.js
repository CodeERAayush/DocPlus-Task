import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import Icon, { Icons } from '../../assets/Icons/Icons'
import { Fonts } from '../../assets/fonts'
import { heightPercentageToDP } from 'react-native-responsive-screen'

const Header = () => {
    return (
        <View style={styles.container}>
            <Icon
                type={Icons?.Entypo}
                name={"chevron-thin-left"}
                color={Colors?.Black}
                size={24}
            />
            <Text style={styles?.headText}>Doctor's Profile</Text>
            <Icon
                type={Icons?.Ionicons}
                name={"open-outline"}
                color={Colors?.Black}
                size={24}
            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: heightPercentageToDP(8),
        backgroundColor: Colors?.White,
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headText: {
        color: Colors?.Primary,
        fontFamily: Fonts?.SemiBold,
        fontSize: 20
    }
})