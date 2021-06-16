import React, { useState } from 'react';

import { Route, Redirect, NavLink } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  ContactsOutlined,
  AppstoreOutlined,
  FireOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.css';
import account from '../../../assets/icon/account.svg';
import sign_out from '../../../assets/icon/sign out.svg';
import hamburger_menu from '../../../assets/icon/hamburger-menu.svg';
export default function AdminTemplate({ Component, ...props }) {
  const { Header, Sider, Content } = Layout;
  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        // if (localStorageServ.accessToken.get()) {
        return (
          <Layout style={{ minHeight: '100vh' }} className="relative z-50">
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {/* <Menu.Item key="1" icon={<AppstoreOutlined />}>
            Category
          </Menu.Item> */}
                <Menu.Item key="1" icon={<UserOutlined />}>
                  <NavLink to="/admin" activeClassName="selected">
                    Dashboard
                  </NavLink>
                </Menu.Item>
                <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Category">
                  <Menu.Item key="3">
                    <NavLink to="/admin-category/1" activeClassName="selected">
                      <i className="mr-3 fab fa-css3"></i> CSS
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <NavLink to="/admin-category/2" activeClassName="selected">
                      <i className="mr-3 fab fa-js"></i> Javascript
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <NavLink to="/admin-category/3" activeClassName="selected">
                      <i className="mr-3 fab fa-react"></i> React
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="8">
                    {' '}
                    <NavLink to="/admin-category/4" activeClassName="selected">
                      <i className="mr-3 fab fa-angular"></i> Angular
                    </NavLink>
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="6" icon={<UserOutlined />}>
                  <NavLink to="/admin-users" activeClassName="selected">
                    Users
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="7" icon={<ContactsOutlined />}>
                  Enterprise
                </Menu.Item>
                <Menu.Item key="8" icon={<FireOutlined />}>
                  <NavLink to="/admin-challenge" activeClassName="selected">
                  Challenge

                    </NavLink>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout bg-content">
              <Header className="site-layout-background flex justify-between items-center px-10 text-white">
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: toggle,
                })}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 100,
                  }}
                  className="MobileHeader__Wrapper-sc-1luo1od-0 jLxbtT"
                >
                  <div className="MobileHeader__Button-sc-1luo1od-1 cA-dKST ">
                    <img src={hamburger_menu} alt="hamburger icon" className="MobileHeader__Icon-sc-1luo1od-2 kfMDDp" />
                  </div>
                  <div className="MobileHeader__TooltipWrapper-sc-1luo1od-3 bWFUQU">
                    {/* {screen.width <= 768 ? (
                      <div>
                        <div>
                          <a href="#" style={{ textDecoration: 'none' }}>
                            <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                              <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                                <img src={courses} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                                <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">
                                  Learning
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="MobileHeader__Separator-sc-1luo1od-4 hYpNMl" />
                        </div>
                        <div>
                          <a href="#" style={{ textDecoration: 'none' }}>
                            <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                              <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                                <img src={tutorials} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                                <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">
                                  Training
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="MobileHeader__Separator-sc-1luo1od-4 hYpNMl" />
                        </div>
                        <div>
                          <a href="#/category" style={{ textDecoration: 'none' }}>
                            <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                              <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                                <img src={livestreams} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                                <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">
                                  Category
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="MobileHeader__Separator-sc-1luo1od-4 hYpNMl" />
                        </div>
                        <div>
                          <a href="#" style={{ textDecoration: 'none' }}>
                            <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                              <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                                <img src={pricing} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                                <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">
                                  Pricing
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="MobileHeader__Separator-sc-1luo1od-4 hYpNMl" />
                        </div>
                        <div>
                          <a href="#" style={{ textDecoration: 'none' }}>
                            <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                              <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                                <img src={calendar} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                                <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">
                                  Evaluating
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="MobileHeader__Separator-sc-1luo1od-4 hYpNMl" />
                        </div>
                        <div>
                          <a href="#" style={{ textDecoration: 'none' }}>
                            <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                              <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                                <img src={downloads} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                                <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">
                                  Context
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="MobileHeader__Separator-sc-1luo1od-4 hYpNMl" />
                        </div>
                        <div>
                          <a href="#" style={{ textDecoration: 'none' }}>
                            <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                              <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                                <img src={search} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                                <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">
                                  Search
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="MobileHeader__Separator-sc-1luo1od-4 hYpNMl" />
                        </div>
                      </div>
                    ) : (
                      ''
                    )} */}
                    <div>
                      <a href="/#/profile" style={{ textDecoration: 'none' }}>
                        <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                          <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                            <img src={account} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                            <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">Account</p>
                          </div>
                        </div>
                      </a>
                      <div className="MobileHeader__Separator-sc-1luo1od-4 hYpNMl" />
                      <a href="/#/admin-login" style={{ textDecoration: 'none' }}>
                        <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                          <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                            <img src={sign_out} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                            <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">Sign Out</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </Header>
              <Content
                className="site-layout-background "
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
              >
                <Component {...propsComponent} />
              </Content>
            </Layout>
          </Layout>
        );
      }}
    />
  );
}
