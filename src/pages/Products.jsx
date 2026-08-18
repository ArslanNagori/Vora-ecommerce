import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductsSideBar from "../components/ProductsSideBar";

const Products = () => {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);

  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");

  const categoryMap = {
  men: "men's clothing",
  women: "women's clothing",
  accessories: "jewelery",
};

useEffect(() => {
  const dummyCategory = categoryMap[category];

  const url = dummyCategory
    ? `https://fakestoreapi.com/products/category/${encodeURIComponent(dummyCategory)}`
    : `https://fakestoreapi.com/products`;

  axios.get(url).then((res) => {
    const formatted = res.data.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
    }));
    setproducts(formatted);
    setloading(false);
  });
},[category]); 

  return (
    <div className="px-8 py-8">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          {category
            ? category.charAt(0).toUpperCase() + category.slice(1)
            : "Shop All"}
        </h1>
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}

        <ProductsSideBar />

        {/* Main content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-600">
              Showing 1–{products.length} of {products.length} products
            </p>
            <p className="text-sm text-gray-600">Sort by: Featured</p>
          </div>

          {loading ? (
            <p className="text-gray-500">Loading products...</p>
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
