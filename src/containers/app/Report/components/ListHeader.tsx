// import React, { useRef, useState } from 'react';
// import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
// import Icons from 'src/assets/Icons';
// import CustomButton from 'src/components/CustomButton';
// import MonthSelectionModal from 'src/components/MonthSelectionModal';
// import { Colors, Fonts } from 'src/themes';
// import { NavService } from 'src/utils';
// import SmartUploadSheet from './SmartUploadSheet';
// import { ActionSheetRef } from 'react-native-actions-sheet';

// interface MonthSelectorProps {
//   month: string;
//   onPress: () => void;
// }

// interface ViewReportButtonProps {
//   onPress: () => void;
// }

// const ListHeader: React.FC = () => {
//   const [selectedMonth, setSelectedMonth] = useState<string>('All Time');
//   const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

//   return (
//     <>
//       <MonthSelectionModal
//         isVisible={isModalVisible}
//         setIsVisible={setIsModalVisible}
//         selected={selectedMonth}
//         onSelect={setSelectedMonth}
//       />

//       <Text style={styles.headerText}>Expense Management</Text>
//       <View style={styles.cardContainer}>
//         <View style={styles.rowBetween}>
//           <Text style={styles.amountText}>₹0</Text>
//           <MonthSelector
//             month={selectedMonth}
//             onPress={() => setIsModalVisible(true)}
//           />
//         </View>

//         <Text style={styles.totalExpensesText}>Total Expenses</Text>
//         <ViewReportButton
//           onPress={() => NavService.navigate('ExpenseReport')}
//         />

//         <View style={styles.bottomContainer}>
//           <SmartUploadSection />
//           <CustomButton
//             title="Add Expense"
//             buttonStyle={styles.addExpenseButton}
//             onPress={() => NavService.navigate('AddExpense')}
//           />
//         </View>
//       </View>
//     </>
//   );
// };

// const MonthSelector: React.FC<MonthSelectorProps> = ({ month, onPress }) => (
//   <TouchableOpacity
//     onPress={onPress}
//     style={styles.monthSelector}
//     activeOpacity={0.8}>
//     <Text style={styles.monthText}>{month}</Text>
//     <Image source={Icons.chevronDown} style={styles.chevronIcon} />
//   </TouchableOpacity>
// );

// const ViewReportButton: React.FC<ViewReportButtonProps> = ({ onPress }) => (
//   <TouchableOpacity
//     onPress={onPress}
//     style={styles.viewReportButton}
//     activeOpacity={0.8}>
//     <Text style={styles.viewReportText}>View Report</Text>
//     <Image source={Icons.back} style={styles.viewReportIcon} />
//   </TouchableOpacity>
// );

// const SmartUploadSection: React.FC = () => {
//   const smartUploadRef = useRef<ActionSheetRef>(null);

//   return (
//     <>
//       <SmartUploadSheet ref={smartUploadRef} />
//       <TouchableOpacity
//         activeOpacity={0.8}
//         style={styles.uploadContainer}
//         onPress={() => smartUploadRef.current?.show()}>
//         <Image source={Icons.scan} style={styles.uploadIcon} />
//         <Text style={styles.uploadText}>Smart Upload</Text>
//       </TouchableOpacity>
//     </>
//   );
// };

// export default ListHeader;

// const styles = StyleSheet.create({
//   headerText: {
//     fontSize: 20,
//     fontFamily: Fonts.medium,
//     color: Colors.textPrimary,
//     marginVertical: 20,
//   },
//   cardContainer: {
//     backgroundColor: Colors.white,
//     borderRadius: 10,
//     padding: 15,
//   },
//   rowBetween: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   amountText: {
//     fontSize: 20,
//     fontFamily: Fonts.medium,
//     color: Colors.textPrimary,
//   },
//   monthSelector: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   monthText: {
//     fontSize: 14,
//     fontFamily: Fonts.regular,
//     color: Colors.primary,
//   },
//   chevronIcon: {
//     width: 12,
//     height: 12,
//     marginLeft: 5,
//     resizeMode: 'contain',
//     tintColor: Colors.primary,
//   },
//   totalExpensesText: {
//     fontSize: 12,
//     fontFamily: Fonts.medium,
//     color: Colors.textDisabled,
//     marginTop: 10,
//   },
//   viewReportButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   viewReportText: {
//     fontSize: 14,
//     color: Colors.primary,
//     fontFamily: Fonts.medium,
//   },
//   viewReportIcon: {
//     width: 12,
//     height: 12,
//     marginLeft: 5,
//     resizeMode: 'contain',
//     tintColor: Colors.primary,
//     transform: [{ rotate: '180deg' }],
//   },
//   bottomContainer: {
//     flexDirection: 'row',
//     height: 50,
//     marginTop: 15,
//   },
//   uploadContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   uploadIcon: {
//     height: 32,
//     width: 32,
//   },
//   uploadText: {
//     fontSize: 14,
//     fontFamily: Fonts.medium,
//     color: Colors.primary,
//     marginLeft: 5,
//   },
//   addExpenseButton: {
//     flex: 1,
//   },
// });
