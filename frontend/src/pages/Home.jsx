import React from "react";
import heroImg from "../assets/Demon.jpeg";
import Hero from "../components/Layout/Hero";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <img
        src={heroImg}
        alt="Hero section"
        className="w-full  h-[400px] md:h-[600px] lg:h-[650px] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
            Vacation <br /> Ready
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Explore our vacation-ready outfits with fast worldwide shipping.
          </p>
          <Link
            to="#"
            className="text-gray-950 bg-white px-6 py-2 rounded-sm text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
