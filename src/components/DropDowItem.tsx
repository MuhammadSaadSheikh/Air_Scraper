import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icons from '../assets/Icons';
import { Colors } from '../themes';

interface DropDownItemProps {
  item: string;
  onCancel: () => void;
}

const DropDownItem: React.FC<DropDownItemProps> = ({ item, onCancel }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{item}</Text>
        <TouchableOpacity onPress={onCancel} activeOpacity={0.8}>
          <Image source={Icons.cross} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: 33,
    maxWidth: 150,
    borderRadius: 33 / 2,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 2.5,
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 33 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 12,
    color: Colors.white,
    marginRight: 10,
  },
  icon: {
    width: 10,
    height: 10,
    tintColor: Colors.white,
  },
});

export default DropDownItem;
