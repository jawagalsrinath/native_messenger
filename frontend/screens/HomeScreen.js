import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../components/Header';
import ChatList from '../components/ChatList';
import tw from 'twrnc';

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 bg-white`}>
      <Header />
      <ScrollView>
        <ChatList />
      </ScrollView>
    </View>
  );
}
