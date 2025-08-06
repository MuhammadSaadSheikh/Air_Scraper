import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
//components
import {
  AuthBackground,
  CustomButton,
  AuthHeader,
  CustomTextInput,
} from '../../components';
//assets
import Icons from '../../assets/Icons';
//theme
import { Colors, Fonts } from '../../themes';
//config
import { fontScale } from '../../config/FontDimension';
import { globalStyles } from '../../config/GlobalStyle';
//utils
import { NavService, ErrorHandler } from '../../utils';
//redux
import { isValidEmail, successToast } from '../../redux/services/validations';
import { useAuthForgotMutation } from '../../redux/services/authApi';
import { loaderActions } from '../../redux/actions';

const ForgotPassword = () => {
  // const;
  const [selected, setSelected] = useState(false);
  const [email, setEmail] = useState('testinspector@mailinator.com');
  const [authForgot, response] = useAuthForgotMutation();
  loaderActions.setLoader(response?.isLoading);

  const handleVerifyOtp = () => {
    if (!isValidEmail(email)) return;
    const formData = new FormData();
    formData.append('email', email);
    authForgot(formData);
  };

  useEffect(() => {
    if (response?.isSuccess) {
      successToast(response?.data?.message);
      NavService.navigate('OtpVerification', {
        code: response?.data?.response?.data?.code,
        email,
      });
    } else if (response?.isError) ErrorHandler(response?.error);
  }, [response]);

  return (
    <AuthBackground>
      <View style={globalStyles.container}>
        <AuthHeader
          title="Forgot Your Password?"
          subtitle="Please enter your email address account to send the OTP verification to reset your password"
          image={Icons.lock}
        />
        <CustomTextInput
          placeholder="Email"
          keyboardType="email-address"
          leftIcon={Icons.mail}
          value={email}
          onChangeText={setEmail}
          onFocus={() => setSelected(true)}
          onBlur={() => setSelected(false)}
          containerStyle={{
            borderColor: selected ? Colors.primary : Colors.border,
          }}
          leftIconStyle={{
            tintColor: selected ? Colors.secondary : Colors.textDisabled,
          }}
        />
        <TouchableOpacity>
          <Text style={[globalStyles.authText, styles.resendText]}>
            Need Help?
          </Text>
        </TouchableOpacity>
      </View>
      <CustomButton title="Continue" onPress={handleVerifyOtp} />
    </AuthBackground>
  );
};

const styles = StyleSheet.create({
  resendText: {
    fontSize: fontScale(12),
    color: Colors.highlightColor,
    textDecorationLine: 'underline',
    fontFamily: Fonts.medium,
  },
});

export default ForgotPassword;
