import { Route, Routes, Navigate } from "react-router-dom";

//Components
import ProductsContextProvider from "./context/ProductsContextProvider";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import ProductsPage from "./components/ProductsPage";
import CartContext from "./context/CartContext";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Blogs from "./components/Blogs";
import InsideBlog from "./components/blogs/InsideBlog";
import Login from "./components/Login";
import SignUp from "./components/SingUp";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <ProductsContextProvider>
        <CartContext>
          <Navbar />
          <Routes>
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<InsideBlog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products/:id" element={<ProductsPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </CartContext>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
