import Aos from "aos";
import { useEffect } from "react";

export default function Description() {
  
  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <div className="mt-[80px]">
      <h2
        className="text-[32px] font-semibold uppercase leading-tight text-white md:text-[52px] "
        data-aos="fade-up"
        data-aos-delay="50"
      >
        I can develop that
        <br className="hidden md:block" />
        help <span className="text-theme"> people!</span>
      </h2>
      <p
        className="mt-[20px] text-text "
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Since starting my excursion as an independent creator almost quite a
        while back, I've accomplished remote work for organizations, counseled
        for new companies, and teamed up with capable individuals to make
        computerized items for both business and purchaser use. I'm discreetly
        sure, normally inquisitive, and ceaselessly dealing with further
        developing my chops each plan issue in turn.
      </p>
    </div>
  );
}
