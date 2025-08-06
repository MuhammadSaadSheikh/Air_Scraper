import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
//config
import { globalStyles } from '../../../../config/GlobalStyle';
import { fontScale } from '../../../../config/FontDimension';
import DimensionsUtil from '../../../../config/ImageDimension';
//theme
import { Colors, Fonts } from '../../../../themes';
//assets
import Images from '../../../../assets/Images';
//utils
import { NavService } from '../../../../utils';

const AssignedCard = ({ data }) => {
  return (
    <TouchableOpacity
      onPress={() => NavService.navigate('InspectionDetail')}
      style={[
        globalStyles.rowContainer,
        styles.rowContainer,
        {
          backgroundColor:
            data?.index % 2 == 0 ? Colors.primaryLite : Colors.secondaryLite,
        },
      ]}
    >
      <Image source={Images.calenderSecondary} style={styles.img} />
      <View style={styles.nestedContainer}>
        <Text numberOfLines={1} style={styles.title}>
          Fire Sprinkler Inspection
        </Text>
        <Text style={styles.subtitle}>123 Main St, Anytown</Text>
      </View>
      <Text style={styles.txtStyle}>Tomorrow</Text>
    </TouchableOpacity>
  );
};

export default AssignedCard;

const styles = StyleSheet.create({
  rowContainer: {
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nestedContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: Fonts.medium,
    lineHeight: 24,
    fontSize: fontScale(15),
    color: Colors.black,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    lineHeight: 21,
    fontSize: fontScale(12),
    color: Colors.textSecondary,
  },
  txtStyle: {
    fontFamily: Fonts.regular,
    lineHeight: 24,
    fontSize: fontScale(13),
    color: Colors.black,
  },
  img: {
    width: 50,
    height: 50,
  },
});
