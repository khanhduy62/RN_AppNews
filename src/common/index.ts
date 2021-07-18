import {Platform} from 'react-native';
import {BaseURL} from 'services/api.base';

export const getImageURL = (url: string) => BaseURL + '/static/' + url;

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
