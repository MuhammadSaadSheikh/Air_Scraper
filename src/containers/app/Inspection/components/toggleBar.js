import { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LayoutAnimation,
  StyleSheet,
} from 'react-native';
//config
import { globalStyles } from '../../../../config/GlobalStyle';
import { fontScale } from '../../../../config/FontDimension';
//theme
import { Colors, Fonts } from '../../../../themes';

const ToggleBar = ({ onPress = () => {} }) => {
  const arr = ['Pending', 'In-Progress', 'Completed'];
  const [active, setActive] = useState(0);

  return (
    <View style={[globalStyles.rowContainer, { marginVertical: 10 }]}>
      {arr?.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.container,
              {
                borderColor: active === index ? Colors.black : Colors.lightGrey,
                borderBottomWidth: active === index ? 2 : 0.5,
              },
            ]}
            onPress={() => {
              LayoutAnimation.linear();
              setActive(index);
              onPress(index);
            }}
          >
            <Text style={styles.textStyle}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default ToggleBar;

const styles = StyleSheet.create({
  container: {
    width: '33.3%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textStyle: {
    fontSize: fontScale(15),
    color: Colors.black,
    fontFamily: Fonts.extraBold,
  },
});
