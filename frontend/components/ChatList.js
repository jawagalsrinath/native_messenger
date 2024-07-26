import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import ChatItem from './ChatItem';
import tw from 'twrnc';

export default function ChatList() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dummyChats = [
      {
        _id: '1',
        picture: require('../assets/profile.jpeg'),
        name: 'John',
        lastContactedTime: '2:30 PM',
        lastMessage: 'Hey, how are you?',
      },
      {
        _id: '2',
        picture: require('../assets/profile5.jpeg'),
        name: 'Jane Smith',
        lastContactedTime: '1:45 PM',
        lastMessage: 'See you tomorrow!',
      },
      {
        _id: '3',
        picture: require('../assets/profile2.jpeg'),
        name: 'Jessy',
        lastContactedTime: '9:15 AM',
        lastMessage: 'help me to complete work!',
      },
      {
        _id: '4',
        picture: require('../assets/profile3.jpeg'),
        name: 'lia ',
        lastContactedTime: '7:19 AM',
        lastMessage: 'how is your health?',
      },
      {
        _id: '5',
        picture: require('../assets/profile4.jpeg'),
        name: 'Sharin',
        lastContactedTime: '5:15 AM',
        lastMessage: 'see you at gym',
      },
      
    ];

    setTimeout(() => {
      setChats(dummyChats);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={tw`p-4`}>
      {chats.map(chat => (
        <ChatItem key={chat._id} chat={chat} />
      ))}
    </View>
  );
}
