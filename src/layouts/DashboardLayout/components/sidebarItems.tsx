import { MenuProps } from 'antd';
import {
  GiftOutlined,
  CustomerServiceOutlined,
  WalletOutlined,
  PrinterOutlined,
  BookOutlined,
  HomeOutlined,
  RadarChartOutlined,
  DotChartOutlined,
  AreaChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import SidebarItemsType from '../../../../@types/sidebarItems';

export const sidebarItems: SidebarItemsType = [
  {
    key: '/platform/dashboard',
    label: 'Dashboard',
    icon: <HomeOutlined />,
    to: '/platform/dashboard',
  },
  {
    key: '/platform/users',
    label: 'Users',
    icon: <UserOutlined />,
    to: '/platform/users',
  },
  {
    key: '/platform/statistics/',
    label: 'Statistics',
    icon: <AreaChartOutlined />,
    children: [
      {
        key: '/platform/statistics/stocks',
        label: 'Stocks',
        icon: <DotChartOutlined />,
        to: '/platform/statistics/stocks',
      },
      {
        key: '/platform/statistics/market',
        label: 'Market',
        icon: <RadarChartOutlined />,
        to: '/platform/statistics/market',
      },
    ],
  },
];
