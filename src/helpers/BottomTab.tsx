import React, { useState, useRef } from 'react';
import {
  TouchableOpacity,
  Text,
  Animated,
  StyleSheet,
  Image,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import Icons from '../assets/Icons';
import Images from '../assets/Images';
import { Colors, Fonts } from '../themes';
import { NavService } from '../utils';

interface TabRoute {
  label: string;
  name: string;
  icon: any; // Use proper type for your icons
}

const routes: TabRoute[] = [
  { label: 'Home', name: 'Home', icon: Icons.home },
  { label: 'Inspection', name: 'InspectionStack', icon: Icons.inspection },
  { label: 'Report', name: 'Report', icon: Icons.report },
  { label: 'Account', name: 'Account', icon: Icons.profile },
];

const CustomTabBar = ({ state }: any) => {
  console.log('🚀 ~ state:', state);
  // const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = useWindowDimensions().width;
  const activeIndex = state.index;

  const circleSize = 55;
  const tabWidth = (screenWidth - 25) / routes.length;
  const animatedValue = useRef(
    new Animated.Value(tabWidth / 2 - circleSize / 2 + 22),
  ).current;

  const animateCircle = (index: number) => {
    const newLeft = index * tabWidth + tabWidth / 2 - circleSize / 2;
    Animated.spring(animatedValue, {
      toValue: index === 0 ? newLeft + 22 : newLeft,
      useNativeDriver: false,
      friction: 5,
      tension: 40,
    }).start();
  };

  const handleTabPress = (index: number) => {
    // setActiveIndex(index);
    animateCircle(index);
    NavService.navigate(routes[index].name);
    // NavService.navigate(state.routeNames[index]);
  };

  const tabBG =
    activeIndex === 0
      ? Images.bottomTabBG1
      : activeIndex === 1
      ? Images.bottomTabBG2
      : activeIndex === 2
      ? Images.bottomTabBG3
      : Images.bottomTabBG4;

  return (
    <ImageBackground source={tabBG} style={styles.tabBar}>
      <Animated.View style={[styles.circle, { left: animatedValue }]}>
        <Image source={routes[activeIndex].icon} style={styles.activeIcon} />
      </Animated.View>

      {routes.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <TabButton
            key={index}
            item={item}
            isActive={isActive}
            onPress={() => handleTabPress(index)}
          />
        );
      })}
    </ImageBackground>
  );
};

interface TabButtonProps {
  item: TabRoute;
  isActive: boolean;
  onPress: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ item, isActive, onPress }) => (
  <TouchableOpacity style={styles.tab} onPress={onPress} activeOpacity={0.7}>
    {!isActive && <Image source={item.icon} style={styles.inactiveIcon} />}
    <Text style={[styles.label, isActive && styles.activeLabel]}>
      {item.label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  tabBar: {
    height: 75,
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
    paddingBottom: 10,
  },
  tab: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 10,
  },
  label: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: Colors.textDisabled,
  },
  activeLabel: {
    color: Colors.black,
  },
  circle: {
    position: 'absolute',
    top: -30,
    width: 55,
    height: 55,
    borderRadius: 35,
    alignItems: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  activeIcon: {
    height: 25,
    width: 25,
    tintColor: Colors.black,
  },
  inactiveIcon: {
    height: 25,
    width: 25,
    marginBottom: 10,
    tintColor: Colors.textDisabled,
  },
});

export default CustomTabBar;
