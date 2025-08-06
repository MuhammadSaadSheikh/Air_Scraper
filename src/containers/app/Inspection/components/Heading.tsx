import { View, Text, StyleSheet } from 'react-native';
import { fontScale } from '../../../../config/FontDimension';
import { Colors, Fonts } from '../../../../themes';

const Heading = ({ title }: { title: string }) => {
  return <Text style={styles.headingStyle}>{title}</Text>;
};

export default Heading;

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: fontScale(15),
    color: Colors.black,
    fontFamily: Fonts.bold,
    marginBottom: 15,
  },
});
