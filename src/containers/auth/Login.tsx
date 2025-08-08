import {
  Text,
  View,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// import {
//   signInWithOTP,
//   getCurrentUser,
//   signInWithGoogle,
// } from 'src/redux/services/firebase';
import React, { useEffect, useState } from 'react';
//theme
import { Colors, Fonts } from '../../themes';
//assets
import Icons from '../../assets/Icons';
import Images from '../../assets/Images';
//utils
import { NavService, ErrorHandler } from '../../utils';
//components
import {
  AuthBackground,
  CustomTextInput,
  CustomButton,
} from '../../components';
//config
import { fontScale } from '../../config/FontDimension';
import DimensionsUtil from '../../config/ImageDimension';
import {
  errorToast,
  isValidEmail,
  isValidPassword,
  successToast,
} from '../../redux/services/validations';
import { useAuthLoginMutation } from '../../redux/services/authApi';
import { loaderActions, userActions } from '../../redux/actions';

const Login = () => {
  const [email, setEmail] = useState('testinspector@mailinator.com');
  const [password, setPassword] = useState('Abc12345@');
  const [selected, setSelected] = useState(0);
  // const [authLogin, response] = useAuthLoginMutation();

  // loaderActions.setLoader(response?.isLoading);

  const handleSubmit = () => {
    if (!email || !password) return errorToast('Please filled all the fields');
    if (!isValidEmail(email)) return;
    if (!isValidPassword(password)) return;

    const formData = new FormData();
    let params: { [key: string]: string } = { password, email };
    for (let key in params) {
      formData.append(key, params[key]);
    }
    // authLogin(formData);
  };

  // useEffect(() => {
  //   const data = response?.data?.response?.data;
  //   if (response?.isSuccess) {
  //     successToast(response?.data?.message);
  //     userActions.setUserToken(data?.token);
  //     userActions.setUserData(data?.user);
  //     NavService.reset(0, [{ name: 'AppStack' }]);
  //   } else if (response?.isError) ErrorHandler(response?.error);
  // }, [response]);

  return (
    <AuthBackground back={false} help={false}>
      <View style={styles.container}>
        {/* <Image source={Images.logo} style={styles.logo} /> */}
        <Text style={styles.greetingText}>Login Account</Text>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Please login into your account</Text>
        </View>

        <CustomTextInput
          placeholder="Enter Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          leftIcon={Icons.mail}
          onFocus={() => setSelected(1)}
          onBlur={() => setSelected(0)}
          containerStyle={{
            borderColor: selected === 1 ? Colors.primary : Colors.border,
          }}
          leftIconStyle={{
            tintColor: selected === 1 ? Colors.secondary : Colors.textDisabled,
          }}
        />
        <CustomTextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          type="password"
          leftIcon={Icons.key}
          onFocus={() => setSelected(2)}
          onBlur={() => setSelected(0)}
          containerStyle={{
            borderColor: selected === 2 ? Colors.primary : Colors.border,
          }}
          leftIconStyle={{
            tintColor: selected === 2 ? Colors.secondary : Colors.textDisabled,
          }}
        />
        <View style={styles.forgotContainer}>
          <TouchableOpacity
            onPress={() => NavService.navigate('ForgotPassword')}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <CustomButton title="Login Account" onPress={handleSubmit} />

        {/* <CustomButton
          variant="social"
          icon={Icons.google}
          title="Continue with Google"
          onPress={googleSingIn}
        />
        {Platform.OS === 'ios' && (
          <CustomButton
            variant="social"
            icon={Icons.apple}
            title="Continue with Apple"
            onPress={getCurrentUser}
          />
        )} */}
      </View>
    </AuthBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  greetingText: {
    fontSize: 25,
    // fontFamily: Fonts.bold,
    color: Colors.black,
    width: '100%',
    marginTop: 15,
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: fontScale(13),
    // fontFamily: Fonts.semiBold,
    color: Colors.subtitleText,
  },
  logo: {
    width: DimensionsUtil.scale(50),
    height: DimensionsUtil.verticalScale(45),
    resizeMode: 'contain',
    marginTop: '13%',
    marginBottom: 10,
  },
  forgotContainer: {
    width: '100%',
    marginBottom: 10,
  },
  forgotPasswordText: {
    width: '100%',
    textAlign: 'right',
    marginTop: 15,
    fontSize: fontScale(11),
    color: Colors.forgotText,
  },
});
