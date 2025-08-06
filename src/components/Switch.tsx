import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import { Colors } from 'src/themes';

interface SwitchProps {
  onPress?: (isEnabled: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ onPress = () => {} }) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const handlePress = () => {
    LayoutAnimation.easeInEaseOut();
    setIsEnabled(!isEnabled);
    onPress(!isEnabled);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={handlePress}>
      <View
        style={[
          styles.switchBase,
          { backgroundColor: isEnabled ? Colors.primary : Colors.primary },
        ]}>
        <View
          style={[
            styles.switchCircle,
            {
              backgroundColor: isEnabled ? Colors.text : Colors.primary,
              right: !isEnabled ? 25 : -2.5,
            },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    marginHorizontal: 5,
  },
  switchBase: {
    height: 25,
    width: 50,
    borderRadius: 25 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchCircle: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    position: 'absolute',
    top: -2.5,
    zIndex: 99,
  },
});

export default Switch;
