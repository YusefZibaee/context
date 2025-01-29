import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";
import "./Navbar.css";
import productsContext from "../../Contexts/productsContext";
export default function Navbar() {
  const { setisShowCart } = useContext(productsContext);
  return (
    <div>
      <nav className="navbar navbar-expand-sm py-3 d-flex">
        <div className="container">
          <a href="#" className="navBrand">
            shop
          </a>

          <ul className="navbar-nav me-auto ms-3">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
          </ul>

          <div className="bag-box">
            <a href="#" className="bag">
              <BsBag
                className="text-white"
                onClick={() => {
                  setisShowCart(true);
                }}
              />
              <span className="">0</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
