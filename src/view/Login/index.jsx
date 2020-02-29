import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '@/redux/Reducer/auth';
import {
  Form,
  Input,
  Checkbox,
  Button,
  Icon,
} from 'antd';
import './index.scss';

const mapDispatchToProps = (dispatch) => ({
  login: (config, success, fail) => dispatch(login(config, success, fail)),
});

const Login = (props) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.login(
          // 可发送一个promise的http请求
          new Promise((resolve) => {
            resolve({ a: 111 });
          }),
          () => {
            console.log('登录成功', values);
            sessionStorage.setItem('token', '测试的token');
            history.push('/test');
          },
        );
      }
    });
  };
  const { form } = props;
  const { getFieldDecorator } = form;

  return (
    <div className="components-form-demo-normal-login">
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住账号</Checkbox>)}
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};


export default connect(
  null,
  mapDispatchToProps,
)(Form.create({ name: 'normal_login' })(Login));
