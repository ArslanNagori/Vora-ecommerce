import { Link, useSearchParams } from "react-router-dom";
import { ChevronUp } from "lucide-react";

const ProductsSideBar = () => {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");

  return (
    <aside className="w-56 flex-shrink-0">

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Categories</h3>
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              to="/products"
              className={`block text-sm px-2 py-1.5 rounded-md transition-colors ${
                activeCategory
                  ?"text-gray-600 hover:text-black" 
                  : "font-medium text-gray-900 bg-gray-100"
                  
              }`}
            >
              All Products
            </Link>
          </li>
          <li>
            <Link
              to="/products?category=men"
              className={`block text-sm px-2 py-1.5 rounded-md transition-colors ${
                activeCategory === "men"
                  ? "font-medium text-gray-900 bg-gray-100"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              to="/products?category=women"
              className={`block text-sm px-2 py-1.5 rounded-md transition-colors ${
                activeCategory === "women"
                  ? "font-medium text-gray-900 bg-gray-100"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              to="/products?category=accessories"
              className="block text-sm px-2 py-1.5 rounded-md text-gray-600 hover:text-black transition-colors"
            >
              Accessories
            </Link>
          </li>
          <li>
            <Link
              to="/products?sale=true"
              className="block text-sm px-2 py-1.5 rounded-md text-red-500 hover:text-red-600 transition-colors"
            >
              Sale
            </Link>
          </li>
        </ul>
      </div>

      <hr className="border-gray-200 mb-5" />

      <h3 className="text-sm font-semibold text-gray-900 mb-4">Filter By</h3>

      {/* Price */}
      <div className="mb-5 pb-5 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-medium text-gray-700 uppercase tracking-wide">Price</p>
          <ChevronUp className="w-4 h-4 text-gray-400" />
        </div>
        <input type="range" min="0" max="5000" className="w-full accent-black h-1" />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>₹0</span>
          <span>₹5000+</span>
        </div>
      </div>

      {/* Size */}
      <div className="mb-5 pb-5 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-medium text-gray-700 uppercase tracking-wide">Size</p>
          <ChevronUp className="w-4 h-4 text-gray-400" />
        </div>
        <div className="grid grid-cols-2 gap-y-2">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <label key={size} className="flex items-center gap-2 text-xs text-gray-600">
              <input type="checkbox" className="accent-black w-3.5 h-3.5" />
              {size}
            </label>
          ))}
        </div>
      </div>

      {/* Color */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-medium text-gray-700 uppercase tracking-wide">Color</p>
          <ChevronUp className="w-4 h-4 text-gray-400" />
        </div>
        <div className="flex flex-wrap gap-2">
          {["#000000", "#6b7280", "#9ca3af", "#d4a574", "#ffffff", "#4b5320", "#3b82f6", "#7c2d12"].map((color, index) => (
            <span
              key={index}
              style={{ backgroundColor: color }}
              className="w-5 h-5 rounded-full border border-gray-300 cursor-pointer"
            ></span>
          ))}
        </div>
      </div>

    </aside>
  );
};

export default ProductsSideBar;