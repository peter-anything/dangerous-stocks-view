import React, { useState, memo, useEffect } from 'react';
import { Table, Dialog, Button, Row, Col, Link, Input, Space, Popup  } from 'tdesign-react';
import { ChevronUpCircleIcon, SearchIcon, ChevronDownCircleIcon } from 'tdesign-icons-react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { selectListSelect, getList, clearPageState } from 'modules/my_stock/select';
import SearchForm from './components/SearchForm';
import { StatusMap, ContractTypeMap, PaymentTypeMap } from '../Base';

import './index.module.less';
import classnames from 'classnames';
import CommonStyle from '../../../styles/common.module.less';
import style from './index.module.less';

export const SelectTable = () => {
  const dispatch = useAppDispatch();
  const pageState = useAppSelector(selectListSelect);
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([0, 1]);
  const [visible, setVisible] = useState(false);
  const { loading, mystockList, current, pageSize, total } = pageState;


  useEffect(() => {
    dispatch(
      getList({
        pageSize: pageState.pageSize,
        current: pageState.current,
      }),
    );

    setInterval(() => {
      dispatch(
        getList({
          pageSize: pageState.pageSize,
          current: pageState.current,
        }),
      );
    }, 3000);

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
      <Table
        loading={loading}
        data={mystockList}
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
            cell({ col, row }) {
              return <Link theme="success" href={row['detailUrl']} target='_blank'>{row['code']}</Link>;
            },
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
            colKey: 'roi',
            title: '收益率',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'buyPrice',
            title: '成本价',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'now',
            title: '现价',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'safePrice',
            title: '安全价',
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
            colKey: 'turnoverRate',
            title: '换手率',
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
