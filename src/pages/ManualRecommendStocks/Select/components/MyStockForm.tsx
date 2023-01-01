import React, { memo, useRef } from 'react';
import {
  Form,
  Row,
  Col,
  Input,
  Radio,
  Button,
  DatePicker,
  Select,
  Textarea,
  Avatar,
  Upload,
  MessagePlugin,
} from 'tdesign-react';
import classnames from 'classnames';
import { SubmitContext, FormInstanceFunctions } from 'tdesign-react/es/form/type';
import CommonStyle from 'styles/common.module.less';
import Style from './mystock.form.less';

const { FormItem } = Form;
const { Option } = Select;
const { Group } = Avatar;

const INITIAL_DATA = {
  name: '',
  type: '',
  payment: '',
  partyA: '',
  partyB: '',
  signDate: '',
  effectiveDate: '',
  endDate: '',
  remark: '',
  notary: '',
  file: [],
};

export default memo(() => {
  const formRef = useRef<FormInstanceFunctions>();

  const onSubmit = (e: SubmitContext) => {
    if (e.validateResult === true) {
      console.log('form 值', formRef.current?.getFieldsValue?.(true));
      MessagePlugin.info('提交成功');
    }
  };

  const handleFail = ({ file }: { file: any }) => {
    console.error(`文件 ${file.name} 上传失败`);
  };

  return (
    <div className={classnames(CommonStyle.pageWithColor)}>
      <div className={Style.formContainer}>
        <Form ref={formRef} onSubmit={onSubmit} labelWidth={100} labelAlign='top'>
          <div className={Style.titleBox}>
            <div className={Style.titleText}>自选股票</div>
          </div>
          <Row gutter={[32, 24]}>
            <Col span={6}>
              <FormItem
                label='股票代码'
                name='code'
                initialData={INITIAL_DATA.name}
                rules={[{ required: true, message: '股票代码必填', type: 'error' }]}
              >
                <Input placeholder='请输入内容' />
              </FormItem>
            </Col>

            <Col span={6}>
              <FormItem
                label='股票名称'
                name='name'
                initialData={INITIAL_DATA.type}
                rules={[{ required: true, message: '股票代码必填', type: 'error' }]}
              >
                <Input placeholder='请输入内容' />
              </FormItem>
            </Col>

            <Col span={6}>
              <FormItem
                label='买入价'
                name='buyPrice'
                initialData={INITIAL_DATA.payment}
                rules={[{ required: true }]}
              >
                <Input placeholder='请输入买入价' style={{ width: 160 }} />
              </FormItem>
            </Col>

            <Col span={6}>
              <FormItem
                label='安全价'
                name='buyPrice'
                initialData={INITIAL_DATA.payment}
                rules={[{ required: true }]}
              >
                <Input placeholder='请输入买入价' style={{ width: 160 }} />
              </FormItem>
            </Col>
          </Row>

          <div className={Style.titleBox}>
            <div className={Style.titleText}>其他信息</div>
          </div>

          <FormItem label='备注' name='remark' initialData={INITIAL_DATA.remark}>
            <Textarea placeholder='请输入备注' />
          </FormItem>

          <FormItem label='公证人' name='notary' initialData={INITIAL_DATA.notary}>
            <Group>
              <Avatar>D</Avatar>
              <Avatar>S</Avatar>
              <Avatar>+</Avatar>
            </Group>
          </FormItem>

          <FormItem>
            <Button type='submit' theme='primary'>
              提交
            </Button>
            <Button type='reset' style={{ marginLeft: 12 }}>
              重置
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
});
