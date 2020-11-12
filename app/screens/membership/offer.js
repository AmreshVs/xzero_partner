import React, { memo } from 'react';
import { Text, Image } from 'react-native';
import { useTranslation } from 'react-i18next';

import Box from 'components/box';
import Row from 'components/row';
import { IMAGE_URL } from 'constants/common';
import Column from 'components/column';
import RippleFX from 'components/rippleFx';
import styles from './styles';

const Offer = ({ data, selectedOffers, handleSelectedOffer }) => {
  const { i18n } = useTranslation();
  const language = i18n.language;

  return (
    <RippleFX onPress={() => handleSelectedOffer(Number(data?.id))}>
      <Row style={selectedOffers.includes(Number(data?.id)) ? styles.offerContainerSelected : styles.offerContainer}>
        <Box flex={1} style={styles.imgContainer}>
          <Image source={{ uri: IMAGE_URL + data?.featured_img?.url }} style={styles.image} />
        </Box>
        <Column flex={5} style={styles.nameContainer}>
          <Text style={styles.serviceTitle} numberOfLines={2}>
            {data?.[`title_${language}`]}
          </Text>
          <Text style={styles.serviceCaption} numberOfLines={2}>
            {data?.[`desc_${language}`]}
          </Text>
        </Column>
      </Row>
    </RippleFX>
  );
}

export default memo(Offer);