import React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import colors from 'constants/colors';
import Row from 'components/row';
import Card from 'components/card';
import styles from './styles';

const CenterInfo = ({ offer }) => {
  const { i18n } = useTranslation();
  const language = i18n.language;

  return (
    <Row marginTop={10} justifyContent="space-between">
      <Card style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {offer?.center?.[`title_${language}`]}
        </Text>
        <Row marginTop={5}>
          <FontAwesomeIcon icon="map-marker-alt" color={colors.text_lite} />
          <Text style={styles.location}>
            {offer?.place}, {offer?.city}
          </Text>
        </Row>
      </Card>
    </Row>
  );
};

export default CenterInfo;