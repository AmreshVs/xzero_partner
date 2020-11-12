import React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import Card from 'components/card';
import styles from './styles';
import Box from 'components/box';
import Row from 'components/row';
import { handleMobileNumber } from 'constants/commonFunctions';

export default function UserInfo({ data }) {
  const { t } = useTranslation();

  return (
    <Card>
      <Text style={styles.heading}>{t('user_details')}</Text>
      <Row flexWrap="wrap">
        <Box width="50%" style={styles.textContainer}>
          <Text style={styles.title}>{t('name')}</Text>
          <Text style={styles.caption}>{data?.username}</Text>
        </Box>
        <Box width="50%" style={styles.textContainer}>
          <Text style={styles.title}>{t('email')}</Text>
          <Text style={styles.caption}>{data?.email}</Text>
        </Box>
        <Box width="50%" style={styles.textContainer}>
          <Text style={styles.title}>{t('mobile_number')}</Text>
          <Text style={styles.caption}>{handleMobileNumber(data?.mobile_number)}</Text>
        </Box>
        <Box width="50%" style={styles.textContainer}>
          <Text style={styles.title}>{t('checked_on')}</Text>
          <Text style={styles.caption}>{new Date(data?.created_at).toUTCString()}</Text>
        </Box>
      </Row>
    </Card>
  )
}