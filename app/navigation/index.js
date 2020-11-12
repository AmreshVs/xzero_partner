import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BottomTab from 'components/bottomTab';
import Login from 'screens/login';
import Main from 'screens/main';
import Home from 'screens/home';
import Offers from 'screens/offers';
import OfferDetail from 'screens/offerDetail';
import Membership from 'screens/membership';
import User from 'screens/user';
import {
  LOGIN_SCREEN,
  HOME_SCREEN,
  MAIN_SCREEN,
  HOME_TAB_SCREEN,
  PROFILE_TAB_SCREEN,
  OFFERS_SCREEN,
  OFFER_DETAIL,
  NOTIFICATIONS,
  SPECIALIST_HELP,
  SPECIALISTS,
  SPECIALIST_DETAIL,
  DRAWER_HOME,
  DRAWER_PRIVACY,
  DRAWER_TERMS,
  NEW_UPDATE,
  SCAN_TAB_SCREEN,
  MEMBERSHIP,
  USER_CHECKIN,
  CHECK_INS_TAB_SCREEN,
} from './routes';
import Notifications from 'screens/notifications';
import SpecialistHelp from 'screens/specialistHelp';
import Specialists from 'screens/specialists';
import SpecialistDetail from 'screens/specialistDetail';
import Privacy from 'screens/privacy';
import Terms from 'screens/terms';
import NewUpdate from 'screens/newUpdate';
import Scan from 'screens/scan';
import UserCheckIn from 'screens/userCheckIn';
import CheckIns from 'screens/checkIns';
import { UserDataContext } from 'context';

const Tab = createBottomTabNavigator();

function HomeNavigation() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
      <Tab.Screen name={HOME_TAB_SCREEN} component={Home} />
      <Tab.Screen name={OFFERS_SCREEN} component={Offers} />
      <Tab.Screen name={SCAN_TAB_SCREEN} component={Scan} />
      <Tab.Screen name={CHECK_INS_TAB_SCREEN} component={CheckIns} />
      <Tab.Screen name={PROFILE_TAB_SCREEN} component={User} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName={MAIN_SCREEN} headerMode="none">
      <Stack.Screen name={MAIN_SCREEN} component={Main} />
      <Stack.Screen name={HOME_SCREEN} component={HomeNavigation} />
      <Stack.Screen name={LOGIN_SCREEN} component={Login} />
      <Stack.Screen name={OFFERS_SCREEN} component={Offers} />
      <Stack.Screen name={OFFER_DETAIL} component={OfferDetail} />
      <Stack.Screen name={NOTIFICATIONS} component={Notifications} />
      <Stack.Screen name={SPECIALIST_HELP} component={SpecialistHelp} />
      <Stack.Screen name={SPECIALISTS} component={Specialists} />
      <Stack.Screen name={SPECIALIST_DETAIL} component={SpecialistDetail} />
      <Stack.Screen name={NEW_UPDATE} component={NewUpdate} />
      <Stack.Screen name={MEMBERSHIP} component={Membership} />
      <Stack.Screen name={USER_CHECKIN} component={UserCheckIn} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function Navigation() {

  const [userData, setUserData] = useState();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <UserDataContext.Provider value={{ userData, setUserData }}>
          <Drawer.Navigator initialRouteName={DRAWER_HOME} drawerType="slide">
            <Drawer.Screen name={DRAWER_HOME} component={StackNavigation} />
            <Drawer.Screen name={DRAWER_PRIVACY} component={Privacy} />
            <Drawer.Screen name={DRAWER_TERMS} component={Terms} />
          </Drawer.Navigator>
        </UserDataContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Navigation;
