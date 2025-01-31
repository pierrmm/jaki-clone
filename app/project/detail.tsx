import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const ReportDetailScreen = () => {
  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`p-4`}>
        <Text style={tw`text-2xl font-bold mb-4`}>Detail Laporan</Text>
        
        <Image
          source={require('../../assets/images/jawa.jpg')}
          style={tw`w-full h-48 rounded-lg mb-4`}
          resizeMode="cover"
        />
        
        <View style={tw`flex-row justify-end mb-4`}>
          <TouchableOpacity style={tw`mr-4`}>
            <Ionicons name="thumbs-up-outline" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="bookmark-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>
        
        <View style={tw`mb-4`}>
          <Text style={tw`font-bold mb-2`}>Permasalahan:</Text>
          <Text style={tw`text-gray-700`}>
            Lampu Penerangan Jalan di sepanjang Jalan Taman Wijaya Kusuma 1 Cilandak Barat Jakarta Selatan sejak Hari Senin Tanggal 5 Desember 2022 hingga Malam ini Selasa Tanggal 6 Desember 2022 kondisi MATI / Tidak Menyala dan Gelap.
          </Text>
        </View>
        
        <View style={tw`mb-4`}>
          <Text style={tw`font-bold mb-2`}>Lokasi:</Text>
          <Text style={tw`text-gray-700`}>
            Jalan Taman Wijaya Kusuma 1, Gang menuju Jalan H. Mandor, Jalan Taman Wijaya Kusuma 3
          </Text>
        </View>
        
        <View style={tw`mb-4`}>
          <Text style={tw`font-bold mb-2`}>Keterangan tambahan:</Text>
          <Text style={tw`text-gray-700`}>
            Mohon di Petugas Terkait agar segera ditangani dan diperbaiki, Karena kondisi Gelap dan Musim Hujan Rawan Tindak Kejahatan.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReportDetailScreen;