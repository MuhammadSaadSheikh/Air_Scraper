import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
//components
import { AppBackground } from '../../../components';
import { Colors, Fonts } from '../../../themes';
import { fontScale } from '../../../config/FontDimension';
import { globalStyles } from '../../../config/GlobalStyle';

const Notifications = () => {
  const renderItem = () => {
    return (
      <TouchableOpacity
        style={[globalStyles.rowContainer, styles.cardContainer]}
      >
        <View>
          <Text style={styles.title}>Fire Sprinkler</Text>
          <Text style={styles.subtitle}>
            The new inspection report is ready
          </Text>
          <Text style={styles.dateStyle}>24 Jul 2024, 12:00 PM</Text>
        </View>
        <View style={styles.dot} />
      </TouchableOpacity>
    );
  };

  return (
    <AppBackground disableScroll title="Notifications">
      {/* <View style={{ paddingHorizontal: 20 }}>
        <SearchBar />
      </View> */}
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 20 }}
        data={[1, 2, 3, 4]}
        renderItem={renderItem}
      />
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.semiBold,
    fontSize: fontScale(16),
    color: Colors.black,
    lineHeight: 20,
  },
  subtitle: {
    fontFamily: Fonts.medium,
    fontSize: fontScale(12),
    color: Colors.black,
    lineHeight: 20,
    marginTop: 5,
  },
  dateStyle: {
    fontFamily: Fonts.medium,
    fontSize: fontScale(10),
    color: Colors.lightGrey,
  },
  cardContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBlockColor: Colors.border,
    paddingVertical: 10,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: Colors.error,
  },
});

export default Notifications;
