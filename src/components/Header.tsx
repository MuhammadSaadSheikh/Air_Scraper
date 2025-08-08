import {
  Text,
  View,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  ImageStyle,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
//theme
import { Colors } from '../themes';
//assets
import Icons from '../assets/Icons';
import Images from '../assets/Images';
//utils
import { NavService } from '../utils';
//config
import { fontScale } from '../config/FontDimension';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/types';
//redux
// import { RootState } from 'src/redux/types';

interface HeaderProps {
  nav?: string;
  title?: string;
  back?: boolean;
  notificationIcon: boolean;
  headerTextStyle?: StyleProp<TextStyle>;
  headerBackStyle?: StyleProp<ImageStyle>;
  headerContainerStyle?: StyleProp<ViewStyle>;
}

const Header = ({
  nav = '',
  title = '',
  back = true,
  notificationIcon = false,
  headerBackStyle,
  headerTextStyle,
  headerContainerStyle,
}: HeaderProps) => {
  const navigateBack = () => {
    if (nav === 'HomeStack') {
      NavService.reset(0, [{ name: 'HomeStack' }]);
    } else {
      nav ? NavService.navigate(nav) : NavService.goBack();
    }
  };

  return (
    <View style={[styles.container, headerContainerStyle]}>
      <View style={styles.rowCenter}>
        {back && (
          <TouchableOpacity activeOpacity={0.8} onPress={navigateBack}>
            <Image
              resizeMode="contain"
              source={Icons.back}
              style={[styles.backIcon, headerBackStyle]}
            />
          </TouchableOpacity>
        )}
      </View>
      {!!title && <Text style={[styles.title, headerTextStyle]}>{title}</Text>}

      <View style={styles.rowCenter}>
        {notificationIcon && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => NavService.navigate('Notifications')}
          >
            <View style={styles.notificationDot} />
            <Image source={Icons.bell} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const HeaderHome = () => {
  const userData = useSelector((state: RootState) => state.user.userData);
  return (
    <View style={[styles.container, styles.homeContainer]}>
      <TouchableOpacity
        onPress={() => NavService.navigate('Settings')}
        activeOpacity={0.8}
      >
        <Image
          source={
            userData
              ? {
                  uri: userData?.avatar,
                }
              : Images.dummy
          }
          style={styles.profileImage}
        />
      </TouchableOpacity>
      <View style={styles.nestedContainer}>
        <Text style={styles.name}>
          {userData?.firstName + ' ' + userData?.lastName}
        </Text>
        <Text style={styles.job}>Inspector</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => NavService.navigate('Notifications')}
      >
        <View style={styles.notificationDot} />
        <Image source={Icons.bell} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + 50
        : getStatusBarHeight() + 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '10%',
  },
  backIcon: {
    height: 30,
    width: 30,
    marginRight: 15,
  },
  title: {
    fontSize: fontScale(16),
    color: Colors.textPrimary,
    // fontFamily: Fonts.semiBold,
  },
  rightIcon: {
    height: 32,
    width: 32,
    marginLeft: 10,
  },
  homeContainer: {
    paddingVertical: 10,
  },
  logo: {
    height: 28,
    width: 63,
    resizeMode: 'contain',
  },
  icon: {
    height: 24,
    width: 24,
  },
  notificationDot: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: Colors.error,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  profileImage: {
    backgroundColor: Colors.lightSilver,
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  nestedContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 15,
  },
  name: {
    lineHeight: 30,
    // fontFamily: Fonts.semiBold,
    fontSize: fontScale(20),
    color: Colors.black,
  },
  job: {
    // fontFamily: Fonts.regular,
    fontSize: fontScale(15),
    color: Colors.textDisabled,
  },
});

export default Header;
export { HeaderHome };
