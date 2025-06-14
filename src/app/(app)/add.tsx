import { View, Text, Button, Input } from '@/components/ui';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';

export default function AddScreen() {
  const router = useRouter();
  const handleNext = () => {
    // Simulate fetching data from Google Maps
    const mockGoogleMapsData = {
      title: "Trip to Jeddah",
      description: "A beautiful journey through the historic city.",
      imageUrl: "https://picsum.photos/300/200", // Unsplash placeholder image
      places: [
        {
          id: "1",
          name: "Al Balad Market",
          location: "Jeddah, Saudi Arabia",
          image: "https://picsum.photos/seed/picsum1/300/200",
        },
        {
          id: "2",
          name: "X World",
          location: "Jeddah, Saudi Arabia",
          image: "https://picsum.photos/seed/picsum2/300/200",
        },
      ],
    };
    router.push({
      pathname: "/add/preview",
      params: { data: JSON.stringify(mockGoogleMapsData) },
    });
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-row items-center justify-between py-4">
        <View />
        <Text className="text-xl font-bold">Add a list</Text>
        <Button className="bg-red-500 px-4 py-2 rounded-md" onPress={handleNext}>
          <Text className='text-white'>Next</Text>
        </Button>
      </View>

      <Text className="text-base font-semibold mt-8 mb-2">Paste Google Maps link</Text>
      <View className="flex-row items-center bg-gray-100 rounded-md px-3 py-2">
        <Image
          source={require('@assets/images/google-maps.png')}
          className="w-8 h-8 mr-2"
        />
        <Input
          placeholder="https://maps.app.goo.gl/shiokj"
          className="flex-1 bg-transparent"
        />
        <Button>
          <Text className="text-red-500">Paste</Text>
        </Button>
      </View>
    </View>
  );
} 