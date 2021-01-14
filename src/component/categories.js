import { Col, Card, Divider, Row, Button } from "antd";
import {
  ContainerTwoTone,
  BankTwoTone,
  TeamOutlined,
  UsergroupAddOutlined,
  BellOutlined,
} from "@ant-design/icons";
const Categories = () => {
  return (
    <>
      <div className="container head">
        <h3>Good Morning, Bilal!</h3>
        <small>Dashboard</small>
      </div>
      <div className="container">
        <Row>
          <Col sm={24} md={12} lg={8}>
            <Row>
              <Card
                className="card"
                cover={
                  <img alt="pic1" src="https://i.ibb.co/7bTVDT3/pic1-3.png" />
                }
              >
                <h4>Products</h4>
                <Divider />

                <Row className="body">
                  <Col span={20}>
                    <Row>Total Products</Row>
                    <Row className="num">32</Row>
                  </Col>
                  <Col span={4}>
                    <ContainerTwoTone className="icon" />
                  </Col>
                </Row>
                <Divider />
                <Row className="body">
                  <Col span={20}>
                    <Row>New Hospitals</Row>
                    <Row className="num">4</Row>
                  </Col>
                  <Col span={4}>
                    <BankTwoTone className="icon" />
                  </Col>
                </Row>
              </Card>
            </Row>

            <Row>
              <Button className="btn-home">Add new product</Button>
            </Row>
          </Col>
          <Col sm={24} md={12} lg={8}>
            <Row>
              <Card
                className="card"
                cover={
                  <img alt="pic2" src="https://i.ibb.co/Httk920/pic1-1.png" />
                }
              >
                <h4>Customers</h4>
                <Divider />

                <Row className="body">
                  <Col span={20}>
                    <Row>Total Customers</Row>
                    <Row className="num">130</Row>
                  </Col>
                  <Col span={4}>
                    <TeamOutlined className="icon" />
                  </Col>
                </Row>
                <Divider />
                <Row className="body">
                  <Col span={20}>
                    <Row>New Customers</Row>
                    <Row className="num">22</Row>
                  </Col>
                  <Col span={4}>
                    <UsergroupAddOutlined className="icon" />
                  </Col>
                </Row>
              </Card>
            </Row>
            <Row>
              <Button className="btn-home">Add new customer</Button>
            </Row>
          </Col>
          <Col sm={24} md={12} lg={8}>
            <Row>
              <Card
                className="card"
                cover={
                  <img alt="pic3" src="https://i.ibb.co/PMqVWwf/pic1-2.png" />
                }
              >
                <h4>Employee</h4>
                <Divider />

                <Row className="body">
                  <Col span={20}>
                    <Row>Total Employers</Row>
                    <Row className="num">13</Row>
                  </Col>
                  <Col span={4}>
                    <TeamOutlined className="icon" />
                  </Col>
                </Row>
                <Divider />
                <Row className="body">
                  <Col span={20}>
                    <Row>Notification</Row>
                    <Row className="num">100,000</Row>
                  </Col>
                  <Col span={4}>
                    <BellOutlined className="icon" />
                  </Col>
                </Row>
              </Card>
            </Row>
            <Row>
              <Button className="btn-home"> Add new employee</Button>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Categories;
