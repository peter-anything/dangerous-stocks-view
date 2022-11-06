import React, { useState, memo, useEffect } from 'react';
import { Table, Dialog, Button, Row } from 'tdesign-react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { selectListSelect, getList, clearPageState } from 'modules/stock_fundamental/select';
import SearchForm from './components/SearchForm';
import { StatusMap, ContractTypeMap, PaymentTypeMap } from '../Base';

import './index.module.less';
import classnames from 'classnames';
import CommonStyle from '../../../styles/common.module.less';

export const SelectTable = () => {
  const dispatch = useAppDispatch();
  const pageState = useAppSelector(selectListSelect);
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([0, 1]);
  const [visible, setVisible] = useState(false);
  const { loading, stockFudamentalList, current, pageSize, total } = pageState;

  useEffect(() => {
    dispatch(
      getList({
        pageSize: pageState.pageSize,
        current: pageState.current,
      }),
    );
    return () => {
      dispatch(clearPageState());
    };
  }, []);

  function onSelectChange(value: (string | number)[]) {
    setSelectedRowKeys(value);
  }

  function rehandleClickOp(record: any) {
    console.log(record);
  }

  function handleClickDelete(record: any) {
    console.log(record);
    setVisible(true);
  }

  function handleClose() {
    setVisible(false);
  }

  return (
    <>
      <Row justify='start' style={{ marginBottom: '20px' }}>
        <SearchForm
          onSubmit={async (value) => {
            console.log('real')
            dispatch(
              getList({
                pageSize: pageState.pageSize,
                current: 1,
                code: value.code,
                name: value.name,
                turnoverRate: value.turnoverRate
              }),
            );
          }}
          onCancel={() => {}}
        />
      </Row>
      <Table
        loading={loading}
        data={stockFudamentalList}
        columns={[
          {
            colKey: 'row-select',
            fixed: 'left',
            type: 'multiple',
            // width: 50,
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'code',
            title: '股票代码',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'name',
            title: '股票名称',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'marketValue',
            title: '市值',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'tradingMarketValue',
            title: '流值',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'open',
            title: '开盘价',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'high',
            title: '最高价',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'low',
            title: '最低价',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'pe',
            title: '市盈率',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'turnoverRate',
            title: '换手率',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'turnoverVolume',
            title: '换手',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'tradingMoney',
            title: '交易量',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'createdAt',
            title: '时间',
          },
        ]}
        rowKey='index'
        selectedRowKeys={selectedRowKeys}
        hover
        onSelectChange={onSelectChange}
        pagination={{
          pageSize,
          total,
          current,
          showJumper: true,
          onCurrentChange(current, pageInfo) {
            dispatch(
              getList({
                pageSize: pageInfo.pageSize,
                current: pageInfo.current,
              }),
            );
          },
          onPageSizeChange(size) {
            dispatch(
              getList({
                pageSize: size,
                current: 1,
              }),
            );
          },
        }}
      />
      <Dialog header='确认删除当前所选合同？' visible={visible} onClose={handleClose}>
        <p>删除后的所有合同信息将被清空,且无法恢复</p>
      </Dialog>
    </>
  );
};

const selectPage: React.FC = () => (
  <div className={classnames(CommonStyle.pageWithPadding, CommonStyle.pageWithColor)}>
    <SelectTable />
  </div>
);

export default memo(selectPage);
