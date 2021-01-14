import { Form, Col, Button, Input, Row, Divider } from "antd";
import { CloseOutlined } from "@ant-design/icons";
const DeleteCostumer = () => {
  return (
    <div className="overlay">
      <div className=" container-form-dcostumer  ">
        <Form className="form-dcostumer ">
          <div className="title">
            <h1 style={{ color: "#F72F57" }}>Delete Customer</h1>
            <CloseOutlined className="close" />
          </div>
          <div className="container-felides-dcostumer   dcostumerForm ">
            <Row gutter={[48, 0]}>
              <Col xs={24} md={24}>
                <small style={{ color: "#F72F57" }}>
                  If you delete this account it will be gone permenantly
                </small>
              </Col>
            </Row>
            <Row gutter={[48, 0]}>
              <Col xs={24} md={24}>
                <small style={{ color: "#B9C0CE" }}>
                  also there is no way to undo this action after it's done
                </small>
              </Col>
            </Row>
            <Row gutter={[48, 0]}>
              <Col xs={24} md={24}>
                <small style={{ color: "#808D93" }}>
                  To delete the acount write the customer name with respect to
                  letter casing
                </small>
              </Col>
            </Row>
            <small>"Ali Hamandi"</small>
            <Row gutter={[48, 0]}>
              <Col xs={24} md={24}>
                <Form.Item name={["user", "name"]}>
                  <Input
                    style={{ borderRadius: 6, padding: 0 ,margin:0}}
                  />
                </Form.Item>
              </Col>
            </Row>
          </div>
          <Divider style={{ margin: 0 }} />
          <div className="footer">
            <Row>
              <Col span={12}>
                <small style={{ color: "#949DA5" }}>
                  Write the name with respect to letter casing
                </small>
              </Col>
              <Col span={12}>
                <Button
                  type="primary"
                  danger
                  style={{
                    float: "right",
                    borderRadius: 6,
                    backgroundColor: "#F72F57",
                  }}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default DeleteCostumer;
