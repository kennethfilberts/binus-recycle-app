import {call, put, select, takeLatest} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';
import {requestPurchaseHistory} from '../request/AxiosPurchaseHistory';
import {getPurchaseHistorySuccess} from '../../reducers/PurchaseHistoryReducer';
import {RootState} from '../../Store';

interface purchaseHistory {
  TransactionID: string;
  StudentID: string;
  RewardID: string;
  PurchaseAmount: number;
  PurchaseDate: Date;
  RewardName: string;
  RewardDescription: string;
  RewardPoints: number;
}

interface purchaseHistoryResponse {
  data: purchaseHistory[];
}

function* handlePurchaseHistory() {
  try {
    const studentID: string = yield select(
      (state: RootState) => state.auth.StudentID,
    );

    const {data: response}: AxiosResponse<purchaseHistoryResponse> = yield call(
      requestPurchaseHistory,
      studentID,
    );
    const purchaseHistory: purchaseHistory[] = response.data.map(
      (item: purchaseHistory) => ({
        TransactionID: item.TransactionID,
        StudentID: item.StudentID,
        RewardID: item.RewardID,
        PurchaseAmount: item.PurchaseAmount,
        PurchaseDate: item.PurchaseDate,
        RewardName: item.RewardName,
        RewardDescription: item.RewardDescription,
        RewardPoints: item.RewardPoints,
      }),
    );
    console.log('here');
    yield put(getPurchaseHistorySuccess(purchaseHistory));
  } catch (err) {
    console.log(err);
  }
}

function* purchaseHistorySaga() {
  yield takeLatest('purchaseHistory/getPurchaseHistory', handlePurchaseHistory);
}

export default purchaseHistorySaga;
