import React from "react";
import voraLogo from "../asset/Vora_logo.png";
import { Search, UserRound, Heart, ShoppingBag } from "lucide-react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className=" w-full flex justify-between px-4 py-2 ">
        
          <Link to='/'>
          <img className="w-30 h-auto" src={voraLogo} alt="Brand Logo" />
          </Link>{/* Logo */}

        <div className="flex gap-6 py-2">
          <Link
            to="/products"
            className="text-sm font-medium text-gray-800 hover:text-black cursor-pointer transition-colors"
          >
            Shop
          </Link>
          <Link
            to="/products?category=men"
            className="text-sm font-medium text-gray-800 hover:text-black cursor-pointer  transition-colors"
          >
            Men
          </Link>
          <Link
            to="/products?category=women"
            className="text-sm font-medium text-gray-800 hover:text-black cursor-pointer  transition-colors"
          >
            Women
          </Link>
          <Link
            to="/products?category=accessories"
            k
            className="text-sm font-medium text-gray-800 hover:text-black cursor-pointer  transition-colors"
          >
            Accessories
          </Link>
          <Link
            to="/products?sale=true"
            className="text-sm font-medium text-red-600 hover:text-red-500 cursor-pointer  transition-colors"
          >
            Sale
          </Link>
        </div>
        {/* Navigation Links */}

        <div className="flex items-center gap-2  bg-stone-100  rounded-xl px-4  w-98">
          <input
            className="outline-none w-full text-sm bg-transparent"
            type="text"
            placeholder="Search for products..."
          />
          <Search className="w-5 h-5 text-gray-700" />
        </div>
        {/*Search Bar */}

        <div className="flex items-center gap-5 py-2">
          <div className="flex items-center gap-1 cursor-pointer">
            <UserRound className="w-5 h-5 text-gray-800" />
            <h3 className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
              Account
            </h3>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <Heart className="w-5 h-5 text-gray-800" />
            <h3 className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
              Wishlist
            </h3>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <ShoppingBag className="w-5 h-5 text-gray-800" />
            <h3 className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
              Cart
            </h3>
          </div>
        </div>
        {/* Right Side */}
      </nav>
    </>
  );
};

export default Navbar;
