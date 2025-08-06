import React from 'react';
import {
  Text,
  Image,
  ViewStyle,
  TouchableOpacity,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import { Colors, Fonts } from 'src/themes';

interface TabButtonProps {
  icon?: ImageSourcePropType;
  title?: string;
  isSelected?: boolean;
  buttonStyle?: ViewStyle;
  onSelect?: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  icon,
  title,
  isSelected = false,
  buttonStyle = {},
  onSelect = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      activeOpacity={0.8}
      style={[
        styles.button,
        {
          backgroundColor: isSelected ? Colors.primary : 'transparent',
          borderColor: isSelected ? Colors.primary : Colors.primary,
        },
        buttonStyle,
      ]}>
      {!!icon && (
        <Image
          source={icon}
          style={[
            styles.icon,
            { tintColor: isSelected ? Colors.white : Colors.primary },
          ]}
        />
      )}
      {!!title && (
        <Text
          style={[
            styles.title,
            { color: isSelected ? Colors.white : Colors.primary },
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 25,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 1,
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
});
