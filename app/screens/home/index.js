import React, { useState, useCallback } from 'react';
import { ScrollView, RefreshControl, InteractionManager } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';

import SafeView from 'components/safeView';
import Box from 'components/box';
import Heading from 'components/heading';
import TopSection from './topSection';
import TopCenters from './topCenters';
import RecentUsers from './recentUsers';
import { GET_HOME } from 'graphql/queries';
import MembershipBox from './membershipBox';
import styles from './styles';

export default function Home({ navigation }) {
  const { data, loading, refetch } = useQuery(GET_HOME);
  const [reloading, setReloading] = useState(false);
  const { t } = useTranslation();
  let counts = {
    centersCount: data?.centersCount?.aggregate?.totalCount,
    offersCount: data?.offersCount?.aggregate?.totalCount,
  };

  let topCenters = data?.topCenters || [];

  const _refetch = useCallback(() => {
    const task = InteractionManager.runAfterInteractions(async () => {
      if (refetch) await refetch();
    });
    return () => task.cancel();
  }, [refetch]);

  const reload = async () => {
    setReloading(true);
    _refetch();
    setReloading(false);
  };

  return (
    <>
      <SafeView loading={loading} noTop noBottom>
        <ScrollView
          style={styles.scrollContainer}
          refreshControl={<RefreshControl refreshing={reloading} onRefresh={reload} />}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
        >
          <TopSection data={counts} />
          <MembershipBox data={counts} />
          <Box padding={10} paddingBottom={0}>
            <Heading marginBottom={10}>{t('top_offers')}</Heading>
            <TopCenters data={topCenters} />
          </Box>
          <Box padding={10} paddingBottom={0}>
            <Heading marginBottom={10}>{t('recent_users')}</Heading>
            <RecentUsers data={topCenters} />
          </Box>
        </ScrollView>
      </SafeView>
    </>
  );
}