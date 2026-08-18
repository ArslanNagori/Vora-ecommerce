import React from "react";
import { Shirt, ShoppingBag, Footprints, Watch, Glasses, SprayCan, Gift, Venus } from "lucide-react";
import CategoryItem from "./CategoryItem";

const Categories = () => {

  const categories = [
    { label: "Men", icon: Shirt },
    { label: "Women", icon: Venus },
    { label: "Footwear", icon: Footprints },
    { label: "Bags", icon: ShoppingBag },
    { label: "Watches", icon: Watch },
    { label: "Accessories", icon: Glasses },
    { label: "Beauty", icon: SprayCan },
    { label: "Gift Cards", icon: Gift },
  ];

  return(
    <div className="flex justify-around px-6 py-4">
    {
        categories.map((category)=>(
            <CategoryItem key={category.label} icon={category.icon} label={category.label} />
        ))
    }
  </div>
  )
};

export default Categories;
