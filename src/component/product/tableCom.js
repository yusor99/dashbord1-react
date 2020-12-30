import { Table } from "antd";
import { useState } from "react";

const columns = [
  {
    title: "#",
    dataIndex: "sort",
    sorter: true,
  },
  {
    title: "Product Name",
    dataIndex: "Product Name",
    sorter: true,
  },
  {
    title: "3rd stage category",
    dataIndex: "3rd stage category",
    sorter: true,
  },
  {
    title: "2nd stage category",
    key: "2nd stage category",
    sorter: true,
  },
  {
    title: "1st stage category",
    key: "1st stage category",
    sorter: true,
  },
  {
    title: "Price",
    key: "Price",
    sorter: true,
  },
];
const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: "John Brown",
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}
const TableCom = () => {
  const tableColumns = columns.map((item) => ({ ...item }));
  tableColumns[tableColumns.length - 1].fixed = "right";
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };

  return (
    <>
      <div className="portable">
        <Table
          style={{ borderRadius: 20 }}
          columns={tableColumns}
          rowSelection={rowSelection}
          dataSource={data}
          footer={() => (
            <small style={{ color: "#A1A1A1" }}>
              The results of your search is 500 items out of 10,000 item
            </small>
          )}
          bordered
        />
      </div>
    </>
  );
};

export default TableCom;
