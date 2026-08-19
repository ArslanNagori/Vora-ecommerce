import React from "react";
import voraLogo from "../asset/Vora_logo.png";
import { Search, UserRound, Heart, ShoppingBag } from "lucide-react";
import { Link, useSearchParams, useLocation,  } from "react-router-dom";

const Navbar = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const activeCategory = searchParams.get("category");
  const isSale = searchParams.get("sale") === "true";
  const isShopActive =
    location.pathname === "/products" && !activeCategory && !isSale;

  const linkClass = (isActive) =>
    `text-sm  font-medium transition-colors ${
      isActive ? "text-black underline underline-offset-3 font-semibold" : "text-gray-800 hover:text-black"
    }`;

  return (
    <>
      <nav className="w-full flex justify-between px-4 py-2">
        <Link to="/">
          <img className="w-30 h-auto" src={voraLogo} alt="Brand Logo" />
        </Link>

        <div className="flex gap-6 py-2">
          <Link to="/products" className={linkClass(isShopActive)}>
            Shop
          </Link>
          <Link
            to="/products?category=men"
            className={linkClass(activeCategory === "men")}
          >
            Men
          </Link>
          <Link
            to="/products?category=women"
            className={linkClass(activeCategory === "women")}
          >
            Women
          </Link>
          <Link
            to="/products?category=accessories"
            className={linkClass(activeCategory === "accessories")}
          >
            Accessories
          </Link>
          <Link
            to="/products?sale=true"
            className={`text-sm font-medium transition-colors ${
              isSale
                ? "text-red-700 font-semibold"
                : "text-red-600 hover:text-red-500"
            }`}
          >
            Sale
          </Link>
        </div>

        <div className="flex items-center gap-2 bg-stone-100 rounded-xl px-4 w-98">
          <input
            className="outline-none w-full text-sm bg-transparent"
            type="text"
            placeholder="Search for products..."
          />
          <Search className="w-5 h-5 text-gray-700" />
        </div>

        <div className="flex items-center gap-5 py-2">
          <div className="flex items-center gap-1 cursor-pointer">
            <UserRound className="w-5 h-5 text-gray-800" />
            <h3 className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
              Account
            </h3>
          </div>

          
            <Link to='/wishlist' className="flex items-center gap-1 cursor-pointer">
              <Heart className="w-5 h-5 text-gray-800" />
              <h3 className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
                Wishlist
              </h3>
            </Link>
          

          <div className="flex items-center gap-1 cursor-pointer">
            <ShoppingBag className="w-5 h-5 text-gray-800" />
            <h3 className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
              Cart
            </h3>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
