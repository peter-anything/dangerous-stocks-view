import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getStockFundamentalList, IStockFundamental } from 'services/stock_fundamental';

const namespace = 'list/select';

interface IInitialState {
  loading: boolean;
  current: number;
  pageSize: number;
  total: number;
  stockFudamentalList: IStockFundamental[];
}

const initialState: IInitialState = {
  loading: true,
  current: 1,
  pageSize: 10,
  total: 0,
  stockFudamentalList: [],
};

interface IQueryParams {
  pageSize: number;
  current: number;
  code?: string;
  name?: string;
  turnoverRate?: Array<string>;
}

export const getList = createAsyncThunk(
  `${namespace}/getSelectList`,
  async (params: IQueryParams) => {
    const result = await getStockFundamentalList({
      pageSize: params.pageSize,
      current: params.current,
      code: params.code,
      name: params.name,
      turnoverRateLow: params.turnoverRate?.at(0),
      turnoverRateHigh: params.turnoverRate?.at(1)
    });
    return {
      list: result?.list,
      total: result?.total,
      pageSize: params.pageSize,
      current: params.current,
    };
  },
);

const listSelectSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    clearPageState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.loading = false;
        state.stockFudamentalList = action.payload?.list;
        state.total = action.payload?.total;
        state.pageSize = action.payload?.pageSize;
        state.current = action.payload?.current;
      })
      .addCase(getList.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearPageState } = listSelectSlice.actions;

export const selectListSelect = (state: RootState) => state.listStockFundamentalSelect;

export default listSelectSlice.reducer;
