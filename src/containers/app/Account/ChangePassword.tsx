import React, { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

//component
import {
  AppBackground,
  CustomButton,
  CustomTextInput,
  ProfileImage,
} from '../../../components';
//assets
import Images from '../../../assets/Images';
import Icons from '../../../assets/Icons';
//theme
import { Colors, Fonts } from '../../../themes';
//config
import { fontScale } from '../../../config/FontDimension';
import { globalStyles } from '../../../config/GlobalStyle';
import { NavService } from '../../../utils';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selected, setSelected] = useState(0);

  const handleSubmit = () => {
    NavService.goBack();
  };

  return (
    <AppBackground
      title="Change Password"
      containerStyle={{
        alignItems: 'center',
        paddingTop: '10%',
      }}
    >
      <View style={globalStyles.container}>
        <CustomTextInput
          placeholder="Current Password"
          value={currentPassword}
          onChangeText={setCurrentPassword}
          type="password"
          leftIcon={Icons.key}
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
          placeholder="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
          type="password"
          leftIcon={Icons.key}
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
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          type="password"
          leftIcon={Icons.key}
          onFocus={() => setSelected(3)}
          onBlur={() => setSelected(0)}
          containerStyle={{
            borderColor: selected === 3 ? Colors.primary : Colors.border,
          }}
          leftIconStyle={{
            tintColor: selected === 3 ? Colors.secondary : Colors.textDisabled,
          }}
        />
      </View>
      <CustomButton title="Save" onPress={handleSubmit} />
    </AppBackground>
  );
};

const styles = StyleSheet.create({
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
});

export default ChangePassword;
