import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import Column from 'components/column';
import colors from 'constants/colors';
import Box from 'components/box';
import Row from 'components/row';
import Chip from 'components/chip';
import RippleFX from 'components/rippleFx';
import { IMAGE_URL } from 'constants/common';
import { OFFER_DETAIL } from 'navigation/routes';
import styles from './styles';
import VHCenter from 'components/vhCenter';

const Service = ({ data }) => {
  const { push } = useNavigation();
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const handlePress = async (id, name) => {
    push(OFFER_DETAIL, { offer_id: id, offer_name: name });
  };

  return (
    <RippleFX style={styles.centerContainer} onPress={() => handlePress(data?.id, data?.[`title_${language}`])}>
      <Row>
        <VHCenter width="25%">
          <Image source={{ uri: IMAGE_URL + data?.featured_img?.url }} style={styles.serviceImage} />
        </VHCenter>
        <Box padding={10} style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {data?.[`title_${language}`]}
          </Text>
          <Text style={styles.caption} numberOfLines={1}>
            {data.place}, {data.city}
          </Text>
          <View style={styles.chipContainer}>
            <Column>
              {data?.discount === 100 ? (
                <Chip title={t('free')} color={colors.danger} />
              ) : (
                  <Chip title={`${data?.discount || 0}% ${t('discount')}`} color={colors.chip_2} />
                )}
            </Column>
          </View>
        </Box>
      </Row>
    </RippleFX>
  );
}

export default memo(Service);
