import React from "react";
import heroImage from "../asset/Vora_hero_section.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceHighlights from "../components/ServiceItems/ServiceHighlights";
import Categories from "../components/Categories/Categories";
import BestSelling from "../components/BestSelling";
import Footer from "../components/Footer";

const Home = () => {

  return (
    <div>
      <section className="relative ">
        <img
          src={heroImage}
          alt="Summer Essentials collection banner"
          className="w-full h-[calc(100vh-84px)] rounded-2xl"
        />
        
      </section>
      <Categories />
      <BestSelling />
      <Footer />
      <ServiceHighlights />
      
    </div>

  );
};

export default Home;
