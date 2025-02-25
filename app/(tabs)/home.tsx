import { Image, StyleSheet, Platform, ScrollView, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { useState } from 'react';
import HomeMenu from '@/components/HomeMenu';
import EventHome from '@/components/EventHome';
import Category from '@/components/Category';
import Modul from '@/components/Modul';
import Belajar from '@/components/Belajar';
import { Link } from 'expo-router';

export default function HomeScreen() {

const HomeButton = [
    {text: 'Edukasi', icon: 'book-open'},
    {text: 'Edukasi', icon: 'book-open'},
    {text: 'Edukasi', icon: 'book-open'},
    {text: 'Edukasi', icon: 'book-open'},
  ];

const Event = [
  {img: require('../../assets/images/eventhome.jpeg'), tgl: 'Hari Ini', jam: '19.00', desc: 'Road to Masterclass with Timothy Ronald'},
  {img: require('../../assets/images/eventhome.jpeg'), tgl: 'Hari Ini', jam: '19.00', desc: 'Road to Masterclass with Timothy Ronald'},
  {img: require('../../assets/images/eventhome.jpeg'), tgl: 'Hari Ini', jam: '19.00', desc: 'Road to Masterclass with Timothy Ronald'},
  {img: require('../../assets/images/eventhome.jpeg'), tgl: 'Hari Ini', jam: '19.00', desc: 'Road to Masterclass with Timothy Ronald'},
]

const Kategori = [
  {text: 'Modul', bgcolor: 'neutral-500'},
  {text: 'Watchlist', bgcolor: ''},
  {text: 'News', bgcolor: ''},
  {text: 'Event', bgcolor: ''},
  {text: 'Reports', bgcolor: ''},
  {text: 'Recommendation', bgcolor: ''},
]

const Module = [
  {img: require('../../assets/images/eventhome.jpeg'), title: 'Strategi Bisnis Model Kecil', lvl: 'Beginner', vid: '6 Video'},
  {img: require('../../assets/images/eventhome.jpeg'), title: 'Strategi Bisnis Model Kecil', lvl: 'Beginner', vid: '6 Video'},
  {img: require('../../assets/images/eventhome.jpeg'), title: 'Strategi Bisnis Model Kecil', lvl: 'Beginner', vid: '6 Video'},
  {img: require('../../assets/images/eventhome.jpeg'), title: 'Strategi Bisnis Model Kecil', lvl: 'Beginner', vid: '6 Video'},
]

const flexMapel = [
  { iconMapel: 'wallet' , namaMapel: 'Manajemen Income' },
  { iconMapel: 'newsletter' , namaMapel: 'Asuransi' },
  { iconMapel: 'line-graph' , namaMapel: 'Saham' },
  { iconMapel: 'briefcase' , namaMapel: 'Reksa Dana' },
  { iconMapel: 'creative-commons' , namaMapel: 'Crypto Currency' },
  { iconMapel: 'flow-branch' , namaMapel: 'Peer-to-Peer Landing' },
  { iconMapel: 'text-document-inverted' , namaMapel: 'Obligasi' },
  { iconMapel: 'windows-store' , namaMapel: 'Lainnya' }
]

  const [isOpen, setIsOpen] = useState(true);
  function closeItem() {
    setIsOpen(false);
  }

  return (
    <SafeAreaView>
      <ScrollView style={tw`p-3`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-white font-bold text-2xl`}>Hai, Calon Sultan!</Text>
          <View style={tw`flex-row gap-2`}>
          <Ionicons name='chatbubble-ellipses' style={tw`text-white`} size={25}/>
          <Link href={'/Profile/profil'}>
          <FontAwesome5 name='user-circle' style={tw`text-white`} size={25}/>
          </Link>
          </View>
        </View>

        {isOpen && ( // Only render when isOpen is true
            <View style={tw`w-full rounded-lg h-18 items-center justify-between bg-neutral-800 flex-row px-3 mt-4`}>
              <View style={tw`flex-row items-center w-2/3 gap-3`}>
                <MaterialCommunityIcons name='bell-badge' size={24} style={tw`text-white bg-neutral-500 rounded-full p-2`} />
                <Text style={[tw`text-white text-[3.2]`, { fontFamily: 'Poppins-Regular' }  ]}>
                  Nikmati insight, berita dan update terkini, <Text style={tw`underline text-[#97F69B] font-bold text-lg`}>nyalakan notifikasi</Text>
                </Text>
              </View>
              <AntDesign onPress={closeItem} name='close' size={20} color='white' />
            </View>
          )}
          
          <ScrollView horizontal>
            <View style={tw`flex-row gap-2 my-4`}>
              <Image source={require('../../assets/images/ternak-uang.jpg')} style={tw`w-96 h-50 rounded-lg`}/>
              <Image source={require('../../assets/images/ternak-uang.jpg')} style={tw`w-96 h-50 rounded-lg`}/>
              <Image source={require('../../assets/images/ternak-uang.jpg')} style={tw`w-96 h-50 rounded-lg`}/>
            </View>
          </ScrollView>

          <View style={tw`flex-row flex-wrap justify-between`}>
          {HomeButton.map((item, index) => (
            <HomeMenu key={index} text={item.text} icon={item.icon}/>
            ))}
          </View>

          <View style={tw`w-full rounded-lg h-18 items-center justify-between bg-neutral-800 flex-row px-3 mt-4`}>
              <View style={tw`flex-row items-center w-2/3 gap-3`}>
                <Image source={require('../../assets/images/business.png')} style={tw`w-15 h-15`}/>
                <View>
                  <Text style={tw`text-white text-xl font-bold`}>Yuk, Ikuti <Text style={tw`text-[#97F69B]`}>Tes Finansial</Text></Text>
                  <Text style={tw`text-neutral-500 text-[3.1]`}>Dapatkan Saran & Rekomendasi Belajarmu</Text>
                </View>
              </View>
              <AntDesign name='arrowright' size={20} color='black' style={tw`bg-[#97F69B] p-2 rounded-full`}/>
            </View>

            <View style={tw`flex-row items-center justify-between mt-5 mb-3`}>
              <View style={tw`flex-row items-center`}>
                <FontAwesome5 name='calendar-alt' color={'white'} size={25}/>
                <Text style={tw`text-white ml-2 text-neutral-500`}>Ikuti Live Event Terdekat</Text>
              </View>
              <Text style={tw`text-white text-neutral-500`}>Lihat Semua</Text>
            </View>

            <ScrollView horizontal>
            <View style={tw`flex-row flex-wrap gap-3 w-196`}>
            {Event.map((item, index) => (
            <EventHome key={index} img={item.img} tgl={item.tgl} jam={item.jam} desc={item.desc}/>
            ))}
            </View>
            </ScrollView>

            <View style={tw`bg-neutral-800 h-84 mt-10  rounded-lg shadow-lg px-4 pt-4.5 mb-8`}>
              <View style={tw`flex-row gap-4 mb-8 ml-2 mt-2`}>
                <SimpleLineIcons name="book-open" style={tw`text-white mt-0.5`} size={20} />
                <Text style={[ tw`text-white text-lg`,{fontFamily : "Poppins-SemiBold"}]}>Mau Belajar Apa Hari ini</Text>
              </View>
              <View style={tw`flex-row flex-wrap justify-between `}>
                {flexMapel.map((data, index) => (
                  <Belajar key={index} iconMapel={data.iconMapel} namaMapel={data.namaMapel} />
                ))}
              </View>
            </View>

              <View style={tw`flex-row items-center mt-1`}>
                <MaterialIcons name='celebration' color={'white'} size={25}/>
                <Text style={tw`text-white ml-2 text-neutral-500`}>Terbaru di Ternak Uang!</Text>
              </View>

              <ScrollView horizontal>
                <View style={tw`flex-row gap-2`}>
                {Kategori.map((item, index) => (
                <Category key={index} text={item.text} bgcolor={item.bgcolor}/>
                ))}
                </View>
              </ScrollView>

              <ScrollView horizontal style={tw`mb-10`}>
                  <View style={tw`flex-row gap-3`}>
                  {Module.map((item, index) => (
                <Modul key={index} img={item.img} title={item.title} lvl={item.lvl} vid={item.vid}/>
                ))}
                  </View>
              </ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
