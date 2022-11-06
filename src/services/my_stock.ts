import request from 'utils/request';

export interface IMyStock {
  code: string;
  name: string;
  marketValue: number;
  tradingMarketValue: number;
  open: number;
  high: number;
  low: number;
  now: number;
  turnoverRate: number;
  turnoverVolume: number;
  tradingMoney: number;
  createdAt: string;
  buyPrice: number;
  nowPrice: number;
  roi: string;
}

interface IMyStockResult {
  list: IMyStock[];
  total: number;
}

interface IParams {
  pageSize: number;
  current: number;
}

export const getMyStockList = async (params: IParams) => {
  const result = await request.get<IMyStockResult>('/personal_stock/my_stocks/', { params });

  // 模拟接口分页
  let list = result?.data?.list || [];
  list.forEach((value, idx, arr) => {
    value.roi = (((value.now - value.buyPrice) / value.buyPrice) * 100).toFixed(3);
    arr[idx] = value;
  })
  const total = result?.data?.total;
  list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
  return {
    list,
    total,
  };
};
