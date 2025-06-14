import * as React from 'react';
import { SafeAreaView, View, Text, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from '@/components/ui';
import { MailIcon } from '@/components/ui/icons/mail';
import { router } from 'expo-router';

export default function EmailSignupScreen() {
  const [email, setEmail] = React.useState('');
  const [hasError, setHasError] = React.useState(false);

  const isValidEmail = (email: string) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isButtonDisabled = email.length === 0 || !isValidEmail(email);

  const handleNext = () => {
    if (isValidEmail(email)) {
      // TODO: Here you would typically make an API call to send verification code
      router.push('/enter-code');
    } else {
      setHasError(true);
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
            <View className="flex-row items-center justify-start pt-4">
              <View className="rounded-full bg-neutral-100 p-2">
                <MailIcon className="h-6 w-6 text-neutral-800" />
              </View>
            </View>

            <View className="mt-8">
              <Text className="text-3xl font-bold text-neutral-800">Continue with Email</Text>
              <Text className="mt-2 text-base text-neutral-500">Sign up with your email.</Text>
            </View>

            <View className="mt-8">
              <TextInput
                className={`h-14 w-full rounded-lg border px-4 text-base ${hasError ? 'border-red-500' : 'border-neutral-300'}`}
                placeholder="colab@gmail.com"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setHasError(false);
                }}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {hasError && (
                <View className="mt-2 flex-row items-center">
                  <MailIcon className="h-4 w-4 text-red-500" />
                  <Text className="ml-2 text-sm text-red-500">Please enter a valid email address</Text>
                </View>
              )}
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