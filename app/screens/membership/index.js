import React, { useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { useApolloClient } from '@apollo/client';

import SafeView from 'components/safeView';
import MembershipCard from './membershipCard';
// import { GET_MEMBERSHIP_BY_USER } from 'graphql/queries';
import IsLoggedIn from 'hoc/isLoggedIn';
import TopStatusBar from 'components/topStatusBar';
import GetHelp from './getHelp';
import styles from './styles';

const Membership = () => {
  const [member, setMember] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reloading, setReloading] = useState(false);
  const [memberData, setMemberData] = useState([]);
  // const client = useApolloClient();

  return (
    <SafeView noBottom loading={false}>
      <TopStatusBar />
      <ScrollView
        style={styles.rootContainer}
        showsVerticalScrollIndicator={false}
        // refreshControl={<RefreshControl refreshing={reloading} onRefresh={reload} />}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
      >
        <MembershipCard
          member={member}
          data={memberData}
          expired={false}
        />
        <GetHelp />
      </ScrollView>
    </SafeView>
  );
};

export default IsLoggedIn(Membership);
