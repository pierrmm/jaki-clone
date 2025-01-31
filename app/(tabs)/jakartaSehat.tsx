import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const JakartaSehat = () => {
  const services = [
    {
      title: 'Ambulans',
      description: 'Layanan darurat ambulans 24 jam',
      icon: 'medical' as const,
      urgent: true,
    },
    {
      title: 'Antrean Faskes',
      description: 'Antrean online fasilitas kesehatan',
      icon: 'people' as const,
      urgent: false,
    },
    {
      title: 'PMI',
      description: 'Layanan donor dan stok darah PMI',
      icon: 'medical' as const,
      urgent: false,
    },
    {
      title: 'Sahabat Jiwa',
      description: 'Konsultasi online kesehatan mental',
      icon: 'heart' as const,
      urgent: false,
    },
  ];

  return (
    <View style={tw`flex-1 `}>
      <View style={tw`flex-row items-center mb-6 bg-white p-4 rounded-2xl shadow-sm`}>
        <Image
          source={require('../../assets/images/my_wife.jpg')}
          style={tw`w-12 h-12 mr-4 rounded-full`}
          resizeMode="cover"
        />
        <View>
          <Text style={tw`text-2xl font-bold text-gray-800`}>Jakarta Sehat</Text>
          <Text style={tw`text-sm text-gray-600`}>Ragam fasilitas kesehatan yang kamu butuhkan</Text>
        </View>
      </View>

      <View style={tw`flex-row flex-wrap -mx-2`}>
        {services.map((service, index) => (
          <TouchableOpacity 
            key={index} 
            style={tw`w-1/2 p-2`}
            activeOpacity={0.8}
            onPress={() => {}}
          >
            <View style={[
              tw`bg-white border-0 rounded-2xl p-5 shadow-sm`,
              tw`active:scale-95 active:opacity-90`
            ]}>
              <View style={tw`flex-row justify-between items-start mb-3`}>
                <View style={[
                  tw`rounded-full p-3`,
                  service.urgent ? tw`bg-red-100` : tw`bg-blue-100`
                ]}>
                  <Ionicons 
                    name={service.icon} 
                    size={28} 
                    color={service.urgent ? '#ef4444' : '#3b82f6'}
                  />
                </View>
                {service.urgent && (
                  <View style={tw`bg-red-500 rounded-full px-3 py-1`}>
                    <Text style={tw`text-white text-xs font-bold`}>Darurat</Text>
                  </View>
                )}
              </View>
              <Text style={tw`font-bold text-lg mb-2 text-gray-800`}>{service.title}</Text>
              <Text style={tw`text-sm text-gray-600 leading-5`}>{service.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default JakartaSehat;