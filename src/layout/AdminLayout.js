import React from 'react'
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/Header/Header'
const { Content, Footer, Sider } = Layout
// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   AppstoreOutlined,
//   TeamOutlined,
//   ShopOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));
const AdminLayout = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken()
    let user = JSON.parse(localStorage.getItem('USER'))
    console.log('💖  AdminLayout  user:♋', user)

    const navigate = useNavigate()

    //   kiểm tra user có role là admin thì mới cho vào các page liên quan tới admin
    if (user.maLoaiNguoiDung == 'KhachHang') {
        window.location.href = '/'
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
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={[
                        {
                            label: (
                                <p
                                    onClick={() => {
                                        navigate('/admin/users')
                                    }}
                                >
                                    <UserOutlined />
                                    <span>Quản lý user</span>
                                </p>
                            ),
                            key: 'quanLyUser',
                        },
                        {
                            label: (
                                <p>
                                    <VideoCameraOutlined />
                                    <span>Quản lý phim</span>
                                </p>
                            ),
                            key: 'quanLyPhim',
                        },
                        {
                            label: (
                                <p>
                                    <VideoCameraOutlined />
                                    <span>Quản lý rạp</span>
                                </p>
                            ),
                            key: 'quanLyRap',
                        },
                    ]}
                />
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
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}
export default AdminLayout
