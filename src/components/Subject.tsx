import Aos from "aos";
import React, { useEffect } from "react";
import { SubjectProps } from "../types";

const Subject: React.FC<SubjectProps> = ({ item }) => {
  const { svg, title } = item
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="menuBox "
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <div className=" inline-block rounded-full border border-text px-[20px] py-[5px]">
        <div className="flex items-center gap-[6px]">
          <span>{svg}</span>
          <span className="pl-[6px] text-[14px] text-white">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Subject;
