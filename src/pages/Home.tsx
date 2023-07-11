import Banner from "../../assets/ecommerceBanner.png";
import NikeLogo from "../../assets/nike/nikelogo.png";
import AdidasLogo from "../../assets/adidas/adidaslogo.png";
import JordanLogo from "../../assets/jordan/jordanlogo.png";
import NewBalanceLogo from "../../assets/newbalance/newbalancelogo.png";
import PumaLogo from "../../assets/puma/pumalogo.png";
import ReebokLogo from "../../assets/reebook/reebooklogo.png";
import KappaLogo from "../../assets/kappa/kappalogo.png";
import HummelLogo from "../../assets/hummel/hummellogo.png";
import UnderArmourLogo from "../../assets/underarmour/underarmourlogo.png";

const Home = (): JSX.Element => {
  return (
    <>
      <div className="banner bg-zinc-100 py-20 px-40">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 items-center">
            <div className="text-[41px] font-extrabold ">
              <h3 className="text-[#FFD4D4]">Step Up Your Style Game</h3>
              <h3 className="mb-10">
                Explore Our Trendsetting Sneaker Collection!
              </h3>
              <div className=" flex gap-5">
                <a
                  className="text-lg font-light bg-[#FFD4D4] py-2 px-10 rounded-lg shadow-lg hover:bg-white hover:shadow-none transition-all"
                  href="/store"
                >
                  Explore
                </a>
                <a
                  className="text-lg font-light bg-[#FFD4D4] py-2 px-10 rounded-lg shadow-lg hover:bg-white hover:shadow-none transition-all"
                  href="/about"
                >
                  About us
                </a>
              </div>
            </div>
            <div className="">
              <img
                className="h-[420px] object-cover"
                src={Banner}
                alt="Banner"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-20 px-40">
        <h2 className="mb-14 text-2xl font-bold">Shop by Brand</h2>
        <div className=" flex flex-wrap items-center justify-between ">
          <a className="mb-10 rounded-[30px] shadow-lg" href="/store">
            <img className="h-80 rounded-[30px]" src={NikeLogo} alt="" />
          </a>
          <a className="mb-10 rounded-[30px] shadow-lg" href="/store">
            <img className="h-80 rounded-[30px]" src={AdidasLogo} alt="" />
          </a>
          <a className="mb-10 rounded-[30px] shadow-lg" href="/store">
            <img className="h-80 rounded-[30px]" src={JordanLogo} alt="" />
          </a>
          <a className="mb-10 rounded-[30px] shadow-lg" href="/store">
            <img className="h-80 rounded-[30px]" src={NewBalanceLogo} alt="" />
          </a>
          <a className="mb-10 rounded-[30px] shadow-lg" href="/store">
            <img className="h-80 rounded-[30px]" src={PumaLogo} alt="" />
          </a>
          <a className="mb-10 rounded-[30px] shadow-lg" href="/store">
            <img className="h-80 rounded-[30px]" src={ReebokLogo} alt="" />
          </a>
          <a className="mb-10 rounded-[30px] shadow-lg" href="/store">
            <img className="h-80 rounded-[30px]" src={KappaLogo} alt="" />
          </a>
          <a className="mb-10 rounded-[30px] shadow-lg" href="/store">
            <img className="h-80 rounded-[30px]" src={HummelLogo} alt="" />
          </a>
          <a className="mb-10 rounded-[30px] shadow-lg" href="/store">
            <img className="h-80 rounded-[30px]" src={UnderArmourLogo} alt="" />
          </a>
        </div>
      </div>
      <footer className="bg-zinc-100">
        <div className="container mx-auto py-20 px-40">
          <div className="grid grid-cols-2 items-center gap-80">
            <div className="grid grid-cols-2 items-center">
              <ul className="">
                <li className="mb-2">About Us</li>
                <li className="mb-2">About Us</li>
                <li className="mb-2">About Us</li>
                <li className="mb-2">About Us</li>
              </ul>
              <ul>
                <li className="mb-2">Store</li>
                <li className="mb-2">Store</li>
                <li className="mb-2">Store</li>
                <li className="mb-2">Store</li>
              </ul>
            </div>
            <form>
              <h4 className="font-bold mb-2">SUBSCRIBE TO OUR NEWSLETTER</h4>
              <h5 className="mb-8">
                Be the first to know about exclusive <br />
                offers & deals.
              </h5>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="py-2 px-4"
                />
                <button className=" py-2 px-4  bg-[#FFD4D4]">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
