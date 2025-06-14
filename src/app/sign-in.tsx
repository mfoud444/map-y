import * as React from 'react';
import { SafeAreaView, View, Text, Pressable, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, ControlledInput } from '@/components/ui';
import { EyeIcon } from '@/components/ui/icons/eye';
import { ArrowLeftIcon } from '@/components/ui/icons/arrow-left';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/lib';

const schema = z.object({
  emailOrUsername: z.string({
    required_error: 'Email or username is required',
  }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});

type FormType = z.infer<typeof schema>;

export default function SignIn() {
  const router = useRouter();
  const signIn = useAuth.use.signIn();
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const { handleSubmit, control, formState } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
    signIn({ access: 'access-token', refresh: 'refresh-token' });
    router.push('/');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* <View className="flex-row items-center px-4 h-14 border-b border-neutral-200">
        <Pressable onPress={() => router.back()} className="p-2">
          <ArrowLeftIcon className="h-6 w-6 text-neutral-800" />
        </Pressable>
        <Text className="flex-1 text-center text-lg font-bold">Sign in</Text>
      </View> */}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="flex-1 px-6 pt-10">
            <ControlledInput
              control={control}
              name="emailOrUsername"
              wrapperClassName="h-14 px-4 py-3 mb-4 bg-neutral-100 rounded-lg"
              className="text-lg text-neutral-800"
              placeholder="Email or username"
              placeholderTextColor="#A3A3A3"
              rounded="lg"
            />
            <ControlledInput
              control={control}
              name="password"
              wrapperClassName="h-14 px-4 py-3 mb-4 bg-neutral-100 rounded-lg"
              className="text-lg text-neutral-800"
              placeholder="Password"
              placeholderTextColor="#A3A3A3"
              secureTextEntry={!isPasswordVisible}
              rightElement={
                <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                  <EyeIcon className="h-6 w-6 text-neutral-500" />
                </Pressable>
              }
              rounded="lg"
            />

            <View className="flex-row justify-center mt-auto mb-6">
              <Text className="text-neutral-500 text-base">
                Forgot <Text className="text-red-500">password</Text> or <Text className="text-red-500">username</Text>?
              </Text>
            </View>

            <Button
              label="Sign in"
              onPress={handleSubmit(onSubmit)}
              className="bg-pink-500 h-14 px-8 py-3 rounded-lg"
              textClassName="text-white text-lg"
              disabled={!formState.isValid}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
} 