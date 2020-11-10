import { StyleSheet } from 'react-native';

import { getShadowStyle } from 'constants/commonFunctions';
import { padding10, borderRadius10, borderRadius20, marginBottom5, w100, h100, overflowHidden, whiteBg, marginBottom10, textLite, textBoldDark, h100px, w100px, wh100, paddingBottom10 } from 'constants/commonStyles';

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 10
  },
  flatlist: {
    ...padding10,
  },
  offerContainer: {
    ...w100,
    ...whiteBg,
    ...borderRadius10,
    ...padding10,
    ...getShadowStyle(),
    ...marginBottom10,
  },
  title: {
    ...textBoldDark,
    ...marginBottom5,
  },
  image: {
    ...w100px,
    ...h100px,
  },
  imgContainer: {
    ...h100,
    ...borderRadius10,
    ...overflowHidden,
  },
  nameContainer: {
    ...h100,
    marginLeft: 15,
  },
  iconContainer: {
    ...padding10,
    ...borderRadius20,
    ...overflowHidden,
  },
  chip: {
    ...w100,
  },
  caption: {
    ...textLite,
    ...marginBottom5,
  },
});

export default styles;