// import moment from 'moment';
// import React from 'react';
// import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
// import Icons from 'src/assets/Icons';
// import StatusBadge, { BadgeType } from 'src/components/StatusBadge';
// import { Colors, Fonts } from 'src/themes';
// import { NavService, Shadows } from 'src/utils';

// interface ListItemProps {
//   item: {
//     id: number;
//     amount: number;
//     category: string;
//     status: BadgeType;
//     date: string;
//   };
// }

// const ListItem: React.FC<ListItemProps> = ({ item }) => (
//   <TouchableOpacity
//     activeOpacity={0.8}
//     style={styles.listItemContainer}
//     onPress={() =>
//       NavService.navigate('ExpenseDetails', { expenseId: item.id })
//     }>
//     <View
//       style={{
//         height: 50,
//         width: 50,
//         borderRadius: 10,
//         borderWidth: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderColor: Colors.textDisabled,
//       }}>
//       <Image
//         source={Icons.meal}
//         style={{ width: 20, height: 24, resizeMode: 'contain' }}
//       />
//     </View>
//     <View style={{ flex: 1, marginLeft: 15 }}>
//       <View
//         style={{
//           flex: 1,
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//         }}>
//         <Text
//           style={{
//             fontSize: 18,
//             fontFamily: Fonts.medium,
//             color:
//               item?.status === 'approved'
//                 ? Colors.green
//                 : item?.status === 'rejected'
//                 ? Colors.error
//                 : item?.status === 'pending'
//                 ? Colors.yellow
//                 : Colors.purple,
//           }}>
//           ₹{item.amount}
//         </Text>

//         <StatusBadge type={item.status} />
//       </View>

//       <View style={{ flex: 1, marginTop: 10 }}>
//         <Text
//           style={{
//             fontSize: 16,
//             fontFamily: Fonts.regular,
//             color: Colors.textPrimary,
//           }}>
//           {item.category}
//         </Text>
//         <Text
//           style={{
//             fontSize: 12,
//             fontFamily: Fonts.medium,
//             color: Colors.textDisabled,
//             marginTop: 5,
//           }}>
//           {moment(item.date).format('DD MMM YYYY')}
//         </Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// );

// export default ListItem;

// const styles = StyleSheet.create({
//   listItemContainer: {
//     padding: 15,
//     marginBottom: 15,
//     borderRadius: 15,
//     flexDirection: 'row',
//     backgroundColor: Colors.white,
//     ...Shadows.shadow3,
//   },
//   listItemText: {
//     fontSize: 16,
//     fontFamily: Fonts.regular,
//     color: Colors.textPrimary,
//   },
// });
