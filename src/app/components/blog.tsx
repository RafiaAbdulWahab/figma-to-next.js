'use client'; // Marking the component as client-side rendered

import Image from 'next/image'; // Import Image from Next.js for image optimization

const Blog = () => {
  return (
    <div>
      {/* Hero Section with Background Image and Opacity */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/shop-background.jpg')", // Use your own background image URL here
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5, // Set opacity for background image
          }}
        ></div>

        <section className="relative max-w-screen-xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-8 z-10">
          <div className="w-full flex justify-center sm:justify-center">
            <Image
              src="/images/shop-logo.png" // Use your logo image URL here
              alt="Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold text-black">Blog</h1>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-lg text-black font-semibold">
              <span className="font-bold">Home</span> <span className="text-base font-normal"> &gt; Blog</span>
            </p>
          </div>
        </section>
      </div>

      {/* Blog Posts Section */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Blog Post */}
          <div>
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
              <Image
                src="/images/blog1.jpg" // Replace with your actual blog image
                alt="Blog Post Image"
                width={1000}
                height={600}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-600">Admin | March 22, 2024</p>
                <h2 className="text-2xl font-semibold text-black mt-2">Going All-In with Millennial Design</h2>
                <p className="text-lg text-gray-700 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque eros sit amet diam efficitur, ac tincidunt erat fermentum. Vivamus lacinia ex ac feugiat varius. Pellentesque gravida libero a magna facilisis, eu faucibus elit fermentum. Cras vitae felis purus. 
                  <span className="text-blue-600">...Read more</span>
                </p>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
              <Image
                src="/images/blog2.jpg" // Replace with your actual blog image
                alt="Blog Post Image"
                width={1000}
                height={600}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-600">Admin | March 20, 2024</p>
                <h2 className="text-2xl font-semibold text-black mt-2">Design Trends to Look Out for in 2024</h2>
                <p className="text-lg text-gray-700 mt-4">
                  Curabitur volutpat magna ac facilisis sagittis. Vivamus vehicula orci nec orci fringilla, ac auctor orci tincidunt. Donec ultricies mauris nec nisi mollis, nec elementum neque egestas. Curabitur vehicula est nec risus mollis...
                  <span className="text-blue-600">...Read more</span>
                </p>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
              <Image
                src="/images/blog3.jpg" // Replace with your actual blog image
                alt="Blog Post Image"
                width={1000}
                height={600}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-600">Admin | March 18, 2024</p>
                <h2 className="text-2xl font-semibold text-black mt-2">Sustainable Design for a Greener Future</h2>
                <p className="text-lg text-gray-700 mt-4">
                  Donec sed felis eget libero facilisis tincidunt non id libero. Integer ut turpis ac ipsum vestibulum tincidunt. In eget metus vitae ipsum vehicula efficitur eu at sapien. Nullam ac elit justo. Cras finibus suscipit erat ut efficitur.
                  <span className="text-blue-600">...Read more</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div>
            {/* Search Bar */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Categories</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li><a href="#" className="hover:text-blue-600">Interior Design</a></li>
                <li><a href="#" className="hover:text-blue-600">Furniture Trends</a></li>
                <li><a href="#" className="hover:text-blue-600">Sustainable Design</a></li>
                <li><a href="#" className="hover:text-blue-600">Home Improvement</a></li>
                <li><a href="#" className="hover:text-blue-600">Decor Ideas</a></li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Recent Posts</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li><a href="#" className="hover:text-blue-600">Going All-In with Millennial Design</a></li>
                <li><a href="#" className="hover:text-blue-600">Design Trends to Look Out for in 2024</a></li>
                <li><a href="#" className="hover:text-blue-600">Sustainable Design for a Greener Future</a></li>
                <li><a href="#" className="hover:text-blue-600">The Future of Home Automation</a></li>
                <li><a href="#" className="hover:text-blue-600">How to Choose the Right Lighting for Your Home</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
