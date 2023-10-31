import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
const { Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));
const AdminLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  let user = JSON.parse(localStorage.getItem("USER")); 
  console.log("🚀 ~ file: AdminLayout.js:35 ~ AdminLayout ~ user:", user)
  // kiem tra user co role la admin moi cho vao
  // cac page lien quan den admin
  if (user?.maLoaiNguoiDung!== "QuanTri") {
    window.location.href = "/";
  }
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header/>
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
        <Outlet/>    
        </Content>
        
      </Layout>
    </Layout>
  );
};
export default AdminLayout;