import { View, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../themes';

interface ListFooterLoaderProps {
  isLoading: boolean;
}

const ListFooterLoader: React.FC<ListFooterLoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <View style={styles.footerContainer}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ListFooterLoader;
