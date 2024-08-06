import img from "../assets/filled.png";
import img2 from "../assets/Group.png";

const Navigation = () => {
  return (
    <div className="w-full h-[716px] mt-36 flex items-center justify-center">
      <div className="w-[1240px] h-[716px] ">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center text-[28px] gap-2 font-bold">
            <h1>Navigating the Path to a</h1>
            <h2 className="text-[#00F1E8]">Greener Future</h2>
          </div>
          <p className="text-lg font-normal mt-2">
            Our roadmap: Where we are and where were headed
          </p>
        </div>
        <div className="w-[1240px] border rounded-md relative mt-8  border-[#e1e2e3] h-[281px] flex items-center justify-center">
          <div className="absolute top-0 left-0">
            <img src={img} alt="" />
          </div>
          <div className="absolute -top-7 left-[605px]">
            <img src={img2} alt="" />
          </div>
          <ul className="flex items-center gap-20 justify-center">
            <li className="w-[344px] h-[217px]   rounded-sm">
              <h1 className="font-medium text-base">
                Phase 1 - Conceptualization and <br /> Development
              </h1>
              <p className="mt-4"> Initial project conception.</p>
              <p className="mt-4"> Team assembly and planning..</p>
              <p className="mt-4">
                {" "}
                Begin development of the ENGC app and website..
              </p>
              <p className="mt-4"> Draft the projects whitepaper..</p>
            </li>
            <li className="w-[344px] h-[217px]   rounded-sm">
              <h1 className="font-medium text-base">
                Phase 2 - Community Building
              </h1>
              <p className="mt-4"> Launch the ENGC website..</p>
              <p className="mt-4"> Create and engage an online community...</p>
              <p className="mt-4"> Establish a beta testing group.</p>
              <p className="mt-4"> Mint the initial collection of 6000 NFTs.</p>
            </li>
            <li className="w-[344px] h-[217px]   rounded-sm">
              <h1 className="font-medium text-base">
                Phase 3 - App Testing and Refinement
              </h1>
              <p className="mt-4"> Launch the beta version of the ENGC app..</p>
              <p className="mt-4">
                {" "}
                Gather user feedback and perform necessary refinements...
              </p>
              <p className="mt-4">
                {" "}
                Implement the 90% discount on NFTs and tokens for the testing
                period.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-[1240px] h-[281px] flex items-center justify-center   ">
          <ul className="flex items-center gap-20 justify-center">
            <li className="w-[344px] h-[217px]   rounded-sm">
              <h1 className="font-medium text-base">
                Phase 4 - Token Transfer
              </h1>
              <p className="mt-4">
                {" "}
                Successful beta testers transfer their tokens to the base
                version..
              </p>
              <p className="mt-4">
                {" "}
                Ensure a 1-to-1 token transfer from testing to base version...
              </p>
            </li>
            <li className="w-[344px] h-[217px]   rounded-sm">
              <h1 className="font-medium text-base">
                Phase 5 - Waste Processing System Implementation
              </h1>
              <p className="mt-4">
                {" "}
                Initiate waste collection and transformation into RDF pellets.
              </p>
              <p className="mt-4"> Begin pyrolysis burning process.</p>
              <p className="mt-4"> Establish a beta testing group.</p>
            </li>
            <li className="w-[344px] h-[217px]   rounded-sm">
              <h1 className="font-medium text-base">
                Phase 6 - Investment Expansion
              </h1>
              <p className="mt-4"> Establish and expand pellet factories.</p>
              <p className="mt-4">
                {" "}
                Facilitate the sale of NFTs to fund the construction of these
                factories.
              </p>
              <p className="mt-4">
                {" "}
                Set up an automated system for weekly dividends from factories
                profits.
              </p>
              <p className="mt-4">
                Promote trading of NFTs and ENGC tokens on app marketplace and
                decentralized exchanges.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
