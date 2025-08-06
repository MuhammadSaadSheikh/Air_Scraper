import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Colors } from '../themes';

interface ListEmptyComponentProps {
  message?: string;
}

const ListEmptyComponent: React.FC<ListEmptyComponentProps> = ({
  message = 'No data Available',
}) => {
  const loader = useSelector((state: any) => state.loader); // Assuming state has a `loader` property
  if (loader) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.primary,
    fontSize: 16,
  },
});

export default ListEmptyComponent;
