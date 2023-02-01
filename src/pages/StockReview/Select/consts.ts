interface IOption {
  value: number | string;
  label: string;
}

// 合同状态枚举
export const CONTRACT_STATUS = {
  FAIL: 0,
  AUDIT_PENDING: 1,
  EXEC_PENDING: 2,
  EXECUTING: 3,
  FINISH: 4,
};

// 合同状态枚举
export const MY_STOCK_STATUS = {
  ALL: 0,
  VALID: 1,
  INVALID: 2
};


// 合同状态枚举
export const UPLIMIT_STATUS = {
  UPLIMIT: 1,
  DOWNLIMIT: 2,
  UP: 3,
  DOWN: 4,
  ZERO: 5,
  ALL: 0
};


export const STOCK_REVIEW_ORDER_BY_STATUS = {
  INDUSTRY: 'industry',
  MARKETVALUE: 'tradingMarketValue',
  UPLIMIT_COUNT: 'continuousUpLimitCount',
  TURNOVER_RATE: 'turnoverRate',
  CONCEPT: 'concept',
};
// concept_map = {
//   '人工智能': ['人工智能'],
//   '军工': ['国防军工', '军工电子', '航天军工', '航天航空', '航天科工集团', '航空工业集团', '军工航天'],
//   '稀土和有色': ['小金属', '稀土永磁', '有色铝', '有色锌'],
//   '网安': ['网络安全', '安全'],
//   '国资云': ['云服务'],
//   '数字经济': ['数字经济'],
//   '信创': ['信创'],
//   '中字头': ['中字头'],
//   'TOPCon': ['TOPCon电池', 'TOPCon'],
//   'HJT电池': ['HJT电池'],
//   '工业母机': ['工业母机'],
//   '储能': ['储能'],
//   '动力煤': ['动力煤'],
//   '航天航空': ['航天军工', '航天航空', '航天科工集团', '航空工业集团', '军工航天'],
//   '新基建': ['新基建'],
//   '种业': ['种业'],
//   '家用电器': ['家用电器', '智能家居'],
//   '机器人': ['智能机器']
// }

export const STOCK_CONCEPT_STATUS = {
  AI: '人工智能',
  JG: '军工',
  XT: '稀土和有色',
  WA: '网安',
  GXY: '国资云',
  SZJJ: '数字经济',
  XC: '信创',
  ZZT: '中字头',
  TOPCON: 'TOPCon',
  HJT: 'HJT电池',
  GYMJ: '工业母机',
  CN: '储能',
  DLM: '动力煤',
  HK: '航天航空',
  XJJ: '新基建',
  ZY: '种业',
  DQ: '家用电器',
  JQR: '机器人',
  SPX: '试盘线'
};

export const STOCK_RECOMMEND_STATUS = {
  SPX: '试盘线',
  XYJC: '小阳建仓',
  FLTT: '放量突破',
}

export const MY_STOCK_STATUS_OPTIONS: Array<IOption> = [
  { value: MY_STOCK_STATUS.ALL, label: '所有持仓' },
  { value: MY_STOCK_STATUS.VALID, label: '当前持有' },
  { value: MY_STOCK_STATUS.INVALID, label: '历史持有' },
];

export const CONTRACT_STATUS_OPTIONS: Array<IOption> = [
  { value: CONTRACT_STATUS.FAIL, label: '审核失败' },
  { value: CONTRACT_STATUS.AUDIT_PENDING, label: '待审核' },
  { value: CONTRACT_STATUS.EXEC_PENDING, label: '待履行' },
  { value: CONTRACT_STATUS.EXECUTING, label: '审核成功' },
  { value: CONTRACT_STATUS.FINISH, label: '已完成' },
];

export const UPLIMIT_STATUS_OPTIONS: Array<IOption> = [
  { value: UPLIMIT_STATUS.UPLIMIT, label: '涨停' },
  { value: UPLIMIT_STATUS.DOWNLIMIT, label: '跌停' },
  { value: UPLIMIT_STATUS.UP, label: '上涨' },
  { value: UPLIMIT_STATUS.DOWN, label: '下跌' },
  { value: UPLIMIT_STATUS.ZERO, label: '平' },
  { value: UPLIMIT_STATUS.ALL, label: '所有' },
];


export const STOCK_REVIEW_ORDER_BY__OPTIONS: Array<IOption> = [
  { value: STOCK_REVIEW_ORDER_BY_STATUS.INDUSTRY, label: '行业' },
  { value: STOCK_REVIEW_ORDER_BY_STATUS.MARKETVALUE, label: '市值' },
  { value: STOCK_REVIEW_ORDER_BY_STATUS.UPLIMIT_COUNT, label: '连板数量' },
  { value: STOCK_REVIEW_ORDER_BY_STATUS.TURNOVER_RATE, label: '换手率' },
];

export const STOCK_CONCEPT_STATUS_OPTIONS: Array<IOption> = [
  { value: STOCK_CONCEPT_STATUS.AI, label: '人工智能' },
  { value: STOCK_CONCEPT_STATUS.JG, label: '军工' },
  { value: STOCK_CONCEPT_STATUS.XT, label: '稀土和有色' },
  { value: STOCK_CONCEPT_STATUS.WA, label: '网安' },
  { value: STOCK_CONCEPT_STATUS.GXY, label: '国资云' },
  { value: STOCK_CONCEPT_STATUS.SZJJ, label: '数字经济' },
  { value: STOCK_CONCEPT_STATUS.XC, label: '信创' },
  { value: STOCK_CONCEPT_STATUS.ZZT, label: '中字头' },
  { value: STOCK_CONCEPT_STATUS.TOPCON, label: 'TOPCon' },
  { value: STOCK_CONCEPT_STATUS.HJT, label: 'HJT电池' },
  { value: STOCK_CONCEPT_STATUS.GYMJ, label: '工业母机' },
  { value: STOCK_CONCEPT_STATUS.CN, label: '储能' },
  { value: STOCK_CONCEPT_STATUS.DLM, label: '动力煤' },
  { value: STOCK_CONCEPT_STATUS.HK, label: '航天航空' },
  { value: STOCK_CONCEPT_STATUS.XJJ, label: '新基建' },
  { value: STOCK_CONCEPT_STATUS.ZY, label: '种业' },
  { value: STOCK_CONCEPT_STATUS.DQ, label: '家用电器' },
  { value: STOCK_CONCEPT_STATUS.JQR, label: '机器人' },

];

export const STOCK_RECOMMEND_STATUS_OPTIONS: Array<IOption> = [
  { value: STOCK_RECOMMEND_STATUS.SPX, label: '试盘线' },
  { value: STOCK_RECOMMEND_STATUS.XYJC, label: '小阳建仓' },
  { value: STOCK_RECOMMEND_STATUS.FLTT, label: '放量突破' },
]
// 合同类型枚举
export const CONTRACT_TYPES = {
  MAIN: 0,
  SUB: 1,
  SUPPLEMENT: 2,
};

export const CONTRACT_TYPE_OPTIONS: Array<IOption> = [
  { value: CONTRACT_TYPES.MAIN, label: '主合同' },
  { value: CONTRACT_TYPES.SUB, label: '子合同' },
  { value: CONTRACT_TYPES.SUPPLEMENT, label: '补充合同' },
];
