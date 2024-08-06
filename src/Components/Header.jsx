import img from "../assets/Logoimg.png";
import img2 from "../assets/Darkmod (2).png";

const Header = () => {
  return (
    <div className="w-full h-12 flex items-center  justify-center">
      <div className="w-[1440px] flex items-center justify-between h-12  ">
        <div className="flex items-center">
          <a href="#">
            <img className="w-[101px] h-8 ml-2" src={img} alt="" />
          </a>
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center rounded-full">
            <div className="flex items-center justify-center w-12 h-12 bg-">
              <a href="#">
                <img className="ml-5" src={img2} alt="" />
              </a>
            </div>
          </div>
          <div className="w-[314px] h-12 flex items-center gap-8 justify-center">
            <h1 className="font-medium text-base text-black">Whitepaper</h1>
            <div className="flex flex-col mt-4 ">
              <h2 className="text-base text-[#8F8F8F] font-medium">
                ROI Calculator
              </h2>
              <p className="text-[8px] text-[#8F8F8F] font-medium">
                Coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
