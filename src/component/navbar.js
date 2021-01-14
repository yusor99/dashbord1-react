import { Layout, Row, Col, Breadcrumb } from "antd";
import React from "react";

import { UserOutlined } from "@ant-design/icons";
const { Header, Content } = Layout;
const Navbar = () => {
  return (
    <>
      <Layout>
        <Header>
          <Row>
            <Col span={12}>
              <div className="logo">
                <span> STEP</span> <small>Medical</small>
              </div>
            </Col>
            <Col span={12}>
              <div className="user">
                <UserOutlined />
              </div>
            </Col>
          </Row>
        </Header>

        <Content style={{ padding: "0 50px" }}>
          <div className="container">
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>ProductList</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default Navbar;
