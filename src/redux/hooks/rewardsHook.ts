import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getRewards} from '../reducers/Rewards';
import {RootState} from '../Store';

export const useRewardsData = () => {
  const dispatch = useDispatch();
  const rewards = useSelector((state: RootState) => state.rewards.rewards);

  useEffect(() => {
    dispatch(getRewards());
  }, [dispatch]);

  return {rewards};
};
