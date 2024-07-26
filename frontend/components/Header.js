import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from 'twrnc';

export default function Header() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearchIconPress = () => {
    setIsSearching(true);
  };

  const handleCancelSearch = () => {
    setIsSearching(false);
    setSearchText('');
    Keyboard.dismiss();
  };

  return (
    <View style={tw`p-4 bg-white pt-14 flex-row items-center justify-between`}>
      {!isSearching && (
        <Text style={tw`text-green-500 text-lg font-semibold`}>Messenger</Text>
      )}
      {isSearching ? (
        <View style={tw`flex-1 flex-row items-center`}>
          <TextInput
            style={tw`flex-1 p-2 border border-gray-300 rounded-lg`}
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
            autoFocus
          />
          <TouchableOpacity onPress={handleCancelSearch} style={tw`ml-2 p-2`}>
            <Text style={tw`text-green-500`}>Cancel</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={tw`flex-row items-center`}>
          <TouchableOpacity onPress={handleSearchIconPress} style={tw`p-2`}>
            <FontAwesome5 name="search" size={20} color="green" />
          </TouchableOpacity>
          <TouchableOpacity style={tw`p-2 bg-green-500 rounded-full ml-4`}>
            <FontAwesome5 name="plus" size={20} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
