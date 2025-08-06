import {
  Modal,
  ViewStyle,
  StyleSheet,
  ModalProps,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export interface CustomModalProps extends ModalProps {
  isVisible: boolean;
  children: React.ReactNode;
  backdropStyle?: ViewStyle;
  onBackdropPress?: () => void;
}

const CustomModal = ({
  children,
  isVisible = false,
  backdropStyle = {},
  onBackdropPress = () => {},
}: CustomModalProps) => {
  return (
    <Modal animationType="fade" transparent visible={isVisible}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onBackdropPress}
        style={[styles.backdrop, backdropStyle]}>
        <TouchableOpacity style={styles.container} activeOpacity={1}>
          {children}
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    padding: 20,
    paddingVertical: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000060',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
