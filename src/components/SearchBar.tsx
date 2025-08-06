import React, { useState } from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
//assets
import Icons from '../assets/Icons';
//theme
import { Colors } from '../themes';
interface SearchProps extends TextInputProps {
  onChangeText?: (text: string) => void;
}

const SearchBar: React.FC<SearchProps> = ({
  onChangeText = () => {},
  ...props
}) => {
  const [search, setSearch] = useState<string>('');

  const handleTextChange = (text: string) => {
    setSearch(text);
    onChangeText(text);
  };

  return (
    <View style={styles.container}>
      <Image source={Icons.search} style={styles.searchIcon} />
      <TextInput
        onChangeText={handleTextChange}
        returnKeyType="search"
        placeholder="Search"
        value={search}
        placeholderTextColor={Colors.textDisabled}
        {...props} // Spread any additional props to the TextInput
        style={[styles.textInput, props.style]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginTop: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  textInput: {
    flex: 1,
    color: Colors.primary,
    fontSize: 16,
  },
  searchIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: Colors.textSecondary,
    marginRight: 10,
  },
});

export default SearchBar;
