import React, { useEffect } from "react";
import Aos from "aos";
import { SkillItemProps } from "../../../types/skill";

const SkillItem: React.FC<SkillItemProps> = ({ item }) => {
  const { label, value } = item
  useEffect(() => {
    Aos.init()
  }, [])
  
  return (  
    <div className="mt-[20px] w-full">
      <div
        className="mb-2 flex items-center justify-between gap-4 "
        data-aos="fade"
        data-aos-delay="250"
      >
        <p className="block antialiased font-sans text-[16px] font-medium text-white">
          {label}
        </p>
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
          {value}%
        </h6>
      </div>
      <div
        data-aos="fade"
        data-aos-delay="300"
        className="flex flex-start overflow-hidden w-full font-sans rounded-full text-xs font-medium h-3.5 progress border border-theme/20 bg-theme/10 p-1 "
      >
        <div
          className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-gray-900 text-white"
          style={{width: `${value}%`}}
        ></div>
      </div>
    </div>
  );
};

export default SkillItem;
