import React, { FC, use, useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleProp,
  ViewStyle,
  StyleSheet,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';
//assets
import Icons from '../assets/Icons';
//theme
import { Colors, Fonts } from '../themes';
import { globalStyles } from '../config/GlobalStyle';
import { fontScale } from '../config/FontDimension';

interface CheckboxProps {
  isChecked?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  onPress?: () => void;
  title?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  containerStyle = {},
  iconStyle = {},
  onPress = () => {},
  title = '',
}) => {
  const [select, setSelect] = useState();

  const handlePress = (item: any, index: number) => {
    onPress(item);
    setSelect(index);
  };

  return (
    <View style={{ marginBottom: 30 }}>
      <Text style={styles.text}>{title}</Text>
      <View style={globalStyles.rowContainer}>
        {['Yes', 'No', 'Not Available']?.map((item: any, index: number) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handlePress(item, index)}
            style={styles.container}
          >
            <View
              style={[
                styles.checkbox,
                {
                  backgroundColor:
                    index == select ? Colors.check : Colors.unCheck,
                },
                containerStyle,
              ]}
            >
              {index == select && (
                <Image
                  source={Icons.check}
                  style={[
                    styles.checkIcon,
                    {
                      tintColor: index == select ? Colors.green : Colors.white,
                    },
                    iconStyle,
                  ]}
                />
              )}
            </View>
            <Text style={styles.title}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    backgroundColor: Colors.unCheck,
    height: 20,
    width: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIcon: {
    width: 11,
    height: 11,
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  title: {
    fontSize: fontScale(12),
    marginLeft: 5,
    color: Colors.textSecondary,
    fontFamily: Fonts.semiBold,
  },
  text: {
    fontSize: fontScale(13),
    fontFamily: Fonts.medium,
    color: Colors.black,
    marginBottom: 12,
  },
});

export default Checkbox;
