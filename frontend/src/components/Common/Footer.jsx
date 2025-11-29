import React from "react";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container grid mx-auto grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first one to know about new products, exclusive events ,and
            online offers.
          </p>
          <p>Sign up and get instant 10% off on any product.</p>

          {/* Newsletter form */}
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
