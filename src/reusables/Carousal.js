import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from '../constants/Colors'
import Icon, { Icons } from '../../assets/Icons/Icons'
import LottieView from 'lottie-react-native'

const Carousal = ({ images }) => {

    const [scrollIndex, setScrollIndex] = useState(0)

    const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
        if (viewableItems?.length) {
            setScrollIndex(viewableItems[viewableItems?.length - 1].index);
        }
    }, []);


    const [like, setLike] = useState(false)

    return (
        <View style={styles?.carousal_card}>
            <TouchableOpacity
                onPress={() => setLike((prev) => !prev)}
                style={styles?.like_btn}>
                {
                    !like ? <Icon type={Icons.AntDesign} name={'hearto'} size={20} color={Colors?.pink} /> : <LottieView
                        autoPlay
                        loop={false}
                        source={require("../../assets/Animations/like.json")}
                        style={{ height: 30, width: 30 }}
                    />
                }
            </TouchableOpacity>
            <FlatList
                data={images}
                horizontal
                pagingEnabled
                windowSize={1}
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                renderItem={({ item, index }) =>
                    <View style={{ height: hp(30), width: wp(100) }}>
                        <Image
                            source={item}
                            style={{ height: hp(30), width: '100%' }}
                            resizeMode='contain'
                        />
                    </View>
                }
            />


            <View style={styles?.counter}>
                <Text>{scrollIndex+1}/{images?.length}</Text>
            </View>
        </View>
    )
}

export default Carousal

const styles = StyleSheet.create({
    carousal_card: {
        width: '100%',
    },
    locator: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: hp(1), position: 'absolute', bottom: hp(2), left: wp(5) },
    counter: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: hp(1), position: 'absolute', bottom: hp(2), right: wp(5), backgroundColor: Colors?.Black, paddingHorizontal: wp(2), borderRadius: 5 },
    dark: { height: wp(1.5), width: wp(5), borderRadius: 9999, backgroundColor: Colors?.darkYellow, marginHorizontal: wp(0.5) },
    light: { height: wp(1.5), width: wp(1.5), borderRadius: 9999, backgroundColor: Colors?.black20, marginHorizontal: wp(0.5) },
    like_btn: { backgroundColor: Colors?.White, elevaton: 5, width: wp(12), height: wp(12), borderRadius: 999, position: 'absolute', zIndex: 10, right: wp(5), top: hp(2), alignItems: 'center', justifyContent: 'center' }

})