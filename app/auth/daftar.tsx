import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import ButtonPrimary from '@/components/ButtonPrimary'
import { useRouter } from 'expo-router'
import Medsos from '@/components/Medsos'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const signin = () => {
    const antar = useRouter();
  return (
    <SafeAreaView style={tw`h-full flex justify-center`}>
        <View style={tw`mt-6`}> 
          <TextInput style={tw`bg-neutral-700 border border-neutral-500 mt-2 mx-8 rounded-md`}/>
          <TextInput style={tw`bg-neutral-700 border border-neutral-500 mt-3 mx-8 rounded-md mb-5`}/>
          <ButtonPrimary teXT="Daftar" bgBtn="[#97F69B]" bgText="black" rute="(tabs)/home"/>
      </View>
      <Text style={tw` text-neutral-500 mt-2 mx-8`}>Dengan mendaftar kamu menyetujui <Text style={tw`underline`}>Syarat dan Ketentuan, Privacy Policy</Text> dan <Text style={tw`underline`}>Disclaimer</Text> </Text>

    </SafeAreaView>
  )
}

export default signin