import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
//theme
import { Colors, Fonts } from '../../themes';
//hooks
import useCountdownTimer from '../../hooks/useCountdownTimer';
//components
import {
  AuthBackground,
  CustomButton,
  CustomOTPInput,
  AuthHeader,
  SecondaryCustomButton,
} from '../../components';
import Icons from '../../assets/Icons';
//config
import { globalStyles } from '../../config/GlobalStyle';
import { NavService } from '../../utils';
//redux
import { useAuthForgotMutation } from '../../redux/services/authApi';
import { errorToast } from '../../redux/services/validations';
import { setLoader } from '../../redux/slices/loaderSlice';

interface OtpVerificationProps {
  route: { params: { code: string; email: string } };
}

const OtpVerification = ({ route }: OtpVerificationProps) => {
  const { code, email } = route.params;
  const [authForgot, response] = useAuthForgotMutation();
  setLoader(response?.isLoading);
  const { remainingTime, isFinished, reset } = useCountdownTimer(59);

  const [otp, setOtp] = useState<string>('');

  const handleVerifyOtp = () => {
    if (!otp) return errorToast('Enter OTP');
    else if (code != otp) return errorToast('OTP is incorrect');
    NavService.navigate('NewPassword', { code, email });
    reset();
  };

  const resendOtp = () => {
    const formData = new FormData();
    formData.append('email', email);
    authForgot(formData);
  };

  useEffect(() => {
    if (response?.isSuccess) reset();
  }, [response]);

  return (
    <AuthBackground>
      <View style={globalStyles.container}>
        <View style={globalStyles.nestedContainer}>
          <AuthHeader
            image={Icons.mailTwo}
            title="Verify Your Email"
            subtitle="To verify your account, enter the 6 digit OTP code that we sent to your
                  email."
          />
          <CustomOTPInput onFilled={text => setOtp(text)} />

          <Text
            style={[globalStyles.authText, { color: Colors.highlightColor }]}
          >
            00:{remainingTime}
          </Text>
          {remainingTime == '00' && (
            <>
              <Text style={[globalStyles.authText, { marginBottom: 10 }]}>
                Didn't get the email?
              </Text>
              <SecondaryCustomButton title="Resend Code" onPress={resendOtp} />
            </>
          )}
        </View>
      </View>
      <CustomButton title="Verify" onPress={handleVerifyOtp} />
    </AuthBackground>
  );
};

export default OtpVerification;
