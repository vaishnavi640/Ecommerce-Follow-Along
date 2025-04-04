
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LoginPage,SignupPage, Homepage, ProductForm, EditProduct, ProductInfoPage, CartPage, Profile, SelectAddress, OrderConfirmation, MyOrders} from './Routes.jsx'
 
 
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/add-product" element={<ProductForm/>} />
      <Route path="/edit-product/:id" element={<EditProduct/>} />      
      <Route path="/products/:id" element={<ProductInfoPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/select-address' element={<SelectAddress />} />
      <Route path='/order-confirmation' element={<OrderConfirmation />} />
      <Route path='/my-orders' element={<MyOrders />} />
    </Routes>
    </BrowserRouter>
 
  );
}
 
export default App;
 
