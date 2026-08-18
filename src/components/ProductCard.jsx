import { Heart, ShoppingBag } from "lucide-react";

const ProductCart = ({ image, title, price, colors }) => {
  
  return (
    <div className="border border-gray-200 rounded-2xl relative overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
      <button className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow z-10">
        <Heart className="w-4 h-4 text-gray-700" />
      </button>

      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-3">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">₹{price}</p>

        {colors && (
          <div className="flex mt-2 gap-1.5">
            {colors.map((color, index) => (
              <span
                key={index}
                style={{ backgroundColor: color }}
                className="w-3 h-3 rounded-full border border-gray-300"
              ></span>
            ))}
          </div>
        )}

        <button className="w-full mt-3 border border-gray-900 rounded-full py-2 flex items-center justify-center gap-2 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;