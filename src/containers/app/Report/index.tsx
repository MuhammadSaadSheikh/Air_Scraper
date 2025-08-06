import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
//components
import { AppBackground, SearchBar } from '../../../components';
import Icons from '../../../assets/Icons';
import { Colors, Fonts } from '../../../themes';
import { fontScale } from '../../../config/FontDimension';
import DimensionsUtil from '../../../config/ImageDimension';

const Report = () => {
  const [search, setSearch] = useState<string>('');
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.itemContainer} key={index}>
        <Image source={Icons.pdf} style={styles.pdfIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Inspection Report - 07/15/2024</Text>
          <Text style={styles.subtitle}>123 Main St, Anytown</Text>
          <Text
            style={[
              styles.subtitle,
              {
                color: item === 'Completed' ? Colors.green : Colors.error,
                width: '100%',
                textAlign: 'right',
              },
            ]}
          >
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <AppBackground disableScroll back={false} title="Reports">
      <View style={{ paddingHorizontal: 20 }}>
        <SearchBar />
      </View>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 20 }}
        data={[
          'Completed',
          'Rejected',
          'Completed',
          'Rejected',
          'Completed',
          'Rejected',
        ]}
        renderItem={renderItem}
      />
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingVertical: 15,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: fontScale(15),
    color: Colors.black,
    fontFamily: Fonts.medium,
  },
  subtitle: {
    fontSize: fontScale(12),
    color: Colors.textSecondary,
    fontFamily: Fonts.medium,
  },
  pdfIcon: {
    // width: DimensionsUtil.scale(32),
    // height: DimensionsUtil.verticalScale(36),
    height: 37,
    width: 30,
    marginRight: 5,
  },
});

export default Report;
