/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "../../navbar";

import TablePro1 from "./tablePro1";
import Header from "./../../header";

const Product = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        <TablePro1 />
      </div>
    </>
  );
};

export default Product;
