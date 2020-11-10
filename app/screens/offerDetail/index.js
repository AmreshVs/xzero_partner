import React from 'react';
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';
import { useQuery } from '@apollo/client';

import SafeView from 'components/safeView';
import colors from 'constants/colors';
import TopNavigator from 'components/topNavigator';
import { firstLetterUpper } from 'constants/commonFunctions';
import { OFFERS_DETAIL } from 'graphql/queries';
import useUserData from 'hooks/useUserData';
import OfferCard from './offerCard';
import CenterInfo from './centerInfo';
import PriceDetails from './priceDetails';
import OfferDescription from './offerDescription';
import AvailDiscount from './availDiscount';
import ContactCenter from './contactCenter';
import styles from './styles';

export default function OfferDetail() {
  const {
    params: { id, offer_id, user_id, center },
  } = useRoute();
  const { data, loading } = useQuery(OFFERS_DETAIL, {
    variables: { offer_id, id, user_id },
  });

  const userData = useUserData();

  let offer = data?.offer;

  return (
    <>
      <LinearGradient colors={[colors.gradient1, colors.gradient2]} style={styles.gradient} />
      <SafeView style={styles.container} topNav loading={loading}>
        <TopNavigator
          title={firstLetterUpper(center)}
          color={colors.white}
        />
        <ScrollView showsVerticalScrollIndicator={false} removeClippedSubviews={true}>
          <OfferCard discount={offer?.discount} />
          <CenterInfo offer={offer} username={userData?.username} />
          <PriceDetails offer={offer} center={center} />
          <OfferDescription offer={offer} />
          <AvailDiscount loading={loading} data={data} />
          <ContactCenter username={userData?.username} mobile_number={offer?.mobile_number} />
        </ScrollView>
      </SafeView>
    </>
  );
}