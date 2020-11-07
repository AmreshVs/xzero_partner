import { StyleSheet } from 'react-native';

import { wh100, overflowHidden, positionAbsolute, w100, alignItemsCenter, w200, h200, whiteBg, borderRadius10 } from 'constants/commonStyles';

const styles = StyleSheet.create({
  container: {
    ...wh100,
    ...overflowHidden,
  },
  scanner: {
    transform: [{
      scale: 1.2,
    }],
    zIndex: -1,
    ...positionAbsolute,
    ...wh100,
  },
  buttonContainer: {
    bottom: 30,
    ...positionAbsolute,
    ...w100,
    ...alignItemsCenter
  },
  frame: {
    opacity: 0.2,
    ...w200,
    ...h200,
    ...positionAbsolute,
    ...whiteBg,
    ...borderRadius10
  },
});

export default styles;