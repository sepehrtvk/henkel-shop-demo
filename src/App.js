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
import AuthContext, { AuthContextProvider } from "./context/auth-context";
import { useContext } from "react";
import Preview from "./components/preview/Preview";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <ProductsContextProvider>
          <CartContext>
            <Navbar />

            <Routes>
              <Route path='/contactus' element={<ContactUs />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/blogs/:id' element={<InsideBlog />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/preview' element={<Preview />} />
              <Route path='/shop/:category' element={<Shop />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/products/:id' element={<ProductsPage />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/' element={<Login />} />

              <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
            <Footer />
          </CartContext>
        </ProductsContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
