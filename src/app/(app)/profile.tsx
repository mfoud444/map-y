import { View, Text, Image, Pressable } from '@/components/ui';
import React from 'react';
import { Stack } from 'expo-router';
import { ArrowLeft, Bell, Share2, Sparkles, Plus, Settings } from 'lucide-react-native';

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = React.useState('my-lists');

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen
        options={{
          headerTitle: '',
          headerLeft: () => (
            <Pressable className="mx-4">
              <ArrowLeft size={24} color="black" />
            </Pressable>
          ),
          headerRight: () => (
            <View className="flex-row mx-4">
              <Pressable className="mr-4">
                <Bell size={24} color="black" />
              </Pressable>
              <Pressable>
                <Share2 size={24} color="black" />
              </Pressable>
            </View>
          ),
        }}
      />
      <View className="px-4 py-6">
        <View className="flex-row items-center mb-4">
          <Image
            source={require('@assets/images/demo.png')}
            className="w-24 h-24 rounded-full mr-4"
            contentFit="cover"
          />
          <View>
            <Text className="text-2xl font-bold">Colab's Mascot</Text>
            <Text className="text-gray-500 text-base">@colabs_mascot</Text>
          </View>
        </View>

        <Text className="text-gray-700 mb-4">
          Born explorer · I travel to eat & meet · Anthony Bourdain was the goat
        </Text>

        <View className="flex-row justify-between items-center mb-6">
          <View className="flex-row">
            <View className="items-center mr-6">
              <Text className="text-lg font-bold">0</Text>
              <Text className="text-gray-500">Following</Text>
            </View>
            <View className="items-center mr-6">
              <Text className="text-lg font-bold">0</Text>
              <Text className="text-gray-500">Followers</Text>
            </View>
            <View className="items-center">
              <Text className="text-lg font-bold">0</Text>
              <Text className="text-gray-500">Lists</Text>
            </View>
          </View>

          <View className="flex-row items-center">
            <Pressable className="bg-gray-200 px-4 py-2 rounded-md mr-2">
              <Text className="font-semibold">Edit profile</Text>
            </Pressable>
            <Pressable className="bg-gray-200 p-2 rounded-md">
              <Settings size={20} color="black" />
            </Pressable>
          </View>
        </View>

        <View className="flex-row border-b border-gray-200 mb-6">
          <Pressable
            className={`flex-1 items-center py-2 ${activeTab === 'my-lists' ? 'border-b-2 border-red-500' : ''}`}
            onPress={() => setActiveTab('my-lists')}
          >
            <Text
              className={`font-semibold ${activeTab === 'my-lists' ? 'text-red-500' : 'text-gray-500'}`}
            >
              My lists
            </Text>
          </Pressable>
          <Pressable
            className={`flex-1 items-center py-2 ${activeTab === 'saved' ? 'border-b-2 border-red-500' : ''}`}
            onPress={() => setActiveTab('saved')}
          >
            <Text
              className={`font-semibold ${activeTab === 'saved' ? 'text-red-500' : 'text-gray-500'}`}
            >
              Saved
            </Text>
          </Pressable>
          <Pressable
            className={`flex-1 items-center py-2 ${activeTab === 'liked' ? 'border-b-2 border-red-500' : ''}`}
            onPress={() => setActiveTab('liked')}
          >
            <Text
              className={`font-semibold ${activeTab === 'liked' ? 'text-red-500' : 'text-gray-500'}`}
            >
              Liked
            </Text>
          </Pressable>
        </View>

        {activeTab === 'my-lists' && (
          <View className="border border-gray-200 rounded-lg p-4 items-center justify-center">
            <Sparkles size={48} color="#FF4D4D" className="mb-4" />
            <Text className="text-lg font-semibold text-center mb-4">
              Share your interests
            </Text>
            <Pressable className="bg-red-500 px-6 py-3 rounded-full flex-row items-center">
              <Plus size={20} color="white" className="mr-2" />
              <Text className="text-white font-semibold">Add a list</Text>
            </Pressable>
          </View>
        )}

      </View>
    </View>
  );
} 