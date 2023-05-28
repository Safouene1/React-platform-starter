import { useState } from 'react';
import { Checkbox, Input, Form, Button, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css';
import { Logo } from '../../components/Logo/Logo';

import { loginUser } from '../../store/User/userSlice';

import { useAppDispatch } from '../../hooks/useReduxHooks';

export const Login = () => {
  const dispatch = useAppDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const onFinish = (values: any) => {
    dispatch(loginUser(values));
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="authService-wrap">
      <Logo />
      <Divider type="horizontal" className={'divider'} />

      <Form
        name="normal_login"
        className="authService-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          label={'Username'}
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
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

          <a className="authService-form-forgot" href="src/pages">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size={'large'}
            className="authService-form-button"
          >
            Log in
          </Button>
          Or <a href="src/pages">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
