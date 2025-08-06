import React, { useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { Colors, Fonts } from '../..//themes';
import Icons from '../../assets/Icons';

const { width } = Dimensions.get('window');

interface CustomDatePickerProps {
  error?: string;
  placeholder?: string;
  value: string | undefined;
  onChange: (date: string) => void;
}

const CustomDatePicker = ({
  value,
  error,
  onChange,
  placeholder,
}: CustomDatePickerProps) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const hasError = !!error;

  const handleConfirm = (value: Date) => {
    onChange(moment(value).format('DD MMM YYYY'));
    hideDatePicker();
  };

  return (
    <>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={showDatePicker}
        style={[styles.container, hasError && styles.errorBorder]}
      >
        <Text style={[styles.dateText, hasError && { color: Colors.error }]}>
          {value ? value : placeholder}
        </Text>
        <Image source={Icons.calendar} style={styles.icon} />
      </TouchableOpacity>
      {hasError && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 10,
    width: width - 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
  },
  dateText: {
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.textPrimary,
  },
  icon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  errorText: {
    color: Colors.error,
    marginTop: 5,
    fontFamily: Fonts.regular,
    fontSize: 12,
    width: '100%',
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: Colors.error,
  },
});

export default CustomDatePicker;
