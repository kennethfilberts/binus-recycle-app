import axios from 'axios';
import {BASE_URL} from '@env';

console.log(`${BASE_URL}/api/v1/reward/`);
export const requestRewards = () => {
  return axios.get(`${BASE_URL}/api/v1/reward/`);
};
