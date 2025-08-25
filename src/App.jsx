import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeBody from "./components/main/home/HomeBody";
import FoodBody from "./components/main/food/FoodBody";
import DrinkBody from "./components/main/drink/DrinkBody";
import Dessert from "./components/main/dessert/Dessert";
import Booking from "./components/main/booking/Booking";
import Cart from "./components/cart/Cart";
import SummaryOrder from "./components/cart/SummaryOrder";
import Remark from "./components/cart/Remark";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { CartProvider } from './components/cart/CartContext';

// 2. Helper component that contains the logic
const AppLayout = () => {
  const location = useLocation(); // This hook gives us the current URL details
  const isCartPage = location.pathname === '/cart'; // Check if the path is exactly '/cart'
  const isSummaryPage = location.pathname === '/summaryOrder'; // Check if the path is exactly '/summaryOrder'
  const isProductDetailPage = location.pathname ==="/remark"; // Check if the path is exactly '/remark'

  return (
    <>
      {/* 3. Conditionally render the Header. If not the cart page, show it. */}
      {!isCartPage && !isSummaryPage && !isProductDetailPage && <Header />}

      <Routes>
        <Route path="/" element={<HomeBody />} />
        <Route path="/food" element={<FoodBody />} />
        <Route path="/drink" element={<DrinkBody />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/summaryOrder" element={<SummaryOrder />} />
        <Route path="/remark" element={<Remark />} /> 
      </Routes>

      {/* 4. Conditionally render the Footer. If not the cart page, show it. */}
      {!isCartPage && !isSummaryPage && !isProductDetailPage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <div>
      <CartProvider>
        <Router>
          {/* 5. Use the new layout component */}
          <AppLayout />
        </Router>
      </CartProvider>
    </div>
  );
};

export default App;
