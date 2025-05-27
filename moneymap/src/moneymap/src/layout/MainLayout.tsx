import React from 'react';
// import logo from '../../../../public/logo.jpeg';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import menu from '../../../menu';

const { Sider, Content, Header, Footer } = Layout;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div style={{ textAlign: 'center', margin: '16px' }}>
          <img
            // src={logo}
            alt="Logo"
            style={{ width: '100%', maxWidth: '120px', height: 'auto' }}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          onClick={({ key }) => navigate(key)}
        >
          {menu.map((item) => (
            <Menu.SubMenu key={item.path} icon={item.icon} title={item.name}>
              {item.routes?.map((subItem) => (
                <Menu.Item key={subItem.path} icon={subItem.icon}>
                  {subItem.name}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}></Header>
        <Content style={{ margin: '16px' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2025 MoneyMap</Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;