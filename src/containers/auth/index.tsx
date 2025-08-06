import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
//screens
import Login from './Login';
import OtpVerification from './OtpVerification';
import SignInWithPhone from './SignInWithPhone';
import ForgotPassword from './ForgotPassword';
import NewPassword from './NewPassword';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: 'transparent' },
        animation: 'simple_push',
        headerShown: false,
      }}
      initialRouteName={'Login'}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignInWithPhone" component={SignInWithPhone} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
