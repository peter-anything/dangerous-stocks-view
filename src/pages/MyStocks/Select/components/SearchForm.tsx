import React, { useRef, memo } from 'react';
import { Row, Col, Form, Input, Button, MessagePlugin, Select, RangeInput } from 'tdesign-react';
import { CONTRACT_STATUS_OPTIONS, CONTRACT_TYPE_OPTIONS } from '../consts';
import { FormInstanceFunctions, SubmitContext } from 'tdesign-react/es/form/type';

const { FormItem } = Form;

export type FormValueType = {
  code?: string;
  name?: string;
  turnoverRate: Array<string>;
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
              <Col span={3} xs={12} sm={6} xl={3}>
                <FormItem label='股票代码' name='code'>
                  <Input placeholder='请输入股票代码' />
                </FormItem>
              </Col>
              <Col span={3} xs={12} sm={6} xl={3}>
                <FormItem label='股票名称' name='name'>
                  <Input placeholder='请输入股票名称' />
                </FormItem>
              </Col>
              <Col span={3} xs={12} sm={6} xl={3}>
                <FormItem label='换手率' name='turnoverRate'>
                  <RangeInput placeholder='请输入换手率' />
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
