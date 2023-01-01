import request from 'utils/request';

export interface IStockFundamental {
  code: string;
  name: string;
  marketValue: number;
  tradingMarketValue: number;
  open: number;
  high: number;
  low: number;
  pe: number;
  turnoverRate: number;
  turnoverVolume: number;
  tradingMoney: number;
  createdAt: string;
}

interface IStockFundamentalResult {
  list: IStockFundamental[];
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

export const getStockFundamentalList = async (params: IParams) => {
  const result = await request.get<IStockFundamentalResult>('/stock/all_stock_fundamentals/', { params });

  // 模拟接口分页
  let list = result?.data?.list || [];
  const total = result?.data?.total;
  list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
  return {
    list,
    total,
  };
};
