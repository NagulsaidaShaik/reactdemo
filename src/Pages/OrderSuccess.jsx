
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className="order-success-container">
            <h2>Order Confirmation</h2>
            <p>Your order is confirmed and will be delivered as soon as possible!</p>
            <button className="back-home-button" onClick={handleBackToHome}>Back to Home</button>
        </div>
    );
};

export default OrderSuccess;
