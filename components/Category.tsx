import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Category = ({text, bgcolor}) => {
  return (
    <TouchableOpacity style={tw` mt-2 border border-white p-2 rounded-md bg-${bgcolor}`}>
        <Text style={tw`text-white text-[4.7]`}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({})