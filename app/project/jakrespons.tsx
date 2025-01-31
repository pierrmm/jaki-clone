import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { Link } from '@react-navigation/native';

const JakRespons = () => {

  const reports = [
    { id: 'JK2212060389', issue: 'Permasalahan: Lampu Penerangan Jalan di', location: 'Cilandak Barat', time: '38 menit yang lalu', status: 'Menunggu', image: require('../../assets/images/jawa.jpg') },
    { id: 'JK2212060385', issue: 'Permasalahan: Beberapa hari yang lalu saya sudah', location: 'Lenteng Agung', time: '59 menit yang lalu', status: 'Menunggu', image: require('../../assets/images/c8729083dca3f8d0fa35ccdf067d5913.jpg') },
    { id: 'JK2212060381', issue: 'Permasalahan: setiap hujan lebat selalu banjir', location: 'Setu', time: '1 jam yang lalu', status: 'Koordinasi', image: require('../../assets/images/jawa2.jpg') },
    { id: 'JK2212060378', issue: 'Permasalahan: lampu penerangan jalan di', location: 'Duren Sawit', time: '2 jam yang lalu', status: 'Menunggu', image: require('../../assets/images/jawa3.jpg') },
    { id: 'JK2212060375', issue: 'Permasalahan: nununk dan alek melakukan silat di jalan', location: 'Cilandak Barat', time: '3 jam yang lalu', status: 'Menunggu', image: require('../../assets/images/jawa.jpg') },
  ];
  return (
    <View style={tw`flex-1 bg-white`}>
      <Text style={tw`text-2xl font-bold p-4`}>JakRespons</Text>

      <View style={tw`px-4 mb-4`}>
        <View style={tw`flex-row items-center bg-gray-100 rounded-full px-3 py-2`}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            placeholder="Nomor laporan"
            style={tw`ml-2 flex-1`}
          />
        </View>
      </View>


      <ScrollView style={tw`px-4`}>
        <View style={tw`flex-row flex-wrap justify-between`}>
          {reports.map((report) => (
            <>
              <View style={tw`bg-white rounded-lg shadow-sm mb-4 overflow-hidden w-[48%]`}>
                <View style={tw`relative`}>
                  <Image source={report.image} style={tw`w-full h-40`} resizeMode="cover" />
                  <View style={tw`absolute top-2 right-2 px-2 py-1 rounded-full ${report.status === 'Menunggu' ? 'bg-red-500' : 'bg-blue-500'}`}>
                    <Text style={tw`text-xs text-white`}>{report.status}</Text>
                  </View>
                </View>
                <View style={tw`p-3`}>
                  <Text style={tw`text-xs text-gray-500 mb-2`}>No. {report.id}</Text>
                  <Text style={tw`font-bold mb-1`}>{report.issue}</Text>
                  <Text style={tw`text-sm text-gray-600 mb-2`}>{report.location}</Text>
                  <View style={tw`flex-row justify-between items-center`}>
                    <Text style={tw`text-xs text-gray-500`}>{report.time}</Text>
                    <TouchableOpacity>
                      <Ionicons name="bookmark-outline" size={20} color="gray" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </>
          ))}
        </View>      
        </ScrollView>
    </View>
  );
};



export default JakRespons;