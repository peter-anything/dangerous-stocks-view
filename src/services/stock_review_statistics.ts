import request from 'utils/request';

export interface IStockReviewStatistics {
  key: string;
  value: string;
}

interface IStockReviewStatisticsResult {
  list: IStockReviewStatistics[];
  total: number;
}

interface IParams {
  pageSize: number;
  current: number;
  createdAt: string;
  industry: string;
  upLimitType: string;
  analysisType: string;
}

export const getStockReviewStatisticsList = async (params: IParams) => {
  const result = await request.get<IStockReviewStatisticsResult>('/stock/daily_stock_review_statistics/', { params });

  // 模拟接口分页
  let list = result?.data?.list || [];
  const total = result?.data?.total;
  list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
  return {
    list,
    total,
  };
};
