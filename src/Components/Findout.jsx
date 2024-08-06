import img from "../assets/Frame 15143 (1).png";
import img2 from "../assets/Frame 15145.png";
import img3 from "../assets/Rectangle 11.png";

const Findout = () => {
  return (
    <div className="w-full h-[472px]  flex items-center justify-center bg-[#e8edef] mt-40">
      <div className="w-[1440px] backdrop-blur-[15px] bg-[#255.255.255.0.2]  rounded-xl h-[472px]  flex items-center justify-center">
        <div className="w-[1240px] h-[272px] ">
          <h1 className="text-center text-[28px] font-bold">
            Find out what investors appreciate most <br /> about
          </h1>
          <p className="-mt-[40px] ml-[170px] text-center text-[28px] font-bold text-[#00F1E8]">
            ENGC
          </p>
          <div className="flex items-center justify-center mt-11">
            <ul className="flex items-center justify-center gap-6">
              <li className="w-[392px] h-40 bg-white rounded-[32px]">
                <div className="flex flex-col gap-6 items-center justify-center">
                  <h1 className="text-[#1A1A1A] text-lg font-semibold mt-8">
                    Green Returns
                  </h1>
                  <p className="text-base text-center font-normal">
                    Dual benefit of financial gains and <br /> environmental
                    impact.
                  </p>
                </div>
              </li>
              <li className="w-[392px] h-40 bg-white rounded-[32px]">
                <div className="flex flex-col gap-6 items-center justify-center">
                  <h1 className="text-[#1A1A1A] text-lg font-semibold mt-8">
                    Innovative Technology
                  </h1>
                  <p className="text-base text-center font-normal">
                    Leading in waste transformation and <br /> blockchain
                    integration.
                  </p>
                </div>
              </li>
              <li className="w-[392px] h-40 bg-white rounded-[32px]">
                <div className="flex flex-col gap-6 items-center justify-center">
                  <h1 className="text-[#1A1A1A] text-lg font-semibold mt-8">
                    Trust and Security
                  </h1>
                  <p className="text-base text-center font-normal">
                    Providing transparent and secure <br /> investment platform
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-[200px] ml-80 -mt-10 h-[200px] ">
            <img src={img} alt="" />
          </div>
          <div className="w-[100px] ml-[1205px] -mt-[245px] h-[200px]">
            <img src={img2} alt="" />
          </div>
          <div className="w-[100px] ml-[910px] flex items-center justify-center -mt-[490px] h-[200px]">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Findout;
