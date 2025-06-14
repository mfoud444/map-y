import { Link, useRouter } from 'expo-router';
import React from 'react';

import type { LoginFormProps } from '@/components/login-form';
import { LoginForm } from '@/components/login-form';
import SplachLogin from './splach-login';
import { FocusAwareStatusBar, Button } from '@/components/ui';
import { useAuth } from '@/lib';

export default function Login() {
  const router = useRouter();
  const signIn = useAuth.use.signIn();

  const onSubmit: LoginFormProps['onSubmit'] = (data) => {
    console.log(data);
    signIn({ access: 'access-token', refresh: 'refresh-token' });
    router.push('/');
  };
  return (
    <>
      <FocusAwareStatusBar />
<SplachLogin/>
      {/* <LoginForm onSubmit={onSubmit} /> */}
      <Link href="/email-signup" asChild>
        <Button
          label="Continue with Email"
          className="mx-4 mt-4 bg-transparent py-3"
          labelClassName="text-primary-500 text-lg"
        />
      </Link>
    </>
  );
}
