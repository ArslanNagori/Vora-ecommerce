import React from "react";
import heroImage from "../asset/Vora_hero_section.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceHighlights from "../components/ServiceItems/ServiceHighlights";
import Categories from "../components/Categories/Categories";
import BestSelling from "../components/BestSelling";

const Home = () => {
  const handelPrev = () => {
    console.log("previous banner");
  };
  const handelNext = () => {
    console.log("previous banner");
  };

  return (
    <div>
      <section className="relative ">
        <img
          src={heroImage}
          alt="Summer Essentials collection banner"
          className="w-full h-auto rounded-2xl"
        />
        <button onClick={handelPrev} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors">
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </button>
        <button onClick={handelNext} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors">
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>
      </section>
      <Categories />
      <BestSelling />
      <ServiceHighlights />
    </div>

  );
};

export default Home;
