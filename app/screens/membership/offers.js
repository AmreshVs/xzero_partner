import React, { useContext, useState } from 'react';
import { Text, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useApolloClient } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';

import Row from 'components/row';
import Card from 'components/card';
import Button from 'components/button';
import Offer from './offer';
import styles from './styles';
import Divider from 'components/divider';
import { CENTER_CHECK_IN } from 'graphql/mutations'
import { UserDataContext } from 'context';
import { USER_CHECKIN } from 'navigation/routes';
import { ToastMsg } from 'components/toastMsg';
import { ERROR_OCCURED } from 'constants/common';
import { isTab } from 'constants/commonFunctions';

export default function Offers({ data, user_id }) {
  const { t } = useTranslation();
  const { userData } = useContext(UserDataContext);
  const [selected, setSelected] = useState([]);
  const client = useApolloClient();
  const { replace } = useNavigation();

  const handleSelectedOffer = (id) => {
    let offersArray = [];
    offersArray = selected;
    if (offersArray.includes(id)) {
      let filteredOffersArray = offersArray.filter(item => item !== id);
      setSelected(filteredOffersArray);
    }
    else {
      offersArray.push(id);
      let addedOffers = [...offersArray];
      setSelected(addedOffers);
    }
  }

  const handleConfirm = async () => {
    try {
      const { data } = await client.mutate({
        mutation: CENTER_CHECK_IN,
        variables: {
          user_id: Number(user_id),
          center_id: Number(userData?.center_id),
          offers: selected.length > 1 ? selected.join(',') : selected
        }
      });

      if (data?.Checkin?.transaction_id) {
        replace(USER_CHECKIN, {
          transaction_id: data?.Checkin?.transaction_id
        });
      }
    }
    catch (e) {
      ToastMsg(ERROR_OCCURED);
    }
  }

  return (
    <Row style={styles.helpContainer}>
      <Card style={styles.infoContainer}>
        <Text style={styles.about} numberOfLines={1}>
          {t('offers')}
        </Text>
        <Text style={styles.helpCaption}>{t('select_offers')}</Text>
        <FlatList
          keyExtractor={(item, index) => String(index)}
          data={data}
          renderItem={({ item }) => <Offer data={item} selectedOffers={selected} handleSelectedOffer={handleSelectedOffer} />}
          ItemSeparatorComponent={() => <Divider />}
          contentContainerStyle={styles.flatlist}
          columnWrapperStyle={isTab() ? styles.offers : null}
          initialNumToRender={6}
          numColumns={1}
          removeClippedSubviews={true}
        />
        <Row hcenter>
          <Button
            status="success"
            icon="check"
            width={isTab() ? "40%" : "100%"}
            disabled={!selected.length > 0}
            onPress={() => handleConfirm()}
          >
            {t('confirm')}
          </Button>
        </Row>
      </Card>
    </Row>
  );
}
