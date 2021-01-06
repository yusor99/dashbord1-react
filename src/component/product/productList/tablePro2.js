import { Col, Row } from "antd";
import Card from "./card";
const TablePro2 = () => {
  const data = [
    {
      key: "1",
      productName: "S type clavical locking plate",
      sort: "1",
      the3rdStageCategory: "3rd stage category ",
      the2ndStageCategory: "2nd stage category",
      the1stStageCategory: "1st stage category",
      price: "$ 119.00",
    },
    {
      key: "2",
      productName: "S type clavical locking plate",
      sort: "2",
      the3rdStageCategory: "3rd stage category",
      the2ndStageCategory: "2nd stage category",
      the1stStageCategory: "1st stage category ",
      price: "$ 119.00",
    },
    {
      key: "3",
      productName: "S type clavical locking plate",
      sort: "3",
      the3rdStageCategory: "3rd stage category ",
      the2ndStageCategory: "2nd stage category",
      the1stStageCategory: "1st stage category ",
      price: "$ 119.00",
    },
    {
      key: "4",
      productName: "S type clavical locking plate",
      sort: "4",
      the3rdStageCategory: "3rd stage category ",
      the2ndStageCategory: "2nd stage category",
      the1stStageCategory: "1st stage category ",
      price: "$ 119.00",
    },
  ];

  return (
    <div>
      <Row gutter={[24, 24]}>
        {data.map((data, index) => (
          <Col md={12} xs={24} key={index}>
            <Card data={data} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TablePro2;
