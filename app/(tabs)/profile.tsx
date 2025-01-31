import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

interface MenuItem {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const Profile = () => {
  const menuItems: MenuItem[] = [
    { title: 'Statistik Laporan', icon: 'stats-chart' },
    { title: 'Pengaturan Akun', icon: 'settings' },
    { title: 'Tentang Aplikasi JAKI', icon: 'information-circle' },
    { title: 'Syarat dan Ketentuan', icon: 'flag' },
    { title: 'Kebijakan Privasi', icon: 'shield-checkmark' },
  ];

  const renderMenuItem = (item: MenuItem, index: number) => (
    <TouchableOpacity 
      key={index}
      style={tw`flex-row items-center py-4 px-4 border-b border-gray-200`}
    >
      <Ionicons name={item.icon} size={24} color="#4A90E2" style={tw`mr-4`} />
      <Text style={tw`flex-1 text-base`}>{item.title}</Text>
      <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />
    </TouchableOpacity>
  );
  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`p-4`}>
        <Text style={tw`text-2xl font-bold mb-4`}>Akun</Text>
      </View>

      <View style={tw`mb-6`}>
        {menuItems.slice(0, 2).map(renderMenuItem)}
      </View>

      <View style={tw`mb-6`}>
        <Text style={tw`text-lg font-semibold px-4 mb-2`}>Tentang</Text>
        {menuItems.slice(2).map(renderMenuItem)}
      </View>

      <View style={tw`px-4 mt-4`}>
        <TouchableOpacity style={tw`bg-red-500 py-3 rounded-lg`}>
          <Text style={tw`text-white text-center font-semibold`}>KELUAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;