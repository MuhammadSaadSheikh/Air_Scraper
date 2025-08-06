import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageComponent,
  Image,
} from 'react-native';
//components
import { AppBackground } from '../../../components';
import { AssignedCard, ToggleBar } from './components';
//config
import { globalStyles } from '../../../config/GlobalStyle';
import { fontScale } from '../../../config/FontDimension';
import { Colors, Fonts } from '../../../themes';
import Images from '../../../assets/Images';
import DimensionsUtil from '../../../config/ImageDimension';

const Inspection = () => {
  return (
    <AppBackground homeHeader disableScroll>
      <View style={{ paddingHorizontal: 15 }}>
        <ToggleBar />
        <View style={[globalStyles.rowContainer, { paddingVertical: 10 }]}>
          <Text style={styles.title}>Assigned Inspections</Text>
          <Image source={Images.calender} style={styles.calenderStyle} />
        </View>
        <FlatList
          data={[1, 2, 3]}
          contentContainerStyle={{ paddingBottom: 120 }}
          renderItem={({ item, index }) => (
            <AssignedCard data={{ item, index }} />
          )}
        />
      </View>
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: fontScale(20),
    fontFamily: Fonts.bold,
    lineHeight: 36,
    color: Colors.black,
  },
  calenderStyle: {
    // height: DimensionsUtil.verticalScale(37),
    // width: DimensionsUtil.scale(40),
    height: 40,
    width: 40,
  },
});

export default Inspection;
