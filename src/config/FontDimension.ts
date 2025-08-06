import { Dimensions, PixelRatio } from 'react-native';

// Get device dimensions
const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const fontScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export { fontScale };
