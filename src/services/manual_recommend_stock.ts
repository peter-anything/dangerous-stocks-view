import { S } from 'mockjs';
import request from 'utils/request';

export interface IManualRecommendStock {
  code: string;
  name: string;
  industry: string;
  concepts: string;
  type: string;
  openHigh: number;
  open: number;
  close: number;
  now: number;
  high: number;
  low: number;
  openHighRate: number;
  detailUrl: string;
  closeMoney: number;
  nowRate: number;
  riseUpRate: number,
  downRate: number,
  afterHalfHourRiseUpRate: number,
  afterHalfHourDownRate: number,
  afterHalfHourNowRate: number,
  marketValue: number,
  tradingMarketValue: number,
  pe: number,
  turnoverRate: number,
  needAlert: number,
}

interface IManualRecommendStockResult {
  list: IManualRecommendStock[];
  total: number;
}

interface IParams {
  pageSize: number;
  current: number;
}

export const getManualRecommendStockList = async (params: IParams) => {
  const result = await request.get<IManualRecommendStockResult>('/stock/manual_recommend_stocks/', { params });

  // 模拟接口分页
  let list = result?.data?.list || [];
  const total = result?.data?.total;
  list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
  return {
    list,
    total,
  };
};
