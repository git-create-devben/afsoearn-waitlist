import Image from "next/image";
import Love from "../../public/images/ezgif 3.png";
import Screen from "../../public/images/screen.png";
import Circle from "../../public/images/Ellipse 7.png";
import Frame from "../../public/images/Frame 1000004055.png";
import Hero from "./Hero";
const Header = () => {
  return (
    <>
      <section>
        <div className="grid lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 space-x-80 ml-10 ">
              <Image src={Frame} alt="frame" width={150} height={50} />
              <Image
                src={Love}
                alt="frame"
                width={150}
                height={50}
                className="mt-[-2rem]"
              />
              <Image
                src={Circle}
                alt="frame"
                width={150}
                height={50}
                className="mt-40 ml-20"
              />
            </div>
            <div className="space-y-2 absolute mt-[-14rem] ml-16">
              <h1 className="lg:text-7xl text-bold text-4xl">
                WELCOME YOUR <br />
                <span className="text-pcolor">HIGHNESS</span>
              </h1>
              <p>we have been waiting for you</p>
            </div>
          </div>
          <div className="lg:ml-10 relative">
            <Image
              src={Screen}
              alt="frame"
              width={300}
              height={100}
              className=""
            />
            <div></div>
          </div>
        </div>
        <section className=" flex justify-center mt-10 lg:mt-40">
          <Hero />
        </section>
      </section>
    </>
  );
};

export default Header;
