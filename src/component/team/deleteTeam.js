import { Form, Col, Button, Input, Row, Divider } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  CloseOutlined,
} from "@ant-design/icons";
const DeleteCostumer = () => {
  return (
    <div className="overlay">
      <div className=" container-form-dcostumer  ">
        <Form className="form-dcostumer ">
          <div className="title">
            <h1>Re-new password</h1>
            <CloseOutlined className="close" />
          </div>
          <div className="container-felides-dcostumer   dcostumerForm ">
            <Row gutter={[48, 8]}>
              <Col xs={24} md={24}>
                <small style={{ color: "#F72F57" }}>
                  If you renewed this password, the old password will not work
                  again
                </small>
              </Col>
            </Row>
            <Row gutter={[48, 16]}>
              <Col xs={24} md={24}>
                <small style={{ color: "#808D93" }}>
                  also there is no way to undo this action after it's done{" "}
                  <br />
                  The password could be ay combination of letters, numbers and
                  symbols
                </small>
              </Col>
            </Row>

            <small>New password</small>
            <Row gutter={[48, 24]}>
              <Col xs={24} md={24}>
                <Input.Password
                  placeholder="*******************"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Col>
            </Row>
            <small>Confirm new password</small>
            <Row gutter={[48, 24]}>
              <Col xs={24} md={24}>
                <Input.Password
                  placeholder="Re-write the same password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Col>
            </Row>
          </div>
          <Divider style={{ margin: 0 }} />
          <div className="footer">
            <Row>
              <Col span={24}>
                <Button
                  type="primary"
                  style={{
                    float: "right",
                    borderRadius: 6,
                  }}
                >
                  Re-new this password
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
