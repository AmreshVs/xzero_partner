import { StyleSheet } from 'react-native';

import { wh100, whiteBg, w150, h150, padding20, w100, textLite, textAlignRight, flex, flexRow, justifyContentCenter, alignItemsCenter, flexSpaceBetween, marginLeft5, fontWeight700, positionAbsolute, marginTop20, colorPrimary, padding15, borderRadius10, marginTop10, marginBottom20, marginBottom15, h100 } from 'constants/commonStyles';

const styles = StyleSheet.create({
  container: {
    ...wh100,
    ...whiteBg,
  },
  scrollContainer: {
    ...justifyContentCenter,
    ...alignItemsCenter,
    ...h100,
  },
  logo: {
    ...w150,
    ...h150,
  },
  inputsContainer: {
    ...w100,
    ...padding20,
  },
  forgotPassword: {
    ...marginBottom20,
    ...textAlignRight,
    ...marginTop10,
    ...textLite
  },
  btnContainer: {
    ...w100,
    ...flex,
    ...flexRow,
    ...flexSpaceBetween,
  },
  termsContainer: {
    ...marginTop20,
  },
  terms: {
    ...textLite,
  },
  termsLink: {
    ...fontWeight700,
    ...colorPrimary
  },
  button: {
    ...marginTop20
  }
});

export default styles;
