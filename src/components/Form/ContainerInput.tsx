import React from 'react';
import { Shadows } from 'src/utils';
import { Colors, Fonts } from 'src/themes';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface ContainerInputProps {
  onChange: (text: string) => void;
  value: string;
  placeholder: string;
  label: string;
  error?: string;
}

const ContainerInput: React.FC<ContainerInputProps> = ({
  onChange,
  value,
  placeholder,
  label,
  error,
}: ContainerInputProps) => {
  const hasError = !!error;

  return (
    <>
      <View style={[styles.container]}>
        <Text style={styles.label}>{label}</Text>

        <View style={[styles.inputWrapper, hasError && styles.errorBorder]}>
          <Text
            style={[
              styles.currencySymbol,
              hasError && { color: Colors.error },
            ]}>
            ₹
          </Text>

          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            placeholderTextColor={hasError ? Colors.error : Colors.textDisabled}
            style={[styles.textInput, hasError && { color: Colors.error }]}
          />
        </View>
        {hasError && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: Colors.white,
    ...Shadows.shadow3,
  },
  label: {
    fontSize: 14,
    color: Colors.text,
    fontFamily: Fonts.semiBold,
  },
  inputWrapper: {
    height: 50,
    width: '100%',
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.border,
  },
  currencySymbol: {
    fontSize: 16,
    marginRight: 10,
    fontFamily: Fonts.regular,
    color: Colors.textDisabled,
  },
  textInput: {
    fontSize: 16,
    color: Colors.text,
    textAlign: 'center',
    fontFamily: Fonts.regular,
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

export default ContainerInput;
