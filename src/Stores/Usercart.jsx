import React, { useState } from 'react';
import { useCart } from '../Context/Cartcontext';

import { useNavigate } from 'react-router-dom';

const Usercart = () => {
    const { cartItems, incrementQuantity, decrementQuantity, removeFromCart, placeOrder } = useCart();
    
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleAdd = (item) => {
        incrementQuantity(item);
        setSelectedProduct(item);
        setSuccessMessage(`Successfully added ${item.model} to the cart!`);
    };

    const handleDelete = (item) => {
        removeFromCart(item);
        setSelectedProduct(null);
        setSuccessMessage(`Successfully removed ${item.model} from the cart!`);
    };

    const handlePlaceOrder = () => {
        const orderDetails = {
            items: cartItems,
            date: new Date().toLocaleString()
        };
      
        placeOrder();
        setSuccessMessage('Order placed successfully!');
        navigate('/order-confirmation');
    };

    return (
        <div className="cart-container">
            {cartItems.map((item) => (
                <div className="cartSection" key={item.id}>
                    <div className="cart-image">
                        <img src={process.env.PUBLIC_URL + item.image} alt={item.model} />
                    </div>
                    <div className="card-details">
                        <h3>{item.product}</h3>
                        <h2>Total Price: ${(item.price * item.quantity).toFixed(2)}</h2>
                        <h3>{item.model}</h3>
                        <div className="quantity-controls">
                            <button onClick={() => decrementQuantity(item)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleAdd(item)}>+</button>
                        </div>
                        <button className="delete-button" onClick={() => handleDelete(item)}>Delete</button>
                    </div>
                </div>
            ))}
            {cartItems.length > 0 && (
                <button className="place-order-button" onClick={handlePlaceOrder}>Place Order</button>
            )}
        </div>
    );
};

export default Usercart;
