import { ProTable } from '@ant-design/pro-components';
import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';
import React from 'react';
import { UserTableListItem } from '../../../../@types/UserTableListItem';
import { columns } from './components/columns';
const valueEnum: any = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

const tableListDataSource: UserTableListItem[] = [];

const creators = ['Administration', 'Finance', 'IT', 'HR', 'Marketing'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'Foulen ben Foulen',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
    memo: i % 2 === 1 ? 'foueln@gmail.com' : 'foulenbenfoulen@yahoo.com',
  });
}

export const Users: React.FC = () => {
  return (
    <ProTable<UserTableListItem>
      columns={columns}
      request={(params, sorter, filter) => {
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      search={{
        layout: 'vertical',

        defaultCollapsed: true,
      }}
      dateFormatter="string"
      toolbar={{
        title: 'Users',
        tooltip: 'Fully configurable users',
      }}
      toolBarRender={() => [
        <Button key="danger" danger>
          Select All
        </Button>,
        <Button key="show">Manage</Button>,
        <Button type="primary" key="primary">
          Export
        </Button>,

        <Dropdown
          key="menu"
          menu={{
            items: [
              {
                label: '1st item',
                key: '1',
              },
              {
                label: '2nd item',
                key: '2',
              },
              {
                label: '3rd item',
                key: '3',
              },
            ],
          }}
        >
          <Button>
            <EllipsisOutlined />
          </Button>
        </Dropdown>,
      ]}
    />
  );
};
