import React from 'react';
import { Text } from 'react-native';

import Card from 'components/card';
import styles from './styles';
import Box from 'components/box';
import Row from 'components/row';
import Divider from 'components/divider';

export default function AvailedOffers() {
  return (
    <Card style={styles.availedOffers}>
      <Text style={styles.heading}>Availed Offers</Text>
      <Row flexWrap="wrap">
        <Box width="50%" style={styles.textContainer}>
          <Text style={styles.title}>Offer Name</Text>
          <Text style={styles.caption}>Face Bleach</Text>
        </Box>
      </Row>
      <Row flexWrap="wrap">
        <Box width="35%" style={styles.textContainer}>
          <Text style={styles.title}>Original Price</Text>
          <Text style={styles.caption}>AED 500</Text>
        </Box>
        <Box width="35%" style={styles.textContainer}>
          <Text style={styles.title}>Offer Price</Text>
          <Text style={styles.caption}>AED 200</Text>
        </Box>
        <Box width="30%" style={styles.textContainer}>
          <Text style={styles.title}>Discount</Text>
          <Text style={styles.caption}>20%</Text>
        </Box>
      </Row>
      <Divider />
      <Row flexWrap="wrap">
        <Box width="50%" style={styles.textContainer}>
          <Text style={styles.title}>Offer Name</Text>
          <Text style={styles.caption}>Face Bleach</Text>
        </Box>
      </Row>
      <Row flexWrap="wrap">
        <Box width="35%" style={styles.textContainer}>
          <Text style={styles.title}>Original Price</Text>
          <Text style={styles.caption}>AED 500</Text>
        </Box>
        <Box width="35%" style={styles.textContainer}>
          <Text style={styles.title}>Offer Price</Text>
          <Text style={styles.caption}>AED 200</Text>
        </Box>
        <Box width="30%" style={styles.textContainer}>
          <Text style={styles.title}>Discount</Text>
          <Text style={styles.caption}>20%</Text>
        </Box>
      </Row>
    </Card>
  )
}