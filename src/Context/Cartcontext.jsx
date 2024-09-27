import { createContext, useContext, useState } from "react";

const Cartcontext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [orders, setOrders] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (item) => {
        setCartItems((prevItems) =>
            prevItems.filter((cartItem) => cartItem.id !== item.id)
        );
    };

    const incrementQuantity = (item) => {
        setCartItems((prevItems) =>
            prevItems.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    };

    const decrementQuantity = (item) => {
        setCartItems((prevItems) =>
            prevItems.map((cartItem) =>
                cartItem.id === item.id && cartItem.quantity > 1
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            )
        );
    };

    const placeOrder = () => {
        setOrders([...orders, ...cartItems]);
        setCartItems([]);
    };

    const removeFromOrders = (item) => {
        setOrders((prevItems) =>
            prevItems.filter((orderItem) => orderItem.id !== item.id)
        );
    };

    return (
        <Cartcontext.Provider value={{ cartItems, orders, addToCart, removeFromCart, incrementQuantity, decrementQuantity, placeOrder, removeFromOrders }}>
            {children}
        </Cartcontext.Provider>
    );
};

export const useCart = () => {
    return useContext(Cartcontext);
};
