import React, { useRef, memo } from 'react';
import { Row, Col, Form, Input, Button, MessagePlugin, Select, RangeInput, DatePicker } from 'tdesign-react';
import { MY_STOCK_STATUS_OPTIONS, CONTRACT_TYPE_OPTIONS, UPLIMIT_STATUS_OPTIONS } from '../consts';
import { FormInstanceFunctions, SubmitContext } from 'tdesign-react/es/form/type';

const { FormItem } = Form;

export type FormValueType = {
  code?: string;
  name?: string;
  turnoverRate: Array<string>;
  createdAt?: string;
  upLimitType?: string;
  industry?: string;
};

export type SearchFormProps = {
  onCancel: () => void;
  onSubmit: (values: FormValueType) => Promise<void>;
};

const SearchForm: React.FC<SearchFormProps> = (props) => {
  const formRef = useRef<FormInstanceFunctions>();
  const onSubmit = (e: SubmitContext) => {
    if (e.validateResult === true) {
      MessagePlugin.info('提交成功');
    }
    const queryValue = formRef?.current?.getFieldsValue?.(true);
    props.onSubmit(queryValue);
  };

  const onReset = () => {
    props.onCancel();
    MessagePlugin.info('重置成功');
  };

  return (
    <div className='list-common-table-query'>
      <Form ref={formRef} onSubmit={onSubmit} onReset={onReset} labelWidth={80} colon>
        <Row>
          <Col flex='1'>
            <Row gutter={[16, 16]}>
              <Col span={3} xs={12} sm={6} xl={4}>
                <FormItem label='选择日期' name='createdAt'>
                  <DatePicker mode='date' />
                </FormItem>
              </Col>
              <Col span={3} xs={12} sm={6} xl={4}>
                <FormItem label='上涨类型' name='upLimitType'>
                  <Select options={UPLIMIT_STATUS_OPTIONS} placeholder='请选择上涨类型' />
                </FormItem>
              </Col>
              <Col span={3} xs={12} sm={6} xl={3}>
                <FormItem label='行业' name='industry'>
                  <Input placeholder='请输入行业' />
                </FormItem>
              </Col>
            </Row>
          </Col>
          <Col flex='160px'>
            <Button theme='primary' type='submit' style={{ margin: '0px 20px' }}>
              查询
            </Button>
            <Button type='reset' variant='base' theme='default'>
              重置
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default memo(SearchForm);
