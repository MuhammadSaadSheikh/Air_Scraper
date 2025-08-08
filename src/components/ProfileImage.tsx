import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../themes';
import Icons from '../assets/Icons';
import { globalStyles } from '../config/GlobalStyle';
// import CustomImagePicker from './CustomImagePicker';

interface ProfileImageProps {
  size?: number;
  source?: any;
  name?: string;
  style?: object;
  containerStyle?: object;
  isEdit?: boolean;
  onPress?: () => void;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  size = 140,
  source,
  name = '',
  style,
  containerStyle,
  isEdit = false,
  onPress = () => {},
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {source ? (
        <>
          <Image
            source={source}
            style={[
              styles.image,
              { width: size, height: size, borderRadius: 100 },
              style,
            ]}
          />
          {isEdit && (
            // <CustomImagePicker onImageChange={e => console.log(e, '------')}>
            <View style={[styles.editContainer, globalStyles.shadow]}>
              <Image source={Icons.edit} style={styles.editIcon} />
            </View>
            // </CustomImagePicker>
          )}
        </>
      ) : (
        <View
          style={[
            styles.placeholder,
            { width: size, height: size, borderRadius: 100 },
            style,
          ]}
        >
          <Text style={[styles.text, { fontSize: size * 0.75 }]}>
            {name[0]?.toUpperCase()}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.primary,
  },
  image: {
    resizeMode: 'cover',
    backgroundColor: Colors.primary,
  },
  placeholder: {
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.primary,
    fontWeight: '800',
    textAlign: 'center',
  },
  editContainer: {
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
  editIcon: {
    width: 22,
    height: 22,
    tintColor: Colors.primary,
  },
});

export default ProfileImage;
