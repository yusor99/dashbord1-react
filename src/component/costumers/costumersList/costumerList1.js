/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "../../navbar";

import CostumerTable1 from "./costumerTable1";
import Header from "./../../header";

const CostumerList1 = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        <CostumerTable1 />
      </div>
    </>
  );
};

export default CostumerList1;
