import React, { useContext, useState } from 'react';
import { FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import NoData from 'components/noData';
import SafeView from 'components/safeView';
import TopNavigator from 'components/topNavigator';
import Offer from './offer';
import { OFFERS_LIST } from 'graphql/queries';
import styles from './styles';
import { UserDataContext } from 'context';

export default function Offers() {
  const { userData } = useContext(UserDataContext);

  const [reloading, setReloading] = useState(false);
  let { data, loading, refetch } = useQuery(OFFERS_LIST, {
    variables: { center: Number(userData?.center_id), user_id: 0 },
  });

  let { t } = useTranslation();

  const reload = async () => {
    setReloading(true);
    await refetch();
    setReloading(false);
  };

  return (
    <SafeView loading={loading} topNav>
      <TopNavigator title={t('offers')} gradient leftIcon={null} />
      {!data?.offerListWithFavourites.length ? (
        <NoData topNav />
      ) : (
          <FlatList
            keyExtractor={(item) => String(item.id)}
            data={data?.offerListWithFavourites}
            renderItem={({ item }) => <Offer data={item} />}
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