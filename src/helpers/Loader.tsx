import { Colors } from '../themes';
import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { View, Animated, Dimensions, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('screen');

const tab: Animated.Value[] = [
  new Animated.Value(0),
  new Animated.Value(0),
  new Animated.Value(0),
  new Animated.Value(0),
  new Animated.Value(0),
];

const Loader: React.FC = () => {
  useEffect(() => {
    function animatedHeight() {
      const anim: Animated.CompositeAnimation[] = [];
      for (let i = 0; i < 5; i++) {
        const tabHeight = tab[i];
        anim.push(
          Animated.sequence([
            Animated.timing(tabHeight, {
              toValue: 1,
              duration: 400,
              delay: i * 120,
              useNativeDriver: false,
            }),
            Animated.timing(tabHeight, {
              toValue: 0,
              duration: 400,
              useNativeDriver: false,
            }),
          ]),
        );
      }
      Animated.parallel(anim).start(() => {
        animatedHeight();
      });
    }
    animatedHeight();
  }, []);

  const loader = useSelector((state: any) => state?.loader.isLoading);
  if (!loader) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.loaderContainer}>
        <RenderLoader />
      </View>
    </View>
  );
};

export default Loader;

const RenderLoader: React.FC = () => {
  const listItem: JSX.Element[] = [];
  for (let i = 0; i < 5; i++) {
    const height1 = tab[i].interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [20, 24, 36],
    });
    const height2 = tab[i].interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [36, 24, 20],
    });
    listItem.push(
      <Animated.View
        key={i}
        style={[
          styles.loaderItem,
          {
            height: i % 2 === 0 ? height1 : height2,
          },
        ]}
      />,
    );
  }
  return <>{listItem}</>;
};

const styles = StyleSheet.create({
  overlay: {
    zIndex: 99,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  loaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loaderItem: {
    backgroundColor: Colors.primary,
    width: 6,
    marginLeft: 5,
    borderRadius: 50,
  },
});
