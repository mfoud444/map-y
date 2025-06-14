import * as React from 'react';
import { SafeAreaView, View, Text, TextInput, Pressable, Image, Platform, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from '@/components/ui';
import { CameraIcon } from '@/components/ui/icons/camera';
import { router } from 'expo-router';

export default function CreateProfileScreen() {
  const [username, setUsername] = React.useState('');
  const [bio, setBio] = React.useState('');

  const isButtonDisabled = username.length === 0;

  const handleCreateProfile = () => {
    // TODO: Implement profile creation logic here (e.g., API call)
    console.log('Creating profile:', { username, bio });
    // router.push('/home'); // Example navigation after profile creation
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
      className="flex-1"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="px-6">
            {/* Time and network icons - Placeholder for now */}
            <View className="flex-row items-center justify-between pt-4">
              <Text className="text-lg font-bold text-neutral-800">9:41</Text>
              <View className="flex-row items-center">
                {/* Add network/battery icons here if needed */}
              </View>
            </View>

            <View className="mt-8 items-center">
              <View className="relative h-32 w-32 rounded-full bg-blue-200 justify-center items-center overflow-hidden">
                {/* Placeholder for avatar image */}
                <Image
                  source={require('@assets/images/demo.png')} // Replace with actual avatar image if available
                  className="h-full w-full"
                  resizeMode="cover"
                />
                <Pressable className="absolute bottom-2 right-2 rounded-full bg-white p-2">
                  <CameraIcon className="h-5 w-5 text-neutral-800" />
                </Pressable>
              </View>
              <Text className="mt-8 text-3xl font-bold text-neutral-800">Your profile</Text>
              <Text className="mt-2 text-base text-neutral-500">Introduce your world on etch</Text>
            </View>

            <View className="mt-8">
              <TextInput
                className="h-14 w-full rounded-lg border border-neutral-300 px-4 text-base"
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
              />
            </View>

            <View className="mt-4">
              <Text className="mb-2 text-base text-neutral-500">Your bio (optional)</Text>
              <TextInput
                className="h-24 w-full rounded-lg border border-neutral-300 px-4 py-3 text-base"
                placeholder="Bio"
                value={bio}
                onChangeText={setBio}
                multiline
                textAlignVertical="top"
              />
            </View>
          </View>

          <View className="mt-auto px-6 pb-6">
            <Button
              label="Create profile"
              onPress={handleCreateProfile}
              className="bg-pink-500 h-14 px-8 py-3"
              textClassName="text-white text-lg"
              disabled={isButtonDisabled}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
} 