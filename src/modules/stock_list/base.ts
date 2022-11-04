import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getStockList, IContract } from 'services/stock';

const namespace = 'personal_stock';

interface IInitialState {
  loading: boolean;
  current: number;
  pageSize: number;
  total: number;
  stockList: IContract[];
}

const initialState: IInitialState = {
  loading: true,
  current: 1,
  pageSize: 10,
  total: 0,
  stockList: [],
};

export const getSList = createAsyncThunk(
  `${namespace}/stocks`,
  async (params: { pageSize: number; current: number }) => {
    const result = await getStockList(params);
    console.log(result);
    return {
      list: result?.list,
      total: result?.total,
      pageSize: params.pageSize,
      current: params.current,
    };
  },
);

const listBaseSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    clearPageState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSList.fulfilled, (state, action) => {
        state.loading = false;
        state.stockList = action.payload?.list;
        state.total = action.payload?.total;
        state.pageSize = action.payload?.pageSize;
        state.current = action.payload?.current;
      })
      .addCase(getSList.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearPageState } = listBaseSlice.actions;

export const selectListBase = (state: RootState) => state.stocklistBase;

export default listBaseSlice.reducer;
