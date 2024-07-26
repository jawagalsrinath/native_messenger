import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

export default function Status({ status }) {
  return (
    <View style={tw`flex-row items-center p-4`}>
      <Image
        source={{ uri: status.imageUri }}
        style={tw`w-10 h-10 rounded-full`}
      />
      <View style={tw`ml-4`}>
        <Text style={tw`text-lg font-semibold`}>{status.name}</Text>
        <Text style={tw`text-gray-600`}>{status.time}</Text>
      </View>
    </View>
  );
}
