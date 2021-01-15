/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "../../navbar";

import CostumerTable1 from "./costumerTable1";
import Header2 from "./../../header2";

const CostumerList1 = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header2 />
        <CostumerTable1 />
      </div>
    </>
  );
};

export default CostumerList1;
