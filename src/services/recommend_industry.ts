import { S } from 'mockjs';
import request from 'utils/request';

export interface IRecommendIndustry {
  industry: string;
  count: string;
  bidTime: string;
}

interface IRecommendIndustrykResult {
  list: IRecommendIndustry[];
  total: number;
}

interface IParams {
  pageSize: number;
  current: number;
}

export const getRecommendIndustryList = async (params: IParams) => {
  const result = await request.get<IRecommendIndustrykResult>('/stock/recommend_industries/', { params });

  // 模拟接口分页
  let list = result?.data?.list || [];
  const total = result?.data?.total;
  list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
  return {
    list,
    total,
  };
};
