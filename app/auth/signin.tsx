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
          <Text style={tw`text-white text-2xl font-bold ml-8`}>TERNAKUANG.</Text>
          <TextInput style={tw`bg-neutral-700 border border-neutral-500 mt-2 mx-8 rounded-md`}/>
          <TextInput style={tw`bg-neutral-700 border border-neutral-500 mt-3 mx-8 rounded-md`}/>
          <View style={tw`ml-8 mt-2 flex-row justify-between mb-4`}>
            <View style={tw`flex-row`}>
            <MaterialCommunityIcons name='checkbox-blank-outline' size={20} style={tw`text-neutral-600 mr-1`}/>
            <Text style={tw`text-white`}>Ingat Saya</Text>
            </View>
            <Text style={tw`text-neutral-400 mr-8`}>Lupa Password?</Text>
          </View>

          <ButtonPrimary teXT="Log In" bgBtn="[#97F69B]" bgText="black" rute="(tabs)/home"/>
      </View>

      <Text style={tw`text-center text-neutral-500 text-lg font-semibold mt-2`}>Belum punya akun? 
        <Text style={tw`text-[#97F69B] font-bold`} 
        onPress={() => antar.navigate('/auth/daftar')}>Daftar</Text></Text>

        <Text style={tw`text-neutral-500 text-center mt-3`}>Atau Masuk Melalui</Text>
        <View style={tw`border-b border-neutral-700 w-70 mx-9 mb-2 mt-3`}></View>

      <View style={tw`flex flex-row mx-12 gap-3 justify-center items-center mt-2 my-3`}>
            <Medsos nameIcon={"google"} />
            <Medsos nameIcon={"apple"}/>
      </View>
      
    </SafeAreaView>
  )
}

export default signin