import { Link, useSearchParams } from "react-router-dom";

const ProductsSideBar = () => {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");

  return (
    <aside className="w-56 shrink-0">

      {/* Categories */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Categories</h3>
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              to="/products"
              className={`block text-sm px-2 py-1.5 rounded-md transition-colors ${
                !activeCategory
                  ? "font-medium text-gray-900 bg-gray-100"
                  : "text-gray-600 hover:text-black"
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
              className={`block text-sm px-2 py-1.5 rounded-md transition-colors ${
                activeCategory === "accessories"
                  ? "font-medium text-gray-900 bg-gray-100"
                  : "text-gray-600 hover:text-black"
              }`}
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

    </aside>
  );
};

export default ProductsSideBar;