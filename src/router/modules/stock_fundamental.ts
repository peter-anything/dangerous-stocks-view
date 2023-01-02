import { lazy } from 'react';
import { ViewModuleIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/stock',
    meta: {
      title: '股票',
      Icon: ViewModuleIcon,
    },
    children: [
      {
        path: 'stock_list',
        Component: lazy(() => import('pages/StockList/Tree')),
        meta: { title: '所有股票' },
      },
      {
        path: 'stock_fundamental',
        Component: lazy(() => import('pages/StockFundamental/Tree')),
        meta: { title: '股票基本面' },
      },
      {
        path: 'mystock',
        Component: lazy(() => import('pages/MyStocks/Tree')),
        meta: { title: '我的持仓' },
      },
      {
        path: 'recommendStock',
        Component: lazy(() => import('pages/RecommendStocks/Tree')),
        meta: { title: '推荐股票' },
      },
      {
        path: 'manualRecommendStock',
        Component: lazy(() => import('pages/ManualRecommendStocks/Tree')),
        meta: { title: '手动推荐股票' },
      },
      {
        path: 'recommendIndustry',
        Component: lazy(() => import('pages/RecommendIndustries/Tree')),
        meta: { title: '推荐行业' },
      },
      {
        path: 'stockReview',
        Component: lazy(() => import('pages/StockReview/Tree')),
        meta: { title: '股票复盘' },
      },
      {
        path: 'stockReviewStatistics',
        Component: lazy(() => import('pages/StockReviewStatistics/Tree')),
        meta: { title: '股票复盘统计' },
      },
    ],
  },
];

export default result;
