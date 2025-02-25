import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Modul = ({img, title, lvl, vid}) => {
  return (
    <View style={tw`bg-neutral-700 w-96 h-85 rounded-lg mt-5`}>
      <Image source={img} style={tw`w-96 h-55 rounded-t-lg`}/>
        <Text style={tw`mt-2 ml-2 text-2xl text-white font-bold`}>{title}</Text>
       <View style={tw`mx-2 flex-row justify-between mt-10`}>
        <Text style={tw`text-neutral-400 text-lg`}>{lvl}</Text>
        <Text style={tw`bg-white p-1 w-15 rounded-full text-center font-bold`}>{vid}</Text>
        </View> 
    </View>
  )
}

export default Modul

const styles = StyleSheet.create({})