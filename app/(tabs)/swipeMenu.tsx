import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import  tw  from 'twrnc';

export default function TabOneScreen() {
  return (
    <ScrollView>

      <View style={tw`mt-4  mb-4`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-base font-bold`}>Plus Jakarta</Text>
          <Text style={tw`text-sm text-blue-500`}>Lihat Semua</Text>
        </View>
        <Text style={tw`text-xs text-gray-500 mt-1`}>
          Wadah Penggerak Kolaborasi, Ciptakan Dampak Positif Bagi Semua
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`mt-4 p-3 px-4`}
      >
        <TouchableOpacity style={tw`w-[160px] shadow-lg bg-white rounded-lg mr-4 p-3`}>
          <Image
            source={require('../../assets/images/c8729083dca3f8d0fa35ccdf067d5913.jpg')}
            style={tw`w-full h-20 rounded-lg mb-2`}
            resizeMode="cover"
          />
          <Text style={tw`text-sm font-bold`}>Vaksinasi COVID-19</Text>
          <Text style={tw`text-xs text-gray-500 mt-1`}>
            Daftar dan cek jadwal vaksinasi Covid-19
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`w-[160px] shadow-lg bg-white rounded-lg mr-4 p-3`}>
          <Image
            source={require('../../assets/images/Screenshot 2025-01-08 142546.png')}
            style={tw`w-full h-20 rounded-lg mb-2`}
            resizeMode="cover"
          />
          <Text style={tw`text-sm font-bold`}>Data Cakupan Vaksin</Text>
          <Text style={tw`text-xs text-gray-500 mt-1`}>
            Cek Dasbor Cakupan Vaksinasi Wilayah
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`w-[160px] shadow-lg bg-white rounded-lg mr-4 p-3`}>
          <Image
            source={require('../../assets/images/react-logo.png')}
            style={tw`w-full h-20 rounded-lg mb-2`}
            resizeMode="cover"
          />
          <Text style={tw`text-sm font-bold`}>Ketersediaan Tempat Tidur</Text>
          <Text style={tw`text-xs text-gray-500 mt-1`}>
            Untuk pasien Covid-19 dan non-Covid-19
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`w-[160px] shadow-lg bg-white rounded-lg mr-4 p-3`}>
          <Image
            source={require('../../assets/images/react-logo.png')}
            style={tw`w-full h-20 rounded-lg mb-2`}
            resizeMode="cover"
          />
          <Text style={tw`text-sm font-bold`}>Tes Mandiri</Text>
          <Text style={tw`text-xs text-gray-500 mt-1`}>
            Tes Corona Likelihood Metric (CLM)
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={tw`mt-4  mb-4`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-base font-bold`}>Plus Jakarta</Text>
          <Text style={tw`text-sm text-blue-500`}>Lihat Semua</Text>
        </View>
        <Text style={tw`text-xs text-gray-500 mt-1`}>
          Wadah Penggerak Kolaborasi, Ciptakan Dampak Positif Bagi Semua
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`mt-4 px-4 p-4 mb-4`}
      >
        <TouchableOpacity style={tw`w-[160px] shadow-lg bg-white rounded-lg mr-4 p-3`}>
          <Image
            source={require('../../assets/images/Screenshot 2025-01-08 142546.png')}
            style={tw`w-full h-20 rounded-lg mb-2`}
            resizeMode="cover"
          />
          <Text style={tw`text-sm font-bold`}>Kota Kolaborasi</Text>
          <Text style={tw`text-xs text-gray-500 mt-1`}>
            Temukan Kolaborasi Antarlemen di Jakarta
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`w-[160px] shadow-lg bg-white rounded-lg mr-4 p-3`}>
          <Image
            source={require('../../assets/images/react-logo.png')}
            style={tw`w-full h-20 rounded-lg mb-2`}
            resizeMode="cover"
          />
          <Text style={tw`text-sm font-bold`}>Kata Kota</Text>
          <Text style={tw`text-xs text-gray-500 mt-1`}>
            Media Berbagi Cerita & Gagasan Tentang Jakarta
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`w-[160px] shadow-lg bg-white rounded-lg mr-4 p-3`}>
          <Image
            source={require('../../assets/images/c8729083dca3f8d0fa35ccdf067d5913.jpg')}
            style={tw`w-full h-20 rounded-lg mb-2`}
            resizeMode="cover"
          />
          <Text style={tw`text-sm font-bold`}>Media</Text>
          <Text style={tw`text-xs text-gray-500 mt-1`}>
            Berbagi Rekam Jejak Kolaborasi Plus Jakarta
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`w-[160px] shadow-lg bg-white rounded-lg mr-4 p-3`}>
          <Image
            source={require('../../assets/images/c8729083dca3f8d0fa35ccdf067d5913.jpg')}
            style={tw`w-full h-20 rounded-lg mb-2`}
            resizeMode="cover"
          />
          <Text style={tw`text-sm font-bold`}>Merchandise</Text>
          <Text style={tw`text-xs text-gray-500 mt-1`}>
            Koleksi Merchandise Khas Plus Jakarta Disini!
          </Text>
        </TouchableOpacity>
      </ScrollView>

    </ScrollView>
  );
}
