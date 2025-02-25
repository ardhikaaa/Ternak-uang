import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FontAwesome5 } from '@expo/vector-icons'

const HomeMenu = ({text, icon}) => {
  return (
    <TouchableOpacity style={tw`bg-neutral-800 border-l-8 border-[#97F69B] w-47 p-1 rounded-lg mt-2`}>
        <View style={tw`flex-row items-center gap-3`}>
            <FontAwesome5 name={icon} size={20} style={tw`text-white ml-3 bg-neutral-500 p-2 rounded-full`}/>
            <Text style={tw`text-white text-xl`}>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default HomeMenu

const styles = StyleSheet.create({})