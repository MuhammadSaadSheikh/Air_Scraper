import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import BottomTab from 'src/helpers/BottomTab';
// import CustomTabBar from '../../helpers/BottomTab';

//app
import Home from './Home';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppStack;
