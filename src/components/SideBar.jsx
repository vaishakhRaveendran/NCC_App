import React, { useState } from "react";
import {
  LogoutOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MenuUnfoldOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem(
      <div className="" onClick={toggleCollapsed}>
        Menu
      </div>,
      "1",
      <MenuUnfoldOutlined onClick={toggleCollapsed} />
    ),
    getItem("Dashboard", "2", <DesktopOutlined />),
    getItem(
      <Link to="/masterdata">
        <div className="">Master Data</div>
      </Link>,
      "master",
      <ContainerOutlined />
    ),

    getItem(
      <Link to="/addcadet">New Cadet</Link>,
      "newcadet",
      <UserAddOutlined />
    ),

    getItem(<Link to="/">Logout</Link>, "link2", <LogoutOutlined />),
  ];

  return (
    <>
      <Menu
        style={{
          height: "100vh",
          maxWidth: "200px",
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        items={items}
        inlineCollapsed={collapsed}
      />
    </>
  );
};
export default SideBar;
