
export default function Statistic() {
  return (
    <div className="mt-[60px] grid grid-cols-12 gap-[30px] md:gap-2">
      <div
        className="col-span-12 md:col-span-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h2 className="text-[50px] font-semibold  ">
          <span className="counter">7</span>+
        </h2>
        <p className="text-white">
          YEARS OF AWESOME <br />
          EXPERIENCE
        </p>
      </div>
      <div
        className="col-span-12 md:col-span-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h2 className="text-[50px] font-semibold">
          <span className="counter">40</span>+
        </h2>
        <p className="text-white">
          PROJECTS COMPLETED <br />
          SO FAR
        </p>
      </div>
      <div
        className="col-span-12 md:col-span-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h2 className="text-[50px] font-semibold  ">
          <span className="counter">60</span>+
        </h2>
        <p className="text-white">
          HAPPY CLIENTS <br />
          FROM SEVERAL COUNTRIES
        </p>
      </div>
    </div>
  );
}
