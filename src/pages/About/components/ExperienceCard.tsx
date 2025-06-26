import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { ExperienceProps } from "../../../types/about";

const ExperienceCard: React.FC<ExperienceProps> = ({ item }) => {
  const { startAt, endAt, companyName, role, description } = item;

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <p className="text-text " data-aos="fade-up" data-aos-delay="50">
        {startAt} - {endAt ? endAt : "Present"}
      </p>
      <h3
        className="mt-[10px] text-[20px] font-medium text-white md:text-[25px] "
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {role}
      </h3>
      <p
        className="mt-[5px] text-[18px] font-medium text-text "
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {companyName}
      </p>
      <p
        className="mt-[15px] text-text "
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {description}
      </p>
    </div>
  );
};

export default ExperienceCard;
