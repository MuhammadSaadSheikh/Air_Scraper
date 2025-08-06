import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Images from '../assets/Images';

interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 266 }) => {
  return (
    <Image
      source={Images.logo}
      style={[styles.logo, { height: size / 1.41, width: size }]}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    paddingTop: getStatusBarHeight(),
  },
});

export default Logo;
