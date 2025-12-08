import React from "react";

const selectedProduct = {
  name: "Hikking Boot",
  price: 3500,
  originalPrice: 4000,
  description:
    "This is a high quality durable boot with stylish and classic looks. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempora incidunt ipsum rem amet mollitia facere saepe aut exercitationem velit",
  brand: "Goldstar",
  material: "Leather",
  sizes: [32, 33, 40, 42, 45],
  colors: ["Green", "Brown", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Strong Boots",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Durable Boots",
    },
  ],
};

const ProductDetails = () => {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>

          {/* Main image area */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={selectedProduct.images[0]?.url}
                alt={selectedProduct.images[0]?.altText || selectedProduct.name}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Mobile Thumbnail */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg mb-1 line-through text-red-600">
              {/* Conditional Render {cond && value}, shows result if > 0 else no. */}
              Rs{" "}
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              Rs {selectedProduct.price}
            </p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            {/* For colors options */}
            <div className="mb-4">
              <p className="text-gray-700">Colors:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border"
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.7)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            {/* For Sizes options */}
            <div className="mb-4">
              <p className="text-gray-700">Sizes:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button key={size} className="py-2 px-4 rounded border">
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
