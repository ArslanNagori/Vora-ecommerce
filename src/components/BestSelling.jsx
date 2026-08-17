import ProductCard from "../components/ProductCard";
import { ChevronRight } from "lucide-react";

const bestSellingProducts = [
  {
    id: 1,
    title: "Transit Sneakers",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80",
    colors: ["black", "green", "#d1d5db"],
  },
  {
    id: 2,
    title: "Classic Mens Watch",
    price: 3199,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80",
    colors: ["silver"],
  },
  {
    id: 3,
    title: "Minimal Backpack",
    price: 1899,
    image:
      "https://tse3.mm.bing.net/th/id/OIP.3CCRz9YZG-0JrpcfGQEy3QHaFS?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    colors: ["#d6b98c", "#1f2937", "#737957"],
  },
  {
    id: 4,
    title: "Linen Shirt",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
    colors: ["grey", "white", "maroon"],
  },
  {
    id: 5,
    title: "Noise Cancelling Headphones",
    price: 4999,
    image:
  "https://img.freepik.com/premium-photo/minimalist-white-headphones-with-4k-hd-technology_899449-18121.jpg?w=2000",
    colors: ["#111827", "#e5e7eb"],
  },
];

const BestSelling = () => {
  return (
    <section className="px-6 py-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold text-gray-900">Best Selling</h2>
          <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
            Top Picks
          </span>
        </div>
        <p className="text-sm text-gray-700 cursor-pointer hover:text-black transition-colors">
          View all →
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-5 gap-4">
          {bestSellingProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <button className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>
      </div>
    </section>
  );
};

export default BestSelling;