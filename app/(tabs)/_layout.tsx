import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Tabs, usePathname } from 'expo-router';
import { create } from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

// Create the tw instance
const tw = create();

const CustomTabBar = () => {
  const pathname = usePathname();
  
  return (
    <View style={tw`flex-row justify-around p-2.5 bg-white border-t border-gray-200`}>
      {[
        { name: 'Beranda', icon: 'home', path: '/' },
        { name: 'Aktivitas', icon: 'calendar', path: '/explore' },
        { name: 'Layar', icon: 'tv', path: '/screen' },
        { name: 'Notifikasi', icon: 'notifications', path: '/notifications' },
        { name: 'Profil', icon: 'person', path: '/profile' }
      ].map((item, index) => {
        const isActive = pathname === item.path;
        return (
          <TouchableOpacity key={index} style={tw`items-center`}>
            <Ionicons 
              name={item.icon as keyof typeof Ionicons.glyphMap} 
              size={24} 
              color={isActive ? "#000000" : "#9CA3AF"} 
            />
            <Text style={tw`text-xs ${isActive ? 'text-black' : 'text-gray-400'}`}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' }, 
      }}
      tabBar={() => <CustomTabBar />} 
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="explore" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}