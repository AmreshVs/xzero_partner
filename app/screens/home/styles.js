import { StyleSheet } from 'react-native';

import { getShadowStyle } from 'constants/commonFunctions';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'constants/common';
import colors from 'constants/colors';
import { flexSpaceBetween, flexRow, borderRadius10, w100, textBoldDark, textLite, whiteBg, alignJustifyCenter, font16, positionAbsolute, colorWhite, font15, fontWeight700, marginBottom10, marginBottom5, marginTop5, borderRadius30, overflowHidden, colorDanger, font20, w50, h50, padding15, resizeModeCover, flex1, h100px, w100px, paddingBottom5, textAlignCenter, alignItemsCenter, paddingHorizontal10, borderRadius15, resizeModeContain, marginTop10, padding10 } from 'constants/commonStyles';

const styles = StyleSheet.create({
  topContainer: {
    top: -65,
    marginBottom: -65,
  },
  image: {
    height: SCREEN_WIDTH / 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...w100,
    ...resizeModeCover,
  },
  heading: {
    ...textBoldDark,
    ...marginBottom5,
  },
  caption: {
    ...textLite,
  },
  centerContainer: {
    ...flex1,
    ...marginBottom10,
    ...whiteBg,
    ...w100,
    ...borderRadius10,
    ...getShadowStyle(),
  },
  centerImageContainer: {
    ...whiteBg,
    ...borderRadius15,
    ...padding10
  },
  serviceImage: {
    width: 70,
    height: 70,
    ...resizeModeContain
  },
  userImage: {
    height: 60,
    width: 60,
    ...resizeModeContain,
    ...borderRadius15,
    ...whiteBg,
  },
  textContainer: {
    flex: 3,
  },
  userCaption: {
    ...textLite,
    ...marginTop5
  },
  chipContainer: {
    ...marginTop5,
    ...w100,
  },
  iconContainer: {
    ...w50,
    ...h50,
    ...overflowHidden,
    ...borderRadius30,
    ...alignJustifyCenter
  },
  membership: {
    marginTop: -SCREEN_HEIGHT / 10,
    ...paddingBottom5,
  },
  membershipContainer: {
    ...padding15,
    ...whiteBg,
    ...borderRadius10,
    ...getShadowStyle(),
  },
  secondaryText: {
    ...textLite,
  },
  title: {
    ...textBoldDark,
    ...font16
  },
  icon1: {
    backgroundColor: '#f0cfff',
  },
  icon2: {
    backgroundColor: colors.primary_lite,
  },
  icon3: {
    backgroundColor: '#ffb8c6',
  },
  count: {
    ...marginTop5,
    ...font16,
    ...textBoldDark,
  },
  buy: {
    ...colorDanger,
  },
  gradient: {
    height: 310
  },
  topSectionContainer: {
    ...positionAbsolute,
    ...w100,
  },
  navContainer: {
    ...flexRow,
    ...flexSpaceBetween,
  },
  iconContainer: {
    ...w50,
    ...h50,
    ...borderRadius30,
    ...overflowHidden,
    ...alignJustifyCenter,
  },
  centerName: {
    ...font20,
    ...colorWhite,
    ...fontWeight700,
    ...textAlignCenter,
    ...marginTop10,
  },
  textContiner: {
    ...alignItemsCenter,
  },
  centerPlace: {
    color: colors.lite_gray,
  },
  language: {
    marginHorizontal: 5,
    ...fontWeight700,
    ...font15,
    ...colorWhite,
  },
  usersContainer: {
    ...whiteBg,
    ...borderRadius10,
    ...marginBottom10,
    ...getShadowStyle(),
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