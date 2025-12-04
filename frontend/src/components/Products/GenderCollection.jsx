import React from "react";
import womenImg from "../../assets/womens-collection.webp";
import menImg from "../../assets/mens-collection.webp";
import { Link } from "react-router-dom";

const GenderCollection = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Women's Collection */}
        <div className="relative flex-1">
          <img
            src={womenImg}
            alt="Women's Collection"
            className="w-full h-[700px] object-cover p-8"
          />
          <div className="absolute bottom-11 left-11 bg-white bg-opacity-90 p-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* Men's Collection */}
        <div className="relative flex-1">
          <img
            src={menImg}
            alt="Men's Collection"
            className="w-full h-[700px] object-cover p-8"
          />
          <div className="absolute bottom-11 left-11 bg-white bg-opacity-90 p-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;
