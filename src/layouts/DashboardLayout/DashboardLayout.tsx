import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, redirect, useLocation, useNavigate } from 'react-router-dom';
import "./DashboardLayout.css";
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
    console.log(param.item)
    navigate(param.item.props.to);
  };
  return (
    <Layout>
      <Header className="header">
        <LogoWhite className={"dashboard"}/>
        <Menu theme={"dark"}  mode="horizontal"  style={{justifyContent: "center" }} items={headerItems} />
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
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
            className={"all-screen"}
          >
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
      <Footer>
        <AppFooter/>
      </Footer>
    </Layout>
  );
};

