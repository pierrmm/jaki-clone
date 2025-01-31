import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

export default function UnderConstructionScreen() {
  return (
    <View style={tw`flex-1 bg-white items-center justify-center p-4`}>
      <Image
        source={require('../assets/images/iconn.png')}
        style={tw`w-64 h-64`}
        resizeMode="contain"
      />

      <Text style={tw`text-xl font-bold text-[#1F2E5C] mt-6 text-center`}>
        Mohon maaf, halaman sedang dalam perbaikan
      </Text>

      <Text style={tw`text-sm text-gray-600 mt-2 text-center`}>
        nununk akan kembali melayanimu secepatnya, ya!
      </Text>
    </View>
  );
}