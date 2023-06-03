import {call, put, takeLatest} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';
import {requestRewards} from '../request/AxiosRewards';
import {getRewardsSuccess} from '../../reducers/Rewards';

interface Reward {
  RewardID: string;
  RewardName: string;
  RewardDescription: string;
  RewardPoints: number;
}

interface RewardResponse {
  data: Reward[];
}

function* handleRewards() {
  try {
    const {data: response}: AxiosResponse<RewardResponse> = yield call(
      requestRewards,
    );

    const rewards: Reward[] = response.data.map((item: Reward) => ({
      RewardID: item.RewardID,
      RewardName: item.RewardName,
      RewardDescription: item.RewardDescription,
      RewardPoints: item.RewardPoints,
    }));

    yield put(getRewardsSuccess(rewards));
  } catch (err) {
    console.log(err);
  }
}

function* rewardsSaga() {
  yield takeLatest('rewards/getRewards', handleRewards);
}

export default rewardsSaga;
