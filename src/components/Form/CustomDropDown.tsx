import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleProp,
  TextStyle,
  ViewStyle,
  Dimensions,
  FlatList,
  StyleSheet,
  ImageStyle,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import Icons from 'src/assets/Icons';
import { Colors, Fonts } from 'src/themes';

const { width } = Dimensions.get('window');

interface CustomDropDownProps<T> {
  options: T[];
  error?: string;
  rightIcon?: boolean;
  placeholder?: string;
  keyExtractor?: keyof T;
  icon?: ImageSourcePropType;
  value: T | null | undefined;
  onChange: (item: T) => void;
  iconStyle?: StyleProp<ImageStyle>;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  mainContainerStyle?: StyleProp<ViewStyle>;
}

const CustomDropDown = <T extends unknown>({
  icon,
  value,
  error,
  onChange,
  iconStyle,
  inputStyle,
  options = [],
  keyExtractor,
  containerStyle,
  placeholder = '',
  rightIcon = true,
  mainContainerStyle,
}: CustomDropDownProps<T>) => {
  const hasError = !!error;

  const [isFocused, setIsFocused] = useState(false);

  const handlePress = () => {
    setIsFocused(!isFocused);
  };

  const handleSelect = (item: T) => {
    onChange(item);
    setIsFocused(false);
  };

  const getDisplayValue = (item: T): string => {
    if (keyExtractor && typeof item === 'object' && item !== null) {
      return String(item[keyExtractor]);
    }
    return String(item);
  };

  return (
    <>
      <View
        style={[
          styles.dropdownContainer,
          mainContainerStyle,
          hasError && styles.errorBorder,
        ]}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={handlePress}
          style={[styles.dropdownHeader, containerStyle]}>
          {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
          <Text
            style={[
              styles.input,
              inputStyle,
              hasError && { color: Colors.error },
            ]}>
            {value ? getDisplayValue(value) : placeholder}
          </Text>
          {rightIcon && (
            <Image source={Icons.chevronDown} style={styles.rightIcon} />
          )}
        </TouchableOpacity>

        {isFocused && (
          <FlatList
            data={options}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => handleSelect(item)}
                style={[
                  styles.dropdownItem,
                  { borderTopWidth: index === 0 ? 0 : 1 },
                ]}>
                <Text style={styles.itemText}>{getDisplayValue(item)}</Text>
              </TouchableOpacity>
            )}
            style={styles.dropdownList}
            ListEmptyComponent={
              <View style={styles.noData}>
                <Text style={styles.itemText}>No data found</Text>
              </View>
            }
          />
        )}
      </View>
      {hasError && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    marginTop: 15,
    maxHeight: 250,
    width: width - 40,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: Colors.white,
  },
  dropdownHeader: {
    width: '100%',
    height: 55,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.textPrimary,
  },
  rightIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginLeft: 10,
    tintColor: Colors.textDisabled,
  },
  dropdownList: {
    borderTopWidth: 2,
    borderColor: Colors.lightSilver,
  },
  dropdownItem: {
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderColor: Colors.lightSilver,
  },
  itemText: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.textPrimary,
  },
  noData: {
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: Colors.error,
    marginTop: 5,
    fontFamily: Fonts.regular,
    fontSize: 12,
    width: '100%',
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: Colors.error,
  },
});

export default CustomDropDown;
