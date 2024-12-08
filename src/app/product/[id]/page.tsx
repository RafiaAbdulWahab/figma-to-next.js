'use client';

import { useRouter } from 'next/router';
import Image from 'next/image';

type Product = {
    id: number;
    name: string;
    description?: string;
    price: number;
    imageUrl: string;
    shortDescription?: string;
    longDescription?: string;
};

const ProductPage = async ({ params }: { params: { id: string } }) => {
    const { id } = params;

    // Updated products list with all your products
    const products: Product[] = [
        { id: 1, name: 'Trenton modular sofa_3', price: 25000, imageUrl: '/images/product1.png', shortDescription: 'A modular sofa with elegant design.', longDescription: 'This is a high-quality modular sofa designed to fit any living room. Made with top-grade materials for durability and comfort. Perfect for large gatherings and family settings.' },
        { id: 2, name: 'Granite dining table with dining chair', price: 25000, imageUrl: '/images/product2.png', shortDescription: 'Granite dining table set with matching chairs.', longDescription: 'A luxurious granite dining table with four matching chairs. The table is built to last with a polished finish and sleek design, perfect for modern interiors.' },
        { id: 3, name: 'Outdoor bar table and stool', price: 25000, imageUrl: '/images/product3.png', shortDescription: 'Perfect for outdoor settings.', longDescription: 'This outdoor bar set is designed to withstand the elements. Made of weather-resistant materials, it is perfect for your garden or terrace, offering both comfort and style.' },
        { id: 4, name: 'Plain console with teak mirror', price: 25000, imageUrl: '/images/product4.png', shortDescription: 'Teak wood console with mirror.', longDescription: 'A beautifully crafted console table with a large teak mirror, ideal for entryways or living rooms. The teak wood ensures longevity and style.' },
        { id: 5, name: 'Grain coffee table', price: 15000, imageUrl: '/images/product5.png', shortDescription: 'Stylish grain coffee table for living rooms.', longDescription: 'Crafted from high-quality wood, this grain coffee table brings a rustic yet modern touch to your living room. Ideal for any space.' },
        { id: 6, name: 'Kent coffee table', price: 225000, imageUrl: '/images/product6.png', shortDescription: 'Elegant and modern coffee table.', longDescription: 'The Kent coffee table combines elegance and functionality, with a modern design and durable construction. Perfect for your living area.' },
        { id: 7, name: 'Round coffee table_color 2', price: 251000, imageUrl: '/images/product7.png', shortDescription: 'Round coffee table with unique design.', longDescription: 'This round coffee table has a unique and sophisticated design, ideal for smaller living spaces. It’s built with premium materials for long-lasting durability.' },
        { id: 8, name: 'Reclaimed teak coffee table', price: 25200, imageUrl: '/images/product8.png', shortDescription: 'Eco-friendly reclaimed teak wood table.', longDescription: 'A sustainable and eco-friendly coffee table made from reclaimed teak wood. A great addition to any home that prioritizes style and sustainability.' },
        { id: 9, name: 'Plain console_', price: 258200, imageUrl: '/images/product9.png', shortDescription: 'Simple and modern console table.', longDescription: 'This console table is designed with simplicity in mind, making it perfect for modern and minimalist interiors.' },
        { id: 10, name: 'Reclaimed teak Sideboard', price: 20000, imageUrl: '/images/product10.png', shortDescription: 'Elegant sideboard for any room.', longDescription: 'A reclaimed teak wood sideboard with ample storage. Ideal for living rooms or dining rooms, combining elegance and practicality.' },
        { id: 11, name: 'SJP_0825', price: 200000, imageUrl: '/images/product11.png', shortDescription: 'Luxurious seating option.', longDescription: 'The SJP_0825 is a luxurious seating option for your home, designed with comfort and elegance in mind. Perfect for high-end interiors.' },
        { id: 12, name: 'Bella chair and table', price: 100000, imageUrl: '/images/product12.png', shortDescription: 'Elegant chair and table set.', longDescription: 'This set includes a stylish chair and table, perfect for creating a cozy corner or reading nook. The Bella set is both comfortable and sophisticated.' },
        { id: 13, name: 'Granite square side table', price: 258800, imageUrl: '/images/side-table1.png', shortDescription: 'Square granite side table.', longDescription: 'A square granite side table that adds a touch of class to any living room or bedroom. The sturdy material ensures durability and elegance.' },
        { id: 14, name: 'Asgaard sofa', price: 250000, imageUrl: '/images/product13.png', shortDescription: 'Luxurious Asgaard sofa for the modern home.', longDescription: 'The Asgaard sofa combines comfort with high-end style. It is built to last and provides ultimate relaxation for any space.' },
        { id: 15, name: 'Maya sofa three seater', price: 115000, imageUrl: '/images/product14.png', shortDescription: 'Three-seater Maya sofa.', longDescription: 'The Maya sofa is a three-seater designed for comfort and durability, perfect for family rooms or lounges.' },
        { id: 16, name: 'Outdoor sofa set', price: 244000, imageUrl: '/images/product15.png', shortDescription: 'Outdoor sofa set for your patio.', longDescription: 'This outdoor sofa set is made from weather-resistant materials, designed for comfort and durability, perfect for outdoor living.' },
    ];

    // Find the product by ID
    const product = products.find((product) => product.id.toString() === id);

    if (!product) {
        return (
            <div>
                <h1>Product not found</h1>
            </div>
        );
    }

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Product Image */}
                <div className="flex justify-center">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="object-cover rounded-lg"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-start">
                    <h1 className="text-4xl font-bold text-black">{product.name}</h1>
                    <p className="mt-4 text-lg text-gray-600">{product.shortDescription || 'No short description available.'}</p>

                    <p className="mt-6 text-xl font-bold text-black">Rs. {product.price}</p>

                    {/* Sizes */}
                    <div className="mt-6">
                        <label className="font-semibold text-black">Select Size:</label>
                        <div className="flex space-x-4 mt-2">
                            <button className="px-4 py-2 bg-gray-200 rounded-lg">L</button>
                            <button className="px-4 py-2 bg-gray-200 rounded-lg">XL</button>
                            <button className="px-4 py-2 bg-gray-200 rounded-lg">XS</button>
                        </div>
                    </div>

                    <button className="mt-6 py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-600">
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Horizontal Line */}
            <div className="my-8 border-t border-gray-300"></div>

            {/* Product Description */}
            <div>
                <h2 className="text-3xl font-semibold text-black">Description</h2>
                <p className="mt-4 text-lg text-gray-600">{product.longDescription || 'No long description available.'}</p>
            </div>
        </div>
    );
};

export default ProductPage;
