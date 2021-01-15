import {
  Form,
  Select,
  Col,
  InputNumber,
  Button,
  Input,
  Row,
  Divider,
} from "antd";
import {
  EyevisibleOutlined,
  CloseOutlined,
  EyeOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import "../../styles/form.css";
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    div: 6,
  },
  wrapperCol: {
    div: 14,
  },
};

const NewCostumerForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="overlay">
      <div className=" container-form-costumer  ">
        <Form
          name="validate_other"
          {...formItemLayout}
          onFinish={onFinish}
          className="form-costumer "
        >
          <div className="title">
            <h1>Add new team member</h1>
            <CloseOutlined className="close" />
          </div>
          <div className="container-felides-costumer   costumerForm ">
            <Row gutter={[48, 0]}>
              <Col xs={24} md={12}>
                <Form.Item name={["user", "name"]} label="Employee name">
                  <Input placeholder="Hamdon Al-Hamdooni" />
                </Form.Item>
              </Col>
              <Col md={12} xs={24}>
                <Form.Item label="Phone number" name="input-number">
                  <InputNumber placeholder="07713117239" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[48, 0]}>
              <Col xs={24} md={12}>
                <Form.Item name={["user", "name"]} label="E-mail">
                  <Input placeholder="Hamandi@solostudio.co" />
                </Form.Item>
              </Col>
              <Col md={12} xs={24}>
                <Form.Item label="Team" name={["user", "name"]}>
                  <Input placeholder="Loream" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[48, 0]}>
              <Col md={12} xs={24}>
                <Form.Item name={["user", "name"]} label="Location">
                  <Input
                    placeholder="Plates and Secrews"
                    suffix={<EyeOutlined className="location" />}
                  />
                </Form.Item>
              </Col>
              <Col md={12} xs={24}>
                <Form.Item name="input-number" label="Birth year">
                  <InputNumber min={1930} max={1999} placeholder="1999" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[48, 0]}>
              <Col md={12} xs={24}>
                <Form.Item name={["user", "name"]} label="Password">
                  <Input.Password
                    placeholder="*******************"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
              </Col>
              <Col md={12} xs={24}>
                <Form.Item name={["user", "name"]} label="Confirm password">
                  <Input.Password
                    placeholder="Re-write the same password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
              </Col>
            </Row>
          </div>
          <Divider />
          <div className="footer">
            <Row>
              <Col span={12}>
                <small style={{ color: "#949DA5" }}>
                  From here you can add Costumers to your list
                </small>
              </Col>
              <Col span={12}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ float: "right" }}
                >
                  Create
                </Button>
              </Col>
            </Row>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default NewCostumerForm;
