import { Table, Pagination } from "antd";
import { useState } from "react";
import { Tag } from "antd";

const columns = [
  {
    title: "#",
    dataIndex: "sort",
    sorter: true,
  },
  {
    title: "Costumer name",
    dataIndex: "costumerName",
    sorter: true,
  },
  {
    title: "Team",
    dataIndex: "Team",
    sorter: true,
    render: (text) => <p className="field">{text}</p>,
  },
  {
    title: "Most claimed task",
    dataIndex: "MostClaimedTask",
    sorter: true,
    render: (text) => <p className="field">{text}</p>,
  },
  {
    title: "Number of tasks",
    dataIndex: "NumberofTasks",
    sorter: true,
    render: (ordersValue) => (
      <span>
        <Tag color="blue">{ordersValue}</Tag>
      </span>
    ),
  },
  {
    title: "Rating rate",
    dataIndex: "ratingRate",
    sorter: false,
    render: (ratingRate) => (
      <span>
        <Tag color="cyan">{ratingRate}</Tag>
      </span>
    ),
  },
];

const TeamTable = () => {
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
      sort: `${i}`,
      costumerName: "Costumer Name",
      Team: `lorean `,
      MostClaimedTask: `Most ordered kit ${i}`,
      NumberofTasks: `116$`,
      ratingRate: `4/5`,
    });
  }

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
        ></Table>
      </div>
    </>
  );
};

export default TeamTable;
