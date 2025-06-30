import Logo from "@/assets/logo.png";
import { NavLink } from "react-router-dom";
import { useRoot } from "../../hooks/RootContext";

export default function Header() {
  const {
    toggleSideOpen,
  } = useRoot();
  return (
    <header className="relative z-[99]">
      <div className="container mx-auto pt-[30px]">
        <div className="flex justify-between rounded-[10px] px-[15px] py-[30px] md:px-[30px] bg-card">
          <div className="flex items-center cursor-pointer">
            <img src={Logo} alt="logo" className="w-[40px] animate-bounce mr-2" />
            <span className="font-medium text-[18px] text-white">Marsagent</span>
          </div>
          <menu className="hidden items-center lg:flex gap-[40px]">
            <NavLink
              to="/"
              className="text-white transition duration-300 ease-in-out hover:text-navActive"
            >
              About
            </NavLink>
            <NavLink
              to="/keyfeatures"
              className="text-white transition duration-300 ease-in-out hover:text-navActive"
            >
              Key Features
            </NavLink>
            <NavLink
              to="/service"
              className="text-white transition duration-300 ease-in-out hover:text-navActive"
            >
              Service
            </NavLink>
            <NavLink
              to="/partners"
              className="text-white transition duration-300 ease-in-out hover:text-navActive"
            >
              Partners
            </NavLink>
            <NavLink
              to="/roadmap"
              className="text-white transition duration-300 ease-in-out hover:text-navActive"
            >
              Roadmap
            </NavLink>
            <NavLink
              to="/tokenomics"
              className="text-white transition duration-300 ease-in-out hover:text-navActive"
            >
              Tokenomics
            </NavLink>
            {/* <NavLink
              to="/contact"
              className="text-white transition duration-300 ease-in-out hover:text-navActive"
            >
              Contact
            </NavLink> */}
          </menu>

          <div className="block lg:hidden">
            <div className="flex items-center gap-4 px-[10px]">
              <span className="rounded-full border border-[#919295] p-[10px] text-[25px] cursor-pointer" onClick={toggleSideOpen}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-text " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path></svg>
              </span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
