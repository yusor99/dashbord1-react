import { Layout, Row, Col } from "antd";
import React from "react";

import { UserOutlined } from "@ant-design/icons";
const { Header } = Layout;
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
      </Layout>
    </>
  );
};

export default Navbar;
