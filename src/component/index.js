import Categories from "./categories";
import Navbar from "./navbar";
import State from "./state";
import NewProduct from "./product/productList/newProductForm";
import ProductList from "./product/productList/productList.js";
import CostumerList1 from "./costumers/costumersList/costumerList1";
import CostumerList2 from "./costumers/costumersList/costumerList2";
import NewCostumerForm from "./costumers/newCostumerForm";
import DeleteCostumer from "./costumers/deleteCostumer";
import DeleteTeam from "./team/deleteTeam";

const Home = () => {
  return (
    <>
      <DeleteTeam />
      <Navbar />
      <Categories />
      <NewProduct />
      <ProductList />
      <CostumerList1 />
      <CostumerList2 />
      <NewCostumerForm />
      <DeleteCostumer />
    </>
  );
};
export default Home;
/** <Navbar />
      <Categories />
      <State /> */
