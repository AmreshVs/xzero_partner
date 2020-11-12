import React, { memo } from 'react';
import { Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import Box from 'components/box';
import Row from 'components/row';
import colors from 'constants/colors';
import Chip from 'components/chip';
import { IMAGE_URL } from 'constants/common';
import Column from 'components/column';
import RippleFX from 'components/rippleFx';
import { OFFER_DETAIL } from 'navigation/routes';
import styles from './styles';

function Offer({ data }) {
  const { push } = useNavigation();
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const handlePress = async () => {
    push(OFFER_DETAIL, {
      offer_id: Number(data.id),
      offer_name: data?.[`title_${language}`],
    });
  };

  return (
    <Row style={styles.offerContainer}>
      <Box flex={1} width="25%" style={styles.imgContainer}>
        <RippleFX onPress={() => handlePress()}>
          <Image source={{ uri: IMAGE_URL + data?.featured_img?.url }} style={styles.image} />
        </RippleFX>
      </Box>
      <Column flex={3} style={styles.nameContainer}>
        <RippleFX onPress={() => handlePress()}>
          <Text style={styles.title} numberOfLines={2}>
            {data?.[`title_${language}`]}
          </Text>
          <Text style={styles.caption} numberOfLines={2}>
            {data?.[`desc_${language}`]}
          </Text>
          {data?.discount === 100 ? (
            <Chip style={styles.chip} title={t('free')} color={colors.danger} />
          ) : (
              <Chip
                style={styles.chip}
                title={
                  language === 'en'
                    ? `${data?.discount || 0}% ${t('discount')}`
                    : `${t('discount')} ${data?.discount || 0}%`
                }
                color={colors.chip_1}
              />
            )}
        </RippleFX>
      </Column>
    </Row>
  );
}

export default memo(Offer);