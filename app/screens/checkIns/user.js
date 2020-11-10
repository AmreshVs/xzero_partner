import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Column from 'components/column';
import colors from 'constants/colors';
import { getUserData } from 'constants/commonFunctions';
import Box from 'components/box';
import Row from 'components/row';
import RippleFX from 'components/rippleFx';
import { IMAGE_URL } from 'constants/common';
import { OFFERS_SCREEN } from 'navigation/routes';
import VHCenter from 'components/vhCenter';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Card from 'components/card';
import styles from './styles';
import Chip from 'components/chip';

function User({ data }) {
  const { push } = useNavigation();

  const handlePress = async (id) => {
    console.log('pressed');
  };

  return (
    <Card style={styles.userContainer}>
      <RippleFX onPress={() => handlePress(data?.id)}>
        <Row justifyContent="space-around">
          <VHCenter>
            <Image source={{ uri: 'https://be.xzero.app/uploads/Barada_center_logo_01_d9a4c3a125.png' }} style={styles.userImage} />
          </VHCenter>
          <Box padding={10} paddingLeft={0}>
            <Text style={styles.title} numberOfLines={1}>
              {'User Name'}
            </Text>
            <Text style={styles.caption} numberOfLines={1}>
              {new Date().toISOString()}
            </Text>
            {data?.discount === 100 ? (
              <Chip style={styles.chip} title={t('free')} color={colors.danger} />
            ) : (
                <Chip
                  style={styles.chip}
                  title={'1 Offers'}
                  color={colors.chip_1}
                />
              )}
          </Box>
          <VHCenter>
            <FontAwesomeIcon icon="angle-right" size={20} color={colors.text_lite} />
          </VHCenter>
        </Row>
      </RippleFX>
    </Card>
  );
}

export default memo(User);
