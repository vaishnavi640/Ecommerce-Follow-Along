import Product from "./auth/Product";
import Showcase from "./auth/Showcase";
import Navbar from "./Navbar";
const Home = () => {
  // Example list of products
  return(
    <div className="flex flex-col gap-10 bg-gray-700">
      <div>
    <Navbar/>
    </div>
    <div className="mt-15">
    <Showcase/>
    </div>
    <Product />
    </div>
  )
}
export default Home;