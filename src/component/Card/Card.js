import React, { useContext } from "react";
import "./card.css";
import { BsBag } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import productsContext from "../../Contexts/productsContext";
function Card() {
  const{isShowCart , setisShowCart , userCart } = useContext(productsContext)
  return (
    <aside className={`${isShowCart ? 'active' : ''} bag-sidebar`}>
      <h3 className="bag-title">
        <span>
          <BsBag />
          Bag
        </span>
        <span>
            <AiOutlineClose className="close-icon" onClick={()=>{
              setisShowCart(false)
            }}/>
        </span>
      </h3>

      <div className="row bag-wrapper">
        {
          userCart.map(product => (
            <div className="col-12 mt-5" key={product.id}>
            <div className="card py-3 px-3">
                <div className="col-12 text-center">
                    <img src='/images/download.jpg' alt="#" className="cart-img-top w-75" />
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <p className="card-text">{product.title}</p>
                    <p className="price">{product.price}$</p>
                    <br />
                    <a href="" className="btn btn-danger">Buy</a>
                    <a href="" className="btn btn-outline-dark mt-3 text-capitalize">
                        More Information
                    </a>
                    <p className="number">{product.count}</p>
                </div>
            </div>
        </div>
          ))
        }
      </div>
    </aside>
  );
}

export default Card;
