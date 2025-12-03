import React from "react";
import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import "./Footer.css";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container grid mx-auto grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div className="group">
          <h3 className="text-lg text-gray-800 mb-4 cursor-pointer slide-underline">
            Newsletter
          </h3>
          <p className="text-gray-500 mb-4">
            Be the first one to know about new products, exclusive events ,and
            online offers.
          </p>
          <p className="font-medium text-sm text-gray-600 mb-6">
            Sign up and get instant 10% off on any product.
          </p>

          {/* Newsletter form */}
          <form className="flex ">
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

        {/* Shops Links */}
        <div className="group">
          <h3 className="text-lg text-gray-800 cursor-pointer slide-underline">
            Shop
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's top wears
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's top wears
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's bottom wears
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's bottom wears
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="group">
          <h3 className="text-lg text-gray-800 cursor-pointer slide-underline">
            Support
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Links */}
        <div className="group">
          <h3 className="text-lg text-gray-800 mb-4 cursor-pointer slide-underline">
            Follow us
          </h3>
          <div className="flex items-center space-x-4 mb-6">
            <a // <a> = for external links && <Link> = for internal react app operation.
              href="https://www.facebook.com"
              //Target=_blank opens a new tap keeping ur current website open.
              target="_blank"
              // rel="noopener noreferrer" = safe + private new-tab navigation
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <TbBrandMeta className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <IoLogoTiktok className="w-5 h-5" />
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <RiTwitterXLine className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-800 cursor-pointer text-lg slide-underline inline-block mb-2">
            Call Us
          </p>
          <p>
            <FiPhoneCall className="inline-block mr-2" />
            +977 9848000000
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm tracking-tighter text-center">
          &copy; {new Date().getFullYear()} Innocent. All rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
