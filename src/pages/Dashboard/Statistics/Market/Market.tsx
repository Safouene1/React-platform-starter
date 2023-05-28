import { CheckCard, StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import React, { useState } from 'react';
import Title from 'antd/es/typography/Title';

const { Statistic, Divider } = StatisticCard;

export const Market: React.FC = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <Title level={4}>Overview</Title>

      <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
        <StatisticCard
          statistic={{
            title: 'Total Traffic ',
            value: 601986875,
          }}
        />
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <StatisticCard
          statistic={{
            title: 'Paid Traffic',
            value: 3701928,
            description: <Statistic title="TND" value="61.5%" />,
          }}
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg"
              alt="Non Paid"
              width="100%"
            />
          }
          chartPlacement="left"
        />
        <StatisticCard
          statistic={{
            title: 'Non Paid Traffic',
            value: 1806062,
            description: <Statistic title="TND" value="38.5%" />,
          }}
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/6YR18tCxJ/huanlv.svg"
              alt="paid"
              width="100%"
            />
          }
          chartPlacement="left"
        />
      </StatisticCard.Group>
      <Title level={4}>Deep analysis</Title>

      <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
        <StatisticCard
          statistic={{
            title: 'Total Sales',
            value: 20190102,
            precision: 2,
            suffix: '元',
          }}
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
              alt="sales"
              width="100%"
            />
          }
        />
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <StatisticCard
          statistic={{
            title: 'Total Orders',
            value: 234,
          }}
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
              alt="orders"
              width="100%"
            />
          }
        />
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <StatisticCard
          statistic={{
            title: 'Conversion Rate',
            value: 5,
            suffix: '/ 100',
          }}
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
              alt="cr"
              width="100%"
            />
          }
        />
      </StatisticCard.Group>
      <Title level={4}>Select Product</Title>
      <CheckCard.Group
        onChange={(value) => {
          console.log('value', value);
        }}
        defaultValue="A"
      >
        <CheckCard title="Paramedics" description="Market" value="A" />
        <CheckCard title="School" description="Market" value="B" />
        <CheckCard
          title="Future"
          disabled
          description="Future project"
          value="C"
        />
      </CheckCard.Group>
    </RcResizeObserver>
  );
};
