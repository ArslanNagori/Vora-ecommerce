import { Heart, ShoppingBag } from "lucide-react";

const ProductCart = ({ image, title, description, price, colors }) => {
  return (
    <div className="bg-white border border-[#D8D1C7] rounded-xl p-2.5 w-full max-w-52.5 hover:shadow-md transition-shadow duration-200">

      {/* Image area */}
      <div className="relative bg-[#F7F3EC] rounded-lg h-37.5 flex items-center justify-center overflow-hidden">
        <button className="absolute top-2 right-2 bg-white rounded-full w-7 h-7 flex items-center justify-center shadow-sm hover:bg-[#FAF8F3] transition-colors z-10">
          <Heart className="w-3.5 h-3.5 text-[#77736D]" />
        </button>

        <img
          src={image}
          alt={title}
          className="w-[65%] h-[65%] object-contain"
        />
      </div>

      {/* Info */}
      <div className="pt-2.5 px-0.5">
        <h3 className="text-[13px] font-medium text-[#22211F] leading-snug line-clamp-1">
          {title}
        </h3>

        {description && (
          <p className="text-[10px] text-[#77736D] mt-0.5 leading-relaxed line-clamp-2">
            {description}
          </p>
        )}

        {colors && (
          <div className="flex gap-1 mt-1.5">
            {colors.map((color, index) => (
              <span
                key={index}
                style={{ backgroundColor: color }}
                className="w-2.5 h-2.5 rounded-full border-2 border-white shadow-sm ring-1 ring-[#D8D1C7]"
              ></span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-2 gap-1.5">
          <p className="text-[14px] font-bold text-[#22211F] whitespace-nowrap">
            ₹{price?.toLocaleString("en-IN")}
          </p>

          <button className="bg-[#FAF8F3] hover:bg-[#1C1C1B] border border-[#D8D1C7] hover:border-[#1C1C1B] active:scale-95 text-[#22211F] hover:text-white text-[10.5px] font-medium px-2 py-1.5 rounded-md flex items-center gap-1 transition-all duration-200">
            <ShoppingBag className="w-3 h-3" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;