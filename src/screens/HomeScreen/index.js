import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DateHolder from '../../components/DateCard'
import { Colors } from '../../constants/Colors'
import Header from '../../components/Header'
import Carousal from '../../reusables/Carousal'
import { imagesArray } from '../../helpers'
import DoctorDetailCard from '../../components/DoctorDetailCard'
import BookButton from '../../components/BookButton'

const Home = () => {
  return (
    <View style={styles?.main_screen}>
      <StatusBar
      backgroundColor={Colors?.backGround}
      />
      <Header/>
      <Carousal
      images={imagesArray}
      />
      <ScrollView scrollEnabled>
          <DoctorDetailCard/>
      </ScrollView>
     <BookButton/>
    </View>

  )
}

export default Home

const styles = StyleSheet.create({
    main_screen:{
        flex:1,
        backgroundColor:Colors?.backGround,
    }
})