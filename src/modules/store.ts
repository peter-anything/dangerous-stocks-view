import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

import global from './global';
import user from './user';
import listBase from './list/base';
import listSelect from './list/select';
import listCard from './list/card';
import listStockFundamentalSelect from './stock_fundamental/select'
import listMyStockSelect from './my_stock/select'
import listStockSelect from './stock/select'
import listRecommendStockSelect from './recommend_stock/select'
import listRecommendIndustrySelect from './recommend_industry/select'
import listManualRecommendStockSelect from './manual_recommend_stock/select'

const reducer = combineReducers({
  global,
  user,
  listBase,
  listSelect,
  listCard,
  listStockFundamentalSelect,
  listMyStockSelect,
  listRecommendStockSelect,
  listManualRecommendStockSelect,
  listRecommendIndustrySelect,
  listStockSelect
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
