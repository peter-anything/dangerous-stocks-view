import request from 'utils/request';

export interface IStock {
  code: string;
  name: string;
  buyPrice: number;
  nowPrice: number;
  roi: string;
}

interface IResult {
  list: IStock[];
}

interface IParams {
  pageSize: number;
  current: number;
}

export const getStockList = async (params: IParams) => {
  const result = await request.get<IResult>('/personal_stock/stocks/');

  // 模拟接口分页
  console.log(result);
  let list = result?.data?.list || [];
  list.forEach((stock, idx, arr) => {
    arr[idx].roi = (((stock.nowPrice - stock.buyPrice) / stock.buyPrice)* 100).toFixed(4) + "%";
  })

  const total = list.length;
  list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
  return {
    list,
    total,
  };
};
