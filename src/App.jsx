import "./App.css";
import ProductListing from "./components/ProductListing";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="/books" element={<ProductComponent />} /> */}
    </Routes>
  );
}

export default App;
