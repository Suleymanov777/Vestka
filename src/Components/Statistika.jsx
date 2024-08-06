import img from "../assets/Frame 15148.png";
import { Vniz } from "../Constants";

const Statistika = () => {
  return (
    <div className="w-full h-[520px] mt-36 flex items-center justify-center">
      <div className="w-[1240px] h-[540px]  flex items-center justify-center gap-16">
        <div className="w-[417px]  h-[517px] ">
          <div className="text-[28px] font-bold">
            <h1 className="">
              Uncover Your Earning <br /> Potential with
            </h1>
            <p className="ml-[195px] text-[#00F1E8] -mt-10">ENGC</p>
          </div>
          <p className="text-lg font-normal">
            Investment opportunities tailored for everyone
          </p>
          <div className="flex mt-9 items-center justify-center">
            <img className="w-[417px] h-[360px]" src={img} alt="" />
          </div>
        </div>
        <div className="w-[761px] h-[520px] rounded-md bg-[#f4f6fc]">
          <div className="w-[761px] h-[136px] flex items-center justify-between py-6 px-4 bg-white">
            <div className="">
              <h1 className="text-base font-medium ">
                Weekly Capital Accumulation
              </h1>
              <p className="text-base font-normal mt-4">
                Earn £10 per week over a 5-year period with ENGC token
                activation, accumulating <br /> wealth step by step.
              </p>
            </div>
            <div className="rotate-180">
              <a href="">
                <Vniz />
              </a>
            </div>
          </div>
          <ul className="flex items-center mt-6 justify-center flex-col gap-5">
            <li className="w-[761px] flex items-center justify-between px-6 py-6 h-[72px] bg-white">
              <h1 className="font-medium text-base text-black">
                Referral Bonuses
              </h1>
              <a href="">
                <Vniz />
              </a>
            </li>
            <li className="w-[761px] flex items-center justify-between px-6 py-6 h-[72px] bg-white">
              <h1 className="font-medium text-base text-black">
                NFT Value Bonuses
              </h1>
              <a href="">
                <Vniz />
              </a>
            </li>
            <li className="w-[761px] flex items-center justify-between px-6 py-6 h-[72px] bg-white">
              <h1 className="font-medium text-base text-black">
                Dividend Earnings
              </h1>
              <a href="">
                <Vniz />
              </a>
            </li>
            <li className="w-[761px] flex items-center justify-between px-6 py-6 h-[72px] bg-white">
              <h1 className="font-medium text-base text-black">
                Long-Term Growth Potential
              </h1>
              <a href="">
                <Vniz />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Statistika;
