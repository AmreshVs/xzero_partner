import React from 'react';
import { ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useQuery } from '@apollo/client';

import SafeView from 'components/safeView';
import TopNavigator from 'components/topNavigator';
import UserInfo from './userInfo';
import AvailedOffers from './availedOffers';
import styles from './styles';
import Divider from 'components/divider';
import { CHECK_IN_DETAIL } from 'graphql/queries';

export default function UserCheckIn() {
  const { params } = useRoute();

  const { data, loading } = useQuery(CHECK_IN_DETAIL, {
    variables: {
      transaction_id: String(params?.transaction_id)
    }
  });

  return (
    <SafeView style={styles.rootContainer} loading={loading}>
      <TopNavigator title="User Check-In" gradient />
      <ScrollView style={styles.container} removeClippedSubviews={true}>
        <UserInfo data={data?.CenterCheckinByTransactionId?.userInfo} />
        <Divider />
        <AvailedOffers data={data?.CenterCheckinByTransactionId?.offers} />
      </ScrollView>
    </SafeView>
  )
}