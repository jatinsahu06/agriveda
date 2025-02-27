import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    // For demo purposes, initialize with the item from the image
    const initialCart = [
      {
        id: 1,
        name: "Organic Ginger Root Powder",
        price: 12.50,
        quantity: 1,
        image: "/path-to-ginger-image.jpg" // Replace with actual path
      }
    ];
    const savedCart = JSON.parse(localStorage.getItem("cart")) || initialCart;
    setCart(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const applyPromoCode = () => {
    if (promoCode === "SAVE10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalPrice = subtotal - (subtotal * discount) / 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex justify-center space-x-8 mb-8">
        <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
        <Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
        <Link to="/benefits" className="text-gray-600 hover:text-gray-900">Benefits</Link>
        <Link to="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
        <Link to="/contacts" className="text-gray-600 hover:text-gray-900">Contacts</Link>
        <Link to="/cart" className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
              {cart.length}
            </span>
          )}
        </Link>
      </nav>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-500">Your cart is empty.</p>
          <Link to="/shop" className="mt-4 inline-block px-6 py-3 bg-green-600 text-white rounded-lg">Continue Shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center p-4 mb-4 border rounded-lg">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4 rounded" />
                <div className="flex-grow">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                </div>
                <div className="text-lg font-bold mr-4">${item.price.toFixed(2)}</div>
                <div className="flex items-center border rounded-md mr-4">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                    className="px-3 py-1 text-lg bg-gray-200 rounded-l-md"
                  >
                    -
                  </button>
                  <span className="px-4 py-1">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                    className="px-3 py-1 text-lg bg-gray-200 rounded-r-md"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="mb-4">
              <p className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </p>
              <p className="flex justify-between mb-2">
                <span>Discount:</span>
                <span>{discount}%</span>
              </p>
              <p className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </p>
            </div>
            <div className="mt-6">
              <input 
                type="text" 
                value={promoCode} 
                onChange={(e) => setPromoCode(e.target.value)} 
                placeholder="Enter Promo Code" 
                className="w-full px-4 py-2 border rounded-md mb-2" 
              />
              <button 
                onClick={applyPromoCode} 
                className="w-full py-3 bg-black text-white rounded-md mb-4"
              >
                Apply
              </button>
              <button className="w-full py-3 bg-red-500 text-white rounded-md font-bold">
                PAY
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;