// ProductListStatic.tsx
"use client";

import { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: string;
  cent: number;
  location: string;
  area: string;
  category: string;
  label: string;
  note: string;
  instaLink: string;
  image: string;
  overview: string;
}

const staticProducts: Product[] = [
  {
    id: 1,
    title: "RESIDENTIAL PLOT (NGO colony)",
    price: "10 lac",
    cent: 5,
    location: "NGO colony",
    area: "1500",
    category: "Residential Plot",
    label: "Ongoing",
    note: "Residential Plot for Sale",
    instaLink: "https://www.instagram.com/p/CL_example/",
    image: "/static/plot1.jpg",
    overview: "5 cent, 45 ft frontage, 20 ft road, approved plot, EMI option available, 10 lac per cent",
  },
  {
    id: 2,
    title: "House for Sale",
    price: "50 lac",
    cent: 10,
    location: "City Center",
    area: "2500",
    category: "House Sale",
    label: "Completed",
    note: "Luxurious House",
    instaLink: "",
    image: "/static/house1.jpg",
    overview: "10 cent, 60 ft frontage, 30 ft road, approved house, EMI option available, 50 lac",
  },
];

const ProductListStatic = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (selectedProduct) {
    // Product detail page
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
        <button
          className="mb-4 px-4 py-2 bg-gray-200 rounded"
          onClick={() => setSelectedProduct(null)}
        >
          Back
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="w-full md:w-1/2 h-64 object-cover rounded"
          />
          <div className="flex-1">
            <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
            <p className="text-gray-700 mt-2">{selectedProduct.note}</p>
            <p className="mt-2 font-semibold">
              Price: ₹{selectedProduct.price} / {selectedProduct.cent} cent
            </p>
            <p className="mt-2">Location: {selectedProduct.location}</p>
            <p className="mt-2">Category: {selectedProduct.category}</p>
            <p className="mt-2">Area: {selectedProduct.area} sqft</p>
            <div className="mt-4 p-4 bg-gray-50 rounded">
              <h3 className="font-semibold">Overview:</h3>
              <p>{selectedProduct.overview}</p>
            </div>
            {selectedProduct.instaLink && (
              <a
                href={selectedProduct.instaLink}
                target="_blank"
                className="mt-4 inline-block text-blue-600 underline"
              >
                View on Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Product list
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {staticProducts.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow hover:shadow-xl overflow-hidden transition duration-300 hover:-translate-y-2"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-sm font-bold mb-2 line-clamp-2">{item.note}</h3>
            <p className="text-sm font-bold mb-2">
              ₹{item.price} / {item.cent} cent
            </p>
            <p className="text-sm text-gray-600 mb-2">Location: {item.location}</p>
            <button
              className="mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              onClick={() => setSelectedProduct(item)}
            >
              Explore More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListStatic;
