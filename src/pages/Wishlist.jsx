import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { WishlistContext } from "../context/WishlistProvider";



const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);
  const isEmpty = wishlist.length === 0;

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

      {isEmpty ===false && (
        <p className="text-sm font-medium text-gray-800 mb-4">
          {wishlist.length} items
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
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {wishlist.map((item) => (
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
