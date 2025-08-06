import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavService } from './utils';
import { AppStack, AuthStack } from './containers';
import Splash from './containers/auth/Splash';
// import { getCurrentUser } from './redux/services/firebase';

const Stack = createNativeStackNavigator();

function Navigation() {
  // const [initialRoute, setInitialRoute] = React.useState('AuthStack');
  // const [loading, setLoading] = React.useState(true);

  // const getUser = () => {
  //   // const user = getCurrentUser();
  //   // if (user) setInitialRoute('AppStack');
  //   // else setInitialRoute('AuthStack');
  //   setLoading(false);
  //   // setTimeout(SplashScreen.hide, 2000);
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);

  // if (loading) return null;

  return (
    <NavigationContainer ref={ref => NavService.setTopLevelNavigator(ref)}>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: 'transparent' },
          animation: 'simple_push',
          headerShown: false,
        }}
        initialRouteName={'Splash'}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
