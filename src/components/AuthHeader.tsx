import React, { FC } from 'react';
import { Text, Image, StyleSheet } from 'react-native';
//theme
import { Colors, Fonts } from '../themes';
//config
import DimensionsUtil from '../config/ImageDimension';
import { fontScale } from '../config/FontDimension';

interface AuthBackgroundProps {
  title?: string;
  subtitle?: string;
  image?: any;
}

const AuthHeader: FC<AuthBackgroundProps> = ({ title, subtitle, image }) => {
  return (
    <>
      <Image source={image} style={styles.imgStyle} />
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.subtitleStyle}>{subtitle}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    height: DimensionsUtil.verticalScale(45),
    width: DimensionsUtil.scale(48.5),
    // borderRadius: 15,
  },
  titleStyle: {
    fontSize: fontScale(25),
    marginTop: 35,
    textAlign: 'center',
    // fontFamily: Fonts.bold,
    color: Colors.black,
  },
  subtitleStyle: {
    fontSize: fontScale(15),
    marginTop: 15,
    lineHeight: 22,
    textAlign: 'center',
    // fontFamily: Fonts.regular,
    color: Colors.lightGrey,
    marginBottom: 40,
  },
});

export default AuthHeader;
