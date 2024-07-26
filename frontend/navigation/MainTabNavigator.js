import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PhoneCallScreen from '../screens/PhoneCallScreen';
import ContactsScreen from '../screens/ContactsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from 'twrnc';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: tw`bg-white`,
        tabBarActiveTintColor: 'green',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
          headerShown: false, // Hide header
        }}
      />
      <Tab.Screen
        name="PhoneCall"
        component={PhoneCallScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="phone" color={color} size={size} />
          ),
          headerShown: false, // Hide header
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="address-book" color={color} size={size} />
          ),
          headerShown: false, // Hide header
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cog" color={color} size={size} />
          ),
          headerShown: false, // Hide header
        }}
      />
    </Tab.Navigator>
  );
}
