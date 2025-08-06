import {
  StackActions,
  CommonActions,
  DrawerActions,
} from '@react-navigation/native';
import { Keyboard } from 'react-native';

let _navigator: any;

type NavigationParams = {
  [key: string]: any; // Type for params can be extended for specific screens if needed
};

function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}

function navigate(name: string, params: NavigationParams = {}) {
  _navigator.dispatch(
    CommonActions.navigate({
      name,
      params,
    }),
  );
}

function goBack() {
  Keyboard.dismiss();
  setTimeout(() => {
    _navigator.dispatch(CommonActions.goBack());
  }, 100);
}

function replace(routeName: string, params: NavigationParams = {}) {
  _navigator.dispatch(StackActions.replace(routeName, params));
}

function reset(
  index: number,
  routes: Array<{ name: string; params?: NavigationParams }>,
) {
  _navigator.dispatch(
    CommonActions.reset({
      index,
      routes,
    }),
  );
}

function toggleDrawer() {
  _navigator.dispatch(DrawerActions.toggleDrawer());
}

export default {
  navigate,
  goBack,
  replace,
  reset,
  setTopLevelNavigator,
  toggleDrawer,
};
