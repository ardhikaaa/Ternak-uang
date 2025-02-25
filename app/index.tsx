import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonPrimary from '@/components/ButtonPrimary'


export default function index() {
  return (
    <SafeAreaView style={tw`py-5 px-2`}>
        <Text style={tw`text-right text-neutral-400`}>Lewati</Text>
        <View>
            <Image source={require('../assets/images/index.png')} style={tw`w-[87] h-[75]`}/>
            <View style={tw`items-center`}>
                <Text style={tw`text-white font-bold text-lg text-center`}>Belajar Investasi {'\n'}& Keuangan Pribadi</Text>
                <Text style={tw`text-white text-neutral-400 text-center mt-15`}>Belajar paling gampang, praktis, & interaktif. Dengan menonton video secara online dengan lebih dari 150+ video dari mentor yang sudah ahli di bidangnya</Text>
            </View>
            <View style={tw`mt-15`}>
            <ButtonPrimary teXT="Mulai Belajar" bgBtn="[#97F69B]" bgText="black" rute="auth/signin"/>
            <ButtonPrimary teXT="Login" bgBtn="[#ffffff]" bgText="black" rute='auth/signin'/>
          </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})