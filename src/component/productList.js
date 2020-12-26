/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "./navbar";
import { Button, Input } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  PlusOutlined,
  AppstoreOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
const { SubMenu } = Menu;
const menu = (
  <Menu>
    <SubMenu title="sub menu1">
      <Menu.Item>
        <SubMenu title="sub menu11">
          <Menu.Item>1rd menu item</Menu.Item>
          <Menu.Item>2th menu item</Menu.Item>
          <Menu.Item>2th menu item</Menu.Item>
        </SubMenu>
      </Menu.Item>
      <Menu.Item>
        <SubMenu title="sub menu12">
          <Menu.Item>3rd menu item</Menu.Item>
          <Menu.Item>4th menu item</Menu.Item>
          <Menu.Item>5th menu item</Menu.Item>
        </SubMenu>
      </Menu.Item>
      <Menu.Item>
        <SubMenu title="sub menu13">
          <Menu.Item>3rd menu item</Menu.Item>
          <Menu.Item>4th menu item</Menu.Item>
          <Menu.Item>5th menu item</Menu.Item>
        </SubMenu>
      </Menu.Item>
    </SubMenu>
    <SubMenu title="sub menu2">
      <Menu.Item>
        <SubMenu title="sub menu11">
          <Menu.Item>1rd menu item</Menu.Item>
          <Menu.Item>2th menu item</Menu.Item>
          <Menu.Item>2th menu item</Menu.Item>
        </SubMenu>
      </Menu.Item>
      <Menu.Item>
        <SubMenu title="sub menu12">
          <Menu.Item>3rd menu item</Menu.Item>
          <Menu.Item>4th menu item</Menu.Item>
          <Menu.Item>5th menu item</Menu.Item>
        </SubMenu>
      </Menu.Item>
      <Menu.Item>
        <SubMenu title="sub menu13">
          <Menu.Item>3rd menu item</Menu.Item>
          <Menu.Item>4th menu item</Menu.Item>
          <Menu.Item>5th menu item</Menu.Item>
        </SubMenu>
      </Menu.Item>
    </SubMenu>
    <SubMenu title="sub menu3">
      <Menu.Item>
        <SubMenu title="sub menu11">
          <Menu.Item>1rd menu item</Menu.Item>
          <Menu.Item>2th menu item</Menu.Item>
          <Menu.Item>2th menu item</Menu.Item>
        </SubMenu>
      </Menu.Item>
      <Menu.Item>
        <SubMenu title="sub menu12">
          <Menu.Item>3rd menu item</Menu.Item>
          <Menu.Item>4th menu item</Menu.Item>
          <Menu.Item>5th menu item</Menu.Item>
        </SubMenu>
      </Menu.Item>
      <Menu.Item>
        <SubMenu title="sub menu13">
          <Menu.Item>3rd menu item</Menu.Item>
          <Menu.Item>4th menu item</Menu.Item>
          <Menu.Item>5th menu item</Menu.Item>
        </SubMenu>
      </Menu.Item>
    </SubMenu>
  </Menu>
);
const Product = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="product-header">
          <div className="search-left">
            <Input
              placeholder="Search for something..."
              suffix={<SearchOutlined />}
            />
            <Button icon={<FilterOutlined />} className="filter">
              <Dropdown overlay={menu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Filter <DownOutlined />
                </a>
              </Dropdown>
            </Button>
          </div>
          <div className="right">
            <Button type="primary">
              Add New <PlusOutlined />
            </Button>
            <span className="icon-show">
              <AppstoreOutlined />
              <BarsOutlined />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
