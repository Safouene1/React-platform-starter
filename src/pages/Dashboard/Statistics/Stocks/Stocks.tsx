import { ProCard, StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import React, { useState } from 'react';
import Title from 'antd/es/typography/Title';

const { Statistic } = StatisticCard;

export const Stocks: React.FC = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <Title level={4}>General Overview</Title>

      <ProCard split={responsive ? 'horizontal' : 'vertical'}>
        <StatisticCard
          colSpan={responsive ? 24 : 6}
          title="Market Value"
          statistic={{
            value: 82.6,
            suffix: 'M TND',
            description: (
              <Statistic title="Last 24 hours" value="6.47%" trend="up" />
            ),
          }}
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/PmKfn4qvD/mubiaowancheng-lan.svg"
              alt="进度条"
              width="100%"
            />
          }
          footer={
            <>
              <Statistic
                value="70.98%"
                title="Completion Rate"
                layout="horizontal"
              />
              <Statistic value="86.98%" title="Last year" layout="horizontal" />
              <Statistic
                value="88.98%"
                title="Estimated value"
                layout="horizontal"
              />
            </>
          }
        />
        <StatisticCard.Group
          colSpan={responsive ? 24 : 18}
          direction={responsive ? 'column' : undefined}
        >
          <StatisticCard
            statistic={{
              title: 'Shares',
              value: 601987768,
              description: (
                <Statistic title="Downgrade" value="6.15%" trend="down" />
              ),
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                alt="antv "
                width="100%"
              />
            }
          >
            <Statistic
              title="Total"
              value={1982312}
              layout="vertical"
              description={
                <Statistic title="Increase" value="9.15%" trend="up" />
              }
            />
          </StatisticCard>
          <StatisticCard
            statistic={{
              title: 'Shareholders',
              value: 6,
              description: (
                <Statistic title="Per share" value="3.85%" trend="down" />
              ),
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                alt="replace"
                width="100%"
              />
            }
          >
            <Statistic
              title="Estimated market"
              value={17458}
              layout="vertical"
              description={
                <Statistic title="Prediction rate" value="6.47%" trend="up" />
              }
            />
          </StatisticCard>
          <StatisticCard
            statistic={{
              title: 'Tradeable shares',
              value: 2,
              description: (
                <Statistic title="Amount" value="6.47%" trend="up" />
              ),
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                alt="replace"
                width="100%"
              />
            }
          >
            <Statistic
              title="Per share "
              value={601}
              layout="vertical"
              description={
                <Statistic title={'increase'} value="6.47%" trend="down" />
              }
            />
          </StatisticCard>
        </StatisticCard.Group>
      </ProCard>
    </RcResizeObserver>
  );
};
