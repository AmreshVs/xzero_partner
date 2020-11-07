import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import Column from 'components/column';
import colors from 'constants/colors';
import { getUserData } from 'constants/commonFunctions';
import Box from 'components/box';
import Row from 'components/row';
import Chip from 'components/chip';
import RippleFX from 'components/rippleFx';
import { IMAGE_URL } from 'constants/common';
import { OFFERS_SCREEN } from 'navigation/routes';
import styles from './styles';
import VHCenter from 'components/vhCenter';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function User({ data }) {
  const { push } = useNavigation();
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const handlePress = async (id) => {
    const userData = await getUserData();
    push(OFFERS_SCREEN, { center: id, user_id: Number(userData?.id) || 0 });
  };

  return (
    <RippleFX style={styles.userContainer} onPress={() => handlePress(data?.id)}>
      <Row>
        <VHCenter>
          <Image source={{ uri: IMAGE_URL + data.featured_img }} style={styles.userImage} />
        </VHCenter>
        <Box padding={10} style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {'User Name'}
          </Text>
          <Text style={styles.caption} numberOfLines={1}>
            {'emailaddress@gmail.com'}
          </Text>
        </Box>
        <VHCenter>
          <FontAwesomeIcon icon="angle-right" size={20} color={colors.text_lite} />
        </VHCenter>
      </Row>
    </RippleFX>
  );
}

export default memo(User);
