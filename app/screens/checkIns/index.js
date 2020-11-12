import React, { useContext, useState } from 'react';
import { FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import NoData from 'components/noData';
import SafeView from 'components/safeView';
import TopNavigator from 'components/topNavigator';
import User from './user';
import { USER_CHECK_INS } from 'graphql/queries';
import styles from './styles';
import { UserDataContext } from 'context';

export default function CheckIns() {
  const { userData } = useContext(UserDataContext);

  const [reloading, setReloading] = useState(false);
  let { data, loading, refetch } = useQuery(USER_CHECK_INS, {
    variables: { center_id: Number(userData?.center_id) },
  });

  let { t } = useTranslation();

  const reload = async () => {
    setReloading(true);
    await refetch();
    setReloading(false);
  };

  return (
    <SafeView loading={loading} topNav>
      <TopNavigator title={t('user_check_ins')} gradient leftIcon={null} />
      {!data?.UserCheckins.length ? (
        <NoData topNav />
      ) : (
          <FlatList
            keyExtractor={(item) => String(item.id)}
            data={data?.UserCheckins}
            renderItem={({ item }) => <User data={item} />}
            initialNumToRender={6}
            maxToRenderPerBatch={10}
            windowSize={10}
            contentContainerStyle={styles.flatlist}
            refreshing={reloading}
            onRefresh={reload}
            removeClippedSubviews={true}
          />
        )}
    </SafeView>
  );
}