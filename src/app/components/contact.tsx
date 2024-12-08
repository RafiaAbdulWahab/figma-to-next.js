'use client'; // Marking the component as client-side rendered

import Image from 'next/image'; // Import Image from Next.js for image optimization

const Contact = () => {
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
                        <h1 className="text-4xl font-bold text-black">Contact</h1>
                    </div>

                    <div className="text-center sm:text-right">
                        <p className="text-lg text-black font-semibold">
                            <span className="font-bold">Home</span> <span className="text-base font-normal"> &gt; Contact</span>
                        </p>
                    </div>
                </section>
            </div>

            {/* Get In Touch Section */}
            <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                <h2 className="text-3xl font-semibold text-black mb-6">Get In Touch With Us</h2>
                <p className="text-lg text-gray-600 mb-6">
                    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
            </section>

            {/* Contact Info Section */}
            <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Address, Phone, Working Time */}
                    <div>
                        {/* Address */}
                        <div className="flex items-start space-x-4 mb-8">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                            </svg>

                            <div>
                                <h3 className="text-xl font-semibold text-black">Address</h3>
                                <p className="text-lg text-gray-600">
                                    236 5th SE Avenue, New York NY10000, United States
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start space-x-4 mb-8">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                            </svg>

                            <div>
                                <h3 className="text-xl font-semibold text-black">Phone</h3>
                                <p className="text-lg text-gray-600">
                                    Mobile: +(84) 546-6789 <br />
                                    Hotline: +(84) 456-6789
                                </p>
                            </div>
                        </div>

                        {/* Working Time */}
                        <div className="flex items-start space-x-4">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd" />
                            </svg>

                            <div>
                                <h3 className="text-xl font-semibold text-black">Working Time</h3>
                                <p className="text-lg text-gray-600">
                                    Monday-Friday: 9:00 - 22:00 <br />
                                    Saturday-Sunday: 9:00 - 21:00
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-lg font-semibold text-black">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-lg font-semibold text-black">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email address"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-lg font-semibold text-black">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="Enter your message"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 mt-4 bg-black text-white rounded-lg hover:bg-gray-600"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
