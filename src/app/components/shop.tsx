'use client'; // Marking the component as client-side rendered

import Image from 'next/image'; // Import Image from Next.js for image optimization
import Link from 'next/link';  // Import Link from Next.js for navigation

const Shop = () => {
  // Sample product data (can be fetched dynamically from an API in the real app)
  const products = [
    { id: 1, name: 'Trenton modular sofa_3', price: 25000, imageUrl: '/images/product1.png' },
    { id: 2, name: 'Granite dining table with dining chair', price: 25000, imageUrl: '/images/product2.png' },
    { id: 3, name: 'Outdoor bar table and stool', price: 25000, imageUrl: '/images/product3.png' },
    { id: 4, name: 'Plain console with teak mirror', price: 25000, imageUrl: '/images/product4.png' },
    { id: 5, name: 'Grain coffee table', price: 15000, imageUrl: '/images/product5.png' },
    { id: 6, name: 'Kent coffee table', price: 225000, imageUrl: '/images/product6.png' },
    { id: 7, name: 'Round coffee table_color 2', price: 251000, imageUrl: '/images/product7.png' },
    { id: 8, name: 'Reclaimed teak coffee table', price: 25200, imageUrl: '/images/product8.png' },
    { id: 9, name: 'Plain console_', price: 258200, imageUrl: '/images/product9.png' },
    { id: 10, name: 'Reclaimed teak Sideboard', price: 20000, imageUrl: '/images/product10.png' },
    { id: 11, name: 'SJP_0825', price: 200000, imageUrl: '/images/product11.png' },
    { id: 12, name: 'Bella chair and table', price: 100000, imageUrl: '/images/product12.png' },
    { id: 13, name: 'Granite square side table', price: 258800, imageUrl: '/images/side-table1.png' },
    { id: 14, name: 'Asgaard sofa', price: 250000, imageUrl: '/images/product13.png' },
    { id: 15, name: 'Maya sofa three seater', price: 115000, imageUrl: '/images/product14.png' },
    { id: 16, name: 'Outdoor sofa set', price: 244000, imageUrl: '/images/product15.png' },
  ];

  // Helper function to render each product grid section
  const renderProductGrid = (startIndex: number, endIndex: number) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(startIndex, endIndex).map((product) => (
          <div key={product.id} className="text-center">
            <Link href={`/product/${product.id}`}>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </Link>
            <p className="mt-4 text-base text-black">{product.name}</p>
            <p className="mt-2 text-lg font-bold text-black">Rs. {product.price}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* Hero Section with Background Image and Opacity */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/shop-background.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5, // Set opacity for background image
          }}
        ></div>

        <section className="relative max-w-screen-xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-8 z-10">
          <div className="w-full flex justify-center sm:justify-center">
            <Image
              src="/images/shop-logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold text-black">Shop</h1>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-lg text-black font-semibold">
              Home <span className="text-base font-normal"> &gt; Shop</span>
            </p>
          </div>
        </section>
      </div>

      {/* Product Display Sections */}
      <div className="py-12">
        {/* First Section */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderProductGrid(0, 4)}
        </section>

        {/* Second Section */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          {renderProductGrid(4, 8)}
        </section>

        {/* Third Section */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          {renderProductGrid(8, 12)}
        </section>

        {/* Fourth Section */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          {renderProductGrid(12, 16)}
        </section>
      </div>

      {/* New Feature Section */}
      <section className="bg-[#FAF4F4] py-12 mt-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* First Column */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-black mb-4">Free Delivery</h2>
              <p className="text-lg text-gray-600">For all orders over $50, consectetur adipim scing elit.</p>
            </div>

            {/* Second Column */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-black mb-4">90 Days Return</h2>
              <p className="text-lg text-gray-600">If goods have problems, consectetur adipim scing elit.</p>
            </div>

            {/* Third Column */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-black mb-4">Secure Payment</h2>
              <p className="text-lg text-gray-600">100% secure payment, consectetur adipim scing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
