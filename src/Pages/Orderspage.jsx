import React from 'react';
import { useCart } from '../Context/Cartcontext';

const Orderspage = () => {
    const { orders, removeFromOrders } = useCart();

    return (
        <div>
            <h1>Your Orders</h1>
            {orders.length === 0 ? (
                <p>No orders yet.</p>
            ) : (
                orders.map((item) => (
                    <div className="orderSection" key={item.id}>
                        <div className="order-image">
                            <img src={process.env.PUBLIC_URL + item.image} alt={item.model} />
                        </div>
                        <div className="order-details">
                            <h3>{item.product}</h3>
                            <h2>Total Price: ${(item.price * item.quantity).toFixed(2)}</h2>
                            <h3>{item.model}</h3>
                            <p>{item.description}</p>
                            <button className="remove-button" onClick={() => removeFromOrders(item)}>Remove</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Orderspage;
