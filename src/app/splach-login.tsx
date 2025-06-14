import * as React from 'react';
import { SafeAreaView, View, Text, Image, Dimensions, Pressable } from 'react-native';
import { Button } from '@/components/ui';
import { MailIcon } from '@/components/ui/icons/mail';
import { TiktokIcon } from '@/components/ui/icons/tiktok';
import { FacebookIcon } from '@/components/ui/icons/facebook';
import { GoogleIcon } from '@/components/ui/icons/google';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const images = [
  require('@assets/images/splach-login1.png'),
  require('@assets/images/splach-login2.png')
];

export default function SplachLogin() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Top section with image */}
      <View className="flex-1 items-center justify-center">
        <Image
          source={require('@assets/images/splach-login1.png')}
          className="w-full h-full absolute inset-0"
          resizeMode="cover"
        />
        <Image
          source={require('@assets/images/icon.png')}
          className="w-24 h-24"
          resizeMode="contain"
        />
      </View>

      {/* Bottom section with buttons */}
      <View className="px-6 pb-6 pt-4">
        <Button
          label="Continue with tiktok"
          onPress={() => {}}
          className="bg-neutral-100 h-14 px-8 py-3 flex-row items-center justify-center mb-4 opacity-50"
          textClassName="text-neutral-800 text-lg ml-2"
          icon={<TiktokIcon className="h-6 w-6 text-neutral-800" />}
          disabled
        />
        <Button
          label="Continue with facebook"
          onPress={() => {}}
          className="bg-neutral-100 h-14 px-8 py-3 flex-row items-center justify-center mb-4 opacity-50"
          textClassName="text-neutral-800 text-lg ml-2"
          icon={<FacebookIcon className="h-6 w-6 text-neutral-800" />}
          disabled
        />
        <Button
          label="Continue with Google"
          onPress={() => {}}
          className="bg-neutral-100 h-14 px-8 py-3 flex-row items-center justify-center mb-4 opacity-50"
          textClassName="text-neutral-800 text-lg ml-2"
          icon={<GoogleIcon className="h-6 w-6 text-neutral-800" />}
          disabled
        />
        <Button
          label="Continue with email"
          onPress={() => router.push('/email-signup')}
          className="bg-neutral-100 h-14 px-8 py-3 flex-row items-center justify-center"
          textClassName="text-neutral-800 text-lg ml-2"
          icon={<MailIcon className="h-6 w-6 text-neutral-800" />}
        />

        {/* Grouped sign in section */}
        <View className="mt-8 space-y-4">
          <View className="flex-row justify-center items-center">
            <Text className="text-neutral-500 text-base">Already have an account?</Text>
          </View>
          <Button
            label="Sign in"
            onPress={() => router.push('/sign-in')}
            className="border border-neutral-300 bg-transparent h-14 px-8 py-3"
            textClassName="text-neutral-800 text-lg"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}