import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from 'constants/colors';
import { SCREEN_HEIGHT } from 'constants/common';
import Button from 'components/button';
import TopStatusBar from 'components/topStatusBar';

export default function NoData({ topNav, reload, reloading }) {
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 300,
      height: 300,
      marginBottom: topNav ? SCREEN_HEIGHT / 6.5 : 0,
    },
  });

  return (
    <>
      <TopStatusBar />
      <View style={styles.container}>
        <Image source={require('../../../assets/no_data.jpg')} style={styles.image} />
        {reload && (
          <Button width="50%" icon="redo" onPress={() => reload()} loading={reloading}>
            Reload
          </Button>
        )}
      </View>
    </>
  );
}
