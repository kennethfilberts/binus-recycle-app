import axios from 'axios';
import {BASE_URL} from '@env';

console.log(`${BASE_URL}/api/v1/recycle/history/`);

export const requestRecycleHistory = (studentID: string) => {
  return axios.get(`${BASE_URL}/api/v1/recycle/history/${studentID}`);
};
