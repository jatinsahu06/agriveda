import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-6 shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-emerald-600">AGRI</span>
            <span className="text-amber-500">VEDA</span>
            <span className="text-green-500 ml-1">🌿</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-emerald-600 transition duration-300">
            Home
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-emerald-600 transition duration-300">
            Products
          </Link>
          <Link to="/benefits" className="text-gray-700 hover:text-emerald-600 transition duration-300">
            Benefits
          </Link>
          <Link to="/shop" className="text-gray-700 hover:text-emerald-600 transition duration-300">
            Shop
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-emerald-600 transition duration-300">
            Contacts
          </Link>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center">
          <Link 
            to="/cart" 
            className="relative p-2 transition duration-300 hover:bg-gray-100 rounded-full"
            aria-label="View cart"
          >
            <ShoppingCart className="h-6 w-6 text-gray-700" />
            <span className="absolute top-0 right-0 bg-emerald-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-4 pt-2 pb-4 bg-white">
          <Link to="/" className="block py-2 text-gray-700 hover:text-emerald-600 transition duration-300">
            Home
          </Link>
          <Link to="/products" className="block py-2 text-gray-700 hover:text-emerald-600 transition duration-300">
            Products
          </Link>
          <Link to="/benefits" className="block py-2 text-gray-700 hover:text-emerald-600 transition duration-300">
            Benefits
          </Link>
          <Link to="/shop" className="block py-2 text-gray-700 hover:text-emerald-600 transition duration-300">
            Shop
          </Link>
          <Link to="/contact" className="block py-2 text-gray-700 hover:text-emerald-600 transition duration-300">
            Contacts
          </Link>
          <Link to="/cart" className="block py-2 text-gray-700 hover:text-emerald-600 transition duration-300">
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
