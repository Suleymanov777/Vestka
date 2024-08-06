import img from "../assets/I 1.png";
import img2 from "../assets/Sphere.png";
import img3 from "../assets/spec.png";
import img4 from "../assets/store-illustration.svg";
import img5 from "../assets/check-illustration.svg";

const Technology = () => {
  return (
    <div className="w-full h-[547px] flex items-center justify-center mt-36">
      <div className="w-[1313px] h-[547px] ">
        <div className="flex items-center justify-center gap-2 font-bold text-[28px]">
          <h1 className="text-[#00F1E8]">Our Technology</h1>
          <h2 className="text-[#1A1A1A]">in Detail</h2>
        </div>
        <p className="text-lg text-center mt-3 font-normal">
          Converting Waste into Resources
        </p>
        <div className="flex items-center w-[1313px]  mt-8 h-[434px] justify-center gap-4">
          <ul className="flex items-center gap-4 justify-center">
            <li className="w-[440px] h-[434px] rounded-2xl overflow-hidden relative">
              <div className="flex items-center ml-6 justify-center">
                <img src={img} alt="" />
                <img
                  className="-mt-[51px] w-[236px] h-[236px] ml-3"
                  src={img2}
                  alt=""
                />
              </div>
              <div className="mt-6 pl-5">
                <h1 className="text-base ml-4 font-semibold text-[#1A1A1A]">
                  Waste Collection
                </h1>
                <p className="text-base text-[#1A1A1A] font-normal mt-4 ml-4">
                  We take a proactive approach to managing <br /> waste. Our
                  dedicated teams collect various <br /> types of waste,
                  including domestic, <br /> commercial, industrial, and
                  agricultural waste, <br /> as well as wood remnants. By
                  diverting waste <br /> from landfills, we start the process of
                  turning <br /> refuse into a resource.
                </p>
              </div>
              <div className="absolute -bottom-[435px] -left-[320px]">
                <img src={img3} alt="" />
              </div>
            </li>
            <li className="w-[440px] h-[434px] rounded-2xl overflow-hidden  relative">
              <div className="flex items-center ml-4 mt-4 ">
                <img src={img4} alt="" />
              </div>
              <div className="mt-6 ml-4 absolute">
                <h1 className="text-base font-semibold text-[#1A1A1A]">
                  Transformation into RDF pellets
                </h1>
                <p className="text-[#1A1A1A] font-normal mt-4">
                  The collected waste undergoes a <br /> comprehensive treatment
                  process at our <br /> specialized facilities. The waste is
                  sorted, <br /> dried, and then transformed into Refuse <br />{" "}
                  Derived Fuel (RDF) pellets. These pellets are <br /> high in
                  calorific value, making them an <br /> efficient source of
                  energy.
                </p>
              </div>
              <div className="absolute -right-[455px] -top-10">
                <img src={img3} alt="" />
              </div>
              <div className="mt-[195px] -ml-5">
                <img src={img2} alt="" />
              </div>
            </li>
            <li className="w-[440px] h-[434px] rounded-2xl overflow-hidden relative">
              <div className="flex items-center ml-6 justify-center">
                <img className="-mt-12" src={img5} alt="" />
                <img
                  className="translate-x-[52px] -translate-y-[35px] w-[236px] h-[236px]"
                  src={img2}
                  alt=""
                />
              </div>
              <div className="-mt-14 pl-5">
                <h1 className="text-base ml-4 font-semibold text-[#1A1A1A]">
                  Pyrolysis burning
                </h1>
                <p className="text-base text-[#1A1A1A] font-normal mt-4 ml-4">
                  Refuse Derived Fuel (RDF) pellets <br /> undergo pyrolysis, an
                  oxygen-limited, <br /> high-temperature process that
                  efficiently <br /> reduces emissions while producing <br />{" "}
                  versatile clean energy, usable for <br /> electricity
                  generation, heating, hot water <br /> production, and even
                  summer cooling <br /> systems.
                </p>
              </div>
              <div className="absolute -right-[160px] -bottom-[350px] ">
                <img className="" src={img3} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technology;
