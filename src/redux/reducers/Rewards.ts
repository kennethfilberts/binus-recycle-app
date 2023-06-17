import {createSlice} from '@reduxjs/toolkit';

interface RewardState {
  RewardID: string;
  RewardName: string;
  RewardDescription: string;
  RewardPoints: number;
}

interface RewardArrayState {
  rewards: RewardState[];
  isLoading: boolean;
}

const initialState: RewardArrayState = {
  rewards: [],
  isLoading: false,
};

const rewardsSlice = createSlice({
  name: 'rewards',
  initialState,
  reducers: {
    getRewards: state => {
      state.isLoading = true;
    },
    getRewardsSuccess: (state, action) => {
      state.isLoading = false;
      state.rewards = action.payload;
    },
    getRewardsError: state => {
      state.isLoading = false;
    },
  },
});

export const {getRewards, getRewardsSuccess, getRewardsError} =
  rewardsSlice.actions;
export default rewardsSlice.reducer;
