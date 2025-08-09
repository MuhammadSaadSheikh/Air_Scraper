import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Image,
  FlatList,
} from 'react-native';

//theme
import { Colors } from '../../../themes';
//components
import AppBackground from '../../../components/AppBackground';
import CustomButton from '../../../components/CustomButton';
import AutoCompleteInput from '../../../components/AutoCompleteInput';
//config
import { fontScale } from '../../../config/FontDimension';
import { globalStyles } from '../../../config/GlobalStyle';
//utils
import {
  useLazyGetAirportsByLocationQuery,
  useLazyGetNearbyAirportsQuery,
} from '../../../redux/services/userApis';
import ListEmptyComponent from '../../../components/ListEmptyComponent';
import CustomModal from '../../../components/CustomModal';

const { width } = Dimensions.get('screen');

const Home = () => {
  const [address, setAddress] = useState();

  // const [getNearbyAirports, response] = useLazyGetNearbyAirportsQuery();
  const [getAirportsByLocation, response] = useLazyGetAirportsByLocationQuery();

  const [airportList, setAirportList] = useState([]);

  useEffect(() => {
    setAirportList(response?.data?.data?.nearby);
  }, [response]);

  const renderCard = ({ item, index }: { item: object; index: number }) => {
    return (
      <View key={index} style={[styles.container]}>
        <Text style={styles.title}>{item?.presentation?.suggestionTitle}</Text>
        <Text style={styles.subTitle}>
          {item?.navigation?.localizedName}, {item?.navigation?.entityType}
        </Text>
      </View>
    );
  };
  const handleSearch = () => {
    getNearbyAirports({ lat: '24.8607', lng: '67.0011' });
  };

  return (
    <AppBackground
      homeHeader
      containerStyle={{ paddingBottom: 0, paddingHorizontal: 15 }}
      disableScroll
    >
      <FlatList
        ListHeaderComponent={
          //   <>
          //     <View
          //       style={[
          //         globalStyles.rowContainer,
          //         { marginBottom: 0, backgroundColor: 'red' },
          //       ]}
          //     >
          //       <AutoCompleteInput
          //         currentAddress={address}
          //         placeholder={'Your Address'}
          //         setAddressDetail={detalis => {
          //           setAddress(detalis?.formatted_address);
          //         }}
          //       />
          <CustomButton title="Search" onPress={handleSearch} />
          //     </View>
          //   </>
        }
        data={airportList}
        renderItem={renderCard}
        ListEmptyComponent={<ListEmptyComponent />}
      />
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  // heading: {
  //   fontSize: fontScale(20),
  //   color: Colors.black,
  //   fontFamily: Fonts.bold,
  //   lineHeight: 36,
  // },
  wrapContainer: {
    flex: 1,
  },
  dropDownContainer: {
    width: '32%',
    backgroundColor: Colors.white,
    paddingVertical: 10,
    borderRadius: 10,
  },
  //
  container: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    padding: 20,
    borderColor: Colors.border,
  },
  title: {
    fontSize: fontScale(14),
    color: Colors.black,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: fontScale(10),
    color: Colors.black,
    // fontWeight: 'bold',
  },
  iconStyle: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  locationImg: {
    width: 110,
    height: 110,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
});

export default Home;
