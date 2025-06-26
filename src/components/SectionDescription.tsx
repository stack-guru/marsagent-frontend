import React, { useEffect } from "react";
import { SectionDescriptionProps } from "../types";
import Aos from "aos";

const SectionDescription: React.FC<SectionDescriptionProps> = ({ item, wide = false }) => {
  const { first_text, second_text, third_text, description } = item;
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mt-[10px] md:mt-[20px]">
      <h2
        className="text-[32px] font-semibold uppercase leading-tight text-white md:text-[52px] "
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {first_text}
        <br className="hidden md:block" />
        {second_text}
        <span className="text-theme"> {third_text}</span>
      </h2>
      <p
        className={`mt-[20px] text-text ${wide ? '' : 'lg:w-[60%]'}`}
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {description}
      </p>
    </div>
  );
};

export default SectionDescription;
