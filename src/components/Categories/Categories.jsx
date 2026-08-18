import React from "react";
import {
  Shirt,
  ShoppingBag,
  Footprints,
  Watch,
  Glasses,
  SprayCan,
  Gift,
  Venus,
} from "lucide-react";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const categories = [
    { label: "Men", icon: Shirt, path: "/products?category=men" },
    { label: "Women", icon: Venus, path: "/products?category=women" },
    { label: "Footwear", icon: Footprints, path: "/products?category=men" },
    {
      label: "Bags",
      icon: ShoppingBag,
      path: "/products?category=accessories",
    },
    { label: "Watches", icon: Watch, path: "/products?category=accessories" },
    {
      label: "Accessories",
      icon: Glasses,
      path: "/products?category=accessories",
    },
    { label: "Beauty", icon: SprayCan, path: "/products?category=women" },
    { label: "Gift Cards", icon: Gift, path: "/products" },
  ];

  return (
    <div className="flex justify-around px-6 py-4">
      {categories.map((category) => (
        <CategoryItem
          key={category.label}
          icon={category.icon}
          label={category.label}
          path ={category.path}
        />
      ))}
    </div>
  );
};

export default Categories;
