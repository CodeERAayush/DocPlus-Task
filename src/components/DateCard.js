import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getSixDatesObject } from '../helpers'

const DateHolder = () => {

    const [dates,setDates]=useState([])
    useEffect(()=>{
        const selectedDate=new Date()
        setDates(getSixDatesObject(selectedDate))
    },[])

  return (
    <View>
        {console.log("six days are: ",dates)}
      <Text>DateCard</Text>
    </View>
  )
}

export default DateHolder

const styles = StyleSheet.create({})