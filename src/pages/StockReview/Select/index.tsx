import React, { useState, memo, useEffect } from 'react';
import { Table, Dialog, Button, Row, Col, Link, Input, Space, Popup  } from 'tdesign-react';
import { ChevronUpCircleIcon, SearchIcon, ChevronDownCircleIcon } from 'tdesign-icons-react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { selectListSelect, getList, clearPageState } from 'modules/stock_review/select'
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
    <Row justify='start' style={{ margin: '0px' }}>
        <SearchForm
          onSubmit={async (value) => {
            console.log(value)
            dispatch(
              getList({
                pageSize: pageState.pageSize,
                current: 1,
                name: value.name,
                createdAt: value.createdAt,
                upLimitType: value.upLimitType,
                industry: value.industry,
                orderBy: value.orderBy,
                concept: value.concept,
                recommend: value.recommend
              }),
            );
          }}
          onCancel={() => {}}
        />
      </Row>
      <Table
        loading={loading}
        data={mystockList}
        columns={[
          {
            align: 'left',
            width: 150,
            ellipsis: true,
            colKey: 'code',
            title: '股票名称',
            cell({ col, row }) {
              return <div>
                <Link theme="success" href={row['detailUrl']} target='_blank'>{row['name']}/{row['continuousUpLimitCount']}板</Link>
              </div>
            },
          },
          {
            align: 'left',
            width: 130,
            ellipsis: true,
            colKey: 'marketValue',
            title: '市值',
            cell({ col, row }) {
              return <div>
                <span>{row['marketValue']}亿</span>
              </div>
            },
          },
          {
            align: 'left',
            width: 130,
            ellipsis: true,
            colKey: 'growthRate',
            title: '涨幅'
          },
          {
            align: 'left',
            width: 130,
            ellipsis: true,
            colKey: 'now',
            title: '现价'
          },
          {
            align: 'left',
            width: 130,
            ellipsis: true,
            colKey: 'turnoverRate',
            title: '换手率'
          },
          {
            align: 'left',
            width: 130,
            ellipsis: true,
            colKey: 'closeMoney',
            title: '封单额',
            cell({ col, row }) {
              return <div>
                <span>{row['closeMoney']}亿</span>
              </div>
            },
          },
          {
            align: 'left',
            width: 130,
            ellipsis: true,
            colKey: 'industry',
            title: '所属行业'
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'firstUpLimitTime',
            title: '首板时间/终板时间/炸板数/连板数',
            cell({ col, row }) {
              return <div>
                <span>{row['firstUpLimitTime']}/{row['finalUpLimitTime']}/{row['breakUpLimitCount']}/{row['continuousUpLimitCount']}</span>
              </div>
            },
          },
          {
            align: 'left',
            width: 130,
            ellipsis: true,
            colKey: 'concepts',
            title: '所属概念'
          },
          {
            align: 'left',
            width: 130,
            ellipsis: true,
            colKey: 'createdAt',
            title: '日期'
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
