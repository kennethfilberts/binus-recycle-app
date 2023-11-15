import {createSlice} from '@reduxjs/toolkit';

interface RecycleHistoryState {
  RecyclingID: string;
  BuildingName: string;
  CategoryName: string;
  PointsObtained: number;
  ItemWeight: number;
  RecyclingDate: Date;
}

interface RecycleHistoryArrayState {
  recycleHistory: RecycleHistoryState[];
  isLoading: boolean;
}

const initialState: RecycleHistoryArrayState = {
  recycleHistory: [],
  isLoading: false,
};

const recycleHistorySlice = createSlice({
  name: 'recycleHistory',
  initialState,
  reducers: {
    getRecycleHistory: state => {
      state.isLoading = true;
    },
    getRecycleHistorySuccess: (state, action) => {
      state.isLoading = false;
      state.recycleHistory = action.payload;
    },
    getRecycleHistoryError: state => {
      state.isLoading = false;
    },
  },
});

export const {
  getRecycleHistory,
  getRecycleHistorySuccess,
  getRecycleHistoryError,
} = recycleHistorySlice.actions;
export default recycleHistorySlice.reducer;
