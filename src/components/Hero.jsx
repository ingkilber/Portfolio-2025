import styles from "../style";
import LetsConnect from "./LetsConnect";
import { aboutMe } from "../constants";
import { devkilber } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col items-center justify-between w-full max-w-[2000px] mx-auto ${styles.paddingY}`}
    >
      {/* Texto principal */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 w-full`}
      >
        <div className="flex flex-row justify-between items-center w-full text-white">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[80px] text-[56px] text-white ss:leading-[90px] leading-[80px] tracking-tight">
            Hola! <span className="font-bold text-gradient text-[60px]">Soy</span>
            <br className="sm:block hidden" /> Developer
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <LetsConnect />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[76px] text-[58px] text-white ss:leading-[88px] leading-[78px] w-full mt-2">
          <span className="text-gradient drop-shadow-lg">{aboutMe.name}</span>
        </h1>

        <p
          className={`${styles.paragraph} max-w-[620px] mt-6 text-[18px] leading-relaxed`}
        >
          {aboutMe.intro}
        </p>
      </div>

      {/* Imagen GIF */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative w-full justify-end`}
      >
        <div
          className="relative z-[5] h-[100%] w-[100%] max-w-[620px] flex justify-center items-center"
        >
          <img
            src={devkilber}
            alt="Coding animation"
            className="w-[100%] md:w-[120%] h-auto object-contain rounded-2xl shadow-2xl transform scale-110 md:scale-125 transition-transform duration-500 ease-out"
          />
        </div>
        <div className="absolute z-[1] w-[70%] h-[70%] rounded-full bottom-32 white__gradient"></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter} mt-6`}>
        <LetsConnect />
      </div>
    </section>
  );
};

export default Hero;
