import React from 'react';
import { View } from 'react-native';

import Service from './service';
import styles from './styles';

export default function Services({ data }) {
  return (
    <View style={styles.servicesContainer}>
      {data.map((item, index) => (
        <Service data={item} key={index} />
      ))}
    </View>
  );
}
