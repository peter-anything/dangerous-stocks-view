import React, { memo, useRef, useState } from 'react';
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
import MyStockForm from './MyStockForm';
import FloatTop from './FloatTop';
import style from '../index.module.less';

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

  const [formVisible, setFormVisible] = useState<boolean>(false);

  function onShowCLick(value: boolean) {
    console.log('test...')
    console.log(formVisible)
    setFormVisible(value);
  }

  return (
    <div>
    <Row justify='space-between' className={style.toolBar}>
        <Col>
        <Row gutter={8} align='middle'>
            <Col>
            <Button onClick={() => {onShowCLick(true); }}>添加自选股</Button>
            </Col>
        </Row>
        </Col>
    </Row>
    <FloatTop showMask={formVisible} handleChange={() => onShowCLick(false)}>
        <MyStockForm />
    </FloatTop>
    </div>
  );
});
