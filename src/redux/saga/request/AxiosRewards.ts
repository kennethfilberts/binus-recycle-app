import axios from 'axios';
import {BASE_URL} from '@env';

export const requestRewards = () => {
  return axios.get(`${BASE_URL}/api/v1/reward/`);
};
