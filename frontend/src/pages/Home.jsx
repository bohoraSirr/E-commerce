import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedProduct from "../components/Products/FeaturedProduct";

const Home = () => {
  const placeholderProducts = [
    {
      _id: 9,
      name: "Product 9",
      price: 300,
      images: [{ url: "https://picsum.photos/500/500?random=9" }],
    },
    {
      _id: 2,
      name: "Product 2",
      price: 200,
      images: [{ url: "https://picsum.photos/500/500?random=4" }],
    },
    {
      _id: 3,
      name: "Product 3",
      price: 150,
      images: [{ url: "https://picsum.photos/500/500?random=5" }],
    },
    {
      _id: 4,
      name: "Product 4",
      price: 500,
      images: [{ url: "https://picsum.photos/500/500?random=6" }],
    },
    {
      _id: 1,
      name: "Product 1",
      price: 500,
      images: [{ url: "https://picsum.photos/500/500?random=1" }],
    },
    {
      _id: 8,
      name: "Product 8",
      price: 500,
      images: [{ url: "https://picsum.photos/500/500?random=8" }],
    },
    {
      _id: 10,
      name: "Product 10",
      price: 500,
      images: [{ url: "https://picsum.photos/500/500?random=10" }],
    },
    {
      _id: 11,
      name: "Product 11",
      price: 500,
      images: [{ url: "https://picsum.photos/500/500?random=11" }],
    },
  ];

  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArrivals />

      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />

      {/* Womens Collection */}
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4 ">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>

      {/* Featured Product */}
      <FeaturedProduct />
    </div>
  );
};

export default Home;
