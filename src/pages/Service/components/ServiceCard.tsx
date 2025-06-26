import React, { useEffect } from "react";
import { ServiceCardItemProps } from "../../../types/service";
import Aos from "aos";

const ServiceCard: React.FC<ServiceCardItemProps> = ({ item }) => {
  const { icon, title, description } = item;
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="col-span-12 md:col-span-6 lg:col-span-4 "
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="group rounded-2xl bg-btn p-[30px]">
        {/* <div>{icon}</div> */}
        <h2 className="text-[20px] font-medium text-white md:text-[26px]">
          {title}
        </h2>
        <p className="mt-[10px] text-text">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
