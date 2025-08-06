import React, { FC } from 'react';
import {
  Text,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  Dimensions,
  StyleSheet,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';
import { Colors, Fonts } from '../themes';
import LinearGradient from 'react-native-linear-gradient';
import { fontScale } from '../config/FontDimension';

const { width } = Dimensions.get('screen');

interface SecondaryCustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'social';
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
}

const SecondaryCustomButton: FC<SecondaryCustomButtonProps> = ({
  title,
  onPress,
  disabled = false,
  variant = 'primary',
  textStyle,
  buttonStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        // { backgroundColor: disabled ? '#D9D9D9' : Colors.primary },
        // variant === 'social' && styles.socialButton,
        buttonStyle,
      ]}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.text,
          variant === 'social' && styles.socialText,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    paddingVertical: 17,
    borderRadius: 15,
    width: width - 40,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
    resizeMode: 'contain',
  },
  text: {
    fontSize: fontScale(14),
    color: Colors.black,
    fontFamily: Fonts.medium,
  },
  socialButton: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  socialText: {
    color: Colors.textDisabled,
    fontFamily: Fonts.regular,
  },
});

export default SecondaryCustomButton;
