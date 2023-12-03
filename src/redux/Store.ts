import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './reducers/AuthReducer';
import rewardsReducer from './reducers/Rewards';
import purchaseHistoryReducer from './reducers/PurchaseHistoryReducer';
import recycleHistoryReducer from './reducers/RecycleHistoryReducer';
import baseUrlReducer from './reducers/BaseUrlReducer';
import createSagaMiddleware from 'redux-saga';
import rewardsSaga from './saga/handler/RewardsSaga';
import purchaseHistorySaga from './saga/handler/PurchaseHistorySaga';
import recycleHistorySaga from './saga/handler/RecycleHistorySaga';

const rootReducer = combineReducers({
  auth: authReducer,
  rewards: rewardsReducer,
  purchaseHistory: purchaseHistoryReducer,
  recycleHistory: recycleHistoryReducer,
  baseUrl: baseUrlReducer,
});

const persistedReducer = persistReducer(
  {key: 'root', storage: AsyncStorage},
  rootReducer,
);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rewardsSaga);
sagaMiddleware.run(purchaseHistorySaga);
sagaMiddleware.run(recycleHistorySaga);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
