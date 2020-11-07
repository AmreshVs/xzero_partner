import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import styles from './styles';
import SafeView from 'components/safeView';
import Button from 'components/button';
import VHCenter from 'components/vhCenter';
import { ToastMsg } from 'components/toastMsg';
import { MEMBERSHIP } from 'navigation/routes';

export default function Scan({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    navigation.push(MEMBERSHIP)
    setScanned(true);
    if (isJSON(data)) {
      let scannedData = JSON.parse(data);
      if (scannedData?.serial) {
        console.log(scannedData?.serial);
      }
      else {
        ToastMsg('Not a valid Membership');
      }
    }
    else {
      ToastMsg('Not a valid Membership');
    }
  };

  const isJSON = (data) => {
    try {
      JSON.parse(data);
    }
    catch (e) {
      return false;
    }
    return true;
  }

  if (hasPermission === null) {
    return null;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeView
      style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        style={styles.scanner}
      >
        <VHCenter>
          <View style={styles.frame} />
        </VHCenter>
      </BarCodeScanner>
      <View style={styles.buttonContainer}>
        <Button width="50%" icon="search" disabled={!scanned} onPress={() => setScanned(false)}>Scan</Button>
      </View>
    </SafeView>
  );
}
