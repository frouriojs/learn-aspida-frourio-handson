import $api from '../../server/api/$api';
import aspida from '@aspida/fetch';

export const api = $api(aspida(undefined, {
  baseURL: 'http://localhost:8888',
}));
