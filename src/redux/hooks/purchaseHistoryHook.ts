import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPurchaseHistory} from '../reducers/PurchaseHistoryReducer';
import {RootState} from '../Store';

export const usePurchaseHistoryData = () => {
  const dispatch = useDispatch();
  const purchaseHistory = useSelector(
    (state: RootState) => state.purchaseHistory.purchaseHistory,
  );

  useEffect(() => {
    dispatch(getPurchaseHistory());
  }, [dispatch]);

  return {purchaseHistory};
};
