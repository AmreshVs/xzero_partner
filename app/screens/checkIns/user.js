import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Column from 'components/column';
import colors from 'constants/colors';
import Row from 'components/row';
import RippleFX from 'components/rippleFx';
import { USER_CHECKIN } from 'navigation/routes';
import VHCenter from 'components/vhCenter';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Card from 'components/card';
import styles from './styles';

function User({ data }) {
  const { push } = useNavigation();

  const handlePress = async (transaction_id) => {
    push(USER_CHECKIN, {
      transaction_id
    });
  };

  return (
    <Card style={styles.userContainer}>
      <RippleFX onPress={() => handlePress(data?.transaction_id)}>
        <Row>
          <VHCenter width="15%">
            <Image source={{ uri: 'https://be.xzero.app/uploads/profile_placeholder_300x300_3627f0ab61.png' }} style={styles.userImage} />
          </VHCenter>
          <View style={styles.contentContainer}>
            <Column padding={10} paddingLeft={0}>
              <Text style={styles.title} numberOfLines={1}>
                {data?.user_id?.username}
              </Text>
              <Text style={styles.caption} numberOfLines={1}>
                {new Date(data?.created_at).toUTCString()}
              </Text>
            </Column>
            <VHCenter>
              <FontAwesomeIcon icon="angle-right" size={20} color={colors.text_lite} />
            </VHCenter>
          </View>
        </Row>
      </RippleFX>
    </Card>
  );
}

export default memo(User);
