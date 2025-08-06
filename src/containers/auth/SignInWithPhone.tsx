import { Colors } from '../../themes';
import Fonts from '../../themes/Fonts';
import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import AuthBackground from '../../components/AuthBackground';
import CustomTextInput from '../../components/Form/CustomTextInput';
import { isValidEmail } from '../../redux/services/validations';
import { Text, View, StyleSheet } from 'react-native';
import { signInWithOTP } from '../../redux/services/firebase';

const SignInWithPhone = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    setError('');
    if (!isValidEmail(email)) {
      setError('Please enter a correct Email Address');
    } else {
      signInWithOTP(email);
    }
  };

  return (
    <AuthBackground back={false} help={false}>
      <View style={styles.container}>
        <Text style={styles.greetingText}>Sign In,</Text>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>With Phone Number</Text>
        </View>

        <View style={{ flex: 0.3, justifyContent: 'center' }}>
          <CustomTextInput
            placeholder="Enter Phone Number"
            value={email}
            onChangeText={setEmail}
            error={error}
          />

          <CustomButton title="Send OTP" onPress={handleSubmit} />
        </View>
      </View>

      <Text style={styles.declaration}>
        By proceeding, you agree to Flyzy’s{' '}
        <Text style={styles.declarationLink}>{'User\nAgreement'}</Text>,{' '}
        <Text style={styles.declarationLink}>T&Cs</Text>
        {' and '}
        <Text style={styles.declarationLink}>Privacy Policy</Text>
      </Text>
    </AuthBackground>
  );
};

export default SignInWithPhone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 32,
    fontFamily: Fonts.bold,
    color: Colors.text,
    width: '100%',
    lineHeight: 42,
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: Fonts.semiBold,
    color: Colors.text,
    lineHeight: 32,
  },
  logo: {
    height: 28,
    width: 65,
    resizeMode: 'contain',
  },
  divider: {
    marginTop: 40,
    marginBottom: 25,
    width: '100%',
    resizeMode: 'contain',
  },
  declaration: {
    textAlign: 'center',
    fontFamily: Fonts.regular,
    color: Colors.textDisabled,
  },
  declarationLink: {
    fontFamily: Fonts.bold,
    textDecorationLine: 'underline',
  },
});
