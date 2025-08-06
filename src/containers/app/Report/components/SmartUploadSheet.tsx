// import React, { forwardRef } from 'react';
// import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
// import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
// import Icons from 'src/assets/Icons';
// import { Colors, Fonts } from 'src/themes';
// import { NavService } from 'src/utils';

// interface SheetOptionProps {
//   iconSource: number;
//   label: string;
//   onPress?: () => void;
// }

// const SmartUploadSheet = forwardRef<ActionSheetRef>((_, ref) => {
//   const hideSheet = () => {
//     ref && 'current' in ref && ref.current?.hide();
//   };

//   return (
//     <ActionSheet
//       ref={ref}
//       gestureEnabled
//       defaultOverlayOpacity={0.6}
//       indicatorStyle={styles.indicator}>
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.title}>Smart Scan</Text>
//           <TouchableOpacity onPress={hideSheet}>
//             <Image source={Icons.cross} style={styles.crossIcon} />
//           </TouchableOpacity>
//         </View>

//         <SheetOption
//           iconSource={Icons.camera}
//           label="Take Picture"
//           onPress={() => {
//             hideSheet();
//             NavService.navigate('SmartUpload', { isCamera: true });
//           }}
//         />
//         <SheetOption
//           iconSource={Icons.file}
//           label="Import Image"
//           onPress={() => {
//             hideSheet();
//             NavService.navigate('SmartUpload', { isGallery: true });
//           }}
//         />
//         <SheetOption
//           iconSource={Icons.file}
//           label="Import Files"
//           onPress={() => {
//             hideSheet();
//             NavService.navigate('SmartUpload', { isFiles: true });
//           }}
//         />
//       </View>
//     </ActionSheet>
//   );
// });

// const SheetOption: React.FC<SheetOptionProps> = ({
//   iconSource,
//   label,
//   onPress,
// }) => (
//   <TouchableOpacity
//     activeOpacity={0.8}
//     style={styles.optionButton}
//     onPress={onPress}>
//     <Image source={iconSource} style={styles.optionIcon} />
//     <Text style={styles.optionText}>{label}</Text>
//     <Image source={Icons.chevronDown} style={styles.chevronIcon} />
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   indicator: {
//     backgroundColor: Colors.lightSilver,
//     marginTop: 15,
//   },
//   container: {
//     paddingHorizontal: 20,
//     paddingBottom: 70,
//     paddingTop: 0,
//   },
//   header: {
//     marginTop: 15,
//     marginBottom: 30,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   title: {
//     fontSize: 18,
//     fontFamily: Fonts.bold,
//     color: Colors.textPrimary,
//   },
//   crossIcon: {
//     width: 25,
//     height: 25,
//   },
//   optionButton: {
//     paddingVertical: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   optionIcon: {
//     width: 25,
//     height: 25,
//   },
//   optionText: {
//     flex: 1,
//     fontSize: 14,
//     fontFamily: Fonts.medium,
//     color: Colors.textPrimary,
//     marginLeft: 10,
//   },
//   chevronIcon: {
//     width: 15,
//     height: 15,
//     resizeMode: 'contain',
//     tintColor: Colors.textPrimary,
//     transform: [{ rotate: '270deg' }],
//   },
// });

// export default SmartUploadSheet;
