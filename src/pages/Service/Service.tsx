// import SectionDescription from "../../components/SectionDescription";
import Subject from "../../components/Subject";
import {
  // description,
  services,
  title
} from "../../constant/service";
import ServiceCard from "./components/ServiceCard";

export default function Service() {
  return (
    <>
      <Subject item={title} />
      {/* <SectionDescription item={description} /> */}
      <div className="mt-[10px] md:mt-[20px]">
        <h2
          className="text-[32px] font-semibold uppercase leading-tight text-white md:text-[52px] "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Access these AI-powered services with <span className="text-theme">MRAI</span>
        </h2>
      </div>
      <div className="mt-[60px] md:mt-[80px]">
        <div className="grid gap-y-[60px] md:grid-cols-12 md:gap-x-[30px]">
          {services.map((service, index) => (
            <ServiceCard key={index} item={service} />
          ))}
        </div>
      </div>

      {/* <div className="mt-[100px]">
        <h2
          className="text-[32px] font-semibold aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          What People Says?:
        </h2>
        <div className="mt-[30px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">

        </div>
      </div> */}
    </>
  );
}
