import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
//component
import { AppBackground, CustomButton, ProfileImage } from '../../../components';
//assets
import Images from '../../../assets/Images';
import Icons from '../../../assets/Icons';
//theme
import { Colors, Fonts } from '../../../themes';
//config
import { fontScale } from '../../../config/FontDimension';
import { globalStyles } from '../../../config/GlobalStyle';
//utils
import { NavService } from '../../../utils';
//redux
import { useAuthLogoutMutation } from '../../../redux/services/authApi';
import { loaderActions, userActions } from '../../../redux/actions';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/types';

const Account = () => {
  const userData = useSelector((state: RootState) => state.user.userData);
  const [authLogout, response] = useAuthLogoutMutation();
  loaderActions.setLoader(response?.isLoading);

  const list = [
    {
      title: 'Name',
      subtitle:
        userData?.firstName + ' ' + userData?.lastName || 'Ethan Carter',
    },
    { title: 'Email', subtitle: userData?.email || 'Ethan7@gmail.com' },
    { title: 'Phone', subtitle: userData?.phone || '+1234567890' },
  ];

  // const handleLogout = () => {
  //   authLogout({});
  //   // NavService.reset(0, [{ name: 'AuthStack' }]);
  // };

  useEffect(() => {
    const data = response?.data?.response?.data;
    if (data) {
      userActions.setUserData(null);
      userActions.setUserToken('');
      NavService.reset(0, [{ name: 'AuthStack' }]);
    }
  }, [response]);

  return (
    <AppBackground
      back={false}
      title="User Information"
      containerStyle={styles.mainContainer}
    >
      <ProfileImage
        source={{ uri: userData?.avatar }}
        name={userData?.firstName + ' ' + userData?.lastName}
      />
      <Text style={styles.nameStyle}>
        {userData?.firstName + ' ' + userData?.lastName}
      </Text>
      <View style={[globalStyles.rowContainer, styles.container]}>
        <Text style={styles.label}>ID number</Text>
        <Text style={[styles.label, { color: Colors.textSecondary }]}>
          #23456
        </Text>
      </View>

      <TouchableOpacity
        onPress={() =>
          NavService.navigate('EditProfile', {
            data: { ...list, img: userData?.avatar },
          })
        }
        style={styles.editBtn}
      >
        {list?.map((item, index) => (
          <View
            style={[
              globalStyles.rowContainer,
              styles.middleContainer,
              {
                borderBottomWidth: index == list?.length - 1 ? 0 : 0.5,
              },
            ]}
          >
            <Text style={styles.label}>{item?.title}</Text>
            <View style={globalStyles.rowContainer}>
              <Text style={[styles.label, { color: Colors.textSecondary }]}>
                {item?.subtitle}
              </Text>
              <Image source={Icons.forward} style={styles.forwardIcon} />
            </View>
          </View>
        ))}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => NavService.navigate('ChangePassword')}
        style={[globalStyles.rowContainer, styles.container]}
      >
        <Text style={styles.label}>Password</Text>
        <View style={globalStyles.rowContainer}>
          <Text style={[styles.label, { color: Colors.textSecondary }]}>
            ********
          </Text>
          <Image source={Icons.forward} style={styles.forwardIcon} />
        </View>
      </TouchableOpacity>

      <View style={[globalStyles.rowContainer, styles.container]}>
        <Text style={styles.label}>Registration date</Text>
        <Text style={[styles.label, { color: Colors.textSecondary }]}>
          Feb 14, 2024, 8:00
        </Text>
      </View>
      <CustomButton title="Logout" onPress={() => authLogout({})} />
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    paddingTop: '10%',
    paddingBottom: 40,
  },
  container: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 15,
  },
  nameStyle: {
    color: Colors.black,
    fontSize: fontScale(16),
    lineHeight: 36,
    marginTop: 5,
    marginBottom: 20,
    fontFamily: Fonts.semiBold,
  },
  label: {
    fontFamily: Fonts.medium,
    fontSize: fontScale(15),
    color: Colors.black,
  },
  forwardIcon: {
    width: 7,
    height: 12,
    marginLeft: 10,
  },
  editBtn: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginBottom: 15,
  },
  middleContainer: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomColor: Colors.lightGrey,
  },
});

export default Account;
