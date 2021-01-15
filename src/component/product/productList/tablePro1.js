import { Table, Pagination } from "antd";
import { useState } from "react";
import { Tag } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
const { Column } = Table;
const columns = [
  {
    title: "#",
    dataIndex: "sort",
    sorter: true,
  },
  {
    title: "Product Name",
    dataIndex: "productName",
    sorter: true,
  },
  {
    title: "3rd stage category",
    dataIndex: "the3rdStageCategory",
    sorter: true,
  },
  {
    title: "2nd stage category",
    dataIndex: "the2ndStageCategory",
    sorter: true,
  },
  {
    title: "1st stage category",
    dataIndex: "the1stStageCategory",
    sorter: true,
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: true,
    render: (price) => (
      <span>
        <Tag color="blue">{price}</Tag>
      </span>
    ),
  },
];

const TablePro2 = () => {
  const tableColumns = columns.map((item) => ({ ...item }));
  tableColumns[tableColumns.length - 1].fixed = "right";
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };

  const data = [];
  for (let i = 1; i <= 10; i++) {
    data.push({
      key: i,
      productName: [
        "jhon rally gfd",
        " ",
        <FileImageOutlined style={{ color: "#e1e4e8 !important" }} />,
      ],
      sort: `${i}`,
      the3rdStageCategory: `3rdStageCategory ${i}`,
      the2ndStageCategory: `2ndStageCategory`,
      the1stStageCategory: `1stStageCategory ${i}`,
      price: `${i}000$`,
    });
  }
  console.log(data);
  return (
    <>
      <div className="portable">
        <Table
          bordered={true}
          pagination={false}
          className="product-table"
          columns={tableColumns}
          rowSelection={rowSelection}
          dataSource={data}
          footer={() => (
            <div className="table-footer">
              <small>
                The results of your search is 500 items out of 10,000 item
              </small>
              <Pagination simple defaultCurrent={1} total={6} />
            </div>
          )}
        >
          <Column title="Price" dataIndex="price">
            <Tag color="blue">{data.price}</Tag>
          </Column>
        </Table>
      </div>
    </>
  );
};

export default TablePro2;
