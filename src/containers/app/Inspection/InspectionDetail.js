import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//components
import { AppBackground, CustomButton } from '../../../components';
//assets
import Icons from '../../../assets/Icons';
import Images from '../../../assets/Images';
//theme
import { Colors, Fonts } from '../../../themes';
//config
import { fontScale } from '../../../config/FontDimension';
import { globalStyles } from '../../../config/GlobalStyle';
import DimensionsUtil from '../../../config/ImageDimension';
//utils
import { NavService } from '../../../utils';

const InspectionDetail = () => {
  const data = [
    {
      title: 'Justin Yeoward, Steven Litaker',
      img: Images.dummy,
    },
    {
      title: '1150 NW 23rd Avenue, Ft. Lauderdale, FL, ',
      img: Icons.pin,
    },
    {
      title: '(954)584-3633,      813-853-4352',
      img: Icons.phone,
    },
  ];

  const handleInspection = () => {
    NavService.navigate('InspectionForm');
  };

  return (
    <AppBackground>
      <Text style={styles.title}>Wet pipe sprinkler systems inspection</Text>
      <View style={globalStyles.rowStart}>
        <Text style={styles.textStyle}>In List: </Text>
        <Text style={[styles.textStyle, { color: Colors.error }]}>Pending</Text>
      </View>
      <View style={[globalStyles.rowStart, { marginTop: 5 }]}>
        <Text style={styles.textStyle}>Frequency: </Text>
        <Text style={[styles.textStyle, { color: Colors.error }]}>Monthly</Text>
      </View>
      <View
        style={[
          globalStyles.rowContainer,
          {
            borderWidth: 1,
            borderRadius: 10,
            borderColor: Colors.lightGrey,
            marginVertical: 25,
            backgroundColor: '#EEEEEE',
          },
        ]}
      >
        <View style={styles.nestedContainer}>
          <Image source={Icons.calendar} style={{ width: 20, height: 20 }} />
          <Text style={[styles.name, { lineHeight: 24, marginLeft: 15 }]}>
            4/9/2024
          </Text>
        </View>
        <View
          style={[
            styles.nestedContainer,
            { borderLeftWidth: 1, borderColor: Colors.lightGrey, height: 40 },
          ]}
        >
          <Image source={Icons.clock} style={{ width: 20, height: 20 }} />
          <Text style={[styles.name, { lineHeight: 24, marginLeft: 15 }]}>
            10:00 am
          </Text>
        </View>
      </View>
      {data?.map((item, index) => (
        <View key={index} style={[globalStyles.rowContainer, styles.row]}>
          <Image
            source={item?.img}
            style={index == 0 ? styles.img : styles.icon}
          />
          <Text style={[styles.textStyle, styles.secondaryTxt]}>
            {item?.title}
          </Text>
        </View>
      ))}
      <Text style={[styles.title, { fontSize: fontScale(16), marginTop: 20 }]}>
        Description
      </Text>
      <Text style={styles.detailTxt}>
        FDC out side on W wall 6" Riser OS&Y CV in conference rm middle closet
        ITV in SE corner of main bldg/warehouse by overhead door Alarm code
        7399+1(must enter twice for reset) 2" backflow outside by street (feeds
        smaller S bldg) South Warehouse bldg - North Riser 2" Ball Valve
      </Text>
      <Text style={[styles.title, { fontSize: fontScale(16), marginTop: 20 }]}>
        Inspection Team
      </Text>
      <View style={[globalStyles.rowContainer, { marginBottom: 30 }]}>
        {[1, 1]?.map(() => (
          <View style={[globalStyles.rowContainer]}>
            <Image source={Images.dummy} style={styles.imgSecondary} />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.name} numberOfLines={1}>
                Justin Yeoward
              </Text>
              <Text
                style={[
                  styles.textStyle,
                  {
                    fontSize: fontScale(12),
                    lineHeight: 15,
                  },
                ]}
              >
                Inspector
              </Text>
            </View>
          </View>
        ))}
        <View style={[globalStyles.rowContainer, styles.row]}></View>
      </View>
      <CustomButton title="Start Inspection" onPress={handleInspection} />
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.bold,
    fontSize: fontScale(24),
    lineHeight: 36,
    color: Colors.black,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: fontScale(12),
    color: Colors.textSecondary,
  },
  textStyle: {
    fontFamily: Fonts.medium,
    fontSize: fontScale(15),
    lineHeight: 24,
    color: Colors.textSecondary,
  },
  secondaryTxt: {
    color: Colors.black,
    marginLeft: 15,
    fontFamily: Fonts.semiBold,
  },
  row: {
    borderBottomWidth: 0.5,
    paddingVertical: 15,
    borderBlockColor: Colors.lightGrey,
    justifyContent: 'flex-start',
  },
  img: {
    height: DimensionsUtil.verticalScale(30),
    width: DimensionsUtil.scale(32),
  },
  icon: {
    height: DimensionsUtil.verticalScale(22),
    width: DimensionsUtil.scale(24),
  },
  detailTxt: {
    fontFamily: Fonts.regular,
    fontSize: fontScale(13),
    color: Colors.textSecondary,
  },
  imgSecondary: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  name: {
    color: Colors.title,
    fontFamily: Fonts.semiBold,
    fontSize: fontScale(14),
  },
  occupation: {},
  nestedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '50%',
  },
});

export default InspectionDetail;
