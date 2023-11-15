import {call, put, select, takeLatest} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';
import {requestRecycleHistory} from '../request/AxiosRecycleHistory';
import {getRecycleHistorySuccess} from '../../reducers/RecycleHistoryReducer';
import {RootState} from '../../Store';

interface recycleHistory {
  RecyclingID: string;
  BuildingName: string;
  CategoryName: string;
  PointsObtained: number;
  ItemWeight: number;
  RecyclingDate: Date;
}

interface recycleHistoryResponse {
  data: recycleHistory[];
}

function* handleRecycleHistory() {
  try {
    const studentID: string = yield select(
      (state: RootState) => state.auth.StudentID,
    );

    const {data: response}: AxiosResponse<recycleHistoryResponse> = yield call(
      requestRecycleHistory,
      studentID,
    );
    const recycleHistory: recycleHistory[] = response.data.map(
      (item: recycleHistory) => ({
        RecyclingID: item.RecyclingID,
        BuildingName: item.BuildingName,
        CategoryName: item.CategoryName,
        PointsObtained: item.PointsObtained,
        ItemWeight: item.ItemWeight,
        RecyclingDate: item.RecyclingDate,
      }),
    );
    yield put(getRecycleHistorySuccess(recycleHistory));
  } catch (err) {
    console.log(err);
  }
}

function* recycleHistorySaga() {
  yield takeLatest('recycleHistory/getRecycleHistory', handleRecycleHistory);
}

export default recycleHistorySaga;
