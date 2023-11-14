import {createSlice} from '@reduxjs/toolkit';

interface PurchaseHistoryState {
  TransactionID: string;
  StudentID: string;
  RewardID: string;
  PurchaseAmount: number;
  PurchaseDate: Date;
  RewardName: string;
  RewardDescription: string;
  RewardPoints: number;
}

interface PurchaseHistoryArrayState {
  purchaseHistory: PurchaseHistoryState[];
  isLoading: boolean;
}

const initialState: PurchaseHistoryArrayState = {
  purchaseHistory: [],
  isLoading: false,
};

const purchaseHistorySlice = createSlice({
  name: 'purchaseHistory',
  initialState,
  reducers: {
    getPurchaseHistory: state => {
      state.isLoading = true;
    },
    getPurchaseHistorySuccess: (state, action) => {
      state.isLoading = false;
      state.purchaseHistory = action.payload;
    },
    getPurchaseHistoryError: state => {
      state.isLoading = false;
    },
  },
});

export const {
  getPurchaseHistory,
  getPurchaseHistorySuccess,
  getPurchaseHistoryError,
} = purchaseHistorySlice.actions;
export default purchaseHistorySlice.reducer;
