import React, { useState, useCallback, useContext } from 'react';
import { ScrollView, RefreshControl, InteractionManager } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';

import SafeView from 'components/safeView';
import Box from 'components/box';
import Heading from 'components/heading';
import TopSection from './topSection';
import Services from './services';
import RecentCheckIns from './recentCheckIns';
import { GET_HOME, CENTER_HOME_DATA } from 'graphql/queries';
import MembershipBox from './membershipBox';
import styles from './styles';
import { UserDataContext } from 'context';

export default function Home({ navigation }) {
  const { userData } = useContext(UserDataContext);
  const { data, loading, refetch } = useQuery(CENTER_HOME_DATA, {
    variables: {
      center_id: Number(userData?.center_id)
    }
  });

  const counts = data?.getCenterHomeData?.counts;
  const [reloading, setReloading] = useState(false);
  const { t } = useTranslation();

  let topServices = data?.getCenterHomeData?.offers || [];
  let recentUsers = data?.getCenterHomeData?.recentUsers || [];

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
            <Heading marginBottom={10}>{t('top_services')}</Heading>
            <Services data={topServices} />
          </Box>
          <Box padding={10} paddingBottom={0}>
            <Heading marginBottom={10}>{t('recent_users')}</Heading>
            <RecentCheckIns data={recentUsers} />
          </Box>
        </ScrollView>
      </SafeView>
    </>
  );
}