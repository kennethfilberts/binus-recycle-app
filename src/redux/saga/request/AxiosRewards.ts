import axios from 'axios';

export const requestRewards = () => {
  return axios.get(`${process.env.BASE_URL}/api/v1/reward/`);
};
