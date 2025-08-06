import { StyleSheet } from 'react-native';
//config
import { fontScale } from './FontDimension';
//theme
import { Colors, Fonts } from '../themes';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  nestedContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  authText: {
    marginTop: 25,
    fontSize: fontScale(14),
    fontFamily: Fonts.semiBold,
    color: Colors.lightGrey,
    textAlign: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowStart: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    fontSize: fontScale(15),
    color: Colors.black,
    textAlign: 'center',
    flex: 1,
    fontFamily: Fonts.bold,
  },
});
