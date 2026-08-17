import React from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const testProduct = {
    id: 1,
    title: "Transit Sneakers",
    price: 2499,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400",
    colors: ["#ffffff", "#000000", "#9ca3af"],
  };
  return (
    <div>
      <h1 className="p-8 text-2xl">Products Page</h1>
      <div className="w-64">
        <ProductCard {...testProduct} />
      </div>
    </div>
  );
};

export default Products;
