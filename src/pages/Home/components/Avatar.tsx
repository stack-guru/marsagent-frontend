import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import AvatarImg from "@/assets/avatar.png";
import Logo from "@/assets/logo.png";

export default function Avatar() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="order-1 col-span-12 lg:order-2 lg:col-span-4">
      <div className=" relative">
        <div data-aos="fade-up">
          <img
            src={Logo}
            alt="Lariv - React Portfolio Template"
            className="w-full"
          />
        </div>
        <div
          className="pulse bg-card absolute bottom-[-50px] right-[40px] flex items-center gap-[20px] rounded-full px-[40px] py-[18px] md:bottom-[-5px] lg:right-[-34px]"
          data-aos="fade-up"
        >
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-theme text-[40px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"></path>
            </svg>
          </div>
          <div>
            <h2 className="text-[26px] font-semibold text-white">11M</h2>
            <p className="text-base text-white">Users</p>
          </div>
        </div>
      </div>
    </div>
  );
}
