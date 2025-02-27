import React from "react";
import { CheckCircle, ChevronRight } from "lucide-react";

const benefitsData = [
  {
    title: "Organic & Natural Ingredients",
    description: "Our supplements are made from 100% organic and natural ingredients, free from harmful chemicals and synthetic additives.",
    icon: "plant",
  },
  {
    title: "Boosts Immunity & Vitality",
    description: "Nutraceuticals provide essential vitamins and minerals that strengthen immunity, increase energy, and promote overall well-being.",
    icon: "shield",
  },
  {
    title: "Supports Gut Health",
    description: "Our plant-based nutrition helps improve digestion, enhance nutrient absorption, and maintain a healthy gut microbiome.",
    icon: "stomach",
  },
  {
    title: "Scientifically Backed Formulas",
    description: "Each product is formulated based on scientific research to ensure maximum effectiveness and health benefits.",
    icon: "lab",
  },
  {
    title: "Ayurvedic & Herbal Wellness",
    description: "Harnessing the power of Ayurveda, our herbal products provide natural healing solutions without side effects.",
    icon: "leaf",
  },
];

// Custom icon component that uses emoji fallbacks for icons
const BenefitIcon = ({ type }) => {
  // Map icon types to emoji fallbacks
  const iconMap = {
    plant: "🌿",
    shield: "🛡️",
    stomach: "💚",
    lab: "🧪",
    leaf: "🍃",
  };

  return (
    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-lg">
      {iconMap[type] || "✓"}
    </div>
  );
};

const BenefitCard = ({ benefit, index }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-50">
      <div className="flex items-start mb-4">
        <BenefitIcon type={benefit.icon} />
        <div className="ml-4 flex-1">
          <h3 className="text-xl font-bold text-emerald-700">{benefit.title}</h3>
          <p className="mt-2 text-gray-600 leading-relaxed">{benefit.description}</p>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100">
        <button className="text-emerald-600 font-medium flex items-center text-sm hover:text-emerald-700 transition-colors">
          Learn more <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            Benefits & Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-emerald-600">Our Nutraceuticals</span>?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the power of nature with scientifically proven benefits that transform your health from within.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefitsData.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg">
            Explore All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;