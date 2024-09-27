import React, { useState } from 'react';
import { mobileData } from '../data/mobiles';
import { useParams } from 'react-router-dom';
import { useCart } from '../Context/Cartcontext';

const Mobilesingle = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = mobileData.find((item) => item.id === id);
    const [selectedProductName, setSelectedProductName] = useState('');

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        addToCart(product);
        setSelectedProductName(product.model);
    };

    return (
        <>
            <div className="indSection">
                {selectedProductName && (
                    <div className="selectedProductName">
                        <h2>Your selected product: {selectedProductName}</h2>
                    </div>
                )}
                <div className="indImage">
                    <img src={product.image} alt={product.model} />
                </div>
                <div className="inddetails space">
                    <div className="indcompany">
                        <h2>{product.company}</h2>
                    </div>
                    <div className="indmodel">
                        <h3>{product.model}</h3>
                    </div>
                    <div className="indprice">
                        <h2>{product.price}</h2>
                    </div>
                    <div className="ind-desc">
                        <p>{product.description}</p>
                    </div>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </>
    );
};

export default Mobilesingle;
