import * as EmailValidator from 'email-validator';
import passwordValidator from 'password-validator';
import Toast from 'react-native-toast-message';

// Define password validation schemas
var passwordLengthSchema = new passwordValidator();
var passwordUpperCaseSchema = new passwordValidator();
var passwordLowerCaseSchema = new passwordValidator();
var passwordSpecialCharacterSchema = new passwordValidator();

passwordLengthSchema.is().min(8).is().max(50);
passwordUpperCaseSchema.has().uppercase();
passwordLowerCaseSchema.has().lowercase();
passwordSpecialCharacterSchema.has().symbols();

// Toast functions
export const errorToast = (message: string): void => {
  Toast.show({
    text1: message,
    type: 'error',
    visibilityTime: 3000,
  });
};

export const successToast = (message: string): void => {
  Toast.show({
    text1: message,
    type: 'success',
    visibilityTime: 3000,
  });
};

// Validation functions
export const isEmpty = (value: string, fieldName: string): boolean => {
  if (!value) {
    errorToast(`Please enter ${fieldName}`);
    return true;
  }
  return false;
};

export const isAlpha = (value: string, fieldName: string): boolean => {
  if (!/^[a-zA-Z ]+$/.test(value)) {
    errorToast(`${fieldName} should be only alphabets`);
    return false;
  }
  return true;
};

export const isValidLength = (
  value: string,
  fieldName: string,
  min: number,
  max: number,
): boolean => {
  if (value.length < min || value.length > max) {
    errorToast(`${fieldName} should be between ${min} and ${max} characters`);
    return false;
  }
  return true;
};

export const isValidEmail = (email: string): boolean => {
  if (!EmailValidator.validate(email)) {
    errorToast('Please enter a valid email');
    return false;
  }
  return true;
};

export const isValidPhoneNumber = (phoneNumber: string): boolean => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
  return phoneRegex.test(phoneNumber);
};

export const isValidPassword = (password: string): boolean => {
  if (!passwordLengthSchema.validate(password)) {
    errorToast('Password must contain at least 8 characters');
    return false;
  }

  if (!passwordUpperCaseSchema.validate(password)) {
    errorToast('Password must contain at least one uppercase letter');
    return false;
  }

  if (!passwordLowerCaseSchema.validate(password)) {
    errorToast('Password must contain at least one lowercase letter');
    return false;
  }

  if (!passwordSpecialCharacterSchema.validate(password)) {
    errorToast('Password must contain at least one special character');
    return false;
  }

  return true;
};

export const arePasswordsMatching = (
  password: string,
  confirmPassword: string,
): boolean => {
  if (password !== confirmPassword) {
    errorToast('Password and confirm password do not match');
    return false;
  }
  return true;
};

export const isValidOTP = (otp: string, length: number = 6): boolean => {
  if (!otp) {
    errorToast('Please enter OTP');
    return false;
  }
  if (otp.length !== length) {
    errorToast(`OTP should be ${length} digits`);
    return false;
  }
  return true;
};
