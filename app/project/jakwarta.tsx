import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

export default function JakWartaScreen() {
  const [activeTab, setActiveTab] = useState('Berita');

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>

      <View style={tw`px-4 mt-3`}>
        <View style={tw`flex-row items-center bg-gray-100 rounded-full px-3 py-2`}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            placeholder="Kata kunci pencarian"
            style={tw`ml-2 flex-1 text-base`}
          />
        </View>
      </View>

      <View style={tw`flex-row mt-4`}>
        <TouchableOpacity
          style={[
            tw`flex-1 items-center p-3`,
            activeTab === 'Berita' && tw`border-b-2 border-blue-500`,
          ]}
          onPress={() => setActiveTab('Berita')}
        >
          <Text
            style={tw`${activeTab === 'Berita' ? 'text-blue-500 font-bold' : 'text-gray-500'}`}
          >
            Berita
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            tw`flex-1 items-center p-3`,
            activeTab === 'Twitter' && tw`border-b-2 border-blue-500`,
          ]}
          onPress={() => setActiveTab('Twitter')}
        >
          <Text
            style={tw`${activeTab === 'Twitter' ? 'text-blue-500 font-bold' : 'text-gray-500'}`}
          >
            Twitter Resmi
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'Berita' && (
        <ScrollView style={tw`px-4 py-4`}>
          <Text style={tw`text-lg font-semibold mb-4`}>Berita Terbaru</Text>

          <View style={tw`bg-white shadow-sm p-4 mb-4 rounded-lg`}>
            <Image
              source={require('../../assets/images/c8729083dca3f8d0fa35ccdf067d5913.jpg')}
              style={tw`w-full h-32 rounded-lg mb-2`}
              resizeMode="cover"
            />
            <View style={tw`flex-row items-center mb-2`}>
              <Image
                source={require('../../assets/images/jawa2.jpg')}
                style={tw`w-10 h-10 rounded-full mr-3`}
              />
              <View style={tw`flex-1`}>
                <Text style={tw`text-sm font-semibold`}>Badan Penanggulangan Bencana Daerah</Text>
                <Text style={tw`text-base font-bold mt-1`}>UPDATE INFO PERINGATAN DINI CUACA WILAYAH JABODETABEK</Text>
              </View>
            </View>
            <Text style={tw`text-xs text-gray-500 mb-2`}>6 jam yang lalu</Text>
            <View style={tw`flex-row justify-between items-center`}>
              <TouchableOpacity style={tw`flex-row items-center mr-4`}>
                <Ionicons name="heart-outline" size={20} color="gray" />
                <Text style={tw`text-xs text-gray-500 ml-1`}>8 suka</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`flex-row items-center`}>
                <Ionicons name="share-social-outline" size={20} color="gray" />
                <Ionicons name="bookmark-outline" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={tw`bg-white shadow-sm p-4 mb-4 rounded-lg`}>
            <Image
              source={require('../../assets/images/jawa.jpg')}
              style={tw`w-full h-32 rounded-lg mb-2`}
              resizeMode="cover"
            />
            <View style={tw`flex-row items-center mb-2`}>
              <Image
                source={require('../../assets/images/jawa2.jpg')}
                style={tw`w-10 h-10 rounded-full mr-3`}
              />
              <View style={tw`flex-1`}>
                <Text style={tw`text-sm font-semibold`}>Badan Penanggulangan Bencana Daerah</Text>
                <Text style={tw`text-base font-bold mt-1`}>UPDATE INFO PERINGATAN DINI CUACA WILAYAH JABODETABEK</Text>
              </View>
            </View>
            <Text style={tw`text-xs text-gray-500 mb-2`}>6 jam yang lalu</Text>
            <View style={tw`flex-row justify-between items-center`}>
              <TouchableOpacity style={tw`flex-row items-center mr-4`}>
                <Ionicons name="heart-outline" size={20} color="gray" />
                <Text style={tw`text-xs text-gray-500 ml-1`}>8 suka</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`flex-row items-center`}>
                <Ionicons name="share-social-outline" size={20} color="gray" />
                <Ionicons name="bookmark-outline" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={tw`bg-white shadow-sm p-4 mb-4 rounded-lg`}>
            <Image
              source={require('../../assets/images/jawa3.jpg')}
              style={tw`w-full h-32 rounded-lg mb-2`}
              resizeMode="cover"
            />
            <View style={tw`flex-row items-center mb-2`}>
              <Image
                source={require('../../assets/images/jawa2.jpg')}
                style={tw`w-10 h-10 rounded-full mr-3`}
              />
              <View style={tw`flex-1`}>
                <Text style={tw`text-sm font-semibold`}>Badan Penanggulangan Bencana Daerah</Text>
                <Text style={tw`text-base font-bold mt-1`}>UPDATE INFO PERINGATAN DINI CUACA WILAYAH JABODETABEK</Text>
              </View>
            </View>
            <Text style={tw`text-xs text-gray-500 mb-2`}>6 jam yang lalu</Text>
            <View style={tw`flex-row justify-between items-center`}>
              <TouchableOpacity style={tw`flex-row items-center mr-4`}>
                <Ionicons name="heart-outline" size={20} color="gray" />
                <Text style={tw`text-xs text-gray-500 ml-1`}>8 suka</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`flex-row items-center`}>
                <Ionicons name="share-social-outline" size={20} color="gray" />
                <Ionicons name="bookmark-outline" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}

      {activeTab === 'Twitter' && (
        <ScrollView style={tw`px-4 py-4`}>
          <Text style={tw`text-lg font-semibold mb-4`}>Tweet Terbaru</Text>

          <View style={tw`bg-white shadow-sm p-4 mb-4 rounded-lg`}>
            <View style={tw`flex-row items-center mb-2`}>
              <Image
                source={require('../../assets/images/jawa2.jpg')}
                style={tw`w-10 h-10 rounded-full mr-3`}
              />
              <View style={tw`flex-1`}>
                <Text style={tw`text-sm font-semibold`}>@BPBDJakarta</Text>
                <Text style={tw`text-xs text-gray-500`}>2 jam yang lalu</Text>
              </View>
            </View>
            <Text style={tw`text-base mb-2`}>Peringatan Dini Cuaca Jakarta: Hujan sedang-lebat disertai kilat/petir dan angin kencang berpotensi terjadi di Jaksel, Jaktim, dan Jakbar.</Text>
            <View style={tw`flex-row justify-between items-center`}>
              <TouchableOpacity style={tw`flex-row items-center mr-4`}>
                <Ionicons name="heart-outline" size={20} color="gray" />
                <Text style={tw`text-xs text-gray-500 ml-1`}>245</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`flex-row items-center mr-4`}>
                <Ionicons name="repeat-outline" size={20} color="gray" />
                <Text style={tw`text-xs text-gray-500 ml-1`}>123</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`flex-row items-center`}>
                <Ionicons name="share-social-outline" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={tw`bg-white shadow-sm p-4 mb-4 rounded-lg`}>
            <View style={tw`flex-row items-center mb-2`}>
              <Image
                source={require('../../assets/images/jawa2.jpg')}
                style={tw`w-10 h-10 rounded-full mr-3`}
              />
              <View style={tw`flex-1`}>
                <Text style={tw`text-sm font-semibold`}>@DKIJakarta</Text>
                <Text style={tw`text-xs text-gray-500`}>4 jam yang lalu</Text>
              </View>
            </View>
            <Text style={tw`text-base mb-2`}>Selamat pagi warga Jakarta! Hari ini akan diadakan car free day di sepanjang jalan Sudirman-Thamrin. Mari berolahraga bersama!</Text>
            <View style={tw`flex-row justify-between items-center`}>
              <TouchableOpacity style={tw`flex-row items-center mr-4`}>
                <Ionicons name="heart-outline" size={20} color="gray" />
                <Text style={tw`text-xs text-gray-500 ml-1`}>567</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`flex-row items-center mr-4`}>
                <Ionicons name="repeat-outline" size={20} color="gray" />
                <Text style={tw`text-xs text-gray-500 ml-1`}>234</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`flex-row items-center`}>
                <Ionicons name="share-social-outline" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={tw`bg-white shadow-sm p-4 mb-4 rounded-lg`}>
            <View style={tw`flex-row items-center mb-2`}>
              <Image
                source={require('../../assets/images/jawa2.jpg')}
                style={tw`w-10 h-10 rounded-full mr-3`}
              />
              <View style={tw`flex-1`}>
                <Text style={tw`text-sm font-semibold`}>@DiskominfoDKI</Text>
                <Text style={tw`text-xs text-gray-500`}>5 jam yang lalu</Text>
              </View>
            </View>
            <Text style={tw`text-base mb-2`}>Update: Layanan publik di Jakarta kini bisa diakses melalui aplikasi JAKI. Unduh sekarang di Play Store dan App Store! #JakartaPintar</Text>
            <View style={tw`flex-row justify-between items-center`}>
              <TouchableOpacity style={tw`flex-row items-center mr-4`}>
                <Ionicons name="heart-outline" size={20} color="gray" />
                <Text style={tw`text-xs text-gray-500 ml-1`}>789</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`flex-row items-center mr-4`}>
                <Ionicons name="repeat-outline" size={20} color="gray" />
                <Text style={tw`text-xs text-gray-500 ml-1`}>345</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`flex-row items-center`}>
                <Ionicons name="share-social-outline" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}

    </SafeAreaView>
  );
}