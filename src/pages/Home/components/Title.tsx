// import HandShakeImg from "@/assets/hand-shake.png";

export default function Title() {
  return (
    <>
      <p className="text-[22px]" data-aos="fade-up" data-aos-delay="5000">
        <span className="text-theme">Marsagent</span>
      </p>
      <h2
        className="relative mt-[20px] inline-block text-[32px] font-semibold leading-tight md:text-[62px]"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        The AI-Powered Token for Autonomous Web3 Intelligence
        {/* <span className="absolute bottom-[15px] right-[-100px]">
          <img src={HandShakeImg} alt="hand-shake" />
        </span> */}
      </h2>
      {/* <h2
        className="text-[52px] font-semibold leading-tight md:text-[62px]"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        FULL STACK
        <span className="text-theme"> DEVELOPER!</span>
      </h2> */}
    </>
  );
}
