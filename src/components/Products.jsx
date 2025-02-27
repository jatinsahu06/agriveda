// Products.jsx
import React, { useState } from 'react';

const Products = () => {
  // Filter states
  const [harvestFilter, setHarvestFilter] = useState('All');
  const [certificateFilter, setCertificateFilter] = useState('All');

  // Product data based on the image
  const products = [
    {
      id: 'GJ18208',
      name: 'Black chia seed, whole',
      image: './src/assets/Products/Black_chia_Seeds.png',
      inStock: true,
      organic: false,
    },
    // {
    //   id: 'GJ18208-2',
    //   name: 'Black chia seed, whole',
    //   image: '/src/assets/products/chia-seed.jpg',
    //   inStock: true,
    //   organic: false,
    // },
    {
      id: 'GJ39',
      name: 'Organic Ginger Root Powder',
      image: '/src/assets/Products/Organic_Ginger_Root_Powder.png',
      inStock: true,
      organic: true,
    },
    {
      id: 'GJ5695',
      name: "Organic Lion's Mane Powder",
      image: '/src/assets/products/Organic_Lions_Mane_Powder.png',
      inStock: true,
      organic: true,
    },
    {
      id: 'GJ176',
      name: 'Organic Spinach powder',
      image: '/src/assets/products/Organic_Spinach_Powde.png',
      inStock: true,
      organic: true,
    },
    {
      id: 'GJ5974',
      name: 'Organic Pumpkin Fruit Powder',
      image: '/src/assets/products/Organic_Pumpkin_Fruit_Powder.png',
      inStock: true,
      organic: true,
    },
    {
      id: 'GJ5974-2',
      name: 'Organic Pumpkin Fruit Powder',
      image: '/src/assets/products/Organic_Pumpkin_Fruit_Powder.png',
      inStock: true,
      organic: true,
    },
    {
      id: 'GJ174',
      name: 'Organic Beetroot Powder',
      image: '/src/assets/products/Organic_Beetroot_Powder.png',
      inStock: true,
      organic: true,
    },
    {
      id: 'GJ61',
      name: 'Organic Wheat Grass Juice Powder',
      image: '/src/assets/products/Organic_Wheat_Grass_Juice_Powder.png',
      inStock: true,
      organic: true,
    },
    {
      id: 'GJ6082',
      name: 'Organic Bladderwrack powder',
      image: '/src/assets/products/organic-Bladderwrack-powder.png',
      inStock: true,
      organic: true,
    },
    {
      id: 'GJ7865',
      name: 'Organic Ashwagandha Powder',
      image: '/src/assets/products/organic-Ashwagandha-Powder.png',
      inStock: true,
      organic: true,
    },
    {
      id: 'GJ4521',
      name: 'Organic Moringa Leaf Powder',
      image: '/src/assets/products/Organic-mornig-leaf-powder.png',
      inStock: true,
      organic: true,
    },
    {
      id: 'GJ9543',
      name: 'Organic Turmeric Root Powder',
      image: '/src/assets/products/organic-Turmeric-Root-Powder-(with Curcumin).png',
      inStock: true,
      organic: true,
    },
    {
      id: 'GJ7841',
      name: 'Organic Maca Root Powder',
      image: '/src/assets/products/organic-Maca-Root-Powder.png',
      inStock: true,
      organic: true,
    },
    {
      id: 'GJ8732',
      name: 'Organic Spirulina Powder',
      image: '/src/assets/products/organic-Spirulina-Powder.png',
      inStock: true,
      organic: true,
    },
    {
      id: 'GJ3421',
      name: 'Organic Chlorella Powder',
      image: '/src/assets/products/organic-Chlorella-Powder.png',
      inStock: true,
      organic: true,
    },
    // {
    //   id: 'GJ5634',
    //   name: 'Organic Acai Berry Powder',
    //   image: '/src/assets/products/acai-berry-powder.jpg',
    //   inStock: true,
    //   organic: true,
    // },
    // {
    //   id: 'GJ9843',
    //   name: 'Organic Barley Grass Powder',
    //   image: '/src/assets/products/barley-grass-powder.jpg',
    //   inStock: true,
    //   organic: true,
    // },
    // {
    //   id: 'GJ3764',
    //   name: 'Organic Kale Powder',
    //   image: '/src/assets/products/kale-powder.jpg',
    //   inStock: true,
    //   organic: true,
    // },
    // {
    //   id: 'GJ2891',
    //   name: 'Organic Camu Camu Powder',
    //   image: '/src/assets/products/camu-camu-powder.jpg',
    //   inStock: true,
    //   organic: true,
    // },
    // {
    //   id: 'GJ1983',
    //   name: 'Organic Reishi Mushroom Powder',
    //   image: '/src/assets/products/reishi-powder.jpg',
    //   inStock: true,
    //   organic: true,
    // }
  ];

  // For demonstration, using placeholder for filter options
  const harvestOptions = ['All', 'Spring', 'Summer', 'Fall', 'Winter'];
  const certificateOptions = ['All', 'USDA Organic', 'Non-GMO', 'Fair Trade'];
  
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        <span className="text-emerald-600">Organic</span> Products
      </h1>
      
      {/* Filter Section */}
      <div className="mb-8 flex flex-wrap gap-3">
        <div className="flex items-center">
          <span className="mr-2 text-sm text-gray-600">Harvest Time:</span>
          <div className="relative">
            <select 
              className="bg-gray-100 border border-gray-300 text-gray-700 py-1 px-3 pr-8 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={harvestFilter}
              onChange={(e) => setHarvestFilter(e.target.value)}
            >
              {harvestOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="flex items-center">
          <span className="mr-2 text-sm text-gray-600">Certificate:</span>
          <div className="relative">
            <select 
              className="bg-gray-100 border border-gray-300 text-gray-700 py-1 px-3 pr-8 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={certificateFilter}
              onChange={(e) => setCertificateFilter(e.target.value)}
            >
              {certificateOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map(product => (
          <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white flex flex-col">
            {/* Product Image */}
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              {/* USDA Organic Badge */}
              {product.organic && (
                <div className="absolute top-2 right-2">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1">
                    <div className="w-full h-full rounded-full border-2 border-emerald-600 flex items-center justify-center">
                      <div className="text-emerald-600 text-xs font-bold text-center leading-tight">
                        <div>USDA</div>
                        <div>ORGANIC</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="p-4 border-t border-gray-200 flex-grow flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-500">SKU: {product.id}</span>
                {product.inStock ? (
                  <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded">In Stock</span>
                ) : (
                  <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded">Out of Stock</span>
                )}
              </div>
              
              <h3 className="text-sm font-medium">{product.name}</h3>
              
              <div className="mt-auto pt-4">
                <button className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-md py-2 px-3 text-sm transition duration-300">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Message Us Floating Button */}
      {/* <div className="fixed bottom-6 right-6">
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
          Message us
        </button>
      </div> */}
    </div>
  );
};

export default Products;