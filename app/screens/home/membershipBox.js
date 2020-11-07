import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useTranslation } from 'react-i18next';

import Box from 'components/box';
import Row from 'components/row';
import Divider from 'components/divider';
import Column from 'components/column';
import { getFormatedDate } from 'constants/commonFunctions';
import colors from 'constants/colors';
import styles from './styles';

export default function MembershipBox({ data }) {
  const { t } = useTranslation();

  return (
    <Box style={styles.membership} padding={10}>
      <View style={styles.membershipContainer}>
        <Row spaceBetween>
          <Text style={styles.title}>{t('xzero_partner')}</Text>
        </Row>
        <Divider margin={10} />
        <Row spaceAround>
          <Column vcenter style={styles.countContainer}>
            <View style={[styles.iconContainer, styles.icon2]}>
              <FontAwesomeIcon icon="percentage" color={colors.primary} size={25} />
            </View>
            <Text style={styles.count}>{120 || 0}</Text>
            <Text style={styles.secondaryText}>{t('offers')}</Text>
          </Column>
          <Column vcenter style={styles.countContainer}>
            <View style={[styles.iconContainer, styles.icon1]}>
              <FontAwesomeIcon icon="users" color="#b81fff" size={25} />
            </View>
            <Text style={styles.count}>{23 || 0}</Text>
            <Text style={styles.secondaryText}>{t('visits')}</Text>
          </Column>
          <Column vcenter style={styles.countContainer}>
            <View style={[styles.iconContainer, styles.icon3]}>
              <FontAwesomeIcon icon="heart" color={colors.danger} size={25} />
            </View>
            <Text style={styles.count}>100</Text>
            <Text style={styles.secondaryText}>{t('favourites')}</Text>
          </Column>
        </Row>
      </View>
    </Box>
  );
}
