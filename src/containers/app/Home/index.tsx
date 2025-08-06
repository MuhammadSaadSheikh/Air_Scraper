import React, { useEffect } from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

//theme
import { Colors, Fonts } from '../../../themes';
//components
import { AppBackground } from '../../../components';
//config
import { fontScale } from '../../../config/FontDimension';
import { globalStyles } from '../../../config/GlobalStyle';
//utils
import { Shadows } from '../../../utils';

const { width } = Dimensions.get('screen');

const Home = () => {
  const [selected, setSelected] = React.useState('Monthly');
  const data = [
    { count: '16', color: '#E9E9E9', title: 'Complete This Month' },
    { count: '05', color: '#D8E1FF', title: 'In Progress' },
    { count: '03', color: '#FFBFC2', title: 'Pending This Month' },
    { count: '254', color: '#E8FFC7', title: 'Total Complete Inspections' },
  ];
  const renderCard = (val: any, ind = 0) => {
    return (
      <View
        key={ind}
        style={[styles.cardContainer, { backgroundColor: val?.color }]}
      >
        <Text style={styles.countStyle}>{val?.count}</Text>
        <Text style={styles.title}>{val?.title}</Text>
      </View>
    );
  };

  const list = ['Monthly', 'Quarterly', 'Yearly'];

  const barData = [
    {
      value: 10,
      label: 'Mon',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: styles.labelStyle,
      frontColor: Colors.secondary,
      yAxisLabelTextStyle: styles.labelStyle,
    },
    { value: 40, frontColor: Colors.primary },
    {
      value: 50,
      label: 'Tue',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: styles.labelStyle,
      frontColor: Colors.secondary,
    },
    { value: 40, frontColor: Colors.primary },
    {
      value: 75,
      label: 'Wed',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: styles.labelStyle,
      frontColor: Colors.secondary,
    },
    { value: 25, frontColor: Colors.primary },
    {
      value: 30,
      label: 'Thu',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: styles.labelStyle,
      frontColor: Colors.secondary,
    },
    { value: 20, frontColor: Colors.primary },
    {
      value: 60,
      label: 'Fri',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: styles.labelStyle,
      frontColor: Colors.secondary,
    },
    { value: 40, frontColor: Colors.primary },
    {
      value: 65,
      label: 'Sat',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: styles.labelStyle,
      frontColor: Colors.secondary,
    },
    { value: 30, frontColor: Colors.primary },
    {
      value: 65,
      label: 'Sun',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: styles.labelStyle,
      frontColor: Colors.secondary,
    },
    { value: 30, frontColor: Colors.primary },
  ];

  const renderCart = () => {
    return (
      <BarChart
        noOfSections={5}
        width={width * 0.75}
        barBorderRadius={4}
        // yAxisLabelTexts={['0', '10', '15', '20', '25', '30', '35']}
        yAxisTextStyle={styles.labelStyle}
        showFractionalValues
        showYAxisIndices
        // hideRules
        data={barData}
      />
    );
  };

  return (
    <AppBackground homeHeader containerStyle={{ paddingBottom: 0 }}>
      <Text style={styles.heading}>Your Statistics</Text>
      <View style={globalStyles.rowContainer}>
        {list?.map((val, ind) => (
          <TouchableOpacity
            key={ind}
            style={[
              styles.dropDownContainer,
              {
                backgroundColor:
                  selected === val ? Colors.primary : Colors.white,
              },
            ]}
            onPress={() => setSelected(val)}
          >
            <Text
              style={[
                globalStyles.textCenter,
                {
                  fontSize: fontScale(12),
                  color: selected === val ? Colors.white : Colors.black,
                },
              ]}
            >
              {val}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.monthly}>{selected} Inspection</Text>
        {renderCart()}
      </View>
      <View style={styles.wrapContainer}>{data.map(renderCard)}</View>
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: fontScale(20),
    color: Colors.black,
    fontFamily: Fonts.bold,
    lineHeight: 36,
  },
  wrapContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '48%',
    backgroundColor: Colors.white,
    height: 140,
    borderRadius: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  countStyle: {
    fontSize: fontScale(35),
    color: Colors.blue,
    fontFamily: Fonts.bold,
    lineHeight: 36,
    // marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: fontScale(13),
    color: Colors.blue,
    fontFamily: Fonts.bold,
  },
  monthly: {
    fontFamily: Fonts.extraBold,
    fontSize: fontScale(15),
    lineHeight: 24,
    paddingHorizontal: 20,
    marginBottom: 20,
    color: Colors.primary,
  },
  labelStyle: {
    color: Colors.black,
    fontSize: 12,
    fontFamily: Fonts.bold,
  },
  dropDownContainer: {
    width: '32%',
    backgroundColor: Colors.white,
    paddingVertical: 10,
    borderRadius: 10,
  },
  chartContainer: {
    width: '100%',
    paddingVertical: 20,
    // paddingHorizontal: 10,
    backgroundColor: '#E9E9E9',
    borderRadius: 10,
    marginVertical: 20,
    ...Shadows.shadow3,
  },
});

export default Home;
