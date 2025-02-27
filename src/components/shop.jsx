import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const products = [
  // Your product data remains unchanged
  {
    id: 'GJ18208',
    name: 'Black chia seed, whole',
    image: './src/assets/Products/Black_chia_Seeds.png',
    inStock: true,
    organic: false,
    price: 9.99,
  },
  {
    id: 'GJ39',
    name: 'Organic Ginger Root Powder',
    image: '/src/assets/Products/Organic_Ginger_Root_Powder.png',
    inStock: true,
    organic: true,
    price: 12.50,
  },
  {
    id: 'GJ5695',
    name: "Organic Lion's Mane Powder",
    image: '/src/assets/products/Organic_Lions_Mane_Powder.png',
    inStock: false, // Example of out-of-stock product
    organic: true,
    price: 15.75,
  },
  {
    id: 'GJ176',
    name: 'Organic Spinach powder',
    image: '/src/assets/products/Organic_Spinach_Powde.png',
    inStock: true,
    organic: true,
    price:8.99  },
  {
    id: 'GJ5974',
    name: 'Organic Pumpkin Fruit Powder',
    image: '/src/assets/products/Organic_Pumpkin_Fruit_Powder.png',
    inStock: true,
    organic: true,
    price:8.99
  },
  {
    id: 'GJ5974-2',
    name: 'Organic Pumpkin Fruit Powder',
    image: '/src/assets/products/Organic_Pumpkin_Fruit_Powder.png',
    inStock: true,
    organic: true,price:8.99
  },
  {
    id: 'GJ174',
    name: 'Organic Beetroot Powder',
    image: '/src/assets/products/Organic_Beetroot_Powder.png',
    inStock: true,
    organic: true,price:8.99
  },
  {
    id: 'GJ61',
    name: 'Organic Wheat Grass Juice Powder',
    image: '/src/assets/products/Organic_Wheat_Grass_Juice_Powder.png',
    inStock: true,
    organic: true,price:8.99
  },
  {
    id: 'GJ6082',
    name: 'Organic Bladderwrack powder',
    image: '/src/assets/products/organic-Bladderwrack-powder.png',
    inStock: true,
    organic: true,price:8.99
  },
  {
    id: 'GJ7865',
    name: 'Organic Ashwagandha Powder',
    image: '/src/assets/products/organic-Ashwagandha-Powder.png',
    inStock: true,
    organic: true,price:8.99
  },
  {
    id: 'GJ4521',
    name: 'Organic Moringa Leaf Powder',
    image: '/src/assets/products/Organic-mornig-leaf-powder.png',
    inStock: true,
    organic: true,price:8.99
  },
  {
    id: 'GJ9543',
    name: 'Organic Turmeric Root Powder',
    image: '/src/assets/products/organic-Turmeric-Root-Powder-(with Curcumin).png',
    inStock: true,
    organic: true,
    price:8.99
  },
  {
    id: 'GJ7841',
    name: 'Organic Maca Root Powder',
    image: '/src/assets/products/organic-Maca-Root-Powder.png',
    inStock: true,
    organic: true,price:8.99
  },
  {
    id: 'GJ8732',
    name: 'Organic Spirulina Powder',
    image: '/src/assets/products/organic-Spirulina-Powder.png',
    inStock: true,
    organic: true,price:8.99
  },
  {
    id: 'GJ3421',
    name: 'Organic Chlorella Powder',
    image: '/src/assets/products/organic-Chlorella-Powder.png',
    inStock: true,
    organic: true,price:8.99
  },
];

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to Cart function with stock validation
  const addToCart = (product) => {
    if (!product.inStock) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    // Show pop-up message
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // Hide pop-up after 2 seconds
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Our Nutraceutical Products</h1>

      {/* Pop-up message */}
      {showPopup && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Item added to cart successfully!
        </div>
      )}

      {/* View Cart Button */}
      <Link to="/cart" className="bg-green-600 text-white px-4 py-2 rounded">
        View Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
      </Link>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
            <p className={`text-sm font-semibold ${product.inStock ? "text-green-600" : "text-red-600"}`}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </p>
            <button
              onClick={() => addToCart(product)}
              className={`mt-3 w-full py-2 rounded ${
                product.inStock
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
              disabled={!product.inStock}
            >
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;