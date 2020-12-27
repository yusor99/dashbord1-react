import {
  Form,
  Select,
  Col,
  InputNumber,
  Button,
  Upload,
  Input,
  Row,
  Divider,
} from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import "../styles/form.css";
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    div: 6,
  },
  wrapperCol: {
    div: 14,
  },
};

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const NewProduct = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="container-form">
      <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
        <div className="title">
          <h1>Add new product</h1>
        </div>
        <div className="container-felides">
          <Row gutter={[32, 20]}>
            <Col sm={24} md={12}>
              <Form.Item
                name={["user", "name"]}
                label="Product name"
                rules={[
                  {
                    message: "S type calvicle",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col md={12} sm={24}>
              <Form.Item label="Price" name="input-number">
                <InputNumber min={1} max={1000000} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[32, 20]}>
            <Col md={8} sm={12}>
              <Form.Item
                name="select"
                label="3rd stage category"
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

            <Col md={8} sm={12}>
              <Form.Item
                name={["user", "name"]}
                label="2nd stage category"
                rules={[
                  {
                    message: "Plates and Secrews",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col md={8} sm={12}>
              <Form.Item
                name={["user", "name"]}
                label="1st stage category"
                rules={[
                  {
                    message: "Trauma",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Product photo">
            <Form.Item
              name="dragger"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <CloudUploadOutlined
                    style={{ fontSize: 100, color: "#CED9EB" }}
                  />
                </p>
                <p className="ant-upload-text" style={{ color: "#808D93" }}>
                  Choose a file from your PC or
                  <span style={{ color: "black" }}>drag & drop </span>here
                </p>
                <Button>Browse</Button>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
        </div>
        <Divider />
        <div className="footer">
          <Row>
            <Col span={12}>
              <small style={{ color: "#949DA5" }}>
                From here you can add products to your list
              </small>
            </Col>
            <Col span={12}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ float: "right" }}
              >
                Create New Item
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};
export default NewProduct;
