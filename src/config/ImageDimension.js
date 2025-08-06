import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

// Scale based on width
const scale = size => (SCREEN_WIDTH / guidelineBaseWidth) * size;

// Scale based on height
const verticalScale = size => (SCREEN_HEIGHT / guidelineBaseHeight) * size;

// Scale moderately with a factor (default 0.5)
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const DimensionsUtil = {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  scale,
  verticalScale,
  moderateScale,

  // Example image sizes (customize as needed)
  image: {
    iconSmall: scale(24),
    iconMedium: scale(40),
    iconLarge: scale(60),
    bannerWidth: SCREEN_WIDTH,
    bannerHeight: verticalScale(200),
    thumbnail: {
      width: scale(80),
      height: verticalScale(80),
    },
  },
};

export default DimensionsUtil;
