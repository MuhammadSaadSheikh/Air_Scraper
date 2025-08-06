import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { months } from 'moment';
import Icons from 'src/assets/Icons';
import CustomModal from './CustomModal';
import { Colors, Fonts } from 'src/themes';
import React, { useCallback } from 'react';

interface MonthSelectionModalProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  selected: string;
  onSelect?: (value: string) => void;
}

interface MonthItemProps {
  item: string;
  isSelected: boolean;
  onPress: (item: string) => void;
}

const MonthSelectionModal = ({
  isVisible = false,
  setIsVisible,
  selected = 'All Time',
  onSelect,
}: MonthSelectionModalProps) => {
  const monthsList = ['All Time', ...months()];

  const renderItem = useCallback(
    ({ item }: { item: string }) => (
      <MonthItem
        item={item}
        isSelected={selected === item}
        onPress={selectedMonth => {
          onSelect?.(selectedMonth);
          setIsVisible(false);
        }}
      />
    ),
    [selected, onSelect, setIsVisible],
  );

  return (
    <CustomModal
      isVisible={isVisible}
      onBackdropPress={() => setIsVisible(false)}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Select Month</Text>
          <TouchableOpacity
            onPress={() => setIsVisible(false)}
            style={styles.closeButton}>
            <Image source={Icons.cross} style={styles.crossIcon} />
          </TouchableOpacity>
        </View>

        <FlatList
          bounces={false}
          data={monthsList}
          style={styles.list}
          renderItem={renderItem}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </CustomModal>
  );
};

const MonthItem = ({ item, isSelected, onPress }: MonthItemProps) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => onPress(item)}
    style={[styles.itemContainer, isSelected && styles.selectedItem]}>
    <Text style={[styles.monthText, isSelected && styles.selectedText]}>
      {item}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    maxHeight: 500,
    borderRadius: 15,
    backgroundColor: Colors.white,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 16,
    color: Colors.textPrimary,
    fontFamily: Fonts.semiBold,
  },
  closeButton: {
    padding: 5,
  },
  crossIcon: {
    width: 25,
    height: 25,
  },
  list: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
  itemContainer: {
    padding: 10,
    width: '100%',
    marginBottom: 10,
    borderRadius: 10,
  },
  selectedItem: {
    backgroundColor: Colors.primary,
  },
  monthText: {
    fontSize: 14,
    color: Colors.text,
    fontFamily: Fonts.regular,
  },
  selectedText: {
    color: Colors.white,
  },
});

export default MonthSelectionModal;
