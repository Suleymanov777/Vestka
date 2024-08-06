import img from "../assets/Mask group.png";
import img2 from "../assets/Logoimg.png";
import {
  Call,
  Facebook,
  Instagram,
  Sms,
  Telegram,
  Twiter,
  Location,
} from "../Constants";

const Footer = () => {
  return (
    <div className="w-full h-[681px]  flex items-center justify-center mt-36">
      <div className="w-[1440px] h-[681px] flex justify-center items-center gap-12 flex-col ">
        <div className="w-[1240px] relative h-72 mt-10 flex items-center justify-center">
          <img className="" src={img} alt="" />
          <h1 className="absolute top-16 left-50% right-50% text-[28px] font-extrabold">
            Join Us in Pioneering Green Investments
          </h1>
          <p className="absolute top-[120px] left-50% right-50% font-normal text-lg">
            Start your ENGC journey today
          </p>
          <button className="absolute top-[185px] flex items-center justify-center left-50% right-50% w-[256px] h-14 bg-[#1A1A1A] rounded-[32px]">
            <p className="text-base font-medium text-white">
              Download Our ENGC App
            </p>
          </button>
        </div>
        <div className="w-full h-64 flex items-center gap-32 justify-center ">
          <div className="w-[335px] h-32 ">
            <img src={img2} alt="" />
            <p className="mt-6 text-base font-normal ">
              ENGC: Merging blockchain technology and eco-friendly solutions for
              a greener future and potential investment returns.
            </p>
          </div>
          <div className="w-[755px] relative h-32 ">
            <div className="absolute top-0 right-2 w-34 h-12">
              <ul className="flex items-center justify-center gap-4">
                <a href="#">
                  <li className="w-12 h-12 bg-white flex items-center rounded-lg justify-center">
                    <Facebook />
                  </li>
                </a>
                <a href="#">
                  <li className="w-12 h-12 bg-white flex items-center rounded-lg justify-center">
                    <Instagram />
                  </li>
                </a>
                <a href="#">
                  <li className="w-12 h-12 bg-white flex items-center rounded-lg justify-center">
                    <Twiter />
                  </li>
                </a>
                <a href="#">
                  <li className="w-12 h-12 bg-white flex items-center rounded-lg justify-center">
                    <Telegram />
                  </li>
                </a>
              </ul>
            </div>
            <div className="absolute bottom-0 w-[755px] h-10  flex items-center justify-center">
              <ul className="flex items-center gap-12 justify-center">
                <li className="w-[181px] gap-2 h-10 flex items-center justify-center">
                  <a href="#">
                    <Sms />
                  </a>
                  <a href="">
                    <p className="text-base font-normal">office@eng-c.com</p>
                  </a>
                </li>
                <li className="w-[181px] gap-2 h-10 flex items-center justify-center">
                  <a href="#">
                    <Call />
                  </a>
                  <a href="#">
                    <p className="text-base font-normal">+44-33-00272720</p>
                  </a>
                </li>
                <li className="w-[181px] gap-2 h-10 flex items-center justify-center">
                  <a href="#">
                    <Location />
                  </a>
                  <a href="">
                    <p className="text-base font-normal">office@eng-c.com</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-10 flex items-center justify-center -translate-y-1 ">
          <p className="text-base font-normal">
            © Copyright 2023 DAO Energy Crypto - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
