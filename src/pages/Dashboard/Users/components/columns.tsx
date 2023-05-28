import { ProColumns, TableDropdown } from '@ant-design/pro-components';
import { UserTableListItem } from '../../../../../@types/UserTableListItem';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';

export const columns: ProColumns<UserTableListItem>[] = [
  {
    title: 'id',
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,

    filterDropdown: () => (
      <div style={{ padding: 8 }}>
        <Input style={{ width: 188, marginBlockEnd: 8, display: 'block' }} />
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
  },
  {
    title: 'Department',
    dataIndex: 'creator',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    initialValue: 'all',
    filters: true,
    onFilter: true,
    valueEnum: {
      all: { text: 'Logged off', status: 'Default' },
      close: { text: 'Logged off', status: 'Default' },
      online: { text: 'Online', status: 'Success' },
      error: { text: 'Blocked', status: 'Error' },
    },
  },
  {
    title: 'Email',
    dataIndex: 'memo',
    ellipsis: true,
    copyable: true,
  },
  {
    title: 'Actions',
    width: 180,
    key: 'option',
    valueType: 'option',
    render: () => [
      <a key="link">Edit</a>,
      <a key="link2">Notify</a>,
      <TableDropdown
        key="actionGroup"
        menus={[{ key: 'delete', name: 'delete' }]}
      />,
    ],
  },
];
