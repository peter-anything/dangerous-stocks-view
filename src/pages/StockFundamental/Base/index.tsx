import React, { useState, memo, useEffect } from 'react';
import { Table, Tag, Row, Col, Button, Input } from 'tdesign-react';
import { ChevronUpCircleIcon, SearchIcon, ChevronDownCircleIcon } from 'tdesign-icons-react';
import classnames from 'classnames';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { selectListBase, getList, clearPageState } from 'modules/stock_fundamental/base';
import CommonStyle from 'styles/common.module.less';
import style from './index.module.less';

export const PaymentTypeMap: {
  [key: number]: React.ReactElement;
} = {
  0: (
    <>
      付款
      <ChevronUpCircleIcon style={{ color: 'red', marginLeft: 4 }} />
    </>
  ),
  1: (
    <>
      收款
      <ChevronDownCircleIcon style={{ color: 'green', marginLeft: 4 }} />
    </>
  ),
};

export const StatusMap: {
  [key: number]: React.ReactElement;
} = {
  1: (
    <Tag theme='warning' variant='light'>
      待审核
    </Tag>
  ),
  2: (
    <Tag theme='warning' variant='light'>
      待履行
    </Tag>
  ),
  3: (
    <Tag theme='success' variant='light'>
      履行中
    </Tag>
  ),
  4: (
    <Tag theme='success' variant='light'>
      已完成
    </Tag>
  ),
  5: (
    <Tag theme='danger' variant='light'>
      审核失败
    </Tag>
  ),
};

export const ContractTypeMap: {
  [key: number]: string;
} = {
  0: '审核失败',
  1: '待审核',
  2: '待履行',
};

export default memo(() => {
  const dispatch = useAppDispatch();
  const pageState = useAppSelector(selectListBase);
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([1, 2]);

  const { loading, contractList, current, pageSize, total } = pageState;

  useEffect(() => {
    dispatch(
      getList({
        pageSize: pageState.pageSize,
        current: pageState.current,
      }),
    );
    return () => {
      console.log('clear');
      dispatch(clearPageState());
    };
  }, []);

  function onSelectChange(value: (string | number)[]) {
    setSelectedRowKeys(value);
  }
  return (
    <div className={classnames(CommonStyle.pageWithPadding, CommonStyle.pageWithColor)}>
      <Row justify='space-between' className={style.toolBar}>
        <Col>
          <Row gutter={8} align='middle'>
            <Col>
              <Button>新建合同</Button>
            </Col>
            <Col>
              <Button theme='default'>导出合同</Button>
            </Col>
            <Col>
              <div>已选 {selectedRowKeys?.length || 0} 项</div>
            </Col>
          </Row>
        </Col>
        <Col>
          <Input suffixIcon={<SearchIcon />} placeholder='请输入你需要搜索的型号' />
        </Col>
      </Row>

      <Table
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
          {
            align: 'left',
            fixed: 'right',
            width: 180,
            colKey: 'op',
            title: '操作',
            cell() {
              return (
                <>
                  <Button theme='primary' variant='text'>
                    管理
                  </Button>
                  <Button theme='primary' variant='text'>
                    删除
                  </Button>
                </>
              );
            },
          },
        ]}
        loading={loading}
        data={contractList}
        rowKey='index'
        selectedRowKeys={selectedRowKeys}
        verticalAlign='top'
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
    </div>
  );
});
