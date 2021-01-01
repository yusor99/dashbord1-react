import Categories from "./categories";
import Navbar from "./navbar";
import State from "./state";

import ProductList from "./product/productList";
import NewProduct from "./product/newProduct";

const Home = () => {
  return (
    <>
      <Navbar />
      <h1> page 1</h1>
      <Categories />
      <br />
      <h1>page 2</h1>
      <ProductList />
      <br />
      <h1>page3</h1>
      <State />
      <br />
      <h1>page 4</h1>
      <NewProduct />
    </>
  );
};
export default Home;
/** <Navbar />
      <Categories />
      <State /> */
