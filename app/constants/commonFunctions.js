import { Platform, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const getShadowStyle = () => {
  if (Platform.OS === 'ios') {
    return {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 9.84,
      elevation: 5,
    }
  }

  return {
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 10,
    overflow: 'hidden'
  }
}

export const getUserData = async () => {
  let userData = await AsyncStorage.getItem('@xzero_user');
  return JSON.parse(userData);
}

export const getJWT = async () => {
  let jwt = await AsyncStorage.getItem('@xzero_jwt');
  return JSON.parse(jwt);
}

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

export const dateDiffInDays = (a, b) => {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export const getFormatedDate = (date) => {
  return String(date.getDate()).padStart(2, '0') + "/" + String(date.getMonth() + 1).padStart(2, '0') + "/" + date.getFullYear();
}

export const firstLetterUpper = (name) => {
  return name !== undefined ? name.charAt(0).toUpperCase() + name.slice(1) : '';
};

export const dialNumber = (number) => {
  let phoneNumber = '';
  if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
  else { phoneNumber = `telprompt://${number}`; }
  Linking.openURL(phoneNumber);
};

export const openMaps = (lat, lng, label) => {
  const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
  const latLng = `${lng},${lat}`;
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${label}@${latLng}`
  });
  Linking.openURL(url);
}

export const sendWhatsappMessage = (msg, number) => {
  Linking.openURL(`whatsapp://send?text=${msg}&phone=${number}`)
}

export const handleMobileNumber = (mobile_number) => {
  let mobile = String(mobile_number);
  mobile.replace('+', '');

  let extension_pattern = /971/g;
  if (!extension_pattern.test(mobile)) {
    return String('+971' + mobile);
  }

  return String('+' + mobile);
};

export const handleDOB = (dobDate) => {
  let year = dobDate.slice(0, 4);
  let month = dobDate.slice(5, 7);
  let day = Number(dobDate.slice(8, 10));

  return day + '/' + month + "/" + year;
}

export const handleServerDOB = (dobDate) => {
  let day = Number(dobDate.slice(0, 2));
  let month = dobDate.slice(3, 5);
  let year = dobDate.slice(6, 10);

  return year + '-' + month + "-" + day;
}