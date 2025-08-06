// import React from 'react';
// import {
//   Text,
//   TouchableOpacity,
//   View,
//   StyleSheet,
//   ScrollView,
//   Dimensions,
// } from 'react-native';
// import { Colors, Fonts } from 'src/themes';

// interface SectionHeaderProps {
//   filters: string[];
//   activeTab: string;
//   setActiveTab: (filter: string) => void;
// }

// const { width } = Dimensions.get('window');

// const SectionHeader: React.FC<SectionHeaderProps> = ({
//   filters,
//   activeTab,
//   setActiveTab,
// }) => (
//   <View style={styles.sectionHeaderContainer}>
//     <Text style={styles.headerText}>Expenses</Text>
//     <ScrollView
//       horizontal
//       bounces={false}
//       showsHorizontalScrollIndicator={false}
//     >
//       <View style={styles.filterContainer}>
//         {filters.map(item => (
//           <FilterTab
//             key={item}
//             label={item}
//             isActive={item === activeTab}
//             onPress={() => setActiveTab(item)}
//           />
//         ))}
//       </View>
//     </ScrollView>
//   </View>
// );

// const FilterTab: React.FC<{
//   label: string;
//   isActive: boolean;
//   onPress: () => void;
// }> = ({ label, isActive, onPress }) => (
//   <TouchableOpacity
//     style={styles.filterTab}
//     onPress={onPress}
//     activeOpacity={0.8}
//   >
//     <Text
//       style={[
//         styles.sectionHeaderText,
//         isActive && styles.sectionHeaderTextActive,
//       ]}
//     >
//       {label}
//     </Text>
//     {isActive && <View style={styles.activeIndicator} />}
//   </TouchableOpacity>
// );

// export default SectionHeader;

// const styles = StyleSheet.create({
//   sectionHeaderContainer: {
//     backgroundColor: Colors.background,
//     paddingBottom: 20,
//     width: width,
//     paddingHorizontal: 20,
//     marginLeft: -20,
//   },
//   headerText: {
//     fontSize: 20,
//     fontFamily: Fonts.medium,
//     color: Colors.textPrimary,
//     marginVertical: 20,
//   },
//   filterContainer: {
//     flexDirection: 'row',
//   },
//   filterTab: {
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   sectionHeaderText: {
//     fontSize: 14,
//     fontFamily: Fonts.semiBold,
//     color: Colors.textDisabled,
//   },
//   sectionHeaderTextActive: {
//     color: Colors.primary,
//   },
//   activeIndicator: {
//     height: 6,
//     width: 6,
//     borderRadius: 5,
//     backgroundColor: Colors.primary,
//     marginTop: 4,
//   },
// });
