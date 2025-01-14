import React, { useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useApolloClient } from '@apollo/client';
import Constants from 'expo-constants';

import { BASIC_INFORMATION } from 'graphql/queries';
import { NEW_UPDATE } from 'navigation/routes';
import Loader from 'components/loader';
import { Platform } from 'react-native';
import { UserDataContext } from 'context';

export default function Main({ navigation }) {
  const client = useApolloClient();
  const { setUserData } = useContext(UserDataContext);

  useEffect(() => {
    checkNewVersion();
  }, []);

  const checkNewVersion = async () => {
    const { data } = await client.query({
      query: BASIC_INFORMATION,
    });
    let appInfo = data?.appBasicInformation;

    if (Platform.OS === 'ios' && appInfo?.ios_version_check) {
      if (appInfo?.ios_app_version !== Constants.nativeAppVersion) {
        navigation.replace(NEW_UPDATE);
        return;
      }
    }

    if (Platform.OS === 'android' && appInfo?.android_version_check) {
      if (appInfo?.android_app_version !== Constants.nativeAppVersion) {
        navigation.replace(NEW_UPDATE);
        return;
      }
    }

    checkUser();
  };

  const checkUser = async () => {
    try {
      const jwt = await AsyncStorage.getItem('@xzero_jwt');
      const userData = await AsyncStorage.getItem('@xzero_user');

      if (userData !== null && userData !== '') {
        let loginData = JSON.parse(userData);
        setUserData({
          jwt: JSON.parse(jwt),
          center_id: loginData?.center?.id,
          id: loginData?.id,
          email: loginData?.email
        });
        navigation.replace('Home');
        return;
      }
      navigation.replace('Login');
    } catch (error) {
      // console.log(error);
    }
  };

  return <Loader />;
}
