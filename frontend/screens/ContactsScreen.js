import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function ContactsScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-lg text-green-500`}>Contacts Screen</Text>
    </View>
  );
}
