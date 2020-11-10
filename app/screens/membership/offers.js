import React, { useState } from 'react';
import { Text, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';

import Row from 'components/row';
import Card from 'components/card';
import Button from 'components/button';
import useUserData from 'hooks/useUserData';
import Offer from './offer';
import styles from './styles';
import Divider from 'components/divider';

export default function Offers() {
  const { t } = useTranslation();
  const userData = useUserData();
  const [selected, setSelected] = useState([]);

  const offersData = [
    { id: "1", name: 'offer title1' },
    { id: "2", name: 'offer title1' },
    { id: "3", name: 'offer title1' },
    { id: "4", name: 'offer title1' },
    { id: "5", name: 'offer title1' },
    { id: "6", name: 'offer title1' },
  ];

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

  return (
    <Row style={styles.helpContainer}>
      <Card style={styles.infoContainer}>
        <Text style={styles.about} numberOfLines={1}>
          {t('offers')}
        </Text>
        <Text style={styles.helpCaption}>{t('select_offers')}</Text>
        <FlatList
          keyExtractor={(item, index) => String(index)}
          data={offersData}
          renderItem={({ item }) => <Offer data={item} selectedOffers={selected} handleSelectedOffer={handleSelectedOffer} />}
          ItemSeparatorComponent={() => <Divider />}
          contentContainerStyle={styles.flatlist}
          initialNumToRender={6}
          removeClippedSubviews={true}
        />
        <Button
          status="success"
          icon="check"
          disabled={!userData?.username}
          onPress={() =>
            console.log('Confirm')
          }
        >
          {t('confirm')}
        </Button>
      </Card>
    </Row>
  );
}
