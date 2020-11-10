import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import NoData from 'components/noData';
import SafeView from 'components/safeView';
import TopNavigator from 'components/topNavigator';
import User from './user';
import { OFFERS_LIST } from 'graphql/queries';
import styles from './styles';
import Divider from 'components/divider';

export default function CheckIns() {
  const [reloading, setReloading] = useState(false);
  let { data, loading, refetch } = useQuery(OFFERS_LIST, {
    variables: { center: 12, user_id: 0 },
  });

  let { t } = useTranslation();

  const reload = async () => {
    setReloading(true);
    await refetch();
    setReloading(false);
  };

  return (
    <SafeView style={styles.rootContainer} loading={loading}>
      <TopNavigator title={t('user_check_ins')} gradient leftIcon={null} />
      {!data?.offerListWithFavourites.length ? (
        <NoData topNav />
      ) : (
          <FlatList
            keyExtractor={(item) => String(item.id)}
            data={data?.offerListWithFavourites}
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