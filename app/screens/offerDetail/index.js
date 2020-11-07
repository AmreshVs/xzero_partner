import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';
import { useQuery, useApolloClient } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import SafeView from 'components/safeView';
import colors from 'constants/colors';
import TopNavigator from 'components/topNavigator';
import { firstLetterUpper } from 'constants/commonFunctions';
import RippleFX from 'components/rippleFx';
import { OFFERS_DETAIL } from 'graphql/queries';
import addFavourite from 'screens/offers/addFavourite';
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

  const [favourite, setFavourite] = useState(data?.offerIsFavourite || false);
  const client = useApolloClient();
  const userData = useUserData();

  const handleFavourite = async (offer_id) => {
    setFavourite(!favourite);
    await addFavourite(client, Number(offer_id));
  };

  useEffect(() => {
    setFavourite(data?.offerIsFavourite);
  }, [data]);

  let offer = data?.offer;

  const RightIcon = () => {
    return (
      <RippleFX style={styles.rightIcon} onPress={() => handleFavourite(data?.offer?.id)}>
        <FontAwesomeIcon icon="heart" color={favourite ? colors.danger : colors.white} size={15} />
      </RippleFX>
    );
  };

  return (
    <>
      <LinearGradient colors={[colors.gradient1, colors.gradient2]} style={styles.gradient} />
      <SafeView style={styles.container} topNav loading={loading}>
        <TopNavigator
          title={firstLetterUpper(center)}
          color={colors.white}
          rightContainer={userData && <RightIcon />}
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