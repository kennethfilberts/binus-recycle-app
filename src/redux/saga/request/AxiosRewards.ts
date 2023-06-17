import axios from 'axios';

console.log(`${process.env.BASE_URL}/api/v1/reward/`);
export const requestRewards = () => {
  return axios.get(`${process.env.BASE_URL}/api/v1/reward/`, {timeout: 5000});
};
