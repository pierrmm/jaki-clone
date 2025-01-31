import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, ImageSourcePropType } from 'react-native';
import { create } from 'twrnc';
import TabOneScreen from './swipeMenu';
import JakartaSehat from './jakartaSehat';

const tw = create();




export default function index() {
  return (
    <SafeAreaView style={tw`flex-1  bg-gray-100 pt-10`}>
      <ScrollView style={tw`bg-white`}>
        <View style={tw`flex-row justify-between p-4`}>
          <Image
            source={require('../../assets/images/jaki.png')}
            style={tw`w-24 h-8`}
            resizeMode="contain"
          />
          <View style={tw`flex-row items-center gap-2`}>
            <Link href="/+not-found" asChild>
              <TouchableOpacity>
                <MaterialCommunityIcons name="line-scan" size={24} />
              </TouchableOpacity>
            </Link>
            <Link href="/+not-found" asChild>
              <TouchableOpacity>
                <AntDesign name="customerservice" size={24} />
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        <View style={tw`mx-4`}>
          <View style={tw`w-full h-[200px] rounded-xl overflow-hidden shadow-md`}>
            <Image
              source={require('../../assets/images/Group_170.png')}
              style={tw`w-full h-full object-cover`}
            />
          </View>

          <View style={tw` mt-4`}>
            <Link href="/+not-found" asChild>
              <TouchableOpacity style={tw`flex-row justify-between items-center p-4 shadow-md bg-white rounded-lg mb-4`}>
                <View style={tw`flex-row items-center gap-2`}>
                  <Text style={tw`text-base font-bold text-gray-800`}>JakOne Pay</Text>
                  <View style={tw`bg-blue-100 px-2 py-1 rounded-xl`}>
                    <Text style={tw`text-sm font-bold text-blue-600`}>Belum Aktif</Text>
                  </View>
                </View>
                <AntDesign name="right" size={20} color={'#3B82F6'} />
              </TouchableOpacity>
            </Link>

            <View style={tw`flex-row flex-wrap  mb-4`}>
              <Link href="/project/jakwarta" asChild>
                <TouchableOpacity style={tw`w-1/4 p-1 items-center`} activeOpacity={0.7}>
                  <View style={tw`p-5 rounded-lg shadow-md bg-white justify-center items-center aspect-square mb-1 border border-gray-100`}>
                    <Image source={require('../../assets/images/jaki1.webp')} style={tw`w-10 h-10`} resizeMode="contain" />
                  </View>
                  <Text style={tw`text-xs text-center text-gray-800 font-semibold mt-1`}>JakWarta</Text>
                </TouchableOpacity>
              </Link>
              <Link href="/project/jakrespons" asChild>
                <TouchableOpacity style={tw`w-1/4 p-1 items-center`} activeOpacity={0.7}>
                  <View style={tw`p-5 rounded-lg shadow-md bg-white justify-center items-center aspect-square mb-1 border border-gray-100`}>
                    <Image source={require('../../assets/images/jaki2.webp')} style={tw`w-10 h-10`} resizeMode="contain" />
                  </View>
                  <Text style={tw`text-xs text-center text-gray-800 font-semibold mt-1`}>JakRespons</Text>
                </TouchableOpacity>
              </Link>
              <Link href="/project/jakpangan" asChild>
                <TouchableOpacity style={tw`w-1/4 p-1 items-center`} activeOpacity={0.7}>
                  <View style={tw`p-5 rounded-lg shadow-md bg-white justify-center items-center aspect-square mb-1 border border-gray-100`}>
                    <Image source={require('../../assets/images/jaki3.webp')} style={tw`w-10 h-10`} resizeMode="contain" />
                  </View>
                  <Text style={tw`text-xs text-center text-gray-800 font-semibold mt-1`}>JakPangan</Text>
                </TouchableOpacity>
              </Link>
              <Link href="/project/jaklingko" asChild>
                <TouchableOpacity style={tw`w-1/4 p-1 items-center`} activeOpacity={0.7}>
                  <View style={tw`p-5 rounded-lg shadow-md bg-white justify-center items-center aspect-square mb-1 border border-gray-100`}>
                    <Image source={require('../../assets/images/jaki4.webp')} style={tw`w-10 h-10`} resizeMode="contain" />
                  </View>
                  <Text style={tw`text-xs text-center text-gray-800 font-semibold mt-1`}>JakLingko</Text>
                </TouchableOpacity>
              </Link>
              <Link href="/project/jaksiaga" asChild>
                <TouchableOpacity style={tw`w-1/4 p-1 items-center`} activeOpacity={0.7}>
                  <View style={tw`p-5 rounded-lg shadow-md bg-white justify-center items-center aspect-square mb-1 border border-gray-100`}>
                    <Image source={require('../../assets/images/jak5.webp')} style={tw`w-10 h-10`} resizeMode="contain" />
                  </View>
                  <Text style={tw`text-xs text-center text-gray-800 font-semibold mt-1`}>JakSiaga</Text>
                </TouchableOpacity>
              </Link>
              <Link href="/+not-found" asChild>
                <TouchableOpacity style={tw`w-1/4 p-1 items-center`} activeOpacity={0.7}>
                  <View style={tw`p-5 rounded-lg shadow-md bg-white justify-center items-center aspect-square mb-1 border border-gray-100`}>
                    <Image source={require('../../assets/images/jak6.webp')} style={tw`w-10 h-10`} resizeMode="contain" />
                  </View>
                  <Text style={tw`text-xs text-center text-gray-800 font-semibold mt-1`}>JakWifi</Text>
                </TouchableOpacity>
              </Link>
              <Link href={"/project/jakemisi"} asChild>
                <TouchableOpacity style={tw`w-1/4 p-1 items-center`} activeOpacity={0.7}>
                  <View style={tw`p-5 rounded-lg shadow-md bg-white justify-center items-center aspect-square mb-1 border border-gray-100`}>
                    <Image source={require('../../assets/images/jak7.webp')} style={tw`w-10 h-10`} resizeMode="contain" />
                  </View>
                  <Text style={tw`text-xs text-center text-gray-800 font-semibold mt-1`}>JakEmisi</Text>
                </TouchableOpacity>
              </Link>
              <Link href={"/+not-found"} asChild>
              <TouchableOpacity style={tw`w-1/4 p-1 items-center`} activeOpacity={0.7}>
                <View style={tw`p-5 rounded-lg shadow-md bg-white justify-center items-center aspect-square mb-1 border border-gray-100`}>
                  <Image source={require('../../assets/images/jak8.webp')} style={tw`w-10 h-10`} resizeMode="contain" />
                </View>
                <Text style={tw`text-xs text-center text-gray-800 font-semibold mt-1`}>Lainnya</Text>
              </TouchableOpacity>
              </Link>
            </View>

            <TabOneScreen />

            <View style={tw`bg-white mt-2.5 rounded-lg `}>
              <Text style={tw`text-lg font-bold mb-1.5`}>Ruang Ketiga</Text>
              <Text style={tw`text-sm text-gray-600 mb-4`}>Jelajahi ruang publik favoritmu di Jakarta</Text>

              <View style={tw`flex-row rounded-lg overflow-hidden bg-white shadow mb-4`}>
                <Image
                  source={require('../../assets/images/tebet.jpg')}
                  style={tw`w-1/3 h-3/3`}
                  resizeMode="cover"
                />
                <View style={tw`p-4 flex-1`}>
                  <Text style={tw`text-base font-bold mb-1.5`}>Tebet Eco Park</Text>
                  <Text style={tw`text-lg text-gray-600 mb-2`}>
                    Nikmati suasana jalan-jalan di taman berkonsep ekologi, rekreasi, dan olahraga
                  </Text>
                  <Link href="/+not-found" asChild>
                    <TouchableOpacity style={tw`bg-blue-500 py-2  px-4 rounded-md mt-2`}>
                      <Text style={tw`text-white font-bold text-sm text-center`}>Daftar Sekarang</Text>
                    </TouchableOpacity>
                  </Link>
                </View>
              </View>
            </View>
            <JakartaSehat />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
