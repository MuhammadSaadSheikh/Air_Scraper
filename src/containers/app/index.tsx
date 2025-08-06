import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import BottomTab from 'src/helpers/BottomTab';
import CustomTabBar from '../../helpers/BottomTab';

//app
import Home from './Home';
import Account from './Account';
import Report from './Report';
import Inspection from './Inspection';
import Notifications from './Notification';
import InspectionDetail from './Inspection/InspectionDetail';
import InspectionForm from './Inspection/InspectionForm';
import EditProfile from './Account/EditProfile';
import ChangePassword from './Account/ChangePassword';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const InspectionStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inspection" component={Inspection} />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="InspectionStack" component={InspectionStack} />
      <Tab.Screen name="Report" component={Report} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />

      {/* any screen which do not have bottom tab */}
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="InspectionDetail" component={InspectionDetail} />
      <Stack.Screen name="InspectionForm" component={InspectionForm} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};

export default AppStack;
