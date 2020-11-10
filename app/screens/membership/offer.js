import React, { memo } from 'react';
import { Text, Image } from 'react-native';
import { useTranslation } from 'react-i18next';

import Box from 'components/box';
import Row from 'components/row';
import { IMAGE_URL } from 'constants/common';
import Column from 'components/column';
import RippleFX from 'components/rippleFx';
import useUserData from 'hooks/useUserData';
import styles from './styles';

const Offer = ({ data, selectedOffers, handleSelectedOffer }) => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return (
    <RippleFX onPress={() => handleSelectedOffer(Number(data?.id))}>
      <Row style={selectedOffers.includes(Number(data?.id)) ? styles.offerContainerSelected : styles.offerContainer}>
        <Box flex={1} style={styles.imgContainer}>
          <Image source={{ uri: 'https://be.xzero.app/uploads/47380627_1715235745252893_611739201355907072_n_removebg_preview_b8a05b9365.png' }} style={styles.image} />
        </Box>
        <Column flex={5} style={styles.nameContainer}>
          <Text style={styles.serviceTitle} numberOfLines={2}>
            {'offer title'}
          </Text>
          <Text style={styles.serviceCaption} numberOfLines={2}>
            {'offer detail'}
          </Text>
        </Column>
      </Row>
    </RippleFX>
  );
}

export default Offer;