import React from 'react';
import { View } from 'react-native';

import User from './user';
import styles from './styles';

export default function RecentCheckIns({ data }) {
  return (
    <View style={styles.usersContainer}>
      {data.map((item, index) => (
        <User data={item} key={index} />
      ))}
    </View>
  );
}
