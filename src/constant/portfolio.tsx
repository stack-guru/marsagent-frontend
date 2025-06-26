import { PortfoliosProps } from "../types/portfolio";

import AretemisDigitalImg from "@/assets/projects/artemisdigital.png";
import Canada777Img from "@/assets/projects/canada777.png";
import ExpatImg from "@/assets/projects/theexpat.png";
import FaithCircleImg from "@/assets/projects/faithcircle.png";
import HandpulledNoodleImg from "@/assets/projects/handpullednoodle.png";
import InflueSpaceImg from "@/assets/projects/influespace.png";
import JarhouseImg from "@/assets/projects/jarhouse.png";
import PacificImg from "@/assets/projects/pacificnwemergencydental.png";
import VivenImg from "@/assets/projects/vivenhealth.png";
import ZekeImg from "@/assets/projects/zeke.png";
import GetcaresuiteImg from "@/assets/projects/getcaresuite.png";
import OpenroomImg from "@/assets/projects/openroom.png";
import FisheezImg from "@/assets/projects/fisheez.png";
import FisheezORGImg from "@/assets/projects/fisheezorg.png";

const portfolios: PortfoliosProps["item"] = [
  // {
  //   item: {
  //     title: "",
  //     img: "clockbeats.png",
  //     type: "Web Application",
  //     skill: [""],
  //     url: "https://clockbeats.com/"
  //   },
  // },
  // {
  //   item: {
  //     title: "",
  //     img: "bitfinex.png",
  //     type: "Web Application",
  //     skill: [""],
  //     url: "https://www.bitfinex.com/"
  //   },
  // },
  {
    item: {
      title: "Fisheez ORG",
      img: FisheezORGImg,
      type: "Web Application",
      skill: ["vue", "nuxtjs", "nodejs", "nginx", "tailwindcss"],
      url: "https://fisheez.org/",
    },
  },
  {
    item: {
      title: "Fisheez",
      img: FisheezImg,
      type: "Web Application",
      skill: ["vue", "nuxtjs", "nodejs", "nginx", "tailwindcss"],
      url: "https://test.fisheez.io/",
    },
  },
  {
    item: {
      title: "Openroom",
      img: OpenroomImg,
      type: "Web Application",
      skill: ["vue", "nuxtjs", "nodejs", "nginx", "tailwindcss"],
      url: "https://openroom.ca/",
    },
  },
  {
    item: {
      title: "Openroom Experts",
      img: OpenroomImg,
      type: "Web Application",
      skill: ["webflow",  "jquery"],
      url: "https://openroom.ca/",
    },
  },
  {
    item: {
      title: "Caresuite",
      img: GetcaresuiteImg,
      type: "Web Application",
      skill: ["vue", "nuxtjs", "nodejs", "nginx", "tailwindcss"],
      url: "https://www.getcaresuite.com/",
    },
  },
  {
    item: {
      title: "Artemis Digital",
      img: AretemisDigitalImg,
      type: "Web Application",
      skill: ["vue", "nuxtjs", "nodejs", "nginx", "tailwindcss"],
      url: "https://www.artemisdigital.io/",
    },
  },
  {
    item: {
      title: "Canada 777",
      img: Canada777Img,
      type: "Web Application",
      skill: ["vue", "bootstrap", "nginx"],
      url: "https://canada777.com/",
    },
  },
  {
    item: {
      title: "Faith Circle",
      img: FaithCircleImg,
      type: "Web Application",
      skill: ["react", "nodejs"],
      url: "https://thefaithcircle.com/",
    },
  },
  {
    item: {
      title: "InflueSpace",
      img: InflueSpaceImg,
      type: "Web Application",
      skill: ["vue", "nestjs"],
      url: "https://influespace.com/",
    },
  },
  {
    item: {
      title: "Jar House",
      img: JarhouseImg,
      type: "Web Application",
      skill: ["swiperjs", "nginx", "bootstrap"],
      url: "https://jarhouse.com/",
    },
  },
  {
    item: {
      title: "Viven Health",
      img: VivenImg,
      type: "Web Application",
      skill: ["react", "nodejs", "nginx"],
      url: "https://www.vivenhealth.com/",
    },
  },
  {
    item: {
      title: "The Handpulled Noodle",
      img: HandpulledNoodleImg,
      type: "Web Application",
      skill: ["webflow", "jquery"],
      url: "https://www.thehandpullednoodle.com/",
    },
  },
  {
    item: {
      title: "Emergency Dental",
      img: PacificImg,
      type: "Web Application",
      skill: ["webflow", "jquery"],
      url: "https://www.pacificnwemergencydental.com/",
    },
  },
  {
    item: {
      title: "Zeke AI",
      img: ZekeImg,
      type: "Web Application",
      skill: ["webflow"],
      url: "https://www.zekeai.co/",
    },
  },
  {
    item: {
      title: "The Expat",
      img: ExpatImg,
      type: "Web Application",
      skill: ["webflow", "jquery"],
      url: "https://www.theexpat.nyc/",
    },
  },
];

export { portfolios };
