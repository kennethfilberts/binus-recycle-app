import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './reducers/AuthReducer';
import rewardsReducer from './reducers/Rewards';
import createSagaMiddleware from 'redux-saga';
import rewardsSaga from './saga/handler/RewardsSaga';

const rootReducer = combineReducers({
  auth: authReducer,
  rewards: rewardsReducer,
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
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
