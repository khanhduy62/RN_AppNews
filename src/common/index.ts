import {BaseURL} from 'services/api.base';

export const getImageURL = (url: string) => BaseURL + '/static/' + url;
