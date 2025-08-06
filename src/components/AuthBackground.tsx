import React, { FC, ReactNode } from 'react';
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icons from '../assets/Icons';
import Images from '../assets/Images';
import { Colors } from '../themes';
import Fonts from '../themes/Fonts';
import { NavService } from '../utils';
import DimensionsUtil from '../config/ImageDimension';

interface AuthBackgroundProps {
  children: ReactNode;
  back?: boolean;
  help?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const AuthBackground: FC<AuthBackgroundProps> = ({
  children,
  back = true,
  // help = false,
  containerStyle = {},
}) => {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      {back && (
        <View style={styles.header}>
          {back && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => NavService.goBack()}
              style={styles.backContainer}
            >
              <Image
                resizeMode="contain"
                source={Icons.back}
                style={styles.backIcon}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
      <ScrollView
        keyboardShouldPersistTaps="always"
        bounces={false}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: getStatusBarHeight() + 10,
    backgroundColor: Colors.backgroundColor,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  backContainer: {
    height: DimensionsUtil.verticalScale(40),
    width: DimensionsUtil.scale(40),
    // height: DimensionsUtil.scale(40),
    // width: DimensionsUtil.verticalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    height: DimensionsUtil.verticalScale(30),
    width: DimensionsUtil.scale(30),
    // height: DimensionsUtil.scale(30),
    // width: DimensionsUtil.verticalScale(30),
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  // helpContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // helpIcon: {
  //   height: 30,
  //   width: 30,
  //   tintColor: Colors.text,
  // },
  // helpText: {
  //   fontSize: 16,
  //   fontFamily: Fonts.regular,
  //   color: Colors.text,
  //   marginLeft: 7.5,
  // },
});

export default AuthBackground;
