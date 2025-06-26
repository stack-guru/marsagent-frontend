import Logo from "@/assets/logo.png";

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[9]">
      <div className="container mx-auto  flex justify-center pb-[40px]">
        <div>
          <p className="text-center text-text">
            Copyright <span className="text-theme">Lucas</span> ©{year}. All
            rights reserved
          </p>
          <div className="mt-[20px] flex justify-center text-center">
            <img src={Logo} alt="logo" className="w-[40px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
