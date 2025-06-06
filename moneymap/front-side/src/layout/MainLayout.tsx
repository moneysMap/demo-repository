import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import menu from "../menu";
import logo from "../../public/logocomfundo.jpeg";


const { Sider, Content, Header, Footer } = Layout;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div style={{ textAlign: "center", margin: "16px" }}>
          <img
            src={logo}
            alt="MoneyMap"
            style={{ width: "100%", maxWidth: "160px", height: "120px" }}
          />
        </div>
        <Menu theme="dark" mode="inline" onClick={({ key }) => navigate(key)}>
          {menu.map((item) => (
            <Menu.SubMenu key={item.path} icon={item.icon} title={item.name}>
              {item.routes?.map((subItem) => (
                <Menu.Item
                  key={subItem.path}
                  icon={"icon" in subItem ? subItem.icon : undefined}
                >
                  {subItem.name}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}></Header>
        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>©2025 MoneyMap</Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
