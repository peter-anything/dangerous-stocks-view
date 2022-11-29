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
        path: 'recommendIndustry',
        Component: lazy(() => import('pages/RecommendIndustries/Tree')),
        meta: { title: '推荐行业' },
      },
    ],
  },
];

export default result;
