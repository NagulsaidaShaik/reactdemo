import React from 'react';

const MyOrders = ({ orderDetails }) => {
    return (
        <div className="my-orders-container">
            <h2>My Orders</h2>
            {orderDetails ? (
                <>
                    <div className="order-details">
                        <p><strong>Name:</strong> {orderDetails.name}</p>
                        <p><strong>Mobile Number:</strong> {orderDetails.mobile}</p>
                        <p><strong>Address:</strong> {orderDetails.address}</p>
                        <p><strong>State:</strong> {orderDetails.state}</p>
                        <p><strong>District:</strong> {orderDetails.district}</p>
                        <p><strong>Mandal:</strong> {orderDetails.mandal}</p>
                        <p><strong>Pincode:</strong> {orderDetails.pincode}</p>
                        <p><strong>Order Date:</strong> {orderDetails.date}</p>
                    </div>
                    <h3>Ordered Items</h3>
                    {Array.isArray(orderDetails.items) && orderDetails.items.length > 0 ? (
                        orderDetails.items.map((item) => (
                            <div className="order-item" key={item.id}>
                                <div className="order-item-image">
                                    <img src={process.env.PUBLIC_URL + item.image} alt={item.model} />
                                </div>
                                <div className="order-item-details">
                                    <h3>{item.product}</h3>
                                    <p><strong>Model:</strong> {item.model}</p>
                                    <p><strong>Quantity:</strong> {item.quantity}</p>
                                    <p><strong>Total Price:</strong> ${(item.price * item.quantity).toFixed(2)}</p>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No items found.</p>
                    )}
                </>
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
};

export default MyOrders;
