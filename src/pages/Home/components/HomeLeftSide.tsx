import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import Statistic from "./Statistic";
// import Links from "./Links";
import Buytoken from "./Buytoken";
import Bio from "./Bio";
import Title from "./Title";

export default function HomeLeftSide() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="order-2 col-span-12 mt-[40px] py-[40px] md:mt-0 md:pr-[60px] lg:order-1 lg:col-span-8">
      <Title />
      <br />
      <Bio />
      <Buytoken />
      {/* <Statistic /> */}
      {/* <Links /> */}
    </div>
  );
}
