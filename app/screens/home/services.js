import React from 'react';
import { View } from 'react-native';

import Service from './service';

export default function Services({ data }) {
  return (
    <View>
      {data.map((item, index) => (
        <Service data={item} key={index} />
      ))}
    </View>
  );
}
