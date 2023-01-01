import { S } from 'mockjs';
import request from 'utils/request';

export interface IRecommendStock {
  code: string;
  name: string;
  industry: string;
  concepts: string;
  openHigh: number;
  open: number;
  close: number;
  now: number;
  openHighRate: number;
  detailUrl: string;
  closeMoney: string;
  nowGrowthRate: number;
  marketValue: number;
}

interface IRecommendStockResult {
  list: IRecommendStock[];
  total: number;
}

interface IParams {
  pageSize: number;
  current: number;
}

export const getRecommendList = async (params: IParams) => {
  const result = await request.get<IRecommendStockResult>('/stock/recommend_stocks/', { params });

  // 模拟接口分页
  let list = result?.data?.list || [];
  const total = result?.data?.total;
  list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
  return {
    list,
    total,
  };
};
