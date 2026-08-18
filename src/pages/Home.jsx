import React from "react";
import heroImage from "../asset/Vora_hero_banner4.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceHighlights from "../components/ServiceItems/ServiceHighlights";
import Categories from "../components/Categories/Categories";
import BestSelling from "../components/BestSelling";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="relative h-60 overflow-hidden rounded-2xl ">
        <Link  to="/products?category=all">
          <img
            src={heroImage}
            alt="Summer Essentials collection banner"
            className="w-full h-full object-cover"
          />
        </Link>
      </section>
      <Categories />
      <BestSelling />
      <Footer />
      <ServiceHighlights />
    </div>
  );
};

export default Home;
