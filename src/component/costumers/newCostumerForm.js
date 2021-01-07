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
import { CloseOutlined, EyeOutlined } from "@ant-design/icons";
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
            <h1>Add new Customer</h1>
            <CloseOutlined className="close" />
          </div>
          <div className="container-felides-costumer   costumerForm ">
            <Row gutter={[48, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  name={["user", "name"]}
                  label="Customer name"
                  rules={[
                    {
                      message: "Hamdoon",
                    },
                  ]}
                >
                  <Input placeholder="Plates Secrews" />
                </Form.Item>
              </Col>
              <Col md={12} xs={24}>
                <Form.Item label="Phone number" name="input-number">
                  <InputNumber placeholder="07713117239" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[48, 0]}>
              <Col md={12} xs={24}>
                <Form.Item
                  name={["user", "name"]}
                  label="Location"
                  rules={[
                    {
                      message: "Plates and Secrews",
                    },
                  ]}
                >
                  <Input
                    placeholder="Plates and Secrews"
                    suffix={<EyeOutlined className="location" />}
                  />
                </Form.Item>
              </Col>

              <Col md={12} xs={24}>
                <Form.Item
                  name={["user", "name"]}
                  label="Hospital"
                  rules={[
                    {
                      message: "Trauma",
                    },
                  ]}
                >
                  <Input
                    placeholder="Trauma"
                    suffix={<EyeOutlined className="location" />}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Col md={8} xs={12}>
              <Form.Item
                name="select"
                label="Speciality"
                hasFeedback
                rules={[
                  {
                    message: "Unla",
                  },
                ]}
              >
                <Select placeholder="Please select a country">
                  <Option value="china">China</Option>
                  <Option value="usa">U.S.A</Option>
                </Select>
              </Form.Item>
            </Col>
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
