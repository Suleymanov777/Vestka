import Findout from "./Components/Findout";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Navigation from "./Components/Navigation";
import Statistika from "./Components/Statistika";
import Technology from "./Components/Technology";
import Web3 from "./Components/Web3";
// import SaidBar from "./Components/SaidBar";

function App() {
  return (
    <div className="w-full h-[5039px] bg-[#FAFBFD]">
      <Header />
      <Hero />
      <Web3 />
      <Technology />
      <Findout />
      <Statistika />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
