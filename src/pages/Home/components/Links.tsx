import { useEffect } from "react";
import { Tooltip, initTE } from "tw-elements";
import ReactImg from "@/assets/react.png";
import NodeImg from "@/assets/node.png";
import AwsImg from "@/assets/aws.png";
import FisheezImg from "@/assets/projects/fisheez.png";
import Logo from "@/assets/logo.png";
import Aos from "aos";
import { Link } from "react-router-dom";

export default function Links() {

  useEffect(() => {
    Aos.init({
      duration: 1200
    });
    Aos.refresh();
    initTE({ Tooltip })
  }, [])

  return (
    <div className="mt-[60px] grid grid-cols-12 gap-[30px]">
      <div
        className="col-span-12 md:col-span-4 h-[200px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Link to={"/service"} className="border-text grid gap-[30px] rounded-lg border-2 border-dotted p-[20px]">
          <h3 className="text-center text-[24px]">Services</h3>
          <div className="flex justify-around p-[10px]">
            <img
              src={ReactImg}
              alt="Lariv - React Portfolio Template"
              data-te-toggle="tooltip"
              title="Front End Development"
            />
            <img
              src={NodeImg}
              alt="Lariv - React Portfolio Template"
              data-te-toggle="tooltip"
              title="Back End Development"
            />
            <img
              src={AwsImg}
              alt="Lariv - React Portfolio Template"
              data-te-toggle="tooltip"
              title="Cloud Services"
            />
          </div>
        </Link>
      </div>
      <div
        className="col-span-12 md:col-span-4 h-[200px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Link to={"/portfolio"} className="border-text grid gap-[10px] rounded-lg border-2 border-dotted p-[20px]">
          <h3 className="text-center text-[24px]">Projects</h3>
          <div className="flex justify-around">
            <img
              src={FisheezImg}
              alt="Lariv - React Portfolio Template"
            />
          </div>
        </Link>
      </div>
      <div
        className="col-span-12 md:col-span-4 aos-init h-[200px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Link to={"/about"} className="border-text grid gap-[38px] rounded-lg border-2 border-dotted p-[20px]">
          <h3 className="text-center text-[24px]">About Me</h3>
          <div className="flex justify-around p-[10px]">
            <img
              src={Logo}
              alt="Logo"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
