import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const Transport = () => {
  const transportOptions = [
    { name: 'MRTJ', image: require('../../assets/images/react-logo.png'), action: 'Lihat jadwal' },
    { name: 'LRT Jakarta', image: require('../../assets/images/react-logo.png'), action: 'Lihat jadwal' },
    { name: 'TransJakarta', image: require('../../assets/images/react-logo.png'), action: 'Lihat koridor' },
  ];

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`bg-blue-600 pt-12 pb-8 px-4 rounded-b-3xl`}>
        <Text style={tw`text-white text-2xl font-bold mb-4 text-center`}>
          Jelajahi Jakarta dengan{'\n'}Berbagai Transportasi Umum
        </Text>
        <View style={tw`bg-white rounded-full flex-row items-center px-4 py-2`}>
          <TextInput
            placeholder="Mau kemana hari ini?"
            placeholderTextColor="#888"
            style={tw`flex-1 text-base`}
          />
          <TouchableOpacity style={tw`bg-blue-600 rounded-full p-2`}>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={tw`px-4 mt-6`}>
        <Text style={tw`text-lg font-semibold mb-4`}>Transportasi yang tersedia</Text>
        {transportOptions.map((option, index) => (
          <View key={index} style={tw`flex-row items-center bg-white rounded-lg shadow-sm p-4 mb-4`}>
            <Image source={option.image} style={tw`w-16 h-16 mr-4`} resizeMode="contain" />
            <View style={tw`flex-1`}>
              <Text style={tw`text-lg font-semibold mb-1`}>{option.name}</Text>
              <TouchableOpacity>
                <Text style={tw`text-blue-600`}>{option.action} <Ionicons name="chevron-forward" size={14} color="#4299e1" /></Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Transport;