import { StyleSheet } from 'react-native';

import { getShadowStyle } from 'constants/commonFunctions';
import { SCREEN_HEIGHT } from 'constants/common';
import { colorWhite, h100, marginTop10, textBoldDark, textLite, marginTop5, margin10, w100, marginBottom5, textAlignLeft, wh100, padding15, borderRadius10, font18, positionAbsolute, flexSpaceBetween, colorDanger, marginBottom0, paddingHorizontal10, marginHorizontal10, h100px, overflowHidden, w100px } from 'constants/commonStyles';

const styles = StyleSheet.create({
  rootContainer: {
    ...h100,
  },
  helpContainer: {
    ...margin10,
    height: SCREEN_HEIGHT / 1.6
  },
  infoContainer: {
    ...w100,
  },
  about: {
    ...marginBottom5,
    ...textAlignLeft,
    ...textBoldDark
  },
  helpCaption: {
    ...textLite,
    ...marginBottom5
  },
  memberContainer: {
    height: 230,
    ...getShadowStyle(),
    ...paddingHorizontal10,
    ...marginTop10,
    ...w100,
  },
  gradient: {
    ...wh100,
    ...borderRadius10,
    ...padding15,
  },
  title: {
    fontWeight: '800',
    ...font18,
    ...colorWhite,
  },
  cardName: {
    ...colorWhite,
  },
  logo: {
    width: 170,
    height: 170,
    opacity: 0.2,
    top: SCREEN_HEIGHT / 20,
    transform: [
      {
        scale: 2,
      },
    ],
    ...positionAbsolute,
  },
  textContainer: {
    ...h100,
    ...flexSpaceBetween,
  },
  serialContainer: {
    ...flexSpaceBetween,
    height: '50%',
  },
  serviceTitle: {
    ...textBoldDark,
    ...marginBottom5,
  },
  image: {
    width: 70,
    height: 70
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
  serviceCaption: {
    ...textLite,
    ...marginBottom5,
  },
  offerContainer: {
    paddingVertical: 10
  },
  offerContainerSelected: {
    paddingVertical: 10,
    backgroundColor: '#EEE',
    borderRadius: 10
  },
  flatlist: {
    paddingBottom: 10
  },
});

export default styles;