import request from 'utils/request';

export interface IStock {
  code: string;
  name: string;
  market: string;
  category: string;
  type: string;
}

interface IStockResult {
  list: IStock[];
  total: number;
}

interface IParams {
  pageSize: number;
  current: number;
  code?: string;
  name?: string;
  turnoverRateLow?: string;
  turnoverRateHigh?: string;
}
export const getStockList = async (params: IParams) => {
  const result = await request.get<IStockResult>('/stock/all_stocks/', { params });

  // 模拟接口分页
  let list = result?.data?.list || [];
  const total = result?.data?.total;
  list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
  return {
    list,
    total,
  };
};
