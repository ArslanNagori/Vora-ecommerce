import React from "react";
import ServiceItems from "./ServiceItems";
import { RotateCcw, Truck, Lock, Headset } from "lucide-react";

const ServiceHighlights = () => {
  return (
    <div className=" sticky bottom-0 z-10 bg-white flex justify-around border-t border-gray-200 py-2 px-4">
      <ServiceItems
        icon={Truck}
        title="Free Shipping"
        description="On orders above ₹999"
      />
      <ServiceItems
        icon={RotateCcw}
        title="Easy Returns"
        description="30-day return policy"
      />
      <ServiceItems
        icon={Lock}
        title="Secure Payments"
        description="100% secure checkout"
      />
      <ServiceItems
        icon={Headset}
        title="24/7 Support"
        description="We're here to help"
      />
    </div>
  );
};

export default ServiceHighlights;
