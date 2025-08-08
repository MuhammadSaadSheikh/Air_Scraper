import { View } from 'react-native';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Colors } from '../themes';

const AutoCompleteInput = props => {
  const { container, setAddressDetail, placeholder, style } = props;
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    if (props?.currentAddress) {
      inputRef.current?.setAddressText(props?.currentAddress);
    }
  }, []);
  return (
    <View style={[{ width: '100%', flex: 1, height: 120 }, container]}>
      <GooglePlacesAutocomplete
        debounce={300}
        fetchDetails
        ref={inputRef}
        autoFocus={false}
        predefinedPlaces={[]}
        returnKeyType={'search'}
        listViewDisplayed="auto"
        placeholder={placeholder}
        enableHighAccuracyLocation
        getDefaultValue={() => ''}
        enablePoweredByContainer={false}
        nearbyPlacesAPI="GooglePlacesSearch"
        currentLocation={false}
        textInputProps={{
          // placeholderTextColor: Colors.textColor,
          onBlur: () => setIsFocused(false),
        }}
        renderDescription={row => {
          setIsFocused(true);
          return row.description || row.vicinity;
        }}
        onPress={(data, details = null) => {
          inputRef.current?.setAddressText(details?.formatted_address);
          setAddressDetail && setAddressDetail(details);
          setIsFocused(false);
        }}
        query={{
          key: 'AIzaSyBmaS0B0qwokES4a_CiFNVkVJGkimXkNsk',
          language: 'en',
          types: 'address',
          // components: 'country:us',
        }}
        styles={{
          container: {
            borderWidth: 1,
            marginTop: 15,
            borderRadius: isFocused ? 10 : 55,
            paddingHorizontal: 10,
            overflow: 'hidden',
            backgroundColor: Colors.white,
            borderColor: Colors.lightGrey,
          },
          textInputContainer: {
            backgroundColor: 'white',
            width: '100%',
            height: 55,
            ...style,
          },
          textInput: {
            height: 50,
            color: Colors.black,
            fontSize: 15,
            // fontFamily: Fonts.Regular,
            // fontFamily: Fonts.Regular,
          },
          row: {
            borderTopWidth: 1,
            borderColor: '#B3B3B3',
          },
          predefinedPlacesDescription: {
            color: '#000',
          },
          description: {
            color: '#000',
          },
        }}
      />
    </View>
  );
};
export default AutoCompleteInput;
