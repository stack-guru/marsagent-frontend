import Aos from "aos";
import { useEffect } from "react";

export default function PersonalInfo() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mt-[60px]">
      <h2
        className="text-[32px] font-semibold "
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Personal Info:
      </h2>
      <div className="mt-[20px] grid grid-cols-12 ">
        <div className="col-span-6 " data-aos="fade-up" data-aos-delay="200">
          <p className=" text-[18px] font-medium">Name</p>
          <p className="mt-2 text-[16px] text-text">Lucas Pettersson</p>
        </div>
        <div className="col-span-6 " data-aos="fade-up" data-aos-delay="200">
          <p className=" text-[18px] font-medium">Birthday</p>
          <p className="mt-2 text-[16px] text-text">15 Apr, 1995</p>
        </div>
      </div>
      <div className="mt-[20px] grid grid-cols-12">
        <div className="col-span-6 " data-aos="fade-up" data-aos-delay="250">
          <p className=" text-[18px] font-medium">Email</p>
          <p className="mt-2 text-[16px] text-text">lucas.pettersson415@gmail.com</p>
        </div>
        <div className="col-span-6 " data-aos="fade-up" data-aos-delay="250">
          <p className=" text-[18px] font-medium">Skype</p>
          <p className="mt-2 text-[16px] text-text">live:.cid.dbae306295d58813</p>
        </div>
      </div>
    </div>
  );
}
