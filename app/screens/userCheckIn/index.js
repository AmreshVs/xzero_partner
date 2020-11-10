import React from 'react';
import { View, ScrollView } from 'react-native';

import SafeView from 'components/safeView';
import TopNavigator from 'components/topNavigator';
import UserInfo from './userInfo';
import AvailedOffers from './availedOffers';
import styles from './styles';
import Divider from 'components/divider';

export default function UserCheckIn() {
  return (
    <SafeView style={styles.rootContainer}>
      <TopNavigator title="User Check-In" gradient />
      <ScrollView style={styles.container} removeClippedSubviews={true}>
        <UserInfo />
        <Divider />
        <AvailedOffers />
      </ScrollView>
    </SafeView>
  )
}