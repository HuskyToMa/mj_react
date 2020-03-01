import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import Styles from './index.module.scss';

const Test = (props) => {
  const t = () => {
    console.log(props);
  };

  return (
    <div className={Styles.ss}>
      我是一个组件
      <Button type="primary" onClick={t}>测试111</Button>
    </div>
  );
};

export default connect(
  (state) => ({
    state,
  }),
)(Test);
