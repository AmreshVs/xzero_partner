import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import SafeView from 'components/safeView';
import colors from 'constants/colors';
import Box from 'components/box';
import RippleFX from 'components/rippleFx';
import Row from 'components/row';
import { getUserData } from 'constants/commonFunctions';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import { IMAGE_URL } from 'constants/common';

const TopSection = ({ data }) => {

  const { toggleDrawer } = useNavigation();

  const { i18n } = useTranslation();
  const language = i18n.language;

  const handleLangSelect = async () => {
    let originalLanguage = i18n.language;
    let language = originalLanguage === 'ar' ? 'en' : 'ar';
    await i18n.changeLanguage(language);
    let userData = await getUserData();
    let userDataWithLanguage = { ...userData, language: language };
    await AsyncStorage.setItem('@xzero_user', JSON.stringify(userDataWithLanguage));
  };

  return (
    <>
      <LinearGradient colors={[colors.gradient1, colors.gradient2]} style={styles.gradient} />
      <SafeView style={styles.topSectionContainer} noBottom>
        <Box style={styles.navContainer}>
          <RippleFX style={styles.iconContainer} onPress={() => toggleDrawer()}>
            <FontAwesomeIcon icon="bars" color={colors.white} size={20} />
          </RippleFX>
          <Row marginRight={10}>
            <RippleFX style={styles.iconContainer} onPress={() => handleLangSelect()}>
              <Row vcenter>
                <FontAwesomeIcon icon="globe" color={colors.white} size={20} />
                <Text style={styles.language}>{i18n.language === 'en' ? 'AR' : 'EN'}</Text>
              </Row>
            </RippleFX>
          </Row>
        </Box>
        <Box>
          <Row hcenter vcenter>
            <View style={styles.textContiner}>
              <View style={styles.centerImageContainer}>
                <Image source={{ uri: IMAGE_URL + data?.featured_img?.url }} style={styles.serviceImage} />
              </View>
              <Text style={styles.centerName}>{data?.[`title_${language}`]}</Text>
              <Text style={styles.centerPlace}>{data?.city + ", " + data?.place}</Text>
            </View>
          </Row>
        </Box>
      </SafeView>
    </>
  );
};

export default memo(TopSection);