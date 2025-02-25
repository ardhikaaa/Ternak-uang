import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useRouter } from 'expo-router';

const ButtonPrimary = ({teXT, bgBtn, bgText, rute}:any) => {
    const navigation = useRouter();
  return (
    <TouchableOpacity style={tw`bg-${bgBtn} px-4 py-2 rounded-lg mx-8 my-1`} onPress={() => navigation.navigate(rute)}>
      <Text style={tw`text-${bgText} font-semibold text-center`}>{teXT}</Text>
    </TouchableOpacity>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({})