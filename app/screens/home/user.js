import React, { memo } from 'react';
import { Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from 'constants/colors';
import Box from 'components/box';
import Row from 'components/row';
import RippleFX from 'components/rippleFx';
import { USER_CHECKIN } from 'navigation/routes';
import styles from './styles';
import VHCenter from 'components/vhCenter';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function User({ data }) {
  const { push } = useNavigation();

  return (
    <RippleFX style={styles.userContainer} onPress={() => push(USER_CHECKIN, { transaction_id: data?.transaction_id })}>
      <Row>
        <VHCenter>
          <Image source={{ uri: 'https://be.xzero.app/uploads/profile_placeholder_300x300_3627f0ab61.png' }} style={styles.userImage} />
        </VHCenter>
        <Box padding={10} style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {data?.username}
          </Text>
          <Text style={styles.userCaption} numberOfLines={1}>
            {new Date().toUTCString()}
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
