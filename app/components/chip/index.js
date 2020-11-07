import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from 'constants/colors';

export default function Chip({ title, color, paddingVertical, style = {}, ...otherStyles }) {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: color,
          borderRadius: 15,
          ...otherStyles,
        },
        text: {
          color: colors.white,
          paddingHorizontal: 10,
          paddingVertical: paddingVertical || 4,
          fontWeight: '700',
        },
      }),
    [color]
  );

  return (
    <View style={[style, styles.container]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
