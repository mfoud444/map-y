import * as React from 'react';
import { SafeAreaView, View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from '@/components/ui';
import { EyeIcon } from '@/components/ui/icons/eye';
import { ArrowLeftIcon } from '@/components/ui/icons/arrow-left';
import { useRouter } from 'expo-router';

export default function CreatePasswordScreen() {
  const router = useRouter();
  const [password, setPassword] = React.useState('');
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const hasMinLength = password.length >= 8;
  const hasMaxLength = password.length <= 20;
  const hasLetterAndSpecialChar = /[a-zA-Z]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const isButtonDisabled = !(hasMinLength && hasMaxLength && hasLetterAndSpecialChar);

  const handleNext = () => {
    if (!isButtonDisabled) {
      // TODO: Here you would typically send the password to your backend
      router.push('/create-profile');
    }
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
            <View className="flex-row items-center justify-between pt-4">
              <Pressable onPress={() => router.back()}>
                <ArrowLeftIcon className="h-6 w-6 text-neutral-800" />
              </Pressable>
              <Text className="text-lg font-semibold text-neutral-800">Sign up</Text>
              <View className="w-6" />
            </View>

            <View className="mt-8">
              <Text className="text-3xl font-bold text-neutral-800">Create password</Text>
            </View>

            <View className="mt-8">
              <View className="relative flex-row items-center">
                <TextInput
                  className="h-14 flex-1 rounded-lg border border-neutral-300 px-4 text-base"
                  placeholder="Hello@25"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!isPasswordVisible}
                />
                <Pressable
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                  className="absolute right-4"
                >
                  <EyeIcon className="h-6 w-6 text-neutral-500" />
                </Pressable>
              </View>

              <View className="mt-4">
                <View className="flex-row items-center">
                  <Text className={`text-base ${hasMinLength && hasMaxLength ? 'text-green-500' : 'text-neutral-500'}`}>
                    {hasMinLength && hasMaxLength ? '✓' : '•'} 8 characters (20 max)
                  </Text>
                </View>
                <View className="mt-2 flex-row items-center">
                  <Text className={`text-base ${hasLetterAndSpecialChar ? 'text-green-500' : 'text-neutral-500'}`}>
                    {hasLetterAndSpecialChar ? '✓' : '•'} 1 letter and 1 special character (Example: # ? ! @)
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View className="mt-auto px-6 pb-6">
            <Button
              label="Next"
              onPress={handleNext}
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