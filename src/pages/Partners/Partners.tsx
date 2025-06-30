import Aos from "aos";
import { useEffect } from "react";
// import { portfolios } from "../../constant/portfolio";
import Subject from "../../components/Subject";
import { title } from "../../constant/partner";
import { Link } from "react-router-dom";
import { partners as partnerList } from "../../constant/partner";
// import ReactIcon from "../../assets/icons/icon-react.png";
// import VueIcon from "../../assets/icons/icon-vue.png";
// import AngularIcon from "../../assets/icons/icon-angular.png";
// import WebflowIcon from "../../assets/icons/icon-webflow.png";
// import DjangoIcon from "../../assets/icons/icon-django.png";
// import NodeJsIcon from "../../assets/icons/icon-nodejs.png";
// import NextJsIcon from "../../assets/icons/icon-nextjs.png";
// import NginxIcon from "../../assets/icons/icon-nginx.png";
// import JqueryIcon from "../../assets/icons/icon-jquery.png";
// import MongoDBIcon from "../../assets/icons/icon-mongodb.png";
// import TailwindCssIcon from "../../assets/icons/icon-tailwindcss.png";
// import NuxtJsIcon from "../../assets/icons/icon-nuxtjs.png";
// import BootStrapIcon from "../../assets/icons/icon-bootstrap.png";
// import NestJsIcon from "../../assets/icons/icon-nestjs.png";
// import SwiperJsIcon from "../../assets/icons/icon-swiperjs.png";

// type Icons = {
//   [key: string]: string; // add this line
//   react: string;
//   vue: string;
//   angular: string;
//   webflow: string;
//   django: string;
//   nodejs: string;
//   nginx: string;
//   jquery: string;
//   mongodb: string;
//   nextjs: string;
//   tailwindcss: string;
//   bootstrap: string;
//   nuxtjs: string;
//   nestjs: string;
//   swiperjs: string;
// };

// const icons: Icons = {
//   react: ReactIcon,
//   vue: VueIcon,
//   angular: AngularIcon,
//   webflow: WebflowIcon,
//   django: DjangoIcon,
//   nodejs: NodeJsIcon,
//   nginx: NginxIcon,
//   jquery: JqueryIcon,
//   mongodb: MongoDBIcon,
//   nextjs: NextJsIcon,
//   tailwindcss: TailwindCssIcon,
//   bootstrap: BootStrapIcon,
//   nuxtjs: NuxtJsIcon,
//   nestjs: NestJsIcon,
//   swiperjs: SwiperJsIcon,
// };

export default function partners() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Subject item={title} />
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
                data-aos-delay="300"
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
