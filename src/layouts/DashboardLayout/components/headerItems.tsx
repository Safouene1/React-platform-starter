import { Avatar, Badge, MenuProps } from 'antd';
import {
  SettingOutlined,
  LogoutOutlined,
  NotificationTwoTone,
  SmileOutlined,
} from '@ant-design/icons';
import React from 'react';

import { logout } from '../../../store/User/userSlice';
import { store } from '../../../store/store';

function handleLogout() {
  store.dispatch(logout());
}

export const headerItems: MenuProps['items'] = [
  {
    key: 'notifications',
    label: (
      <div>
        <Badge count={3} style={{ fontSize: '12px', boxShadow: 'none' }}>
          <NotificationTwoTone style={{ fontSize: '20px' }} />
        </Badge>
      </div>
    ),
    style: { marginLeft: 'auto' },
  },
  {
    key: 'user',
    label: (
      <div
        className={'usermenu'}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Avatar style={{ backgroundColor: '#aaffff', color: '#394247' }}>
          S
        </Avatar>
        <span style={{ marginLeft: '10px' }}>Safouen</span>
      </div>
    ),
    children: [
      {
        key: 'profile',
        label: 'Profile',
        icon: <SmileOutlined />,
        onClick: () => console.log('handle profile'),
      },
      {
        key: 'settings',
        label: 'Settings',
        icon: <SettingOutlined />,
        onClick: () => console.log('handle settings'),
      },
      {
        key: 'logout',
        label: 'Logout',
        icon: <LogoutOutlined />,
        onClick: () => handleLogout(),
      },
    ],
  },
];
