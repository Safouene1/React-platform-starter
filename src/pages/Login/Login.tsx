import { useEffect, useState } from 'react';
import { Checkbox, Input, Form, Button, Divider, notification } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import './Login.css';
import { Logo } from '../../components/Logo/Logo';

import { loginUser } from '../../store/User/userSlice';

import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';

import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const dispatch = useAppDispatch();
  const { loading, error, authenticated } = useAppSelector(
    (state) => state.UserSlice
  );
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    setName(values.username);
    setPassword(values.password);
    const credentials = { username: name, password: password };
    dispatch(loginUser(credentials));
    console.log('Success:', values);
  };
  const [api, contextHolder] = notification.useNotification();

  const successNotif = () => {
    api.success({
      message: `Logged in`,
      description:
        'Successfully logged in, you will be redirected to the dashboard',
    });
  };
  const errorNotif = () => {
    api.error({
      message: `Failed to login`,
      description: 'Please check your credentials and try again',
    });
  };
  const user = localStorage.getItem('user');
  useEffect(() => {
    if (authenticated && !!user) {
      navigate('/platform/dashboard');
      successNotif();
    }
    if (error) {
      errorNotif();
    }
  }, [authenticated, error, user]);

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onChange = (values: any) => {
    setName(values.username);
    setPassword(values.password);
  };
  return (
    <div className="login-wrap">
      {contextHolder}
      <Logo />
      <Divider type="horizontal" className={'divider'} />
      {error ? (
        <div className={'error'}>
          <CloseCircleOutlined className="site-result-demo-error-icon" />
          Failed to login, please check your credentials and try again
          <Divider type="horizontal" className={'divider'} />
        </div>
      ) : null}
      <Form
        name="normal_login"
        className="login-form"
        onChange={onChange}
        initialValues={{
          remember: true,
          username: 'eve.holt@reqres.in',
          password: 'cityslicka',
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          label={'Username'}
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            size={'large'}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label={'Password'}
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
            placeholder="Password"
            name="password"
            prefix={<LockOutlined />}
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="src/pages">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size={'large'}
            className="login-form-button"
            loading={loading}
          >
            Log in
          </Button>
          Or <a href="src/pages">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
