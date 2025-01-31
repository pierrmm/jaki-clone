import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const Jakemisi = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/jawa.jpg')}
      style={tw`flex-1`}
      resizeMode="cover"
    >
      <View style={tw`flex-1 bg-blue-100/70`}>
    

        <View style={tw`flex-1 justify-center px-6`}>
          <TouchableOpacity 
            style={tw`bg-white/90 rounded-xl p-5 mb-6 flex-row items-center shadow-lg`}
          >
            <View style={tw`bg-blue-600 rounded-full p-3 mr-4`}>
              <Ionicons name="car" size={28} color="white" />
            </View>
            <View style={tw`flex-1`}>
              <Text style={tw`text-xl font-bold text-gray-800`}>CEK HASIL UJIEMISI</Text>
            </View>
            <Ionicons name="chevron-forward" size={28} color="#2563eb" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={tw`bg-white/90 rounded-xl p-5 mb-6 flex-row items-center shadow-lg`}
          >
            <View style={tw`bg-blue-600 rounded-full p-3 mr-4`}>
              <Ionicons name="location" size={28} color="white" />
            </View>
            <View style={tw`flex-1`}>
              <Text style={tw`text-xl font-bold text-gray-800`}>LOKASI TEMPAT UJIEMISI</Text>
            </View>
            <Ionicons name="chevron-forward" size={28} color="#2563eb" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={tw`bg-white/90 rounded-xl p-5 flex-row items-center shadow-lg`}
          >
            <View style={tw`bg-blue-600 rounded-full p-3 mr-4`}>
              <Ionicons name="document-text" size={28} color="white" />
            </View>
            <View style={tw`flex-1`}>
              <Text style={tw`text-xl font-bold text-gray-800`}>PEMESANAN UJIEMISI</Text>
            </View>
            <Ionicons name="chevron-forward" size={28} color="#2563eb" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Jakemisi;