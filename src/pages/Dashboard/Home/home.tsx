import { Progress, Tag } from 'antd';
import { useState } from 'react';
import { ProList } from '@ant-design/pro-components';
const Fakedata = [
  'Administration',
  'Finance',
  'Human Resources',
  'TechUI',
  'TechUI 2.0',
  'Bigfish',
].map((item) => ({
  title: item,
  subTitle: <Tag color="#5BD8A6">Service</Tag>,
  actions: [<a key="run">Info</a>, <a key="delete">Pause</a>],
  avatar:
    'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
  content: (
    <div
      style={{
        flex: 1,
      }}
    >
      <div
        style={{
          width: 200,
        }}
      >
        <div>Progress</div>
        <Progress percent={80} />
      </div>
    </div>
  ),
}));

export const Home: React.FC<{}> = () => {
  const [cardActionProps, setCardActionProps] = useState<'actions' | 'extra'>(
    'extra'
  );

  const [ghost, setGhost] = useState<boolean>(false);
  return (
    <>
      <div>
        <ProList<any>
          ghost={ghost}
          itemCardProps={{
            ghost,
          }}
          pagination={{
            defaultPageSize: 8,
            showSizeChanger: false,
          }}
          showActions="hover"
          rowSelection={{}}
          grid={{ gutter: 16, column: 2 }}
          onItem={(record: any) => {
            return {
              onMouseEnter: () => {
                console.log(record);
              },
              onClick: () => {
                console.log(record);
              },
            };
          }}
          metas={{
            title: {},
            subTitle: {},
            type: {},
            avatar: {},
            content: {},
            actions: {
              cardActionProps,
            },
          }}
          headerTitle="Service"
          dataSource={Fakedata}
        />
      </div>
    </>
  );
};
