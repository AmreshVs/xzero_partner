import React from 'react';
import { Text } from 'react-native';

import Card from 'components/card';
import styles from './styles';
import Box from 'components/box';
import Row from 'components/row';

export default function UserInfo() {
  return (
    <Card>
      <Text style={styles.heading}>User details</Text>
      <Row flexWrap="wrap">
        <Box width="50%" style={styles.textContainer}>
          <Text style={styles.title}>Name</Text>
          <Text style={styles.caption}>Amresh Vs</Text>
        </Box>
        <Box width="50%" style={styles.textContainer}>
          <Text style={styles.title}>Email Address</Text>
          <Text style={styles.caption}>amreshcse007@gmail.com</Text>
        </Box>
        <Box width="50%" style={styles.textContainer}>
          <Text style={styles.title}>Mobile Number</Text>
          <Text style={styles.caption}>+971565255257</Text>
        </Box>
        <Box width="50%" style={styles.textContainer}>
          <Text style={styles.title}>Checked In On</Text>
          <Text style={styles.caption}>{new Date().toISOString()}</Text>
        </Box>
      </Row>
    </Card>
  )
}