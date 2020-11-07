import { StyleSheet, StatusBar } from 'react-native';

import isIphoneX from 'components/bottomTab/isIphoneX';
import { w100, wh100, whiteBg, padding20, w150, h150, justifyContentCenter, alignItemsCenter, flexRow, colorPrimary, marginLeft5, fontWeight700, marginTop20, marginBottom20, positionAbsolute, colorDanger, textLite, paddingTop10 } from 'constants/commonStyles';

const styles = StyleSheet.create({
  container: {
    ...wh100,
    ...whiteBg
  },
  inputsContainer: {
    ...w100,
    ...padding20,
  },
  logo: {
    ...w150,
    ...h150,
  },
  topContainer: {
    ...justifyContentCenter,
    ...alignItemsCenter,
    ...w100
  },
  haveAccount: {
    bottom: 10,
    ...w100,
    ...flexRow,
    ...justifyContentCenter,
    ...alignItemsCenter,
  },
  signup: {
    ...colorPrimary,
    ...marginLeft5,
    ...fontWeight700,
  },
  error: {
    ...colorDanger,
    ...paddingTop10,
  },
  btnContainer: {
    ...marginTop20,
  },
  termsContainer: {
    ...marginBottom20,
    ...w100,
    ...flexRow,
    ...justifyContentCenter,
    ...alignItemsCenter,
  },
  terms: {
    ...textLite,
  },
  termsLink: {
    ...fontWeight700,
    ...colorPrimary,
  },
  topNav: {
    zIndex: 9,
    top: 10,
    paddingTop: isIphoneX() ? StatusBar.currentHeight + 30 : 0,
    ...positionAbsolute,
  },
});

export default styles;