import React from 'react';
import { ScrollView } from 'react-native';

import SafeView from 'components/safeView';
import MembershipCard from './membershipCard';
import IsLoggedIn from 'hoc/isLoggedIn';
import TopStatusBar from 'components/topStatusBar';
import Offers from './offers';
import { useRoute } from '@react-navigation/native';
import { useQuery } from '@apollo/client';
import { GET_MEMBERSHIP_INFO } from 'graphql/queries';
import styles from './styles';

const Membership = () => {
  const { params } = useRoute();

  const { data, loading } = useQuery(GET_MEMBERSHIP_INFO, {
    variables: {
      serial: String(params.serial),
      where: {
        center: params?.center,
      }
    }
  });

  return (
    <SafeView noBottom loading={loading}>
      <TopStatusBar />
      <ScrollView style={styles.scrollView}>
        <MembershipCard
          data={data?.getMembershipInfo?.membership}
          expired={false}
        />
        <Offers user_id={data?.getMembershipInfo?.membership?.user?.id} data={data?.getMembershipInfo?.offer} />
      </ScrollView>
    </SafeView>
  );
};

export default IsLoggedIn(Membership);
