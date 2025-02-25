import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import tw from 'twrnc'

const EventHome = ({img, tgl, jam, desc}) => {
  return (
    <View style={tw`bg-neutral-900 w-96 h-40 p-3 flex-row rounded-lg mt-1`}>
        <Image source={img} style={tw`w-35 h-35`}/>
        <View style={tw`ml-3`}>
        <View style={tw`flex-row `}>
            <Text style={tw`text-[#97F69B]`}>{tgl}</Text>
            <Text style={tw`text-neutral-500`}> - {jam}</Text>
        </View>
        <View style={tw`w-50`}>
            <Text style={tw`text-white font-bold text-base mt-5`}>{desc}</Text>
            <Text style={tw`text-white font-bold text-lg mt-3`}>Free</Text>
        </View>
        </View>
    </View>
  )
}

export default EventHome

const styles = StyleSheet.create({})