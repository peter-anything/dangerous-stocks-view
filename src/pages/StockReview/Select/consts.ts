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
