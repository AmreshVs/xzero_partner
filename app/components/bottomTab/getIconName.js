import { PROFILE_TAB_SCREEN, HOME_TAB_SCREEN, CHECK_INS_TAB_SCREEN, OFFERS_TAB_SCREEN, SCAN_TAB_SCREEN } from "navigation/routes";

export default function getIconName(routeName) {
  switch (routeName) {
    case HOME_TAB_SCREEN:
      return 'home';
    case PROFILE_TAB_SCREEN:
      return 'user';
    case CHECK_INS_TAB_SCREEN:
      return 'clipboard-check';
    case OFFERS_TAB_SCREEN:
      return 'percentage';
    case SCAN_TAB_SCREEN:
      return 'qrcode';
    default:
      return 'archive';
  }
};
