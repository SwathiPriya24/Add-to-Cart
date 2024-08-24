import React, { useState } from "react";
import './style/prodList.css'

function ProductListing() {
  const initialProducts = [
    { id: 1, name: "Straw Berry Milk Shake", price: 80 },
    { id: 2, name: "Black Berry Milk Shake", price: 100 },
    { id: 3, name: "Pomegranate Milk Shake", price: 200 },
    { id: 4, name: "Vanilla Milk Shake", price: 150 },
    { id: 5, name: "Chocolate Milk Shake", price: 180 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex((p) => p.id === product.id);

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity += 1;
      updatedCart[existingProductIndex].totalPrice += product.price;
    } else {
      updatedCart.push({ ...product, quantity: 1, totalPrice: product.price });
    }

    setCart(updatedCart);
  };

  const removeFromCart = (product) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex((p) => p.id === product.id);

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity -= 1;
      updatedCart[existingProductIndex].totalPrice -= product.price;

      if (updatedCart[existingProductIndex].quantity <= 0) {
        updatedCart.splice(existingProductIndex, 1);
      }
    }

    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.totalPrice, 0);
  };

  return (
    <>
      <div className="title">
        <h2>Product List</h2>
      </div>
      <div className=" prodSection">

        <ul className="proLst">
          {initialProducts.map((product) => (
            <li key={product.id} className="list">
              <div className="Prodetail">
                <strong>{product.name}</strong> - Rs{product.price}

              </div>
              <div>
                <button className="addToCart" onClick={() => addToCart(product)}>Add</button>
                {cart.some((p) => p.id === product.id) && (
                  <button className="removefrmCart" onClick={() => removeFromCart(product)}>Remove</button>
                )}
              </div>
            </li>
          ))}
        </ul>


      </div>

      <div className="addToCartCard">

        <h2>Add to Cart</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> - Rs{product.price} x {product.quantity} = Rs{product.totalPrice}
            </li>
          ))}
        </ul>
        <div className="total">
          <p >Total Price: Rs{calculateTotalPrice()}</p>
        </div>

      </div>
    </>

  );
}

export default ProductListing;
