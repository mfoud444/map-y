import * as React from 'react';
import { SafeAreaView, View, Text, TextInput } from 'react-native';
import { Button } from '@/components/ui';
import { CodeMessageIcon } from '@/components/ui/icons/code-message';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { router } from 'expo-router';

export default function EnterCodeScreen() {
  const [code, setCode] = React.useState<string[]>(['', '', '', '']);
  const [resendTimer, setResendTimer] = React.useState(599); // 9 minutes 59 seconds
  const [hasError, setHasError] = React.useState(false); // For demonstration, can be used for error state
  const inputRefs = React.useRef<TextInput[]>([]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    setHasError(false);

    // Move to next input field
    if (text.length === 1 && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
    // Move to previous input field on backspace
    if (text.length === 0 && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleNext = () => {
    const isCodeValid = code.every(digit => digit !== '');
    if (isCodeValid) {
      // TODO: Here you would typically verify the code with your backend
      router.push('/create-password');
    } else {
      setHasError(true);
    }
  };

  const isButtonDisabled = code.some(digit => digit === '');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={10}
    >
      <SafeAreaView className="flex-1 bg-white px-6">
        <View className="flex-row items-center justify-start pt-4">
          <View className="rounded-full bg-neutral-100 p-2">
            <CodeMessageIcon className="h-6 w-6 text-neutral-800" />
          </View>
        </View>

        <View className="mt-8">
          <Text className="text-3xl font-bold text-neutral-800">Enter Code</Text>
          <Text className="mt-2 text-base text-neutral-500">We sent a verification code to your email <Text className="font-bold text-neutral-800">colab@gmail.com</Text></Text>
        </View>

        <View className="mt-8 flex-row justify-between">
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputRefs.current[index] = el as TextInput)}
              className={`h-16 w-16 rounded-lg border text-center text-2xl ${hasError ? 'border-red-500' : 'border-neutral-300'} ${index === 0 && 'border-primary-500'}`}
              maxLength={1}
              keyboardType="number-pad"
              value={digit}
              onChangeText={(text) => handleCodeChange(text, index)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace' && digit === '' && index > 0) {
                  inputRefs.current[index - 1]?.focus();
                }
              }}
            />
          ))}
        </View>
        {hasError && (
          <Text className="mt-2 text-sm text-red-500">Please enter the complete verification code</Text>
        )}
        <Text className="mt-4 text-neutral-500">Resend code in {formatTime(resendTimer)}</Text>

        <View className="absolute bottom-0 left-0 right-0 p-6">
          <Button
            label="Next"
            onPress={handleNext}
            className="bg-pink-500 h-14 px-8 py-3"
            textClassName="text-white text-lg"
            disabled={isButtonDisabled}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
} 