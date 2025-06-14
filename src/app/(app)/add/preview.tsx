import { View, Text, Image, ScrollView, Switch, Input } from '@/components/ui';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { X, Pencil, Trash2 } from 'lucide-react-native';

type Place = {
  id: string;
  name: string;
  location: string;
  image: string;
};

type PreviewData = {
  title: string;
  description: string;
  imageUrl: string;
  places: Place[];
};

export default function PreviewScreen() {
  const params = useLocalSearchParams();
  const { data } = params;
  const previewData: PreviewData = data ? JSON.parse(data as string) : { title: '', description: '', imageUrl: '', places: [] };

  console.log('Preview Data:', previewData); // Debug log

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen
        options={{
          headerTitle: () => (
            <View className="flex-1 items-center justify-center">
              <Text className="text-lg font-bold">Preview</Text>
            </View>
          ),
          headerRight: () => (
            <Text className="text-red-500 font-semibold mx-4">Done</Text>
          ),
          headerLeft: () => (
            <X size={24} color="#6B7280" className="mx-4" />
          ),
        }}
      />
      <ScrollView className="p-4">
        <View className="items-center mb-6 relative">
          {previewData.imageUrl ? (
            <Image
              source={{ uri: previewData.imageUrl }}
              className="w-32 h-32 rounded-md mb-4"
              onError={(error) => console.log('Image Error:', error)}
            />
          ) : (
            <View className="w-32 h-32 rounded-md mb-4 bg-gray-200 items-center justify-center">
              <Text className="text-gray-500">No Image</Text>
            </View>
          )}
          {/* Edit icon */}
          <View className="absolute bottom-4 right-24 p-2 bg-red-500 rounded-full z-10">
            <Pencil size={16} color="white" />
          </View>
        </View>

        <View className="mb-4">
          <Input
            value={previewData.title}
            placeholder="Trip to Jeddah"
            className="border border-gray-300 rounded-md p-3 text-lg"
          />
        </View>

        <View className="mb-6">
          <Input
            value={previewData.description}
            placeholder="Description (optional)"
            className="border border-gray-300 rounded-md p-3  text-base"
            multiline
          />
        </View>

        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-lg font-semibold">Keep this list private?</Text>
          <Switch onChange={() => {}} accessibilityLabel="Toggle list privacy" />
        </View>

        <View className="flex-row justify-around mb-6">
          <Text className="font-bold text-red-500 border-b-2 border-red-500 pb-1">Places</Text>
          <Text className="text-gray-500">Map</Text>
        </View>

        <View className="flex-row flex-wrap justify-between mb-6">
          {/* Category tags placeholder */}
          <View className="flex-row mb-4">
            <Text className="border border-gray-300 rounded-full px-3 py-1 mr-2">☕ Cafes</Text>
            <Text className="border border-gray-300 rounded-full px-3 py-1 mr-2">⛩️ Attractions</Text>
            <Text className="border border-gray-300 rounded-full px-3 py-1 mr-2">🛍️ Shopping</Text>
            <Text className="border border-gray-300 rounded-full px-3 py-1">🌳 Nature</Text>
          </View>
        </View>

        <View className="flex-row flex-wrap justify-between">
          {previewData.places.map((place) => (
            <View key={place.id} className="w-[48%] mb-4 rounded-lg overflow-hidden border border-gray-200">
              {place.image ? (
                <Image 
                  source={{ uri: place.image }} 
                  className="w-full h-40"
                  onError={(error) => console.log('Place Image Error:', place.id, error)}
                />
              ) : (
                <View className="w-full h-40 bg-gray-200 items-center justify-center">
                  <Text className="text-gray-500">No Image</Text>
                </View>
              )}
              {/* Delete icon */}
              <View className="absolute top-2 right-2 p-1 bg-black opacity-60 rounded-full">
                <Trash2 size={16} color="white" />
              </View>
              <View className="p-3">
                <Text className="font-bold text-base mb-1">{place.name}</Text>
                <Text className="text-sm text-gray-600">{place.location}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
} 