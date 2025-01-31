import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

export default function JakSiagaScreen() {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      

      <View style={tw`px-4 mt-4 mb-2`}>
        <TextInput
          placeholder="Pencarian"
          style={tw`bg-gray-200 rounded-lg px-3 py-2 text-sm`}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <ScrollView style={tw`px-4`} showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row items-center py-3`}>
          <Ionicons name="radio-outline" size={24} color="#007AFF" />
          <Text style={tw`ml-3 text-base`}>Jakarta Siaga</Text>
        </View>

        <View style={tw`flex-row items-center py-3`}>
          <Ionicons name="call-outline" size={24} color="#007AFF" />
          <Text style={tw`ml-3 text-base`}>Layanan Informasi dan Nomor</Text>
        </View>

        <View style={tw`flex-row items-center py-3`}>
          <Ionicons name="water-outline" size={24} color="#007AFF" />
          <Text style={tw`ml-3 text-base`}>PMI</Text>
        </View>

        <View style={tw`flex-row items-center py-3`}>
          <Ionicons name="man-outline" size={24} color="#007AFF" />
          <Text style={tw`ml-3 text-base`}>Polisi</Text>
        </View>

        <View style={tw`flex-row items-center py-3`}>
          <Ionicons name="home-outline" size={24} color="#007AFF" />
          <Text style={tw`ml-3 text-base`}>Posko Bencana Alam</Text>
        </View>

        <View style={tw`flex-row items-center py-3`}>
          <Ionicons name="warning-outline" size={24} color="#007AFF" />
          <Text style={tw`ml-3 text-base`}>Posko Kewaspadaan Nasional</Text>
        </View>

        <View style={tw`flex-row items-center py-3`}>
          <Ionicons name="help-circle-outline" size={24} color="#007AFF" />
          <Text style={tw`ml-3 text-base`}>SAR (Search and Rescue)</Text>
        </View>

        <View style={tw`flex-row items-center py-3`}>
          <Ionicons name="skull-outline" size={24} color="#007AFF" />
          <Text style={tw`ml-3 text-base`}>
            Sentra Informasi Keracunan
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}