import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getStockList, IStock } from 'services/stock';

const namespace = 'list/select';

interface IInitialState {
  loading: boolean;
  current: number;
  pageSize: number;
  total: number;
  stockList: IStock[];
}

const initialState: IInitialState = {
  loading: true,
  current: 1,
  pageSize: 10,
  total: 0,
  stockList: [],
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
    const result = await getStockList({
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
        state.stockList = action.payload?.list;
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

export const selectListSelect = (state: RootState) => state.listStockSelect;

export default listSelectSlice.reducer;
