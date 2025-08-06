// import React from 'react';
// import Icons from 'src/assets/Icons';
// import Images from 'src/assets/Images';
// import { Colors, Fonts } from 'src/themes';
// import { NavService, Shadows } from 'src/utils';
// import CustomButton from 'src/components/CustomButton';
// import { View, Text, StyleSheet, Image } from 'react-native';

// const ExpenseNotFound: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <Image source={Images.boardingPass} style={styles.boardingPass} />
//       <Text style={styles.title}>No Expense Found</Text>

//       <Text style={styles.subtitle}>
//         Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply
//         dummy text of the printing.
//       </Text>

//       <CustomButton
//         icon={Icons.add}
//         title="Add Expense"
//         buttonStyle={styles.uploadButton}
//         onPress={() => NavService.navigate('AddExpense')}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 15,
//     borderRadius: 15,
//     marginVertical: 20,
//     paddingVertical: 40,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: Colors.white,
//     ...Shadows.shadow3,
//   },
//   boardingPass: {
//     width: 160,
//     height: 175,
//     marginBottom: 20,
//     resizeMode: 'contain',
//   },
//   title: {
//     fontSize: 16,
//     marginBottom: 16,
//     textAlign: 'center',
//     color: Colors.primary,
//     fontFamily: Fonts.bold,
//   },
//   textContainer: {
//     marginBottom: 32,
//   },
//   subtitle: {
//     fontSize: 14,
//     textAlign: 'center',
//     marginHorizontal: 20,
//     fontFamily: Fonts.regular,
//     color: Colors.textSecondary,
//   },
//   uploadButton: {
//     width: 250,
//     marginTop: 30,
//   },
// });

// export default ExpenseNotFound;
