import Aos from "aos";
import { useEffect } from "react";
// import { portfolios } from "../../constant/portfolio";
import { Link } from "react-router-dom";
import { partners as partnerList } from "../../constant/partner";
import ReactIcon from "../../assets/icons/icon-react.png";
import VueIcon from "../../assets/icons/icon-vue.png";
import AngularIcon from "../../assets/icons/icon-angular.png";
import WebflowIcon from "../../assets/icons/icon-webflow.png";
import DjangoIcon from "../../assets/icons/icon-django.png";
import NodeJsIcon from "../../assets/icons/icon-nodejs.png";
import NextJsIcon from "../../assets/icons/icon-nextjs.png";
import NginxIcon from "../../assets/icons/icon-nginx.png";
import JqueryIcon from "../../assets/icons/icon-jquery.png";
import MongoDBIcon from "../../assets/icons/icon-mongodb.png";
import TailwindCssIcon from "../../assets/icons/icon-tailwindcss.png";
import NuxtJsIcon from "../../assets/icons/icon-nuxtjs.png";
import BootStrapIcon from "../../assets/icons/icon-bootstrap.png";
import NestJsIcon from "../../assets/icons/icon-nestjs.png";
import SwiperJsIcon from "../../assets/icons/icon-swiperjs.png";

type Icons = {
  [key: string]: string; // add this line
  react: string;
  vue: string;
  angular: string;
  webflow: string;
  django: string;
  nodejs: string;
  nginx: string;
  jquery: string;
  mongodb: string;
  nextjs: string;
  tailwindcss: string;
  bootstrap: string;
  nuxtjs: string;
  nestjs: string;
  swiperjs: string;
};

const icons: Icons = {
  react: ReactIcon,
  vue: VueIcon,
  angular: AngularIcon,
  webflow: WebflowIcon,
  django: DjangoIcon,
  nodejs: NodeJsIcon,
  nginx: NginxIcon,
  jquery: JqueryIcon,
  mongodb: MongoDBIcon,
  nextjs: NextJsIcon,
  tailwindcss: TailwindCssIcon,
  bootstrap: BootStrapIcon,
  nuxtjs: NuxtJsIcon,
  nestjs: NestJsIcon,
  swiperjs: SwiperJsIcon,
};

export default function partners() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        className="menuBox "
        data-aos="fade-up"
        data-aos-delay="50"
      >
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
                <path d="M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32.4 97.2c28-12.4 47.6-40.5 47.6-73.2c0-44.2-35.8-80-80-80S0 35.8 0 80c0 32.8 19.7 61 48 73.3V358.7C19.7 371 0 399.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V272c26.7 20.1 60 32 96 32h86.7c12.3 28.3 40.5 48 73.3 48c44.2 0 80-35.8 80-80s-35.8-80-80-80c-32.8 0-61 19.7-73.3 48H208c-49.9 0-91-38.1-95.6-86.8zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM344 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path>
              </svg>
            </span>
            <span className="pl-[6px] text-[14px] text-white">Partners</span>
          </div>
        </div>
      </div>
      <div className=" mt-[10px] md:mt-[20px]">
        <h2
          className="text-[32px] font-semibold uppercase leading-tight text-white md:text-[52px] "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Meet Our Partners Fueling<br className="hidden md:block" />
          the <span className="text-theme"> MARSAGENT!</span>
        </h2>
        {/* <p
          className="mt-[20px] text-text lg:w-[60%] "
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Welcome to my portfolio! As a passionate and experienced full stack
          developer, I have successfully delivered a wide range of projects.
          With a strong foundation in both front-end and back-end development, I
          strive to create seamless and user-friendly applications. Here are
          some highlights from my portfolio:
        </p> */}
      </div>
      <div className="mt-[60px] md:mt-[80px]">
        <div className="grid  gap-y-[30px] md:grid-cols-12  md:gap-x-[30px]">
          {/*portfolios.map((item, index) => (
            <Link
              to={item.item.url}
              target="_blank"
              key={index}
              className="col-span-12 md:col-span-6 lg:col-span-4 "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="group rounded-2xl bg-btn p-[30px] ">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={item.item.img}
                    loading="lazy"
                    alt="Lariv - React Portfolio Template"
                    className="w-full object-cover transition-all duration-500 group-hover:scale-[110%] "
                  />
                </div>
                <div>
                  <p className="mt-[16px] text-[14px] text-text">
                    {item.item.type}
                  </p>

                  <div className="portfolio-button-open cursor-pointer  text-white transition-all  duration-300 hover:text-theme">
                    <h2 className="mt-[15px] text-[20px] font-medium capitalize md:text-[20px]">
                      {item.item.title}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          ))*/}
          {
            partnerList.map((item, index) => (
              <Link
                to={"#"}
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4 "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="group rounded-2xl bg-btn p-[30px] ">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={item}
                      loading="lazy"
                      alt="Lariv - React Portfolio Template"
                      className="w-full object-cover transition-all duration-500 group-hover:scale-[110%] "
                    />
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </>
  );
}
