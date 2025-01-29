import React, { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import ProuductsSection from "./component/ProuductsSection/ProuductsSection";
import "./App.css";
import Toast from "./component/Toast/Toast";
import Card from "./component/Card/Card";
import products from "./data/Product";
import productsContext from "./Contexts/productsContext";

function App() {
  const [allProducts, setAllProducts] = useState(products);
  const [userCart, setUserCart] = useState([]);
  const [isShowToast, setisShowToast] = useState(false);
  const [isShowCart, setisShowCart] = useState(false);

  return (
    <div>
      <productsContext.Provider
        value={{
          allProducts,
          userCart,
          setUserCart,
          isShowToast,
          setisShowToast,
          isShowCart,
          setisShowCart,
        }}
      >
        <Navbar />

        <main>
          <div className="container">
            <h1 className="text-center main-title">All Products</h1>
            <ProuductsSection />
          </div>
        </main>
        <Toast />
        <Card />
      </productsContext.Provider>
    </div>
  );
}

export default App;
