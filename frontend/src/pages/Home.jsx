import React from 'react';
import ProductCard from '../components/auth/ProductCard';

const productDetails = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAng9ZPwtE5Di-isf0_TqJjNIQdp7GyyQ_g&s',
    name: 'Chandbali Earings',
    price: 1100,
    description: 'This is a product'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAticCiJBUx4Xl1oUNw0psQz28hUuFtmZwg&s',
    name: ' stone Jhumkas',
    price: 1000,
    description: 'This is a product'
  },
  {
    image: 'https://n-img0.junaroad.com/uiproducts/18311500/zoom_0-1648280941.jpg',
    name: 'silver jhumkas',
    price: 300,
    description: 'This is a product'
  },
  
];

const Homepage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">Our Products</h1>

        {/* Grid Layout for Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {productDetails.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;