import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign, FontAwesome6, Foundation, MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="akademi"
        options={{
          title: 'Akademi',
          tabBarIcon: ({ color }) => <AntDesign size={28} name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="watchlist"
        options={{
          title: 'Watchlist',
          tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="chart-line" color={color} />,
        }}
      />
      <Tabs.Screen
        name="insight"
        options={{
          title: 'Insight',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="file-document" color={color} />,
        }}
      />
      <Tabs.Screen
        name="member"
        options={{
          title: 'Member',
          tabBarIcon: ({ color }) => <Foundation size={28} name="credit-card" color={color} />,
        }}
      />
    </Tabs>
  );
}
