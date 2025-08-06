import React, { useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import ImageCropPicker from 'react-native-image-crop-picker';
import { Colors } from '../themes';

interface CustomImagePickerProps {
  children: React.ReactNode;
  onImageChange: (imagePath: string, mime: string) => void;
  style?: object;
}

const CustomImagePicker: React.FC<CustomImagePickerProps> = ({
  children,
  onImageChange,
  style,
}) => {
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const imageChange = (method = 'gallery') => {
    const options = { mediaType: 'photo' as 'photo' };
    if (method === 'camera') {
      ImageCropPicker.openCamera(options).then(image => {
        actionSheetRef.current?.hide();
        onImageChange(image.path, image.mime);
      });
    } else {
      ImageCropPicker.openPicker(options).then(image => {
        actionSheetRef.current?.hide();
        onImageChange(image.path, image.mime);
      });
    }
  };

  return (
    <TouchableOpacity
      onPress={() => actionSheetRef.current?.show()}
      style={style}
      activeOpacity={0.8}
    >
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={styles.actionSheetContainer}
      >
        <View style={styles.actionSheetContent}>
          <View style={styles.optionContainer}>
            <View style={styles.optionHeader}>
              <Text style={styles.optionHeaderText}>
                Choose an option to pick an Image
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => imageChange('camera')}
              style={styles.optionButton}
            >
              <Text style={styles.optionButtonText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => imageChange('gallery')}
              style={[styles.optionButton, { borderBottomWidth: 0 }]}
            >
              <Text style={styles.optionButtonText}>Choose from Library</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => actionSheetRef.current?.hide()}
            style={styles.cancelButton}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  actionSheetContainer: {
    backgroundColor: 'transparent',
  },
  actionSheetContent: {
    padding: 20,
  },
  optionContainer: {
    // backgroundColor: 'rgba(241,241,241,0.8)',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: Colors.white,
  },
  optionHeader: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  optionHeaderText: {
    color: 'grey',
    textAlign: 'center',
  },
  optionButton: {
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#ccc',
  },
  optionButtonText: {
    color: 'rgb(0,88,200)',
    fontSize: 18,
  },
  cancelButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'rgb(0,88,200)',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CustomImagePicker;
