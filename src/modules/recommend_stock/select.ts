import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getRecommendList, IRecommendStock } from 'services/recommend_stock';

const namespace = 'list/select';

interface IInitialState {
  loading: boolean;
  current: number;
  pageSize: number;
  total: number;
  mystockList: IRecommendStock[];
}

const initialState: IInitialState = {
  loading: true,
  current: 1,
  pageSize: 100,
  total: 0,
  mystockList: [],
};

interface IQueryParams {
  pageSize: number;
  current: number;
}

export const getList = createAsyncThunk(
  `${namespace}/getSelectList`,
  async (params: IQueryParams) => {
    const result = await getRecommendList({
      pageSize: params.pageSize,
      current: params.current
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
        state.mystockList = action.payload?.list;
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

export const selectListSelect = (state: RootState) => state.listRecommendStockSelect;

export default listSelectSlice.reducer;
