import React, { useContext } from "react";
import productsContext from "../../Contexts/productsContext";
import "./ProuductsSection.css";

function ProductsSection() {
  const { allProducts, setisShowToast, userCart, setUserCart } =
    useContext(productsContext);

  const addToCart = (product) => {
    setisShowToast(true);
    setTimeout(() => {
      setisShowToast(false);
    }, 3000);

    const isInUserCart = userCart.find(
      (bagProduct) => bagProduct.title === product.title
    );

    if (isInUserCart) {
      const updatedCart = userCart.map((bagProduct) =>
        bagProduct.title === product.title
          ? { ...bagProduct, count: bagProduct.count + 1 }
          : bagProduct
      );
      setUserCart(updatedCart);
    } else {
      const newUserCart = {
        id: userCart.length + 1,
        title: product.title,
        price: product.price,
        count: 1,
      };
      setUserCart((prev) => [...prev, newUserCart]);
    }
  };

  return (
    <>
      {allProducts.map((productSection) => (
        <div
          key={productSection.title}
          className="row justify-content-center mt-5"
        >
          <h3 className="text-center">{productSection.title}</h3>

          {productSection.infos.map((product) => (
            <div
              key={product.id}
              className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5"
            >
              <div className="card py-3 px-3">
                <div className="col-12 text-center">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="card-img-top w-75"
                  />
                </div>

                <div className="card-body text-center">
                  <p className="card-text">{product.title}</p>
                  <p className="price">{product.price.toLocaleString()} $</p>
                  <br />
                  <button
                    className="btn btn-danger"
                    onClick={() => addToCart(product)}
                  >
                    Add to cart
                  </button>
                  <button className="btn btn-outline-dark mt-3 text-capitalize">
                    More Information
                  </button>
                  <p className="number">Number: {product.cont}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default ProductsSection;
