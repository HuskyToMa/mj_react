import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';

const Test = (props) => {
  const t = () => {
    console.log(props);
  };

  return (
    <dispatchEvent>
      我是一个组件
      <Button type="primary" onClick={t}>测试111</Button>
    </dispatchEvent>
  );
};

export default connect(
  (state) => ({
    state,
  }),
)(Test);
