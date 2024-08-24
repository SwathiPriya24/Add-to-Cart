import React, { useState } from "react";

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
        <div>
            <h2>Product List</h2>
            <ul>
                {initialProducts.map((product) => (
                    <li key={product.id}>
                        <strong>{product.name}</strong> - ${product.price}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                        {cart.some((p) => p.id === product.id) && (
                            <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
                        )}
                    </li>
                ))}
            </ul>
            <hr />
            <h2>Add to Cart</h2>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        <strong>{product.name}</strong> - ${product.price} x {product.quantity} = ${product.totalPrice}
                    </li>
                ))}
            </ul>
            <p>Total Price: ${calculateTotalPrice()}</p>
        </div>
    );
}

export default ProductListing;
