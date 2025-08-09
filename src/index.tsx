import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavService } from './utils';
import { AppStack, AuthStack } from './containers';

const Stack = createNativeStackNavigator();

function Navigation() {
  // const [initialRoute, setInitialRoute] = React.useState('AuthStack');
  // const [loading, setLoading] = React.useState(true);
  // if (loading) return null;

  return (
    <NavigationContainer ref={ref => NavService.setTopLevelNavigator(ref)}>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: 'transparent' },
          animation: 'simple_push',
          headerShown: false,
        }}
        initialRouteName={'AppStack'}
      >
        {/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
