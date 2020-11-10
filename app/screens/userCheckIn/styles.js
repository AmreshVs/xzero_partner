import { StyleSheet } from 'react-native';

import { textBoldDark, font17, marginBottom5, paddingVertical10, textLite, wh100, padding10, marginBottom20 } from 'constants/commonStyles';

const styles = StyleSheet.create({
  rootContainer: {
    ...wh100,
  },
  container: {
    ...padding10,
  },
  heading: {
    ...textBoldDark,
    ...font17
  },
  textContainer: {
    ...paddingVertical10
  },
  title: {
    ...textBoldDark,
    ...marginBottom5,
  },
  caption: {
    ...textLite
  },
  availedOffers: {
    ...marginBottom20
  }
});

export default styles;