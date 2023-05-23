import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './DashboardLayout.css';
import { Footer } from 'antd/es/layout/layout';
import { AppFooter } from '../AppFooter';
import { LogoWhite } from '../../components/Logo/Logo';
import { sidebarItems } from './components/sidebarItems';
import { headerItems } from './components/headerItems';
const { Header, Content, Sider } = Layout;

export const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuSelect = (param: any) => {
    navigate(param.item.props.to);
  };
  return (
    <Layout>
      <Header className="header">
        <LogoWhite className={'dashboard'} />
        <Menu
          theme={'dark'}
          mode="horizontal"
          style={{ justifyContent: 'center' }}
          items={headerItems}
        />
      </Header>
      <Layout>
        <Sider width={300} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
            items={sidebarItems}
            onSelect={handleMenuSelect}
          />
        </Sider>
        <Layout style={{ padding: '25px 24px 24px' }}>
          <Content
            style={{
              padding: 25,
              margin: 2,
              minHeight: 280,
              background: colorBgContainer,
            }}
            className={'all-screen'}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
};
