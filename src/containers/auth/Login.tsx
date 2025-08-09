import {
  Text,
  View,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
//theme
import { Colors } from '../../themes';
//assets
import Icons from '../../assets/Icons';
//utils
import { NavService } from '../../utils';
//components
import AuthBackground from '../../components/AuthBackground';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/Form/CustomTextInput';
//config
import { fontScale } from '../../config/FontDimension';
import DimensionsUtil from '../../config/ImageDimension';
import {
  arePasswordsMatching,
  errorToast,
} from '../../redux/services/validations';
import { loaderActions, userActions } from '../../redux/actions';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selected, setSelected] = useState(0);

  // loaderActions.setLoader(response?.isLoading);

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !password)
      return errorToast('Please filled all the fields');
    else if (!arePasswordsMatching(password, confirmPassword)) return;

    // const formData = new FormData();
    // let params: { [key: string]: string } = { password, email };
    // for (let key in params) {
    //   formData.append(key, params[key]);
    // }
    NavService.reset(0, [{ name: 'AppStack' }]);
  };

  return (
    <AuthBackground back={false} help={false}>
      <View style={styles.container}>
        {/* <Image source={Images.logo} style={styles.logo} /> */}
        <Text style={styles.greetingText}>Login Account</Text>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Please login into your account</Text>
        </View>

        <CustomTextInput
          placeholder="Enter first Name"
          value={firstName}
          onChangeText={setFirstName}
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
          placeholder="Enter Last Name"
          value={lastName}
          onChangeText={setLastName}
          leftIcon={Icons.mail}
          onFocus={() => setSelected(2)}
          onBlur={() => setSelected(0)}
          containerStyle={{
            borderColor: selected === 2 ? Colors.primary : Colors.border,
          }}
          leftIconStyle={{
            tintColor: selected === 2 ? Colors.secondary : Colors.textDisabled,
          }}
        />
        <CustomTextInput
          placeholder="Enter Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          leftIcon={Icons.mail}
          onFocus={() => setSelected(3)}
          onBlur={() => setSelected(0)}
          containerStyle={{
            borderColor: selected === 3 ? Colors.primary : Colors.border,
          }}
          leftIconStyle={{
            tintColor: selected === 3 ? Colors.secondary : Colors.textDisabled,
          }}
        />
        <CustomTextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          type="password"
          leftIcon={Icons.key}
          onFocus={() => setSelected(4)}
          onBlur={() => setSelected(0)}
          containerStyle={{
            borderColor: selected === 4 ? Colors.primary : Colors.border,
          }}
          leftIconStyle={{
            tintColor: selected === 4 ? Colors.secondary : Colors.textDisabled,
          }}
        />
        <CustomTextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          type="password"
          leftIcon={Icons.key}
          onFocus={() => setSelected(4)}
          onBlur={() => setSelected(0)}
          containerStyle={{
            borderColor: selected === 4 ? Colors.primary : Colors.border,
          }}
          leftIconStyle={{
            tintColor: selected === 4 ? Colors.secondary : Colors.textDisabled,
          }}
        />

        <CustomButton title="Signup Account" onPress={handleSubmit} />

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
