import React, { use, useState } from 'react';
import { StyleSheet, View } from 'react-native';

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
import { Colors } from '../../../themes';
import { globalStyles } from '../../../config/GlobalStyle';
import { NavService } from '../../../utils';

const EditProfile = ({ route }: any) => {
  const { data } = route.params;

  const [selected, setSelected] = useState(0);
  const [name, setName] = useState(data[0]?.subtitle || '');
  const [email, setEmail] = useState(data[1]?.subtitle || '');
  const [phone, setPhone] = useState(data[2]?.subtitle || '');
  const [image, setImage] = useState(data?.img || '');

  const handleSubmit = () => {
    NavService.goBack();
  };

  return (
    <AppBackground
      title="Edit Profile"
      containerStyle={{
        alignItems: 'center',
        paddingTop: '10%',
      }}
    >
      <View style={globalStyles.container}>
        <ProfileImage
          source={{ uri: image }}
          isEdit
          // onPress={e => console.log(e, '-----')}
        />
        <CustomTextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          leftIcon={Icons.profile}
          onFocus={() => setSelected(1)}
          onBlur={() => setSelected(0)}
          containerStyle={{
            borderColor: selected === 1 ? Colors.primary : Colors.border,
            marginTop: 30,
          }}
          leftIconStyle={{
            tintColor: selected === 1 ? Colors.secondary : Colors.textDisabled,
          }}
        />
        <CustomTextInput
          placeholder="Enter Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          leftIcon={Icons.mail}
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
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric"
          leftIcon={Icons.phone}
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

const styles = StyleSheet.create({});

export default EditProfile;
