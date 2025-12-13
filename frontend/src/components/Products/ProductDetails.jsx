import React, { use, useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";
import { toast } from "sonner";

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
  quantity: 5,
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

const similarProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 300,
    images: [{ url: "https://picsum.photos/500/500?random=3" }],
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
];

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setISButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (!selectedColor && !selectedSize) {
      toast.error("Please select a color and size before adding to cart..", {
        duration: 1000,
      });
      return;
    }
    setISButtonDisabled(true);

    setTimeout(() => {
      (toast.success("Product added to cart."),
        {
          duration: 1000,
        });
      setISButtonDisabled(false);
    }, 500);
  };

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
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Main image area */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main product"
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
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "broder-black" : "border-gray-300"}`}
                onClick={() => {
                  setMainImage(image.url);
                }}
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
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-black border-4" : "border-gray-300"}`}
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
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-4 rounded border ${selectedSize === size ? "bg-black text-white" : "border-gray-300"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* For Quantity */}
            <div className="mb-6">
              <p className="text-gray-700 ">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-900"}`}
            >
              {isButtonDisabled ? "Adding.." : "ADD TO CART"}
            </button>
            {/* Characteristics section */}
            <div className="mt-10 text-gray-700">
              <h3 className="text-lg font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
