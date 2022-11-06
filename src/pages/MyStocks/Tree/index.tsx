import React from 'react';
import { useState } from "react"
import { Input, Tree, Popup, Button, Row, Col } from 'tdesign-react';
import { SearchIcon } from 'tdesign-icons-react';
import classnames from 'classnames';
import { SelectTable } from '../Select';
import { treeList } from './consts';
import CommonStyle from 'styles/common.module.less';
import Style from './index.module.less';
import MyStockForm from '../Select/components/MyStockForm';
import FloatTop from '../Select/components/FloatTop';
import style from './index.module.less';
import MyStockFormWithPopup from '../Select/components/MyStockFormWithPopup';

const TreeTable: React.FC = () => (
  <div className={classnames(CommonStyle.pageWithColor, Style.content)}>
    <MyStockFormWithPopup />
    <div className={Style.tableContent}>
      <SelectTable />
    </div>

  </div>
);

export default TreeTable;
