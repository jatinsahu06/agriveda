// Home.jsx
import React from 'react';

const Home = () => {
  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Ayurvedic Immune Booster",
      description: "Natural herbal formula to strengthen immune system",
      price: 34.99,
      image: "/src/assets/aayurveda-immunity-booster.webp"
    },
    {
      id: 2,
      name: "Organic Ashwagandha",
      description: "Stress relief and energy support supplement",
      price: 29.99,
      image: "/src/assets/products/organic-Ashwagandha-Powder.png"
    },
    {
      id: 3,
      name: "Tulsi Detox Formula",
      description: "Cleansing and purifying herbal supplement",
      price: 27.99,
      image: "https://m.media-amazon.com/images/I/617-oEzlf6L.jpg"
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: "🌱",
      title: "100% Organic",
      description: "All ingredients sourced from certified organic farms"
    },
    {
      icon: "🧪",
      title: "Lab Tested",
      description: "Every batch tested for purity and potency"
    },
    {
      icon: "🌿",
      title: "Traditional Wisdom",
      description: "Formulas based on ancient Ayurvedic principles"
    },
    {
      icon: "🔬",
      title: "Science Backed",
      description: "Modern research validates traditional uses"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-gray-900">Natural</span> <br />
              <span className="text-gray-900">Organic</span>{" "}
              <span className="text-amber-500">Herbs!</span>
            </h1>
            <p className="text-xl font-medium mb-4">
              Order Now For Natural Wellness Solutions
            </p>
            <p className="text-gray-500 mb-8 max-w-md">
              Premium nutraceuticals crafted from organic herbs and plants. 
              Daily supplements for optimal health and vitality. 
              Order now and get 15% off on your first purchase.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
              Order Now
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-96 h-96">
              <img 
                src="/src/assets/food_14856266.png" 
                alt="Circle of organic herbs and plants" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-emerald-600">Agri</span><span className="text-amber-500">veda</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-emerald-600">${product.price}</span>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/Products" className="inline-block border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-6 py-3 rounded-lg font-medium transition duration-300">
            View All Products
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-amber-500 flex">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"The Ashwagandha supplement has significantly improved my energy levels and sleep quality. I've been taking it for 3 months now and can't imagine my routine without it."</p>
              <p className="font-semibold">— Sarah M.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-amber-500 flex">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"As a healthcare professional, I'm very particular about the supplements I recommend. Agriveda's quality and efficacy have impressed both me and my patients."</p>
              <p className="font-semibold">— Dr. James W.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-amber-500 flex">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"The immune support formula helped me stay healthy during the winter season. The natural ingredients make all the difference compared to synthetic alternatives."</p>
              <p className="font-semibold">— Michael K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-emerald-500">Agri</span>
                <span className="text-amber-500">veda</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Premium organic herbal supplements for modern wellness needs.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                <li><a href="/products" className="text-gray-400 hover:text-white transition duration-300">Products</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Immune Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Stress Relief</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Digestive Health</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Energy & Vitality</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="not-italic text-gray-400">
                <p className="mb-2">123 Herbal Way</p>
                <p className="mb-2">Wellness District, CA 90210</p>
                <p className="mb-2">Email: info@agriveda.com</p>
                <p>Phone: (555) 123-4567</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Agriveda. All rights reserved.</p>
            <div className="mt-2">
              <a href="#" className="hover:text-white transition duration-300 mx-2">Privacy Policy</a>
              <a href="#" className="hover:text-white transition duration-300 mx-2">Terms of Service</a>
              <a href="#" className="hover:text-white transition duration-300 mx-2">Shipping Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;