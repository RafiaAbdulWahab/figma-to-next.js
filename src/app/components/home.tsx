'use client';  // Make this component a client component

import Image from 'next/image'; // Import Image from Next.js for image optimization
import Link from 'next/link';  // Import Link component from Next.js

const Home = () => {
  return (
    <div>
      {/* First Hero Section */}
      <div className="bg-[#FBEBB5]">
        <section className="flex flex-col sm:flex-row items-center justify-between px-4 py-8 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
          {/* Left Side Text */}
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black leading-tight">
              Rocket Single Seater
            </h1>
            <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg text-black">
              <Link href="/shop">
                <span className="underline decoration-black cursor-pointer">Shop Now</span>
              </Link>
            </p>
          </div>

          {/* Right Side Image Placeholder */}
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mt-8 sm:mt-0">
            <Image
              src="/images/rocket-seater.png" // Replace this with your image path
              alt="Rocket Single Seater"
              width={300} // Adjusted image width for better fit
              height={300} // Adjusted image height for better fit
              className="object-cover rounded-lg"
            />
          </div>
        </section>
      </div>

      {/* Second Hero Section */}
      <div className="bg-[#FAF4F4]">
        <section className="flex flex-col sm:flex-row items-center justify-between px-4 py-8 sm:px-6 lg:px-8 max-w-screen-xl mx-auto h-[672px]">
          {/* Left Side */}
          <div className="w-full sm:w-1/2 md:w-1/3 text-center sm:text-left mb-8 sm:mb-0">
            <div className="w-full">
              <Image
                src="/images/side-table1.png" // Replace this with your image path
                alt="Side Table"
                width={200} // Adjusted image width for better fit
                height={200} // Adjusted image height for better fit
                className="object-cover rounded-lg"
              />
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mt-4">
                Side Table
              </h2>
              <p className="mt-2 text-sm sm:text-base text-black">
                <Link href="/shop">
                  <span className="underline decoration-black cursor-pointer">View More</span>
                </Link>
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full sm:w-1/2 md:w-1/3 text-center sm:text-left">
            <div className="w-full">
              <Image
                src="/images/side-table2.png" // Replace this with your image path
                alt="Side Table"
                width={200} // Adjusted image width for better fit
                height={200} // Adjusted image height for better fit
                className="object-cover rounded-lg"
              />
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mt-4">
                Side Table
              </h2>
              <p className="mt-2 text-sm sm:text-base text-black">
                <Link href="/shop">
                  <span className="underline decoration-black cursor-pointer">View More</span>
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Third Hero Section */}
      <div className="bg-[#F5F5F5] py-12">
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center">
            Top Picks For You
          </h2>
          <p className="mt-4 text-lg text-black text-center">
            Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
          </p>

          {/* 4 Products in a row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {/* Product 1 */}
            <div className="text-center">
              <Image
                src="/images/product1.png" // Replace this with your image path
                alt="Product 1"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
              <p className="mt-4 text-base text-black">Trenton modular sofa_3</p>
              <p className="mt-2 text-lg font-bold text-black">Rs. 25,000.00</p>
            </div>

            {/* Product 2 */}
            <div className="text-center">
              <Image
                src="/images/product2.png" // Replace this with your image path
                alt="Product 2"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
              <p className="mt-4 text-base text-black">Granite dining table with dining chair</p>
              <p className="mt-2 text-lg font-bold text-black">Rs. 25,000.00</p>
            </div>

            {/* Product 3 */}
            <div className="text-center">
              <Image
                src="/images/product3.png" // Replace this with your image path
                alt="Product 3"
                width={150}
                height={150}
                className="object-cover rounded-lg"
              />
              <p className="mt-4 text-base text-black">Outdoor bar table and stool</p>
              <p className="mt-2 text-lg font-bold text-black">Rs. 25,000.00</p>
            </div>

            {/* Product 4 */}
            <div className="text-center">
              <Image
                src="/images/product4.png" // Replace this with your image path
                alt="Product 4"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
              <p className="mt-4 text-base text-black">Plain console with teak mirror</p>
              <p className="mt-2 text-lg font-bold text-black">Rs. 25,000.00</p>
            </div>
          </div>

          {/* View More Text */}
          <div className="text-center mt-8">
            <Link href="/shop">
              <p className="text-lg text-black underline cursor-pointer">View More</p>
            </Link>
          </div>
        </section>
      </div>

      {/* Fourth Hero Section */}
      <div className="bg-[#FFF9E5] py-12">
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
          {/* Left Side Image */}
          <div className="w-full sm:w-1/2">
            <Image
              src="/images/asgaard-sofa.png" // Replace this with your image path
              alt="Asgaard Sofa"
              width={350}
              height={350}
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right Side Text */}
          <div className="w-full sm:w-1/2 text-center sm:text-left mt-8 sm:mt-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-black">New Arrivals</h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mt-4">Asgaard Sofa</h2>
            <button className="mt-4 px-6 py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition duration-300">
              Order Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
