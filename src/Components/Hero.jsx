import img from "../assets/Rightcub.png";
import img2 from "../assets/leftbutton.png";

const Hero = () => {
  return (
    <div className="w-full h-[502px]  flex items-center justify-center mt-8">
      <div className="w-[1440px] h-[502px]  relative overflow-hidden">
        <div
          className=" flex items-center mt-10 justify-center -z-30
        "
        >
          <a href="#">
            <img className="" src={img} alt="" />
          </a>
        </div>
        <div className="flex ml-4 items-center justify-center">
          <div className="flex w-[700px] gap-5 h-72  -mt-[370px]">
            <div className="flex justify-center ml-20 items-center  flex-col">
              <div className="flex items-center gap-3 justify-center">
                <h1 className="text-[42px] font-extrabold text-[#1A1A1A]">
                  Driving a{" "}
                </h1>
                <h2 className="text-[42px] font-extrabold text-[#53E462]">
                  Greener Future
                </h2>
              </div>
              <div className="flex gap-3 items-center justify-center">
                <h3 className="text-[42px] font-extrabold text-[#1A1A1A]">
                  with
                </h3>
                <h4 className="text-[42px] font-extrabold text-[#00F1E8]">
                  Blockchain & NFTs
                </h4>
              </div>
              <div className="flex items-center justify-center">
                <p className="flex items-center justify-center text-center font-normal mt-3 text-lg text-[#1A1A1A]">
                  Directly investing in RDF factories through NFTs: A win-{" "}
                  <br /> win for you and the environment.
                </p>
              </div>
              <button className="w-[264px] h-14 bg-[#53E462] rounded-[32px] flex items-center justify-center mt-6">
                <p className="font-medium text-base text-[#1A1A1A]">
                  Download Our ENGC App
                </p>
              </button>
            </div>
          </div>
          <div className="absolute -left-[61px] -bottom-[66px] overflow-hidden">
            <img className="" src={img2} alt="" />
          </div>
          <div className="absolute -right-[120px] -top-[155px]">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
