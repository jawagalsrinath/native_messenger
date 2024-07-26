import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

export default function ChatItem({ chat }) {
  return (
    <View style={tw`flex-row items-center p-4 border-b border-gray-200`}>
      <Image
        source={chat.picture}
        style={tw`w-10 h-10 rounded-full`}
      />
      <View style={tw`ml-4 flex-1`}>
        <Text style={tw`text-lg font-semibold`}>{chat.name}</Text>
        <Text style={tw`text-gray-600`}>{chat.lastMessage}</Text>
      </View>
      <Text style={tw`ml-auto text-gray-400`}>{chat.lastContactedTime}</Text>
    </View>
  );
}
