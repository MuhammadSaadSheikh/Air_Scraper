import { StyleSheet, View } from 'react-native';
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
//utils
import { NavService, ErrorHandler } from '../../utils';
//redux
import {
  arePasswordsMatching,
  isValidPassword,
  successToast,
} from '../../redux/services/validations';
import { useAuthUpdateMutation } from '../../redux/services/authApi';
import { loaderActions } from '../../redux/actions';
//interface
interface NewPasswordProps {
  route: { params: { code: string; email: string } };
}

const NewPassword = ({ route }: NewPasswordProps) => {
  const { code: password_reset_code, email } = route.params;
  const [authUpdate, response] = useAuthUpdateMutation();
  loaderActions.setLoader(response?.isLoading);

  const [selected, setSelected] = useState(0);
  const [password, setNewPassword] = useState<string>('');
  const [password_confirmation, setConfirmPassword] = useState<string>('');

  const handleVerifyOtp = () => {
    // if (!password || !password_confirmation)
    //   return errorToast('Enter all fields');
    // else if (password !== password_confirmation)
    //   return errorToast('Password not matched');
    if (!isValidPassword(password)) return;
    else if (!arePasswordsMatching(password, password_confirmation)) return;

    const formData = new FormData();
    let params: { [key: string]: string } = {
      email,
      password_reset_code,
      password,
      password_confirmation,
    };
    for (let key in params) formData.append(key, params[key]);

    authUpdate(formData);
  };

  useEffect(() => {
    if (response?.isSuccess) {
      successToast(response?.data?.message);
      NavService.navigate('Login');
    } else if (response?.isError) return ErrorHandler(response?.error);
  }, [response]);

  return (
    <AuthBackground>
      <View style={styles.container}>
        <AuthHeader
          title="Create New Password"
          subtitle="Please make sure the password is not the same as the previous password."
          image={Icons.keyTwo}
        />
        <CustomTextInput
          placeholder="New password"
          leftIcon={Icons.key}
          type="password"
          onFocus={() => setSelected(1)}
          onBlur={() => setSelected(0)}
          value={password}
          onChangeText={setNewPassword}
          containerStyle={{
            borderColor: selected == 1 ? Colors.primary : Colors.border,
          }}
          leftIconStyle={{
            tintColor: selected == 1 ? Colors.secondary : Colors.textDisabled,
          }}
        />
        <CustomTextInput
          placeholder="Confirm new password"
          leftIcon={Icons.key}
          type="password"
          onFocus={() => setSelected(2)}
          onBlur={() => setSelected(0)}
          value={password_confirmation}
          onChangeText={setConfirmPassword}
          containerStyle={{
            borderColor: selected == 2 ? Colors.primary : Colors.border,
          }}
          leftIconStyle={{
            tintColor: selected == 2 ? Colors.secondary : Colors.textDisabled,
          }}
        />
      </View>
      <CustomButton title="Continue" onPress={handleVerifyOtp} />
    </AuthBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  OtpContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  resendText: {
    marginTop: 25,
    fontSize: fontScale(12),
    fontFamily: Fonts.medium,
    color: Colors.highlightColor,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default NewPassword;
