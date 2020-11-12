import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import Card from 'components/card';
import styles from './styles';
import Box from 'components/box';
import Row from 'components/row';
import Divider from 'components/divider';

export default function AvailedOffers({ data }) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return (
    <Card style={styles.availedOffers}>
      <Text style={styles.heading}>{t('availed_offers')}</Text>
      {data.map((offer, index) => {
        return (
          <View key={index}>
            {index !== 0 && <Divider />}
            <Row flexWrap="wrap">
              <Box width="50%" style={styles.textContainer}>
                <Text style={styles.title}>{t('offer_name')}</Text>
                <Text style={styles.caption}>{offer?.[`title_${language}`]}</Text>
              </Box>
            </Row>
            <Row flexWrap="wrap">
              <Box width="35%" style={styles.textContainer}>
                <Text style={styles.title}>{t('original_price')}</Text>
                <Text style={styles.caption}>AED {offer?.original_price || 0}</Text>
              </Box>
              <Box width="40%" style={styles.textContainer}>
                <Text style={styles.title}>{t('discount_price')}</Text>
                <Text style={styles.caption}>AED {offer?.discounted_price || 0}</Text>
              </Box>
              <Box width="25%" style={styles.textContainer}>
                <Text style={styles.title}>{t('discount')}</Text>
                <Text style={styles.caption}>{offer?.discount || 0}%</Text>
              </Box>
            </Row>
          </View>
        )
      })}
    </Card>
  )
}