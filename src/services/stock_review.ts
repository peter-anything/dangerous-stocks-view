import request from 'utils/request';

export interface IStockReview {
  code: string;
  name: string;
  marketValue: number;
  tradingMarketValue: number;
  open: number;
  now: number;
  turnoverRate: number;
  createdAt: string;
  closeMoney: number;
  type: string;
  industry: string;
  concepts: string;
  detailUrl: string;
  firstUpLimitTime: string;
  finalUpLimitTime: string;
  breakUpLimitCount: number;
  continuousUpLimitCount: number;
  upDownStatistics: string;
}

interface IStockReviewResult {
  list: IStockReview[];
  total: number;
}

interface IParams {
  pageSize: number;
  current: number;
  createdAt?: string;
  industry?: string;
  upLimitType?: string;
  name?: string;
  orderBy?: string;
  concept?: string;
  recommend?: string;
}

export const getStockReviewList = async (params: IParams) => {
  const result = await request.get<IStockReviewResult>('/stock/daily_stock_review/', { params });

  // 模拟接口分页
  let list = result?.data?.list || [];
  const total = result?.data?.total;
  list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
  return {
    list,
    total,
  };
};
