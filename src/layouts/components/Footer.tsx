import Logo from "@/assets/logo.png";
import { FaTelegram, FaTwitter, FaBook } from "react-icons/fa";

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[9]">
      <div className="container mx-auto  flex justify-between pb-[40px]">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="logo" className="w-[40px]" />
          <p className="text-center text-text">
            Copyright ©{year}. All
            rights reserved
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" target="_blank" className="hover:text-gray-500">
            <FaTelegram size={32} />
          </a>
          <a href="#" target="_blank" className="hover:text-gray-500">
            <FaTwitter size={32} />
          </a>
          <a href="#" target="_blank" className="hover:text-gray-500">
            <FaBook size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
}
