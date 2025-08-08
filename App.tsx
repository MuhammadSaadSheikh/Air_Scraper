// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <NewAppScreen templateFileName="App.tsx" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;

import {
  View,
  LogBox,
  Platform,
  UIManager,
  StatusBar,
  PermissionsAndroid,
  KeyboardAvoidingView,
} from 'react-native';
// import Nav from 'src';
import Navigation from './src';
import Toast, {
  BaseToast,
  ErrorToast,
  ToastConfig,
} from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Loader from './src/helpers/Loader';
import React, { FC, ReactNode, useEffect } from 'react';
// import messaging from '@react-native-firebase/messaging';
import Orientation from 'react-native-orientation-locker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Suppress unwanted logs
LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs(['Remote debugger']);

// Enable layout animations for Android
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

// Define Toast configurations
const toastConfig: ToastConfig = {
  success: props => (
    <BaseToast
      {...props}
      text1NumberOfLines={5}
      style={{
        borderLeftColor: 'green',
        maxHeight: 120,
        height: '100%',
        paddingVertical: 20,
      }}
      text1Style={{
        fontSize: 14,
        color: 'black',
      }}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      text1NumberOfLines={5}
      style={{
        borderLeftColor: 'red',
        maxHeight: 120,
        height: '100%',
        paddingVertical: 20,
      }}
      text1Style={{
        fontSize: 14,
        color: 'black',
      }}
    />
  ),
};

// Define Wrapper component props
interface WrapperProps {
  children: ReactNode;
}

// Wrapper component to handle platform-specific behavior
const Wrapper: FC<WrapperProps> = ({ children }) => {
  if (Platform.OS === 'ios') {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    );
  }
  return <View style={{ flex: 1 }}>{children}</View>;
};

// async function requestUserPermission() {
//   try {
//     Platform.OS === 'android' &&
//       (await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
//       ));

//     await messaging().requestPermission();
//   } catch (error) {
//     console.log('🚀 ~ requestUserPermission ~ error:', error);
//   }
// }

// Main App component
const App: FC = () => {
  useEffect(() => {
    // requestUserPermission();
    Orientation.lockToPortrait();
  }, []);
  return (
    <Wrapper>
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Provider store={store}>
          <Loader />
          <Navigation />
          <Toast config={toastConfig} />
        </Provider>
      </GestureHandlerRootView>
    </Wrapper>
  );
};

export default App;
