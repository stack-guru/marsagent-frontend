import { useEffect } from "react";
import Aos from "aos";
import Avatar from "@/assets/aboutme-avatar.png";
import { socialIcons } from "../../../constant/about";
import SocialIcon from "./SocialIcon";

export default function AboutMe() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="col-span-12 lg:col-span-4 lg:pr-[30px]">
      <div className="menuBox " data-aos="fade-up" data-aos-delay="50">
        <div className=" inline-block rounded-full border border-text px-[20px] py-[5px]">
          <div className="flex items-center gap-[6px]">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="fa-light fa-user text-[14px] text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z"></path>
              </svg>
            </span>
            <span className="pl-[6px] text-[14px] text-white">About Me</span>
          </div>
        </div>
      </div>

      <div className="info-card mt-[10px] md:mt-[30px]">
        <div className="rounded-[20px]  bg-card px-[30px] py-[40px]">
          <div>
            <div className="mt-[25px]">
              <div className="text-center">
                <h3
                  className="wow fadeIn animated text-[24px] font-semibold text-white "
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Hy! I’m
                  <span className="text-theme"> LUCAS!</span>
                </h3>
                <p
                  className="mt-[6px] text-text "
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  Software Developer
                </p>
                <div
                  className="mt-[26px] flex justify-center "
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img
                    src={Avatar}
                    alt="Lariv portfolio web template"
                    className="w-full rounded-2xl object-cover"
                    style={{width: "250px"}}
                  />
                </div>
                <div
                  className="mt-[26px] "
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <p
                    className="text-[20px] text-text "
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    lucas.pettersson415@gmail.com
                  </p>
                  <p
                    className="mt-[10px] text-text "
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    Sopron, Hungary
                  </p>
                </div>
                <div
                  className="mt-[30px] flex justify-center gap-3 "
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {socialIcons.map((item, index) => (
                    <SocialIcon item={item} key={index} />
                  ))}
                </div>
                <div
                  className="mt-[30px] "
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <a
                    href="https://drive.google.com/file/d/1U7-mDeZ-8QjNMTPoE9_2wJfYEZyAAaRw/view?usp=sharing"
                    target="_blank"
                    className="block rounded-full border-2 border-theme bg-theme py-[10px] font-medium text-white transition-all duration-300 hover:bg-transparent "
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
