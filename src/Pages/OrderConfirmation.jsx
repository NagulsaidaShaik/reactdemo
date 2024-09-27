import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [mandal, setMandal] = useState('');
    const [pincode, setPincode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleConfirm = () => {
        
        if (!/^\d{10}$/.test(mobile) || /^(\d)\1{9}$/.test(mobile)) {
            setErrorMessage('Mobile number must be exactly 10 digits and not all the same digit.');
            return;
        }
        if (address.trim().length < 10 || !/[a-zA-Z]/.test(address) || !/\d/.test(address)) {
            setErrorMessage('Address must be at least 10 characters long and include door numbers.');
            return;
        }
        if (state.trim() === '' || district.trim() === '' || mandal.trim() === '' || !/^\d{6}$/.test(pincode)) {
            setErrorMessage('Please fill in all address fields correctly.');
            return;
        }

       
        const orderDetails = {
            name,
            mobile,
            address,
            state,
            district,
            mandal,
            pincode,
            date: new Date().toLocaleString()
        };

        
        localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

        navigate('/order-success');
    };

    const handleMobileChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 10) {
            setMobile(value);
        }
    };

    return (
        <div className="order-confirmation-container">
            <h2>Order Confirmation</h2>
            <div className="form-group">
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Mobile Number:</label>
                <input type="text" value={mobile} onChange={handleMobileChange} />
            </div>
            <div className="form-group">
                <label>Address:</label>
                <textarea value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
            </div>
            <div className="form-group">
                <label>State:</label>
                <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
            </div>
            <div className="form-group">
                <label>District:</label>
                <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Mandal:</label>
                <input type="text" value={mandal} onChange={(e) => setMandal(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Pincode:</label>
                <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} />
            </div>
            <button className="confirm-button" onClick={handleConfirm}>Confirm</button>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
    );
};

export default OrderConfirmation;
