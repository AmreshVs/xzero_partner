import { StyleSheet } from 'react-native';

import { getShadowStyle } from 'constants/commonFunctions';
import { padding10, borderRadius10, borderRadius20, marginBottom5, w100, h100, overflowHidden, whiteBg, marginBottom10, textLite, textBoldDark, h100px, w100px, wh100, paddingBottom10, paddingHorizontal10, flex1, borderRadius15, resizeModeContain } from 'constants/commonStyles';

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
    width: 85,
  },
  caption: {
    ...textLite,
    ...marginBottom5,
  },
  userImage: {
    height: 80,
    width: 80,
    ...resizeModeContain,
    ...borderRadius15,
    ...whiteBg,
  },
  userContainer: {
    paddingVertical: 5,
    ...flex1,
    ...marginBottom10,
    ...whiteBg,
    ...w100,
    ...borderRadius10,
    ...paddingHorizontal10
  },
});

export default styles;