// import React from 'react';
// import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';

// const Footer = ({ onNavigate }) => {
//   return (
//     <footer className="bg-gray-50 pt-16 pb-8 mt-16 border-t">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* Logo and About Section */}
//           <div>
//             <div className="mb-6">
//               <span className="text-3xl font-bold">
//                 <span className="text-emerald-600">AGRI</span>
//                 <span className="text-amber-500">VEDA</span>
//                 <span className="text-green-500 ml-1">🌿</span>
//               </span>
//             </div>
//             <p className="text-gray-600 mb-6">
//               Natural supplements derived from ancient Ayurvedic wisdom,
//               scientifically formulated to support your health and wellness journey.
//             </p>
//             <div className="flex space-x-2">
//               <a href="#" className="bg-emerald-500 text-white p-2 rounded-md hover:bg-emerald-600 transition duration-300">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="bg-emerald-500 text-white p-2 rounded-md hover:bg-emerald-600 transition duration-300">
//                 <Twitter size={20} />
//               </a>
//               <a href="#" className="bg-emerald-500 text-white p-2 rounded-md hover:bg-emerald-600 transition duration-300">
//                 <Instagram size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6 flex items-center">
//               Contact Info
//               <span className="ml-2 h-1 w-8 bg-amber-500 inline-block"></span>
//             </h3>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <Phone className="text-emerald-600 mr-3 mt-1" size={18} />
//                 <span className="text-gray-700">+1 (800) 235-7890</span>
//               </li>
//               <li className="flex items-start">
//                 <Mail className="text-emerald-600 mr-3 mt-1" size={18} />
//                 <span className="text-gray-700">support@agriveda.com</span>
//               </li>
//               <li className="flex items-start">
//                 <MapPin className="text-emerald-600 mr-3 mt-1" size={18} />
//                 <span className="text-gray-700">
//                   123 Wellness Way,<br />
//                   Harmony Heights, CA 90210
//                 </span>
//               </li>
//             </ul>
//           </div>

//           {/* Business Hours */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6 flex items-center">
//               Customer Support Hours
//               <span className="ml-2 h-1 w-8 bg-amber-500 inline-block"></span>
//             </h3>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <Clock className="text-emerald-600 mr-3 mt-1" size={18} />
//                 <div>
//                   <p className="text-gray-700">Monday-Friday:</p>
//                   <p className="text-gray-600">8:00 AM - 8:00 PM EST</p>
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <Clock className="text-emerald-600 mr-3 mt-1" size={18} />
//                 <div>
//                   <p className="text-gray-700">Saturday:</p>
//                   <p className="text-gray-600">10:00 AM - 4:00 PM EST</p>
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <Clock className="text-emerald-600 mr-3 mt-1" size={18} />
//                 <div>
//                   <p className="text-gray-700">Sunday:</p>
//                   <p className="text-gray-600">Closed</p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div className="mt-12 border-t pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <nav className="flex flex-wrap justify-center mb-4 md:mb-0">
//               <button onClick={() => onNavigate('home')} className="mx-3 text-gray-600 hover:text-emerald-600 transition duration-300">
//                 Home
//               </button>
//               <button onClick={() => onNavigate('products')} className="mx-3 text-gray-600 hover:text-emerald-600 transition duration-300">
//                 Products
//               </button>
//               <button onClick={() => onNavigate('benefits')} className="mx-3 text-gray-600 hover:text-emerald-600 transition duration-300">
//                 Benefits
//               </button>
//               <button onClick={() => onNavigate('shop')} className="mx-3 text-gray-600 hover:text-emerald-600 transition duration-300">
//                 Shop
//               </button>
//               <button onClick={() => onNavigate('contacts')} className="mx-3 text-gray-600 hover:text-emerald-600 transition duration-300">
//                 Contacts
//               </button>
//             </nav>
//             <div className="text-gray-500 text-sm">
//               © {new Date().getFullYear()} AGRIVEDA. All rights reserved.
//             </div>
//           </div>
//         </div>

//         {/* Newsletter Subscription (Optional) */}
//         <div className="mt-8 pt-6 border-t">
//           <div className="max-w-md mx-auto">
//             <h4 className="text-center font-semibold mb-4">Subscribe to our newsletter</h4>
//             <div className="flex">
//               <input 
//                 type="email" 
//                 placeholder="Your email address" 
//                 className="flex-grow px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               />
//               <button className="bg-emerald-600 text-white px-4 py-2 rounded-r hover:bg-emerald-700 transition duration-300">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;