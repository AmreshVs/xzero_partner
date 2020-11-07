import React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import Row from 'components/row';
import Button from 'components/button';
import Card from 'components/card';
import Box from 'components/box';
import { dialNumber } from 'constants/commonFunctions';
import styles from './styles';

const ContactCenter = ({ username, mobile_number }) => {
  const { t } = useTranslation();

  return (
    <Row marginTop={10}>
      <Card style={styles.descContainer} marginBottom={10}>
        <Text style={styles.title} numberOfLines={1}>
          {t('contact')}
        </Text>
        <Box marginTop={10}>
          <Button
            status="success"
            icon="phone-alt"
            disabled={!username}
            onPress={() => dialNumber(mobile_number)}
          >
            {t('call')}
          </Button>
        </Box>
      </Card>
    </Row>
  );
};

export default ContactCenter;