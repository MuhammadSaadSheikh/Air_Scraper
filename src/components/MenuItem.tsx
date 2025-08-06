import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icons from 'src/assets/Icons';
import { Colors } from 'src/themes';

interface MenuItemProps {
  item: {
    icon: any;
    title: string;
    subtitle: string;
    onPress: () => void;
  };
  index: number;
  titleStyle?: object;
}

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  index,
  titleStyle = {},
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      key={index.toString()}
      onPress={item.onPress}
      style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={item.icon} style={styles.icon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, titleStyle]}>{item.title}</Text>
        <Text numberOfLines={1} style={styles.subtitle}>
          {item.subtitle}
        </Text>
      </View>
      <View style={styles.arrowContainer}>
        <View style={styles.arrowInnerContainer}>
          <Image
            resizeMode="contain"
            source={Icons.back}
            style={styles.arrowIcon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
  },
  icon: {
    width: 25,
    height: 25,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
    paddingRight: 10,
  },
  title: {
    fontSize: 16,
    color: Colors.primary,
  },
  subtitle: {
    fontSize: 12,
    color: Colors.text,
  },
  arrowContainer: {
    backgroundColor: Colors.black,
    height: 33,
    width: 33,
    borderRadius: 33 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowInnerContainer: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  arrowIcon: {
    height: 12,
    width: 12,
    tintColor: Colors.white,
    transform: [{ rotate: '180deg' }],
  },
});

export default MenuItem;
