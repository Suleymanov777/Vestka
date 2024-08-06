import img from "../assets/Frame 15159.png";
import img2 from "../assets/Frame 15143.png";
import img3 from "../assets/Rock.png";

const Web3 = () => {
  return (
    <div className="w-full h-[636px] flex items-center justify-center mt-36 ">
      <div className="flex items-center  justify-center gap-[72px] w-[1278px] h-[636px] ">
        <div className="flex items-center justify-center relative  rounded-[309px] w-[474px] h-[621px] ">
          <img className="-mt-20 ml-4" src={img} alt="" />
        </div>
        <div className="w-[679px] relative z-[100px] h-[452px]  ml-10 ">
          <div className="text-[28px] ml-6 font-bold ">
            <h1 className="text-[#1A1A1A]">Bridging the</h1>
            <h2 className="text-[#00F1E8] -mt-1">Real and Digital Worlds</h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-[679px] flex items-center  h-24 ">
              <p className="font-semibold text-base ml-6">
                Purchase an NFT: Your journey begins with the acquisition of an{" "}
                <br />
                NFT, your ticket to eco-conscious investment.
              </p>
            </div>
            <div className="w-[679px] flex items-center  h-24 ">
              <p className="font-semibold text-base ml-6">
                Fund RDF factories: Your NFT purchase directly funds RDF
                factories, <br /> enabling them to process waste and reduce CO2
                emissions.
              </p>
            </div>
            <div className="w-[679px] flex items-center  h-24 ">
              <p className="font-semibold text-base ml-6">
                Earn profits: As the factories prosper, you do too. Enjoy weekly
                profits <br /> from your direct investment.
              </p>
            </div>
          </div>
          <div className="absolute -left-14 -bottom-13">
            <img className="" src={img2} alt="" />
          </div>
          <div className="absolute right-2 top-8">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3;
