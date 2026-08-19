import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import ProductCard from "../components/ProductCard";

const wishlistItems = [
  {
    id: 1,
    title: "Linen Relaxed Shirt",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
    colors: ["#e8ddc9", "#8a8a7d", "#1c1c1b"],
  },
  {
    id: 2,
    title: "Essential Hoodie",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
    colors: ["#7c8368", "#d8d1c7", "#1c1c1b"],
  },
  {
    id: 3,
    title: "Utility Jacket",
    price: 3499,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
    colors: ["#e8ded0", "#8a8a7d", "#1c1c1b"],
  },
  {
    id: 4,
    title: "Minimal Sneakers",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
    colors: ["#f7f3ec", "#a8a29c", "#1c1c1b"],
  },
];

const Wishlist = () => {
  const isEmpty = wishlistItems.length === 0;

  return (
    <div className="bg-[#F7F3EC] min-h-screen px-6 md:px-10 py-8">
      {/* Breadcrumb */}
      <p className="text-xs text-gray-500 mb-6">
        <Link to="/" className="hover:text-black transition-colors">
          Home
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-gray-900 font-medium">Wishlist</span>
      </p>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#22211F] mb-1">
          Wishlist
        </h1>
        <p className="text-sm text-gray-600">
          Your saved pieces, all in one place.
        </p>
      </div>

      {!isEmpty && (
        <p className="text-sm font-medium text-gray-800 mb-4">
          {wishlistItems.length} items
        </p>
      )}

      {/* Grid or Empty state */}
      {isEmpty ? (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <div className="w-14 h-14 rounded-full bg-white border border-[#D8D1C7] flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            Your wishlist is empty
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Save pieces you love and find them here later.
          </p>
          <Link
            to="/products"
            className="text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 flex items-center gap-1.5 hover:gap-2.5 transition-all"
          >
            Continue Shopping <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {wishlistItems.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              to="/products"
              className="text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 flex items-center gap-1.5 hover:gap-2.5 transition-all"
            >
              Continue Shopping <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Wishlist;
