import * as React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, Dimensions, Pressable } from 'react-native';
import { Button } from '@/components/ui';
import { MailIcon } from '@/components/ui/icons/mail';
import { TiktokIcon } from '@/components/ui/icons/tiktok';
import { FacebookIcon } from '@/components/ui/icons/facebook';
import { GoogleIcon } from '@/components/ui/icons/google';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const images = [
  'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&w=800&q=80'
];

export default function OnboardingScreen() {
  const router = useRouter();

  const renderItem = ({ item }: { item: any }) => (
    <View className="w-1/2 h-1/3 p-1">
      <Image source={item} className="flex-1 rounded-lg" resizeMode="cover" />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* <View className="absolute inset-0">
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={{ flexGrow: 1, paddingTop: height * 0.1, paddingBottom: height * 0.1 }}
        />
      </View> */}

      {/* <View className="absolute inset-0 items-center justify-center">
        <Image
          source={require('../../assets/images/etch-logo.png')} // Assuming you have an etch-logo.png
          className="w-48 h-24" // Adjust size as needed
          resizeMode="contain"
        />
      </View> */}

      <View className="absolute bottom-0 left-0 right-0 p-6">
        <Button
          label="Continue with tiktok"
          onPress={() => { /* Handle TikTok login */ }}
          className="bg-neutral-100 h-14 px-8 py-3 flex-row items-center justify-center mb-4"
          textClassName="text-neutral-800 text-lg ml-2"
          icon={<TiktokIcon className="h-6 w-6 text-neutral-800" />}
        />
        <Button
          label="Continue with facebook"
          onPress={() => { /* Handle Facebook login */ }}
          className="bg-neutral-100 h-14 px-8 py-3 flex-row items-center justify-center mb-4"
          textClassName="text-neutral-800 text-lg ml-2"
          icon={<FacebookIcon className="h-6 w-6 text-neutral-800" />}
        />
        <Button
          label="Continue with Google"
          onPress={() => { /* Handle Google login */ }}
          className="bg-neutral-100 h-14 px-8 py-3 flex-row items-center justify-center mb-4"
          textClassName="text-neutral-800 text-lg ml-2"
          icon={<GoogleIcon className="h-6 w-6" />}
        />
        <Button
          label="Continue with email"
          onPress={() => router.push('/email-signup')}
          className="bg-neutral-100 h-14 px-8 py-3 flex-row items-center justify-center mb-6"
          textClassName="text-neutral-800 text-lg ml-2"
          icon={<MailIcon className="h-6 w-6 text-neutral-800" />}
        />

        <View className="flex-row justify-center items-center mb-4">
          <Text className="text-neutral-500 text-base">Already have an account?</Text>
        </View>
        <Button
          label="Sign in"
          onPress={() => router.push('/login')}
          className="border border-neutral-300 bg-transparent h-14 px-8 py-3"
          textClassName="text-neutral-800 text-lg"
        />
      </View>
    </SafeAreaView>
  );
}
