import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ViewStyle,
  Dimensions,
  StyleSheet,
  ImageStyle,
  TextInputProps,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { Colors } from '../../themes';
import Icons from '../../assets/Icons';
import { fontScale } from '../../config/FontDimension';
import DimensionsUtil from '../../config/ImageDimension';

const { width } = Dimensions.get('window');

interface CustomTextInputProps extends TextInputProps {
  // label?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  onChange?: () => void;
  containerStyle?: ViewStyle;
  // rightIconStyle?: ImageStyle;
  leftIconStyle?: ImageStyle;
  rightIcon?: ImageSourcePropType;
  leftIcon?: ImageSourcePropType;
  textInputStyle?: TextInputProps['style'];
  type?: 'text' | 'email' | 'number' | 'description' | 'password';
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  type,
  // label,
  placeholder,
  error,
  value,
  onChange,
  disabled,
  rightIcon,
  leftIcon,
  containerStyle,
  textInputStyle,
  // rightIconStyle,
  leftIconStyle,
  ...rest
}) => {
  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(type === 'password');

  const hasError = !!error;
  const isActive = isFocused || !!value;

  useEffect(() => {
    if (value) {
      setIsFocused(true);
    }
  }, [value]);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(prev => !prev);
  };

  return (
    <>
      <View
        style={[
          styles.inputContainer,
          containerStyle,
          type === 'description' && styles.descriptionContainerStyle,
          hasError && styles.errorBorder,
          disabled && styles.disabledContainer,
        ]}
      >
        <View
          style={[
            styles.textInputWrapper,
            {
              alignItems: rightIcon ? 'flex-start' : 'center',
            },
          ]}
        >
          {leftIcon && (
            <Image source={leftIcon} style={[styles.leftIcon, leftIconStyle]} />
          )}

          <TextInput
            ref={inputRef}
            style={[
              styles.textInput,
              textInputStyle,
              type === 'description' && styles.descriptionInputStyle,
              disabled && { color: Colors.textSecondary },
            ]}
            placeholder={placeholder}
            placeholderTextColor={Colors.textDisabled}
            secureTextEntry={secureTextEntry}
            editable={!disabled}
            value={value}
            onChangeText={onChange}
            multiline={type === 'description'}
            {...rest}
          />
          {type === 'password' && (
            <TouchableOpacity
              style={{ padding: 5 }}
              onPress={togglePasswordVisibility}
            >
              <Image
                source={secureTextEntry ? Icons.eyeHidden : Icons.eye}
                style={[styles.rightIcon]}
              />
            </TouchableOpacity>
          )}
          {rightIcon && (
            <TouchableOpacity>
              <Image source={rightIcon} style={styles.microIcon} />
            </TouchableOpacity>
          )}
        </View>
        {/* )} */}
      </View>

      {hasError && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 55,
    marginTop: 15,
    borderWidth: 1,
    width: width - 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 10,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
  },
  errorBorder: {
    borderColor: Colors.error,
  },
  disabledContainer: {
    backgroundColor: Colors.lightSilver,
    borderColor: Colors.textDisabled,
  },
  // labelContainer: {
  //   marginLeft: 10,
  //   justifyContent: 'center',
  //   position: 'absolute',
  //   left: 0,
  //   top: 0,
  //   height: 52,
  //   width: '100%',
  //   // backgroundColor: 'red',
  // },
  // labelContainerExpanded: {
  //   height: 27.5,
  //   top: -13.75,
  //   left: 20,
  //   width: 'auto',
  // },
  // labelBackground: {
  //   position: 'absolute',
  //   backgroundColor: Colors.white,
  //   height: 13.75,
  //   width: '100%',
  //   bottom: 1,
  // },
  // labelText: {
  //   fontFamily: Fonts.medium,
  //   color: Colors.textDisabled,
  // },
  textInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 55,
    color: Colors.text,
    // fontFamily: Fonts.regular,
    fontSize: fontScale(13),
  },
  passwordToggle: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordToggleText: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 14,
  },
  errorText: {
    color: Colors.error,
    marginTop: 5,
    // fontFamily: Fonts.regular,
    fontSize: 12,
    width: '100%',
  },
  rightIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    tintColor: Colors.textDisabled,
  },
  microIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: Colors.black,
    marginTop: 10,
  },
  leftIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
    marginLeft: 5,
    resizeMode: 'contain',
  },
  descriptionContainerStyle: {
    height: 100,
    alignItems: 'flex-start',
  },
  descriptionInputStyle: {
    textAlignVertical: 'top',
    height: 80,
    marginTop: 10,
  },
});

export default CustomTextInput;
