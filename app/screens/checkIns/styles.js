import { StyleSheet } from 'react-native';

import { getShadowStyle } from 'constants/commonFunctions';
import { padding10, borderRadius10, borderRadius20, marginBottom5, w100, h100, overflowHidden, whiteBg, marginBottom10, textLite, textBoldDark, h100px, w100px, wh100, paddingBottom10, paddingHorizontal10, flex1, borderRadius15, resizeModeContain, justifyContentSpaceBetween, flexRow, padding0, paddingVertical10 } from 'constants/commonStyles';

const styles = StyleSheet.create({
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
    marginBottom: 1
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
  caption: {
    ...textLite,
    ...marginBottom5,
  },
  userImage: {
    height: 60,
    width: 60,
    ...resizeModeContain,
    ...borderRadius15,
    ...whiteBg,
  },
  userContainer: {
    ...paddingVertical10,
    ...flex1,
    ...marginBottom10,
  },
  contentContainer: {
    width: '85%',
    paddingLeft: 15,
    ...justifyContentSpaceBetween,
    ...flexRow
  }
});

export default styles;