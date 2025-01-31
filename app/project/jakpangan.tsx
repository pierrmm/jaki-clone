import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const JakPangan = () => {
  const [activeTab, setActiveTab] = useState('Komoditas');

  const commodities = [
    { name: 'Ayam Broiler/Ras', price: 'Rp 38.000/ekor', location: 'Pasar Pesanggrahan', image: require('../../assets/images/chicken.jpg') },
    { name: 'Bawang Merah', price: 'Rp 40.000/kg', location: 'Pasar Pesanggrahan', image: require('../../assets/images/jawa2.jpg') },
    { name: 'Bawang Putih', price: 'Rp 32.000/kg', location: 'Pasar Pesanggrahan', image: require('../../assets/images/jawa3.jpg') },
    { name: 'Beras IR 42/Pera', price: 'Rp 11.000/kg', location: 'Pasar Pondok Labu', image: require('../../assets/images/jawa.jpg') },
    { name: 'nununk', price: 'Rp 13.000/kg', location: 'banyumuwani', image: require('../../assets/images/jawa2.jpg') },
  ];

  const markets = [
    { name: 'Pasar Pesanggrahan', distance: '13.3 Km', address: 'Jalan Garuda, Pesanggrahan, Pesanggrahan, Jakarta Selatan', phone: '0813 10603726', image: require('../../assets/images/Screenshot 2025-01-08 142546.png') },
    { name: 'Pasar Pondok Labu', distance: '15.7 Km', address: 'Jalan RS Fatmawati Ujung, Pondok Labu, Cilandak, Jakarta Selatan', phone: '021 7505859', image: require('../../assets/images/Screenshot 2025-01-08 142546.png') },
    { name: 'Pasar Kebayoran Lama', distance: '16.5 Km', address: 'Jalan Raya Pasar Kebayoran Lama, Kebayoran Lama Utara, Kebayoran Lama, Jakarta Selatan', phone: '021 7201808', image: require('../../assets/images/Screenshot 2025-01-08 142546.png') },
    { name: 'Pasar Pos Pengumben', distance: '16.7 Km', address: 'Jalan Sukabumi Selatan, Sukabumi Selatan, Kebon Jeruk, Jakarta Barat', phone: '021 98225698', image: require('../../assets/images/Screenshot 2025-01-08 142546.png') },
  ];

  const renderContent = () => {
    if (activeTab === 'Komoditas') {
      return (
        <View style={tw`flex-row flex-wrap justify-between`}>
          {commodities.map((item, index) => (
            <View key={index} style={tw`w-[48%] bg-white rounded-lg shadow-sm mb-4`}>
              <View style={tw`relative`}>
                <Image source={item.image} style={tw`w-full h-32 rounded-t-lg`} resizeMode="cover" />
                <TouchableOpacity style={tw`absolute top-2 right-2 bg-blue-500 rounded-full p-2`}>
                  <Ionicons name="menu" size={20} color="white" />
                </TouchableOpacity>
              </View>
              <View style={tw`p-3`}>
                <Text style={tw`font-bold mb-1`}>{item.name}</Text>
                <Text style={tw`text-lg font-bold text-blue-500 mb-1`}>{item.price}</Text>
                <View style={tw`flex-row items-center`}>
                  <Ionicons name="location-outline" size={16} color="gray" />
                  <Text style={tw`text-xs text-gray-500 ml-1`}>{item.location}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      );
    } else {
      return (
        <View>
          {markets.map((market, index) => (
            <View key={index} style={tw`bg-white rounded-lg shadow-sm mb-4 p-4`}>
              <View style={tw`flex-row`}>
                <Image source={market.image} style={tw`w-20 h-20 rounded-lg mr-3`} resizeMode="cover" />
                <View style={tw`flex-1`}>
                  <View style={tw`flex-row items-center`}>
                    <View style={tw`bg-blue-100 rounded-full px-2 py-1 mr-2`}>
                      <Text style={tw`text-blue-500 font-bold`}>{market.distance}</Text>
                    </View>
                    <Text style={tw`font-bold text-lg flex-1`}>{market.name}</Text>
                  </View>
                  <Text style={tw`text-gray-600 mt-2`}>{market.address}</Text>
                  <View style={tw`flex-row items-center mt-2`}>
                    <Ionicons name="call-outline" size={16} color="gray" />
                    <Text style={tw`text-gray-500 ml-1`}>{market.phone}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      );
    }
  };
  return (
    <View style={tw`flex-1 bg-white`}>
      <Text style={tw`text-2xl font-bold p-4`}>Info Pangan</Text>

      <View style={tw`px-4 mb-4`}>
        <View style={tw`flex-row items-center bg-gray-100 rounded-full px-3 py-2`}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            placeholder="Cari komoditas atau pasar"
            style={tw`ml-2 flex-1`}
          />
        </View>
      </View>

      <View style={tw`flex-row mb-4 px-4`}>
        <TouchableOpacity
          style={tw`flex-1 items-center py-2 ${activeTab === 'Komoditas' ? 'bg-blue-500' : 'bg-gray-200'} rounded-l-full`}
          onPress={() => setActiveTab('Komoditas')}
        >
          <Text style={tw`${activeTab === 'Komoditas' ? 'text-white' : 'text-gray-700'}`}>Komoditas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-1 items-center py-2 ${activeTab === 'Pasar' ? 'bg-blue-500' : 'bg-gray-200'} rounded-r-full`}
          onPress={() => setActiveTab('Pasar')}
        >
          <Text style={tw`${activeTab === 'Pasar' ? 'text-white' : 'text-gray-700'}`}>Pasar</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`flex-row items-center px-4 mb-4`}>
        <Ionicons name="location-outline" size={20} color="blue" />
        <Text style={tw`ml-2 text-blue-500`}>Cisauk, Tangerang, Banten, ID</Text>
      </View>

      <View style={tw`bg-blue-100 mx-4 px-3 py-2 rounded-full mb-4`}>
        <Text style={tw`text-blue-500 text-center`}>06 Dec 2022</Text>
      </View>

      <ScrollView style={tw`px-4`}>
        {renderContent()}
      </ScrollView>
    </View>
  );
};

export default JakPangan;