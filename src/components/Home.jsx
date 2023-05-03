import { CartState } from "../context/Context";
// import Filters from "./Filters";
// import SingleProduct from "./SingleProduct";

const Home = () => {

   const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();
  
  return (
    <div className="home">
      {/* <Filters /> */}
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
}

export default Home;